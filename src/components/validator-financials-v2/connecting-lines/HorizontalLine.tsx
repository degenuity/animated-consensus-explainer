
import React from 'react';
import { motion } from "framer-motion";
import { AnimatedLineProps } from './types';

const HorizontalLine = ({ 
  top, 
  left, 
  width = "110", 
  color, 
  animationDirection, 
  animationValues, 
  duration 
}: AnimatedLineProps) => {
  return (
    <svg className="absolute" style={{ top, left }} width={width} height="4" xmlns="http://www.w3.org/2000/svg">
      <line x1="0" y1="2" x2={width} y2="2" stroke={color} strokeWidth="2" />
      <motion.circle 
        cx={parseInt(width) / 2} 
        cy="2" 
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

export default HorizontalLine;
