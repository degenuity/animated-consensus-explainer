
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
  // Enhanced debugging for the stake weight path
  if (path?.includes("total-stake-to-stake-weight")) {
    console.log("Stake weight path details:", { 
      path,
      endPoint: "585,550",
      animated, 
      animationDuration,
      // Parse path to extract coordinates
      coordinates: path.split(/[ML]\s*/).filter(Boolean).map(coord => {
        const [x, y] = coord.trim().split(/\s+/).map(Number);
        return { x, y };
      })
    });
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
          {/* Enhanced pulsating size effect */}
          <animate
            attributeName="r"
            values="3;6;3"
            dur="0.8s"
            repeatCount="indefinite"
          />
          {/* Enhanced pulsating opacity effect */}
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
