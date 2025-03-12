
import React from 'react';
import { motion } from 'framer-motion';
import BoxIcon from './BoxIcon';
import SubItemRenderer from './SubItemRenderer';
import { BoxProps, SubItem, boxVariants } from './types';

interface ComplexBoxProps {
  boxProps: BoxProps;
}

const ComplexBox: React.FC<ComplexBoxProps> = ({ boxProps }) => {
  const { x, y, width, height, title, icon, color, animationIndex, subitems = [] } = boxProps;
  
  const processedSubitems = subitems.map(item => {
    if (typeof item === 'string') {
      return { text: item };
    }
    return item;
  });

  let yOffset = 60;

  const renderSubItemWithChildren = (item: SubItem, idx: number) => {
    const currentYOffset = yOffset;
    const { text, subItems } = item;
    
    // Standard height for items
    const itemHeight = 40;
    
    // Render main item
    const mainItem = (
      <SubItemRenderer 
        item={item} 
        index={idx} 
        x={x} 
        y={y} 
        yOffset={currentYOffset} 
        width={width} 
      />
    );
    
    yOffset += itemHeight + 10;

    if (subItems && subItems.length > 0) {
      return (
        <React.Fragment key={`item-group-${idx}`}>
          {mainItem}
          {subItems.map((subItem, subIdx) => {
            const subItemY = y + currentYOffset + 50 + subIdx * (itemHeight + 10);
            
            const subItemComponent = (
              <motion.g
                key={`subitem-${idx}-${subIdx}`}
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ delay: 1.5 + (idx + subIdx) * 0.1 }}
              >
                <rect
                  x={x + 20}
                  y={subItemY}
                  width={width - 40}
                  height={itemHeight}
                  rx="4"
                  fill="transparent"
                  stroke="#10B981"
                  strokeWidth="1"
                />
                <foreignObject 
                  x={x + 20} 
                  y={subItemY} 
                  width={width - 40} 
                  height={itemHeight}
                >
                  <div className="flex items-center justify-center h-full text-white">
                    {subItem.text}
                  </div>
                </foreignObject>
              </motion.g>
            );
            
            if (subIdx === subItems.length - 1) {
              yOffset = subItemY + itemHeight + 10 - y;
            }
            
            return subItemComponent;
          })}
        </React.Fragment>
      );
    }
    
    return mainItem;
  };

  return (
    <motion.g
      custom={animationIndex}
      variants={boxVariants}
      initial="hidden"
      animate="visible"
    >
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
      <foreignObject x={x} y={y} width={width} height="50">
        <div className="flex items-center gap-2 p-3 border-b border-[#1e293b]">
          <BoxIcon icon={icon} />
          <div className="text-white font-medium truncate">{title}</div>
        </div>
      </foreignObject>
      
      {processedSubitems.map((item, idx) => renderSubItemWithChildren(item as SubItem, idx))}
    </motion.g>
  );
};

export default ComplexBox;
