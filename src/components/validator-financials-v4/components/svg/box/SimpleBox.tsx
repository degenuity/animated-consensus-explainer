
import React from 'react';
import { motion } from 'framer-motion';
import BoxIcon from './BoxIcon';
import { BoxProps, boxVariants } from './types';

interface SimpleBoxProps {
  boxProps: BoxProps;
}

const SimpleBox: React.FC<SimpleBoxProps> = ({ boxProps }) => {
  const { x, y, width, height, title, icon, subtitle, color, animationIndex } = boxProps;
  
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
        fill={`rgb(${color})`}
      />
      <foreignObject x={x} y={y} width={width} height={height}>
        <div className="flex flex-col items-center justify-center text-white h-full p-4">
          <BoxIcon icon={icon} size={24} />
          <div className="text-lg font-semibold">{title}</div>
          {subtitle && <div className="text-sm opacity-70">{subtitle}</div>}
        </div>
      </foreignObject>
    </motion.g>
  );
};

export default SimpleBox;
