
import React from 'react';
import { SubItem } from '../types';
import SubItemRenderer from '../SubItemRenderer';

interface HorizontalItemsRendererProps {
  items: SubItem[];
  x: number;
  y: number;
  yOffset: number;
  width: number;
  height: number;
}

/**
 * HorizontalItemsRenderer lays out box subitems horizontally with proper spacing
 * and size calculations based on content type.
 */
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
  
  // Define layout parameters
  const operatorWidth = 15; // Width for operator symbols
  const itemMargin = 16;    // Margin between items
  const totalOperatorWidth = operatorItems.length * operatorWidth;
  const totalMargins = (items.length - 1) * itemMargin;
  const remainingWidth = width - 20 - totalMargins - totalOperatorWidth;
  
  // Calculate content item widths
  const contentItemWidths = calculateContentItemWidths(contentItems, remainingWidth, width);
  
  // Calculate positions and render items
  let currentX = x + 10; // Start with left padding
  let itemIndex = 0;
  
  // Position map for debugging
  let positionMap: Record<string, {x: number, width: number}> = {};
  
  items.forEach((item, index) => {
    let itemWidth: number;
    
    if (item.isOperator) {
      itemWidth = operatorWidth;
    } else {
      itemWidth = contentItemWidths[itemIndex];
      itemIndex++;
    }
    
    // Store position for debugging
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
      />
    );
    
    // Update position for next item
    currentX += itemWidth + itemMargin;
  });
  
  return <>{renderedItems}</>;
};

/**
 * Helper function to calculate content item widths with appropriate ratios
 */
function calculateContentItemWidths(
  contentItems: SubItem[], 
  remainingWidth: number, 
  boxWidth: number
): number[] {
  if (contentItems.length === 0) return [];
  
  // Base width calculation
  const baseWidth = remainingWidth / contentItems.length;
  let widths: number[] = [];
  
  // For block production box (530px width), adjust ratios
  if (boxWidth === 530) {
    contentItems.forEach(item => {
      if (item.id === 'randomness') {
        widths.push(baseWidth * 0.9);
      } else if (item.id === 'stake-weight') {
        widths.push(baseWidth * 1.1);
      } else if (item.id === 'performance-reputation') {
        widths.push(baseWidth * 1.0);
      } else {
        widths.push(baseWidth * 0.8);
      }
    });
  } else {
    // For other boxes, use even distribution
    contentItems.forEach(() => {
      widths.push(baseWidth);
    });
  }
  
  return widths;
}

export default HorizontalItemsRenderer;
