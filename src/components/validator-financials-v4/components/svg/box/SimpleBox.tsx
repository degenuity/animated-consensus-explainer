
import React from 'react';
import { motion } from 'framer-motion';
import BoxIcon from './BoxIcon';
import { BoxProps, boxVariants } from './types';

interface SimpleBoxProps {
  boxProps: BoxProps & {
    borderColor?: string;
    borderWidth?: string;
  };
}

const SimpleBox: React.FC<SimpleBoxProps> = ({ boxProps }) => {
  const { 
    x, y, width, height, title, icon, subtitle, 
    color, animationIndex, isExplanation,
    borderColor, borderWidth = "1"
  } = boxProps;
  
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
        fill={isExplanation ? "#0f172a" : `rgb(${color})`}
        stroke={isExplanation ? borderColor || "#1e293b" : "none"}
        strokeWidth={borderWidth}
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
