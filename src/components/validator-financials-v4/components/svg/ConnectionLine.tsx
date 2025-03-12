
import React from 'react';
import { motion } from 'framer-motion';

interface ConnectionSVGProps {
  path: string;
  color: string;
  animationIndex: number;
  dotPosition?: { x: string; y: string };
}

const ConnectionLine: React.FC<ConnectionSVGProps> = ({ 
  path, 
  color, 
  animationIndex,
  dotPosition
}) => {
  // Animation variants for connecting lines
  const lineVariants = {
    hidden: { pathLength: 0, opacity: 0 },
    visible: (i: number) => ({
      pathLength: 1,
      opacity: 1,
      transition: {
        pathLength: { delay: i * 0.3 + 0.5, duration: 0.7, ease: "easeInOut" },
        opacity: { delay: i * 0.3 + 0.5, duration: 0.3 }
      }
    })
  };
  
  // Animation variants for moving dots on lines
  const dotVariants = {
    hidden: { opacity: 0 },
    visible: (i: number) => ({
      opacity: [0, 1, 0],
      transition: {
        delay: i * 0.3 + 1.2,
        duration: 2,
        repeat: Infinity,
        repeatDelay: 1
      }
    })
  };
  
  return (
    <>
      <motion.path
        d={path}
        stroke={color}
        strokeWidth="2"
        fill="none"
        custom={animationIndex}
        variants={lineVariants}
        initial="hidden"
        animate="visible"
      />
      {dotPosition && (
        <motion.circle
          cx={dotPosition.x}
          cy={dotPosition.y}
          r="4"
          fill={color}
          custom={animationIndex}
          variants={dotVariants}
          initial="hidden"
          animate="visible"
        />
      )}
    </>
  );
};

export default ConnectionLine;
