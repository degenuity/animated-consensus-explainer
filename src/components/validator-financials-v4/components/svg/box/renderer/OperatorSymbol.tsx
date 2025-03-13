
import React from 'react';
import { motion } from 'framer-motion';
import { SubItem } from '../types';

export interface OperatorSymbolProps {
  item: SubItem;
  index: number;
  adjustedX: number;
  y: number;
  yOffset: number;
  adjustedWidth: number;
  itemHeight: number;
}

const OperatorSymbol: React.FC<OperatorSymbolProps> = ({
  item,
  index,
  adjustedX,
  y,
  yOffset,
  adjustedWidth,
  itemHeight
}) => {
  // Debug log to understand dimensions
  console.log(`Rendering operator symbol: ${item.id || 'unnamed'} with width: ${adjustedWidth}, text: ${item.text}`);
  
  return (
    <motion.g
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
        <div 
          className="flex flex-col justify-center h-full text-center"
          style={{ overflow: 'visible' }} // Prevent div from cropping content
        >
          <div 
            className="text-2xl font-normal" 
            style={{ 
              color: item.color || "#0E7490",
              position: 'relative', // Position relatively for z-index to work
              zIndex: 10, // Ensure operator is above other elements
              transform: 'scale(1.1)', // Make the operator slightly larger
            }}
          >
            {item.text}
          </div>
        </div>
      </foreignObject>
    </motion.g>
  );
};

export default OperatorSymbol;
