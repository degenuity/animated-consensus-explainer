
import React, { useState } from 'react';
import { SubItem } from './types';
import HorizontalItemsRenderer from './HorizontalItemsRenderer';
import VerticalItemsRenderer from './VerticalItemsRenderer';

interface ItemsProcessorProps {
  subitems: (string | SubItem)[];
  x: number;
  y: number;
  width: number;
  height: number;
  title: string;
}

const ItemsProcessor: React.FC<ItemsProcessorProps> = ({
  subitems,
  x,
  y,
  width,
  height,
  title
}) => {
  const [yOffset, setYOffset] = useState(50); // Start after title
  
  // Process subitems to ensure consistent format
  const processedSubitems = subitems.map(item => {
    if (typeof item === 'string') {
      return { text: item, id: item.replace(/\s+/g, '-').toLowerCase() };
    }
    return item;
  }) as SubItem[];
  
  // Check if all top-level items have isHorizontal property
  const allHorizontal = processedSubitems.length > 0 && 
                       processedSubitems.every((item: SubItem) => item.isHorizontal);
  
  // Rendered items array
  const renderedItems: JSX.Element[] = [];
  
  if (allHorizontal) {
    // For horizontal layout
    return (
      <HorizontalItemsRenderer
        items={processedSubitems}
        x={x}
        y={y}
        yOffset={yOffset}
        width={width}
        height={height}
      />
    );
  } else {
    // For vertical layout
    return (
      <>
        <VerticalItemsRenderer
          items={processedSubitems}
          x={x}
          y={y}
          width={width}
          boxTitle={title}
          renderedItems={renderedItems}
          setYOffset={setYOffset}
        />
        {renderedItems}
      </>
    );
  }
};

export default ItemsProcessor;
