
import React from 'react';
import { motion } from 'framer-motion';

interface OperatorSymbolProps {
  symbol: string;
  x: number;
  y: number;
  width: number;
  height: number;
  color?: string;
  id?: string;
}

const OperatorSymbol: React.FC<OperatorSymbolProps> = ({
  symbol,
  x,
  y,
  width,
  height,
  color = "#0E7490",
  id
}) => {
  console.log(`Rendering operator symbol '${symbol}' at x=${x}, width=${width}`);
  
  return (
    <motion.g
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ delay: 1.5 }}
      data-operator-id={id}
    >
      <foreignObject 
        x={x} 
        y={y} 
        width={width} 
        height={height}
      >
        <div 
          className="flex items-center justify-center h-full text-xl"
          style={{ color }}
        >
          {symbol}
        </div>
      </foreignObject>
    </motion.g>
  );
};

export default OperatorSymbol;
