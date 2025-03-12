
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
}

const ConnectionLine: React.FC<ConnectionSVGProps> = ({ 
  path, 
  color, 
  animationIndex,
  dotPosition,
  label,
  labelPosition
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
          r="4"
          fill={color}
          custom={animationIndex}
          variants={dotVariants}
          initial="hidden"
          animate="visible"
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
            strokeWidth="1"
            opacity="0.9"
          />
          <text
            x={labelPosition.x}
            y={labelPosition.y}
            textAnchor="middle"
            dominantBaseline="middle"
            fill="white"
            fontSize="12"
            fontWeight="500"
          >
            {label}
          </text>
        </g>
      )}
    </>
  );
};

export default ConnectionLine;
