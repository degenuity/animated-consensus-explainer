
import React from 'react';
import { motion } from "framer-motion";
import { AnimatedLineProps } from './types';

const VerticalLine = ({ 
  top, 
  left, 
  height = "55", 
  color, 
  animationDirection, 
  animationValues, 
  duration 
}: AnimatedLineProps) => {
  return (
    <svg className="absolute" style={{ top, left }} width="2" height={height} xmlns="http://www.w3.org/2000/svg">
      <line x1="1" y1="0" x2="1" y2={height} stroke={color} strokeWidth="2" />
      <motion.circle 
        cx="1" 
        cy={parseInt(height) / 2} 
        r="3" 
        fill={color} 
        animate={{ 
          [animationDirection]: animationValues,
          opacity: [0, 1, 0]
        }}
        transition={{ 
          duration,
          repeat: Infinity,
          ease: "linear"
        }}
      />
    </svg>
  );
};

export default VerticalLine;
