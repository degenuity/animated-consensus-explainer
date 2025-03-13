
import React from 'react';
import { SubItem } from '../types';
import SubItemRenderer from '../SubItemRenderer';

interface NestedItemsRendererProps {
  parentItem: SubItem;
  x: number;
  y: number;
  yOffset: number;
  width: number;
  renderedItems: JSX.Element[];
  depth: number;
  index: number;
}

const NestedItemsRenderer = ({
  parentItem,
  x,
  y,
  yOffset,
  width,
  renderedItems,
  depth,
  index
}: NestedItemsRendererProps) => {
  const isBlockRewards = parentItem.id === 'block-rewards';
  const childSpacing = isBlockRewards ? 15 : 20; // Reduced spacing for block rewards items
  let childY = yOffset;
  
  // Handle special case for block rewards items
  if (isBlockRewards && parentItem.subItems) {
    parentItem.subItems.forEach((subItem, subIndex) => {
      // Calculate position and size for child items (priority fees and MEV)
      const childItemHeight = 40; // Standard height for all items
      const childItemWidth = width - 30; // Reduced width by an additional 10px (from 20 to 30)
      const childItemX = x + 15; // Increased indent from 10 to 15 to center the narrower boxes
      
      // Add extra spacing based on position property
      const extraSpacing = subItem.position?.y || 0;
      
      renderedItems.push(
        <SubItemRenderer 
          key={`child-${subItem.id || subIndex}-${index}`}
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
      childY += childItemHeight + childSpacing + extraSpacing;
    });
    
    return childY; // Return the updated vertical position
  }
  
  // For regular nested items
  if (parentItem.subItems) {
    parentItem.subItems.forEach((subItem, subIndex) => {
      const paddingLeft = depth * 10; // Indent based on depth
      const itemHeight = subItem.desc ? 50 : 40;
      
      renderedItems.push(
        <SubItemRenderer 
          key={`nested-${subItem.id || subIndex}-${index}`}
          item={{...subItem, isHeader: false, isSubHeader: depth === 1}}
          index={subIndex}
          x={x + paddingLeft}
          y={y}
          yOffset={childY}
          width={width - paddingLeft - 10}
          height={itemHeight}
          isNested={true}
        />
      );
      
      // Move down for next item
      childY += itemHeight + childSpacing;
      
      // Process any deeper nested items recursively
      if (subItem.subItems && subItem.subItems.length > 0) {
        childY = NestedItemsRenderer({
          parentItem: subItem,
          x,
          y,
          yOffset: childY,
          width,
          renderedItems,
          depth: depth + 1,
          index: subIndex
        });
      }
    });
  }
  
  return childY; // Return the updated vertical position
};

export default NestedItemsRenderer;
