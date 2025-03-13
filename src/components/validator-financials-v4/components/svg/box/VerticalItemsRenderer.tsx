
import React from 'react';
import { SubItem } from './types';
import SubItemRenderer from './SubItemRenderer';

interface VerticalItemsRendererProps {
  items: SubItem[];
  x: number;
  y: number;
  width: number;
  boxTitle: string;
  renderedItems: JSX.Element[];
  setYOffset: (offset: number) => void;
}

const VerticalItemsRenderer: React.FC<VerticalItemsRendererProps> = ({
  items,
  x,
  y,
  width,
  boxTitle,
  renderedItems,
  setYOffset
}) => {
  // Start vertical position for the first item (after title)
  let yOffset = 50;
  
  const renderItem = (item: SubItem, depth: number = 0, index: number, parentItem?: SubItem) => {
    const isHeader = depth === 0;
    const isSubHeader = depth === 1;
    const paddingLeft = depth * 10; // Indent based on depth
    
    // Adjust item height based on whether it's the block rewards parent that contains children
    const hasChildren = item.subItems && item.subItems.length > 0;
    const isBlockRewards = item.id === 'block-rewards';
    
    // Special heights for block rewards and its children
    let itemHeight = item.desc ? 50 : 40;
    
    if (isBlockRewards && hasChildren) {
      // Give more height to block rewards to fit its children properly
      itemHeight = 160; // Increased height to allow proper spacing for child items
    }
    
    // Special handling for network costs box and block rewards
    const isNetworkCosts = boxTitle === "network usage costs";
    
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
    const itemSpacing = 20; // Spacing between items

    // If this is block rewards with children, handle specially to match the total stake design
    if (isBlockRewards && hasChildren) {
      // Start position inside block rewards - leave more space from the block rewards title
      const childYStart = yOffset + 40; 
      const childSpacing = 20; // Spacing between child items
      let childY = childYStart;
      
      item.subItems?.forEach((subItem, subIndex) => {
        // Calculate position and size for child items (priority fees and MEV)
        const childItemHeight = 40;
        const childItemWidth = width - paddingLeft - 40; // Less width than parent, with some padding
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
  items.forEach((item, index) => {
    renderItem(item, 0, index);
  });
  
  // Update the yOffset for the parent component
  setYOffset(yOffset);
  
  return null;
};

export default VerticalItemsRenderer;
