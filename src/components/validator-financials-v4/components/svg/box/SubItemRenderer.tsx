
import React from 'react';
import { motion } from 'framer-motion';
import { SubItem } from './types';

interface SubItemRendererProps {
  item: SubItem;
  index: number;
  x: number;
  y: number;
  yOffset: number;
  width: number;
  height?: number;
}

const SubItemRenderer: React.FC<SubItemRendererProps> = ({
  item,
  index,
  x,
  y,
  yOffset,
  width,
  height
}) => {
  const { text, desc, color: itemColor, hasPlus, isHeader, isSubHeader, id, isHorizontal, isOperator } = item;
  const itemHeight = height || (desc ? 50 : 40);
  
  // Add horizontal padding for ALL items (not just horizontal ones)
  // Increased from 5px to 12px for more visible side margins
  const horizontalPadding = isHorizontal ? 5 : 12;
  const adjustedWidth = width - (horizontalPadding * 2);
  const adjustedX = x + horizontalPadding;
  
  // For operator symbols (×), use a different style
  if (isOperator) {
    return (
      <motion.g
        key={`subitem-${id || index}`}
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 1.2 + index * 0.1 }}
      >
        <foreignObject 
          x={adjustedX} 
          y={y + yOffset} 
          width={adjustedWidth} 
          height={itemHeight}
        >
          <div className="flex flex-col justify-center h-full text-center">
            <div className="text-3xl font-normal" style={{ color: itemColor || "#0E7490" }}>{text}</div>
          </div>
        </foreignObject>
      </motion.g>
    );
  }
  
  return (
    <motion.g
      key={`subitem-${id || index}`}
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ delay: 1.2 + index * 0.1 }}
    >
      <rect
        x={adjustedX}
        y={y + yOffset}
        width={adjustedWidth}
        height={itemHeight}
        rx="4"
        fill="transparent"
        stroke={itemColor || "#3B82F6"}
        strokeWidth="1.5"
      />
      <foreignObject 
        x={adjustedX} 
        y={y + yOffset} 
        width={adjustedWidth} 
        height={itemHeight}
      >
        <div className="flex flex-col justify-center h-full px-4">
          {desc ? (
            <>
              <div className="text-sm font-medium" style={{ color: itemColor || "#3B82F6" }}>
                {text}
              </div>
              <div className="text-gray-400 text-xs mt-1">{desc}</div>
            </>
          ) : (
            <div className="flex items-center h-full font-medium" style={{ color: itemColor || "#3B82F6" }}>
              {text}
            </div>
          )}
        </div>
      </foreignObject>
      
      {hasPlus && (
        <foreignObject 
          x={adjustedX + adjustedWidth - 40}
          y={y + yOffset + (itemHeight/2) - 10}
          width="20" 
          height="20"
        >
          <div className="flex items-center justify-center h-full text-gray-400 text-lg">+</div>
        </foreignObject>
      )}
    </motion.g>
  );
};

export default SubItemRenderer;

