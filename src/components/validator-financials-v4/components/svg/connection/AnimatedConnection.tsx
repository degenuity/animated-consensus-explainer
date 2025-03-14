
import React from 'react';
import { motion } from 'framer-motion';
import { ConnectionDot } from './ConnectionDot';
import { ConnectionLabel } from './ConnectionLabel';
import { ConnectionProps } from './types';

interface AnimatedConnectionProps extends ConnectionProps {
  lineVariants?: any;
  dotVariants?: any;
}

export const AnimatedConnection: React.FC<AnimatedConnectionProps> = ({
  id,
  path,
  dotPosition,
  color,
  lineVariants,
  dotVariants,
  animateMotion = false,
  animationDuration = 2,
  animationDirection,
  label,
  renderOrder
}) => {
  // Skip rendering if the path is missing
  if (!path) return null;
  
  // Set explicit style based on ID for exact control
  const getZIndex = () => {
    // Make ALL foreground connections have higher z-index than the box layer
    return renderOrder === 'foreground' ? 300 : 5;
  };
  
  const zIndex = getZIndex();
  
  return (
    <g data-connection-id={id} style={{ zIndex }}>
      {/* Path */}
      <motion.path
        d={path}
        stroke={color}
        strokeWidth="2"
        fill="none"
        initial="hidden"
        animate="visible"
        variants={lineVariants}
        style={{ 
          strokeDasharray: '4 2', 
          zIndex
        }}
      />
      
      {/* Animated Dot */}
      {dotPosition && (
        animateMotion ? (
          <ConnectionDot
            path={path}
            color={color}
            animated={true}
            animationDuration={animationDuration}
          />
        ) : (
          <ConnectionDot
            cx={dotPosition.x}
            cy={dotPosition.y}
            color={color}
            animated={false}
          />
        )
      )}
      
      {/* Optional Label - Only render if label exists */}
      {label && (
        <ConnectionLabel
          x={label.x}
          y={label.y}
          text={label.text}
          variant={label.variant || "default"}
        />
      )}
    </g>
  );
};
