
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
}

const SubItemRenderer: React.FC<SubItemRendererProps> = ({
  item,
  index,
  x,
  y,
  yOffset,
  width
}) => {
  const { text, desc, color: itemColor, hasPlus, isHeader, isSubHeader, id } = item;
  const itemHeight = desc ? 45 : 40;
  
  // Determine border color based on item properties
  const getBorderColor = () => {
    if (itemColor) return itemColor;
    if (isHeader) return "#EAB308";
    if (isSubHeader) return "#10B981";
    return "#3B82F6";
  };
  
  // Determine text color based on item properties
  const getTextColor = () => {
    if (itemColor) return itemColor;
    if (isHeader) return "text-amber-400 font-medium";
    if (isSubHeader) return "text-white font-medium";
    return "text-white";
  };
  
  return (
    <motion.g
      key={`subitem-${id || index}`}
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ delay: 1.2 + index * 0.1 }}
    >
      <rect
        x={x + 10}
        y={y + yOffset}
        width={width - 20}
        height={itemHeight}
        rx="4"
        fill="transparent"
        stroke={getBorderColor()}
        strokeWidth="1"
      />
      <foreignObject 
        x={x + 10} 
        y={y + yOffset} 
        width={width - 20} 
        height={itemHeight}
      >
        {desc ? (
          <div className="flex flex-col justify-center h-full px-4">
            <div className={`text-sm ${itemColor ? '' : 'text-blue-400'}`} style={itemColor ? { color: itemColor } : {}}>
              {text}
            </div>
            <div className="text-gray-400 text-xs">{desc}</div>
          </div>
        ) : (
          <div className={`flex items-center h-full px-4 ${getTextColor()}`}>
            {text}
          </div>
        )}
      </foreignObject>
      
      {hasPlus && (
        <foreignObject 
          x={x + width / 2}
          y={y + yOffset + 20}
          width="20" 
          height="20"
        >
          <div className="flex items-center justify-center h-full text-gray-400">+</div>
        </foreignObject>
      )}
    </motion.g>
  );
};

export default SubItemRenderer;
