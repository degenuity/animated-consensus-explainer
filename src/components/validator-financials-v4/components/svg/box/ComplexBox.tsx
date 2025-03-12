
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
  
  // Process subitems to uniform format
  const processedSubitems = subitems.map(item => {
    if (typeof item === 'string') {
      return { text: item };
    }
    return item;
  });

  // Calculate starting y offset after header
  let yOffset = 60;

  // Render subitem and its children if any
  const renderSubItemWithChildren = (item: SubItem, idx: number) => {
    const { text, isHeader, subItems } = item;
    
    // Render main item
    const mainItem = <SubItemRenderer 
      item={item} 
      index={idx} 
      x={x} 
      y={y} 
      yOffset={yOffset} 
      width={width} 
    />;
    
    // Update y offset for next item
    const currentYOffset = yOffset;
    yOffset += (item.desc ? 45 : 40) + 10;
    
    // If this item has subitems, render them too
    if (subItems && subItems.length > 0) {
      return (
        <React.Fragment key={`item-group-${idx}`}>
          {mainItem}
          
          {/* Render block rewards header */}
          {isHeader && text === "block rewards" && (
            <motion.g
              key={`header-${idx}`}
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 1.3 + idx * 0.1 }}
            >
              <rect
                x={x + 20}
                y={y + currentYOffset + 50}
                width={width - 40}
                height={45}
                rx="4"
                fill="#0f172a"
                stroke="#10B981"
                strokeWidth="1"
              />
              <foreignObject 
                x={x + 20} 
                y={y + currentYOffset + 50} 
                width={width - 40} 
                height={45}
              >
                <div className="flex items-center justify-center h-full text-xl font-medium text-white">
                  {text}
                </div>
              </foreignObject>
            </motion.g>
          )}
          
          {/* Render subitems with proper styling */}
          {subItems.map((subItem, subIdx) => {
            const subItemHeight = 40;
            const subItemY = y + currentYOffset + (isHeader ? 105 : 50) + subIdx * (subItemHeight + 10);
            
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
                  height={subItemHeight}
                  rx="4"
                  fill="transparent"
                  stroke="#10B981"
                  strokeWidth="1"
                />
                <foreignObject 
                  x={x + 20} 
                  y={subItemY} 
                  width={width - 40} 
                  height={subItemHeight}
                >
                  <div className="flex items-center justify-center h-full px-4 text-white">
                    {subItem.text}
                  </div>
                </foreignObject>
              </motion.g>
            );
            
            // Update y offset for next item group
            if (subIdx === subItems.length - 1) {
              yOffset = subItemY + subItemHeight + 10 - y;
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
          <div className="text-white font-medium whitespace-nowrap">{title}</div>
        </div>
      </foreignObject>
      
      {/* Render subitems */}
      {processedSubitems.map((item, idx) => renderSubItemWithChildren(item as SubItem, idx))}
    </motion.g>
  );
};

export default ComplexBox;
