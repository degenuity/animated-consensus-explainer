
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
  const childSpacing = isBlockRewards ? 10 : 20; // Further reduced spacing for block rewards items from 15 to 10
  let childY = yOffset;
  
  console.log(`NestedItemsRenderer for ${parentItem.id}, isBlockRewards: ${isBlockRewards}`);
  
  // Handle special case for block rewards items
  if (isBlockRewards && parentItem.subItems) {
    console.log(`Rendering block rewards children: ${parentItem.subItems.length}`);
    
    parentItem.subItems.forEach((subItem, subIndex) => {
      // Calculate position and size for child items (priority fees and MEV)
      const childItemHeight = 40; // Standard height for all items
      const childItemWidth = width - 40; // Reduced width by additional 10px (from 30 to 40)
      const childItemX = x + 15; // Keeping the same left indent
      
      // Use position.y directly without adding to childY - this forces absolute positioning
      // from the top of the parent container
      const absolutePosition = subItem.position?.y || 0;
      console.log(`Child item ${subItem.id} with absolutePosition: ${absolutePosition}`);
      
      renderedItems.push(
        <SubItemRenderer 
          key={`child-${subItem.id || subIndex}-${index}`}
          item={{...subItem, isHeader: false, isSubHeader: false}}
          index={subIndex}
          x={childItemX}
          y={y}
          yOffset={yOffset + absolutePosition} // Use absolute positioning from parent's yOffset
          width={childItemWidth}
          height={childItemHeight}
          isNested={true}
          data-item-id={subItem.id} // Add data attribute for easier debugging
        />
      );
    });
    
    // For block rewards, we're using absolute positioning, so childY doesn't change based on children
    // Just add some standard amount to account for the container size
    childY += 140; // Slightly reduced from approximate container height of 150
    return childY;
  }
  
  // For regular nested items
  if (parentItem.subItems) {
    parentItem.subItems.forEach((subItem, subIndex) => {
      const paddingLeft = depth * 10; // Indent based on depth
      const itemHeight = subItem.desc ? 50 : 40;
      
      // Add extra spacing based on position property
      const extraSpacing = subItem.position?.y || 0;
      
      // Log the exact position of the stake weight box for debugging
      if (subItem.id === 'stake-weight') {
        console.log(`RENDERING STAKE WEIGHT BOX at position:`, {
          x: x + paddingLeft,
          y: y + childY + extraSpacing,
          width: width - paddingLeft - 10,
          height: itemHeight,
          centerX: x + paddingLeft + (width - paddingLeft - 10) / 2,
          centerY: y + childY + extraSpacing + itemHeight / 2
        });
      }
      
      renderedItems.push(
        <SubItemRenderer 
          key={`nested-${subItem.id || subIndex}-${index}`}
          item={{...subItem, isHeader: false, isSubHeader: depth === 1}}
          index={subIndex}
          x={x + paddingLeft}
          y={y}
          yOffset={childY + extraSpacing}
          width={width - paddingLeft - 10}
          height={itemHeight}
          isNested={true}
          data-item-id={subItem.id} // Add data attribute for easier debugging
        />
      );
      
      // Move down for next item
      childY += itemHeight + childSpacing + extraSpacing;
      
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
