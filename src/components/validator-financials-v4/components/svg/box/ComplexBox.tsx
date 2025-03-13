
import React from 'react';
import { motion } from 'framer-motion';
import { BoxProps, boxVariants } from './types';
import TitleBar from './TitleBar';
import ItemsProcessor from './ItemsProcessor';

interface ComplexBoxProps {
  boxProps: BoxProps & {
    borderColor?: string;
    borderWidth?: string;
  };
}

const ComplexBox: React.FC<ComplexBoxProps> = ({ boxProps }) => {
  const { 
    x, y, width, height, title, icon, 
    animationIndex, subitems = [],
    borderColor = "#1e293b",
    borderWidth = "1"
  } = boxProps;

  return (
    <motion.g
      custom={animationIndex}
      variants={boxVariants}
      initial="hidden"
      animate="visible"
    >
      {/* Box container */}
      <rect
        x={x}
        y={y}
        width={width}
        height={height}
        rx="4"
        fill="#0f172a"
        stroke={borderColor}
        strokeWidth={borderWidth}
      />
      
      {/* Title bar */}
      <TitleBar 
        x={x} 
        y={y} 
        width={width} 
        title={title} 
        icon={icon} 
      />
      
      {/* Render all items */}
      <ItemsProcessor
        subitems={subitems}
        x={x}
        y={y}
        width={width}
        height={height}
        title={title}
      />
    </motion.g>
  );
};

export default ComplexBox;
