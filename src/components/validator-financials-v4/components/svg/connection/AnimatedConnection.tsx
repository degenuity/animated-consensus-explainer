
import React from 'react';
import { motion } from 'framer-motion';
import { ConnectionDot } from './ConnectionDot';
import { ConnectionLabel, ConnectionLabelProps } from './ConnectionLabel';
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
    // Special high z-index for the delegated stake and own stake connections
    if (id === 'delegated-stake-to-commission' || id === 'own-stake-to-staking-rewards') {
      return 200;
    }
    return renderOrder === 'foreground' ? 50 : 10;
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
      
      {/* Optional Label */}
      {label && (
        <ConnectionLabel
          x={label.x}
          y={label.y}
          text={label.text}
          variant={label.variant}
        />
      )}
    </g>
  );
};
