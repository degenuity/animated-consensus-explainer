
import React from 'react';

interface ConnectionDotProps {
  path?: string;
  color: string;
  cx?: string;
  cy?: string;
  radius?: number;
  animated?: boolean;
  animationDuration?: number;
}

export const ConnectionDot: React.FC<ConnectionDotProps> = ({ 
  path, 
  color, 
  cx, 
  cy, 
  radius = 5,
  animated = false,
  animationDuration = 1.5
}) => {
  if (animated && path) {
    return (
      <circle
        r={radius}
        fill={color}
      >
        <animateMotion
          path={path}
          dur={`${animationDuration}s`}
          repeatCount="indefinite"
          rotate="auto"
        />
        <animate
          attributeName="r"
          values="3;5;3"
          dur="0.8s"
          repeatCount="indefinite"
        />
        <animate
          attributeName="opacity"
          values="0.7;1;0.7"
          dur="0.8s"
          repeatCount="indefinite"
        />
      </circle>
    );
  }
  
  return (
    <circle
      cx={cx}
      cy={cy}
      r={radius}
      fill={color}
    />
  );
};
