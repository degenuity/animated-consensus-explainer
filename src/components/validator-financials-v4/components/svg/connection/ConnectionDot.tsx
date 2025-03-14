
import React from 'react';

interface ConnectionDotProps {
  path?: string;
  color: string;
  cx?: string;
  cy?: string;
  radius?: number;
  animated?: boolean;
  animationDuration?: number;
  renderOrder?: 'foreground' | 'background';
}

export const ConnectionDot: React.FC<ConnectionDotProps> = ({ 
  path, 
  color, 
  cx, 
  cy, 
  radius = 5,
  animated = false,
  animationDuration = 1.5,
  renderOrder = 'background'
}) => {  
  // Ensure the path doesn't include (0,0) coordinates as starting points
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
        </circle>
      </g>
    );
  }
  
  // Static dot rendering
  if (!animated && cx && cy) {
    return (
      <circle
        cx={cx}
        cy={cy}
        r={radius}
        fill={color}
      />
    );
  }
  
  return null;
};
