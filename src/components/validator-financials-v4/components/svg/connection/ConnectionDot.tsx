
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
  // Add logging for the specific base-fee-bottom-to-block-rewards path
  if (path === "M 1090 220 L 1090 260") {
    console.log("ConnectionDot for base-fee-bottom-to-block-rewards with:", { animated, animationDuration, path });
  }
  
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
            values="3;6;3"
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
        
        {/* Secondary trail dot (slightly smaller and more transparent) */}
        <circle
          r={radius * 0.8}
          fill={color}
          opacity="0.6"
        >
          <animateMotion
            path={path}
            dur={`${animationDuration}s`}
            repeatCount="indefinite"
            rotate="auto"
            keyPoints="0.05;1.05" 
            keyTimes="0;1"
          />
        </circle>
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
