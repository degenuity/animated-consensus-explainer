
import React from 'react';
import { motion } from "framer-motion";

interface GridLine {
  type: 'horizontal' | 'vertical';  // Now strictly typed to only allow these two values
  x?: number;
  y?: number;
  x1?: number;
  y1?: number;
  x2?: number;
  y2?: number;
  animate?: boolean;
  animationDelay?: number;
  className?: string;
}

interface GridLayerProps {
  gridLines: GridLine[];
}

const GridLayer: React.FC<GridLayerProps> = ({ gridLines }) => {
  return (
    <g>
      {gridLines.map((line, index) => {
        const lineElement = line.type === 'horizontal' ? (
          <line 
            x1={line.x1} 
            y1={line.y} 
            x2={line.x2} 
            y2={line.y} 
            className={line.className || 'stroke-gray-600 stroke-[1px]'} 
          />
        ) : (
          <line 
            x1={line.x} 
            y1={line.y1} 
            x2={line.x} 
            y2={line.y2} 
            className={line.className || 'stroke-gray-600 stroke-[1px]'} 
          />
        );
        
        return line.animate ? (
          <motion.g 
            key={`grid-line-${index}`}
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.5, delay: line.animationDelay || 0.1 * index }}
          >
            {lineElement}
          </motion.g>
        ) : (
          <g key={`grid-line-${index}`}>
            {lineElement}
          </g>
        );
      })}
    </g>
  );
};

export default GridLayer;
