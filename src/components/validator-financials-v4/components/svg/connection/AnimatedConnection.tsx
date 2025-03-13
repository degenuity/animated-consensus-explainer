
import React, { useRef } from 'react';
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
  // Skip rendering if path is missing
  if (!path) {
    console.log("Skipping AnimatedConnection - missing path");
    return null;
  }
  
  const containerRef = useRef<SVGGElement>(null);
  
  // Very targeted safety check: Only block paths exactly at origin (not near origin)
  const isSafePath = !path.match(/^M\s*0\s*,\s*0\s+/);
  
  // Safety check: Only block dots exactly at origin (not near origin)
  const isSafeDotPosition = !dotPosition || 
                          !(dotPosition.x === "0" && dotPosition.y === "0") &&
                          !(dotPosition.x === "0.0" && dotPosition.y === "0.0");
  
  return (
    <g ref={containerRef}>
      {/* Always render the path itself */}
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
      
      {/* Render static dot if position is safe */}
      {dotPosition && !animateMotion && isSafeDotPosition && (
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
      
      {/* Render animated dot if path is safe */}
      {animateMotion && isSafePath && (
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
      
      {/* Always render the label if it exists */}
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
