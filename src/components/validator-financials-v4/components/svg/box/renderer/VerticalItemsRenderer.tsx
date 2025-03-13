
import React, { useState } from 'react';
import { SubItem } from '../types';
import SubItemRenderer from '../SubItemRenderer';
import NestedItemsRenderer from './NestedItemsRenderer';

interface VerticalItemsRendererProps {
  items: SubItem[];
  x: number;
  y: number;
  width: number;
  boxTitle: string;
  yOffset: number;
}

/**
 * VerticalItemsRenderer lays out box subitems vertically with proper spacing
 * and supports nested item structures.
 */
const VerticalItemsRenderer: React.FC<VerticalItemsRendererProps> = ({
  items,
  x,
  y,
  width,
  boxTitle,
  yOffset: initialYOffset
}) => {
  const [yOffset, setYOffset] = useState(initialYOffset);
  const renderedItems: JSX.Element[] = [];
  
  let currentYOffset = initialYOffset;
  
  // Process top-level items first
  items.forEach((item, index) => {
    // For headers and regular items
    if (!item.subItems) {
      const itemHeight = item.desc ? 50 : 40;
      const itemSpacing = 20;
      
      renderedItems.push(
        <SubItemRenderer 
          key={`item-${item.id || index}`}
          item={item}
          index={index}
          x={x}
          y={y}
          yOffset={currentYOffset}
          width={width}
          height={itemHeight}
        />
      );
      
      // Move down for next item
      currentYOffset += itemHeight + itemSpacing;
    } else {
      // Handle parent items with subitems
      const parentItemHeight = item.desc ? 50 : 40;
      
      // Render the parent item
      renderedItems.push(
        <SubItemRenderer 
          key={`parent-${item.id || index}`}
          item={{...item, isHeader: true}}
          index={index}
          x={x}
          y={y}
          yOffset={currentYOffset}
          width={width}
          height={parentItemHeight}
        />
      );
      
      // Move down for nested items
      currentYOffset += parentItemHeight + 10;
      
      // Process nested items
      currentYOffset = NestedItemsRenderer({
        parentItem: item,
        x,
        y,
        yOffset: currentYOffset,
        width,
        renderedItems,
        depth: 1,
        index
      });
      
      // Add spacing after the nested items
      currentYOffset += 20;
    }
  });
  
  // Update the parent component's yOffset
  if (currentYOffset !== yOffset) {
    setYOffset(currentYOffset);
  }
  
  return <>{renderedItems}</>;
};

export default VerticalItemsRenderer;
