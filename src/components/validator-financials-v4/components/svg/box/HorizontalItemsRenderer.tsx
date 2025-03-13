
import React from 'react';
import { SubItem } from './types';
import SubItemRenderer from './SubItemRenderer';

interface HorizontalItemsRendererProps {
  items: SubItem[];
  x: number;
  y: number;
  yOffset: number;
  width: number;
  height: number;
}

const HorizontalItemsRenderer: React.FC<HorizontalItemsRendererProps> = ({
  items,
  x,
  y,
  yOffset,
  width,
  height
}) => {
  // Log the items we're about to render with their IDs for debugging
  console.log("Rendering horizontal items:", items.map(item => item.id));
  
  const renderedItems: JSX.Element[] = [];
  
  // Filter out operator items to calculate widths for content items
  const contentItems = items.filter(item => !item.isOperator);
  const operatorItems = items.filter(item => item.isOperator);
  
  // Increase operator width to prevent cropping
  const operatorWidth = 25; // Increased from 15px to 25px for operator symbols
  const itemMargin = 16; // Keep margin the same
  const totalOperatorWidth = operatorItems.length * operatorWidth;
  const totalMargins = (items.length - 1) * itemMargin;
  const remainingWidth = width - 20 - totalMargins - totalOperatorWidth;
  
  // Allocate width to content boxes
  let contentItemWidths: number[] = [];
  
  if (contentItems.length > 0) {
    // Base width calculation - this is our starting point
    const baseWidth = remainingWidth / contentItems.length;
    
    // For block production box (530px width), adjust the ratios
    if (width === 530) {
      // Log the specific adjustment for width=530 case (block production box)
      console.log(`Using specialized ratios for block production box (width=${width}px)`);
      
      contentItems.forEach(item => {
        if (item.id === 'randomness') {
          contentItemWidths.push(baseWidth * 1.0); // Increased from 0.9 to 1.0 to prevent text wrapping
        } else if (item.id === 'stake-weight') {
          contentItemWidths.push(baseWidth * 1.05); // Slightly reduced from 1.1 to 1.05 to compensate
        } else if (item.id === 'performance-reputation') {
          contentItemWidths.push(baseWidth * 0.95); // Slightly reduced from 1.0 to 0.95 to compensate
        } else {
          contentItemWidths.push(baseWidth * 0.8);
        }
      });
    } else if (width === 350) {
      // For profitability box (350px width), use even distribution
      contentItems.forEach(() => {
        contentItemWidths.push(baseWidth);
      });
    } else {
      // For other boxes, use even distribution as fallback
      contentItems.forEach(() => {
        contentItemWidths.push(baseWidth);
      });
    }
  }
  
  // Map of positions for each item
  let currentX = x + 10;
  let itemIndex = 0;
  
  // Log the calculated item positions for debugging
  let positionMap: Record<string, {x: number, width: number}> = {};
  
  items.forEach((item, index) => {
    let itemWidth: number;
    
    if (item.isOperator) {
      itemWidth = operatorWidth;
      console.log(`Operator ${item.id || index} width set to: ${itemWidth}px`);
    } else {
      itemWidth = contentItemWidths[itemIndex];
      itemIndex++;
    }
    
    // Store the calculated position for debugging
    positionMap[item.id || `item-${index}`] = {
      x: currentX,
      width: itemWidth
    };
    
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
        data-item-id={item.id} // Add data attribute for identification
      />
    );
    
    // Update position for next item
    currentX += itemWidth + itemMargin;
  });
  
  // Log final positions for all items for verification
  console.log("Calculated horizontal item positions:", positionMap);
  
  return <>{renderedItems}</>;
};

export default HorizontalItemsRenderer;
