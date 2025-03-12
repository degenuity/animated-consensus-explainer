
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
  const { text, desc, color: itemColor, hasPlus, isHeader, isSubHeader } = item;
  const itemHeight = desc ? 45 : 40;
  
  return (
    <motion.g
      key={`subitem-${index}`}
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
        fill={isHeader ? "transparent" : "transparent"}
        stroke={itemColor ? itemColor : (isHeader ? "#EAB308" : isSubHeader ? "#10B981" : "#3B82F6")}
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
          <div className={`flex items-center h-full px-4 ${isHeader ? 'text-amber-400 font-medium' : isSubHeader ? 'text-white font-medium' : 'text-white'}`}>
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
