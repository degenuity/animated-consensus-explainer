
import React from 'react';
import { motion } from 'framer-motion';
import BoxIcon from './BoxIcon';
import { BoxProps, boxVariants } from './types';

interface SimpleBoxProps {
  boxProps: BoxProps;
}

/**
 * SimpleBox renders basic boxes without complex subitems,
 * like Inflation and Deflation boxes.
 */
const SimpleBox: React.FC<SimpleBoxProps> = ({ boxProps }) => {
  const { x, y, width, height, title, icon, subtitle, color, animationIndex, isExplanation } = boxProps;
  
  return (
    <motion.g
      custom={animationIndex}
      variants={boxVariants}
      initial="hidden"
      animate="visible"
      data-id={title.replace(/\s+/g, '-')}
    >
      <rect
        x={x}
        y={y}
        width={width}
        height={height}
        rx="4"
        fill={isExplanation ? "#0f172a" : `rgb(${color})`}
        stroke={isExplanation ? "#1e293b" : "none"}
        strokeWidth="1"
      />
      <foreignObject x={x} y={y} width={width} height={height}>
        <div className="flex flex-col items-center justify-center text-white h-full p-4">
          {!isExplanation && <BoxIcon icon={icon} size={24} />}
          <div className="text-lg font-semibold text-center">{title}</div>
          {subtitle && <div className="text-sm opacity-80 text-center mt-1">{subtitle}</div>}
        </div>
      </foreignObject>
    </motion.g>
  );
};

export default SimpleBox;
