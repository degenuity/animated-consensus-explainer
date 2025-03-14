
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
  renderOrder = 'background' // Default to background if not specified
}) => {
  // Skip rendering if the path is missing
  if (!path) return null;
  
  // Essential class attribute for distinguishing foreground vs background connections
  const connectionClass = `${renderOrder}-connection connection-${id}`;
  
  // Add data-debugger attribute to help trace the element in DOM
  return (
    <g 
      data-connection-id={id} 
      className={connectionClass} 
      data-render-order={renderOrder}
      data-start-point={path.split(' ')[1] + ',' + path.split(' ')[2]} // Extract start point from path
    >
      {/* Path */}
      <motion.path
        d={path}
        stroke={color}
        strokeWidth="2.5" // Slightly thicker lines for better visibility
        fill="none"
        initial="hidden"
        animate="visible"
        variants={lineVariants}
        style={{ strokeDasharray: '4 2' }}
      />
      
      {/* Animated Dot */}
      {dotPosition && (
        animateMotion ? (
          <ConnectionDot
            path={path}
            color={color}
            animated={true}
            animationDuration={animationDuration}
            renderOrder={renderOrder}
          />
        ) : (
          <ConnectionDot
            cx={dotPosition.x}
            cy={dotPosition.y}
            color={color}
            animated={false}
            renderOrder={renderOrder}
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
