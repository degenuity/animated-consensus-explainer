
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
  
  // Ensure the path doesn't include (0,0) coordinates as starting points
  // to prevent rogue dots at the origin
  if (animated && path) {
    if (path.includes("M 0 0") || path.includes("M 0,0") || path.startsWith("M0,0") || path.startsWith("M0 0")) {
      console.warn('Skipping dot rendering with path starting at origin:', path);
      return null;
    }
    
    return (
      <g>
        {/* The main animated dot */}
        <circle
          r={radius}
          fill={color}
          style={{ transform: 'translateZ(0)' }} // Force hardware acceleration
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
        
        {/* Secondary dot with slight offset for visual effect */}
        <circle
          r={radius * 0.8}
          fill={color}
          opacity="0.6"
          style={{ transform: 'translateZ(0)' }} // Force hardware acceleration
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
  
  // Static dot rendering
  return (
    <circle
      cx={cx}
      cy={cy}
      r={radius}
      fill={color}
    />
  );
};
