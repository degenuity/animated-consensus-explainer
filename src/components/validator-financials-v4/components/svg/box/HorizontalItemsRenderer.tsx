
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
  const renderedItems: JSX.Element[] = [];
  
  // Filter out operator items to calculate widths for content items
  const contentItems = items.filter(item => !item.isOperator);
  const operatorItems = items.filter(item => item.isOperator);
  
  // Further reduce operator width to make more room for content boxes
  const operatorWidth = 15; // Reduced from 20px to 15px for operator symbols
  const itemMargin = 16; // Reduced margin from 20px to 16px
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
      contentItems.forEach(item => {
        if (item.id === 'randomness') {
          contentItemWidths.push(baseWidth * 0.9);
        } else if (item.id === 'stake-weight') {
          contentItemWidths.push(baseWidth * 1.1);
        } else if (item.id === 'performance-reputation') {
          contentItemWidths.push(baseWidth * 1.0);
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
  
  items.forEach((item, index) => {
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
  
  return <>{renderedItems}</>;
};

export default HorizontalItemsRenderer;
