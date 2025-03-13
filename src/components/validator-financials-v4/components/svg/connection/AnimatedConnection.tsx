
import React from 'react';
import { motion } from 'framer-motion';
import { ConnectionLabel } from './ConnectionLabel';
import { ConnectionDot } from './ConnectionDot';
import { ConnectionProps } from './types';

interface AnimatedConnectionProps extends ConnectionProps {
  lineVariants: any;
  dotVariants: any;
}

export const AnimatedConnection: React.FC<AnimatedConnectionProps> = ({
  path,
  color,
  animationIndex,
  dotPosition,
  label,
  labelPosition,
  animationDirection,
  animateMotion,
  lineVariants,
  dotVariants,
  animationDuration
}) => {
  // Skip rendering ANY connections that:
  // 1. Start at the top-left corner
  if (path && (
      path.startsWith("M 0,0") || 
      path.startsWith("M0,0") || 
      path.startsWith("M 0 0") ||
      path.startsWith("M 0") ||
      path.startsWith("M0")
    )) {
    return null;
  }
  
  // 2. Have any coordinates in the top-left region
  const pathSegments = path ? path.split(/[ML]\s*/).filter(Boolean) : [];
  for (const segment of pathSegments) {
    const coords = segment.trim().split(/[\s,]+/).map(Number);
    if (coords.length >= 2 && coords[0] < 100 && coords[1] < 100) {
      return null;
    }
  }
  
  // 3. Have dot positions in the top-left
  const shouldRenderDot = !dotPosition || 
                         !(parseFloat(dotPosition.x) < 100 && parseFloat(dotPosition.y) < 100);
  
  return (
    <g>
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
      
      {shouldRenderDot && dotPosition && !animateMotion && (
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
            animation: `moveDot${animationDirection.charAt(0).toUpperCase() + animationDirection.slice(1)} ${animationDuration || 3}s linear infinite`
          } : undefined}
        />
      )}
      
      {shouldRenderDot && animateMotion && (
        <motion.g
          custom={animationIndex}
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ 
            delay: animationIndex * 0.3 + 0.5,
            duration: 0.3
          }}
        >
          <ConnectionDot 
            path={path}
            color={color}
            animated={true}
            animationDuration={animationDuration}
          />
        </motion.g>
      )}
      
      {label && labelPosition && (
        <ConnectionLabel 
          label={label} 
          position={labelPosition} 
          color={color} 
        />
      )}
    </g>
  );
};
