
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
  // Don't render anything if the path is missing when required
  if (animated && !path) {
    return null;
  }
  
  // For static dots, don't render if coordinates are missing
  if (!animated && (!cx || !cy)) {
    return null;
  }
  
  if (animated && path) {
    return (
      <g>
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
            values="3;6;3"
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
  
  // For static dots, check if it's in the top-left corner
  // If so, make it match the background color instead of filtering it out
  if (cx && cy) {
    const numCx = parseFloat(cx);
    const numCy = parseFloat(cy);
    
    // For dots in the top-left corner region, render them with background color
    if (numCx < 50 && numCy < 50) {
      return (
        <circle
          cx={cx}
          cy={cy}
          r={radius}
          fill="#0d111c" // Match the diagram background color
        />
      );
    }
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
