
import React from 'react';
import { SubItem } from './types';
import SubItemRenderer from './SubItemRenderer';
import NestedItemsRenderer from './renderer/NestedItemsRenderer';

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
  
  // Process all top-level items
  items.forEach((item, index) => {
    // Get item height based on content
    const itemHeight = item.desc ? 50 : 40;
    const hasChildren = item.subItems && item.subItems.length > 0;
    const isBlockRewards = item.id === 'block-rewards';
    const isNetworkCosts = boxTitle === "network usage costs";
    
    // Apply custom vertical position if specified
    if (item.position && item.position.y) {
      yOffset += item.position.y;
    }
    
    // Special handling for block rewards with children
    if (isBlockRewards && hasChildren) {
      // Calculate total height for block rewards container
      const childItems = item.subItems || [];
      const childrenHeight = childItems.length * 40 + (childItems.length - 1) * 15; // height + reduced spacing
      const additionalSpacing = childItems.reduce((acc, child) => acc + (child.position?.y || 0), 0);
      // Reduce the container height by 20px (10px from top and 10px from bottom)
      const containerHeight = 40 + childrenHeight + additionalSpacing - 10; // Reduced by 20px
      
      // Add the block rewards parent item - ensure font size is small
      renderedItems.push(
        <SubItemRenderer 
          key={`item-${item.id || index}`}
          item={{...item, isHeader: true}}
          index={index}
          x={x}
          y={y}
          yOffset={yOffset}
          width={width - 10} // Added padding of 10px to ensure items stay inside
          height={containerHeight} // Dynamic height based on children with reduced bottom padding
          isNested={false}
        />
      );
      
      // Handle nested items separately
      const childYStart = yOffset + 30; // Reduced from 40 to 30 to account for height reduction
      NestedItemsRenderer({
        parentItem: item,
        x,
        y,
        yOffset: childYStart,
        width,
        renderedItems,
        depth: 1,
        index
      });
      
      // Move down past the block rewards section
      yOffset += containerHeight + 15; // Reduced spacing from 20 to 15 to avoid overlap
    } else if (!isNetworkCosts && item.subItems && item.subItems.length > 0) {
      // Regular parent item with children (but not network costs)
      renderedItems.push(
        <SubItemRenderer 
          key={`item-${item.id || index}`}
          item={{...item, isHeader: true}}
          index={index}
          x={x}
          y={y}
          yOffset={yOffset}
          width={width - 10}
          height={itemHeight}
          isNested={false}
        />
      );
      
      // Process children recursively
      const childYStart = yOffset + itemHeight + 20; // Current item + spacing
      let childYOffset = childYStart;
      
      item.subItems.forEach((subItem, subIndex) => {
        renderedItems.push(
          <SubItemRenderer 
            key={`subitem-${subItem.id || subIndex}-${index}`}
            item={{...subItem, isHeader: false, isSubHeader: true}}
            index={subIndex}
            x={x + 10} // Indent
            y={y}
            yOffset={childYOffset}
            width={width - 20} // Further reduced width for nesting
            height={subItem.desc ? 50 : 40}
            isNested={true}
          />
        );
        
        childYOffset += (subItem.desc ? 50 : 40) + 20; // Item height + spacing
      });
      
      // Update overall yOffset to after all children
      yOffset = childYOffset;
    } else {
      // Regular item without children
      renderedItems.push(
        <SubItemRenderer 
          key={`item-${item.id || index}`}
          item={{...item, isHeader: true}}
          index={index}
          x={x}
          y={y}
          yOffset={yOffset}
          width={width - 10}
          height={itemHeight}
          isNested={false}
        />
      );
      
      // Move down for next item
      yOffset += itemHeight + 20; // Item height + spacing
    }
  });
  
  // Update the yOffset for the parent component
  setYOffset(yOffset);
  
  return null;
};

export default VerticalItemsRenderer;
