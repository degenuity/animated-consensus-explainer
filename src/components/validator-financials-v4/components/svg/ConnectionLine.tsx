
import React from 'react';
import { motion } from 'framer-motion';
import { useConnectionAnimation } from './hooks/useConnectionAnimation';

interface ConnectionSVGProps {
  path: string;
  color: string;
  animationIndex: number;
  dotPosition?: { x: string; y: string };
  label?: string;
  labelPosition?: { x: number; y: number };
  animationDirection?: "right" | "left" | "up" | "down";
}

const ConnectionLine: React.FC<ConnectionSVGProps> = ({ 
  path, 
  color, 
  animationIndex,
  dotPosition,
  label,
  labelPosition,
  animationDirection
}) => {
  const { lineVariants, dotVariants } = useConnectionAnimation({
    animationIndex
  });
  
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
          r="5"
          fill={color}
          custom={animationIndex}
          variants={dotVariants}
          initial="hidden"
          animate="visible"
          style={animationDirection ? {
            animation: `moveDot${animationDirection.charAt(0).toUpperCase() + animationDirection.slice(1)} 3s linear infinite`
          } : undefined}
        />
      )}
      
      {label && labelPosition && (
        <g>
          <circle
            cx={labelPosition.x}
            cy={labelPosition.y}
            r="15"
            fill="#1f2937"
            stroke={color}
            strokeWidth="1.5"
            opacity="0.9"
          />
          <text
            x={labelPosition.x}
            y={labelPosition.y}
            textAnchor="middle"
            dominantBaseline="middle"
            fill="white"
            fontSize="12"
            fontWeight="600"
          >
            {label}
          </text>
        </g>
      )}
    </>
  );
};

export default ConnectionLine;
