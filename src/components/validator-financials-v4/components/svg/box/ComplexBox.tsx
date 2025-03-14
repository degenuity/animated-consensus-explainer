
import React from 'react';
import { motion } from 'framer-motion';
import { BoxProps, boxVariants } from './types';
import TitleBar from './TitleBar';
import ItemsProcessor from './ItemsProcessor';

interface ComplexBoxProps {
  boxProps: BoxProps;
}

const ComplexBox: React.FC<ComplexBoxProps> = ({ boxProps }) => {
  const { x, y, width, height, title, icon, animationIndex, subitems = [] } = boxProps;

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
        stroke="#1e293b"
        strokeWidth="1"
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
