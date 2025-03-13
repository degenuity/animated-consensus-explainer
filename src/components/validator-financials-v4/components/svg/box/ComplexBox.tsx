import React from 'react';
import { motion } from 'framer-motion';
import BoxIcon from './BoxIcon';
import SubItemRenderer from './SubItemRenderer';
import { BoxProps, SubItem, boxVariants } from './types';

interface ComplexBoxProps {
  boxProps: BoxProps;
}

const ComplexBox: React.FC<ComplexBoxProps> = ({ boxProps }) => {
  const { x, y, width, height, title, icon, color, animationIndex, subitems = [], borderColor } = boxProps;
  
  // Process subitems to ensure consistent format
  const processedSubitems = subitems.map(item => {
    if (typeof item === 'string') {
      return { text: item, id: item.replace(/\s+/g, '-').toLowerCase() };
    }
    return item;
  });

  const renderItems = () => {
    const renderedItems: JSX.Element[] = [];
    let yOffset = 50; // Start after title
    
    // Check if all top-level items have isHorizontal property
    const allHorizontal = processedSubitems.length > 0 && 
                         processedSubitems.every((item: SubItem) => (item as SubItem).isHorizontal);
    
    if (allHorizontal) {
      // For horizontal layout
      const horizontalItems = processedSubitems as SubItem[];
      
      // Calculate item width with some margin between items
      const itemMargin = 16; // Reduced margin from 20px to 16px
      
      // Filter out operator items to calculate widths for content items
      const contentItems = horizontalItems.filter(item => !item.isOperator);
      const operatorItems = horizontalItems.filter(item => item.isOperator);
      
      // Further reduce operator width to make more room for content boxes
      const operatorWidth = 15; // Reduced from 20px to 15px for operator symbols
      const totalOperatorWidth = operatorItems.length * operatorWidth;
      const totalMargins = (horizontalItems.length - 1) * itemMargin;
      const remainingWidth = width - 20 - totalMargins - totalOperatorWidth;
      
      // Allocate width to stake weight and performance boxes
      let contentItemWidths: number[] = [];
      
      if (contentItems.length > 0) {
        // Base width calculation - this is our starting point
        const baseWidth = remainingWidth / contentItems.length;
        
        // For block production box (530px width), adjust the ratios
        if (width === 530) {
          contentItems.forEach(item => {
            if (item.id === 'randomness') {
              contentItemWidths.push(baseWidth * 0.9); // Reduced from 1.0 to 0.9
            } else if (item.id === 'stake-weight') {
              contentItemWidths.push(baseWidth * 1.1); // Reduced from 1.15 to 1.1
            } else if (item.id === 'performance-reputation') {
              contentItemWidths.push(baseWidth * 1.0); // Reduced from 1.15 to 1.0
            } else {
              contentItemWidths.push(baseWidth * 0.8); // Kept the same
            }
          });
        } else if (width === 350) {
          // For profitability box (350px width), use even distribution
          contentItems.forEach(() => {
            contentItemWidths.push(baseWidth);
          });
        } else {
          // For other boxes, keep previous allocation
          // ... keep existing code (for other box width allocations)
        }
      }
      
      // Map of positions for each item
      let currentX = x + 10;
      let itemIndex = 0;
      
      horizontalItems.forEach((item, index) => {
        let itemWidth: number;
        
        if (item.isOperator) {
          itemWidth = operatorWidth;
        } else {
          itemWidth = contentItemWidths[itemIndex];
          itemIndex++;
        }
        
        renderedItems.push(
          <SubItemRenderer 
            key={`item-${item.id || index}`}
            item={{...item}}
            index={index}
            x={currentX}
            y={y}
            yOffset={yOffset}
            width={itemWidth}
            height={height - yOffset - 10}
          />
        );
        
        // Update position for next item
        currentX += itemWidth + itemMargin;
      });
      
      return renderedItems;
    }
    
    // Standard vertical layout (for non-horizontal items)
    const renderItem = (item: SubItem, depth: number = 0, index: number, parentItem?: SubItem) => {
      const isHeader = depth === 0;
      const isSubHeader = depth === 1;
      const paddingLeft = depth * 10; // Indent based on depth
      
      // Adjust item height based on whether it's the block rewards parent that contains children
      const hasChildren = item.subItems && item.subItems.length > 0;
      const isBlockRewards = item.id === 'block-rewards';
      
      // Give more height to block rewards to fit its children
      const itemHeight = isBlockRewards && hasChildren 
        ? 150  // Increased height to 150px to accommodate child items with better padding
        : (item.desc ? 50 : 40);
      
      // Special handling for network costs box and block rewards
      const isNetworkCosts = title === "network usage costs";
      
      // Add the current item
      renderedItems.push(
        <SubItemRenderer 
          key={`item-${item.id || index}`}
          item={{...item, isHeader, isSubHeader}}
          index={index}
          x={x + paddingLeft}
          y={y}
          yOffset={yOffset}
          width={width - paddingLeft - 10} // Added extra padding of 10px to ensure items stay inside
          height={itemHeight}
          isNested={!!parentItem}
        />
      );
      
      // Move down for the next item or child items
      const itemSpacing = 20; // Increased spacing between items for better visual

      // If this is block rewards with children, process children specially
      if (isBlockRewards && hasChildren) {
        // Space for children inside block rewards
        const childYStart = yOffset + 50; // Start position inside block rewards - increased from 60 to 50
        const childSpacing = 20; // Increased spacing between child items for better visual
        let childY = childYStart;
        
        item.subItems?.forEach((subItem, subIndex) => {
          // Calculate width and position for child item (priority fees and MEV)
          const childItemHeight = 40;
          const childItemWidth = width - paddingLeft - 40; // Less width than parent, with padding
          const childItemX = x + paddingLeft + 20; // Indented from parent
          
          renderedItems.push(
            <SubItemRenderer 
              key={`child-${subItem.id || subIndex}`}
              item={{...subItem, isHeader: false, isSubHeader: false}}
              index={subIndex}
              x={childItemX}
              y={y}
              yOffset={childY}
              width={childItemWidth}
              height={childItemHeight}
              isNested={true}
            />
          );
          
          // Move down for next child
          childY += childItemHeight + childSpacing;
        });
        
        yOffset += itemHeight + itemSpacing;
      } else {
        // Normal item without children
        yOffset += itemHeight + itemSpacing;
        
        // Don't process children for network costs box as we handle them specially
        if (!isNetworkCosts && item.subItems && item.subItems.length > 0) {
          item.subItems.forEach((subItem, subIndex) => {
            renderItem(subItem, depth + 1, subIndex, item);
          });
        }
      }
    };
    
    // Process all top-level items
    processedSubitems.forEach((item, index) => {
      renderItem(item as SubItem, 0, index);
    });
    
    return renderedItems;
  };

  return (
    <motion.g
      custom={animationIndex}
      variants={boxVariants}
      initial="hidden"
      animate="visible"
    >
      {/* Box container */}
      <rect
        x={x}
        y={y}
        width={width}
        height={height}
        rx="4"
        fill="#0f172a"
        stroke="#1e293b"
        strokeWidth="1"
      />
      
      {/* Title bar */}
      <foreignObject x={x} y={y} width={width} height="50">
        <div className="flex items-center gap-2 p-3 border-b border-[#1e293b]">
          <BoxIcon icon={icon} />
          <div className="text-white font-medium">{title}</div>
        </div>
      </foreignObject>
      
      {/* Render all items */}
      {renderItems()}
    </motion.g>
  );
};

export default ComplexBox;
