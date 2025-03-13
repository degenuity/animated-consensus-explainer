
import React, { useEffect, useRef } from 'react';
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
  // Safety check 1: Skip rendering if path is missing
  if (!path) {
    console.log("Skipping AnimatedConnection - missing path");
    return null;
  }
  
  // Safety check 2: Never render dots in the danger zone 
  if (dotPosition) {
    const x = parseFloat(dotPosition.x);
    const y = parseFloat(dotPosition.y);
    
    if (x < 200 && y < 200) {
      console.error("AnimatedConnection: Blocked dot in danger zone", {
        x, y, color, path
      });
      
      // Create a safe version without the dot
      const safeDotPosition = undefined;
      
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
          
          {label && labelPosition && (
            <ConnectionLabel 
              label={label} 
              position={labelPosition} 
              color={color} 
            />
          )}
        </g>
      );
    }
  }
  
  const containerRef = useRef<SVGGElement>(null);
  
  // Inspect children after render to find and remove any rogue dots
  useEffect(() => {
    if (containerRef.current) {
      const circles = containerRef.current.querySelectorAll('circle');
      circles.forEach(circle => {
        const cx = parseFloat(circle.getAttribute('cx') || '1000');
        const cy = parseFloat(circle.getAttribute('cy') || '1000');
        
        if (cx < 200 && cy < 200) {
          console.error("POST-RENDER: Found and removing dot in danger zone", { cx, cy });
          circle.remove();
        }
      });
    }
  }, []);
  
  // Standard render with all safety checks in place
  return (
    <g ref={containerRef}>
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
      
      {dotPosition && !animateMotion && dotPosition.x && parseFloat(dotPosition.x) >= 200 && 
       dotPosition.y && parseFloat(dotPosition.y) >= 200 && (
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
      
      {animateMotion && path && !path.includes("M 0") && !path.includes("0,0") && (
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
