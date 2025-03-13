
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
      const itemMargin = 20; // Increased margin between items (was 10)
      
      // Filter out operator items to calculate widths for content items
      const contentItems = horizontalItems.filter(item => !item.isOperator);
      const operatorItems = horizontalItems.filter(item => item.isOperator);
      
      // Operators get much less space (reduced from previous setting)
      const operatorWidth = 25; // Reduced width for operator symbols (was 40)
      const totalOperatorWidth = operatorItems.length * operatorWidth;
      const totalMargins = (horizontalItems.length - 1) * itemMargin;
      const remainingWidth = width - 20 - totalMargins - totalOperatorWidth;
      
      // Allocate more width to stake weight and performance boxes
      let contentItemWidths: number[] = [];
      
      if (contentItems.length > 0) {
        // Base width calculation - this is our starting point
        const baseWidth = remainingWidth / contentItems.length;
        
        // For block production box (530px width), adjust the ratios
        if (width === 530) {
          contentItems.forEach(item => {
            if (item.id === 'randomness') {
              contentItemWidths.push(baseWidth * 1.15); // 15% more width for randomness (reduced from 20%)
            } else if (item.id === 'stake-weight') {
              contentItemWidths.push(baseWidth * 1.25); // 25% more width for stake weight (reduced from 30%)
            } else if (item.id === 'performance-reputation') {
              contentItemWidths.push(baseWidth * 1.25); // 25% more width for performance (reduced from 30%)
            } else {
              contentItemWidths.push(baseWidth * 0.75); // Increased from 0.7 to balance
            }
          });
        } else {
          // For other boxes, keep previous allocation
          contentItems.forEach(item => {
            if (item.id === 'randomness') {
              contentItemWidths.push(baseWidth * 1.3); // 30% more width for randomness
            } else if (item.id === 'stake-weight') {
              contentItemWidths.push(baseWidth * 1.5); // 50% more width for stake weight
            } else if (item.id === 'performance-reputation') {
              contentItemWidths.push(baseWidth * 1.5); // 50% more width for performance
            } else {
              contentItemWidths.push(baseWidth * 0.5); // Significantly reduce others to compensate
            }
          });
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
    const renderItem = (item: SubItem, depth: number = 0, index: number) => {
      const isHeader = depth === 0;
      const isSubHeader = depth === 1;
      const paddingLeft = depth * 10; // Indent based on depth
      const itemHeight = item.desc ? 50 : 40;
      
      // Add the current item
      renderedItems.push(
        <SubItemRenderer 
          key={`item-${item.id || index}`}
          item={{...item, isHeader, isSubHeader}}
          index={index}
          x={x + paddingLeft}
          y={y}
          yOffset={yOffset}
          width={width - paddingLeft}
        />
      );
      
      // Increase spacing between items
      yOffset += itemHeight + 18; // Increased spacing between items from 15px to 18px
      
      // Render children if any
      if (item.subItems && item.subItems.length > 0) {
        item.subItems.forEach((subItem, subIndex) => {
          renderItem(subItem, depth + 1, subIndex);
        });
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
