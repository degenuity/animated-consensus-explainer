
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
      
      yOffset += itemHeight;
      
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
