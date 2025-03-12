
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
      <g>
        {/* Main dot with motion animation */}
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
          {/* Pulsating size effect */}
          <animate
            attributeName="r"
            values="3;5;3"
            dur="0.8s"
            repeatCount="indefinite"
          />
          {/* Pulsating opacity effect */}
          <animate
            attributeName="opacity"
            values="0.7;1;0.7"
            dur="0.8s"
            repeatCount="indefinite"
          />
        </circle>
        
        {/* Optional: Add a subtle glow effect (uncomment if desired) */}
        {/* <circle
          r={radius * 2}
          fill={color}
          opacity="0.2"
        >
          <animateMotion
            path={path}
            dur={`${animationDuration}s`}
            repeatCount="indefinite"
            rotate="auto"
          />
          <animate
            attributeName="r"
            values="6;9;6"
            dur="1.5s"
            repeatCount="indefinite"
          />
          <animate
            attributeName="opacity"
            values="0.1;0.3;0.1"
            dur="1.5s"
            repeatCount="indefinite"
          />
        </circle> */}
      </g>
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
