
import React, { useEffect } from 'react';

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
  // Remove all debugging logs - they're not helping and cluttering the console
  
  // First check: if cx and cy are defined, ensure they're not in the top-left corner
  if (cx && cy) {
    const cxNum = parseFloat(cx);
    const cyNum = parseFloat(cy);
    // Expanded check to catch more edge cases - make the safe zone larger (100px)
    if ((cxNum < 100 && cyNum < 100) || isNaN(cxNum) || isNaN(cyNum)) {
      return null; // Don't render dots in the upper left corner region
    }
  }
  
  // Second check: if this is an animated dot with a path, ensure the path doesn't start or end in the corner
  if (path) {
    // Check if path starts at or very near the origin (top-left corner)
    if (path.startsWith("M 0") || 
        path.startsWith("M0") || 
        path.startsWith("M 0,0") || 
        path.startsWith("M0,0") ||
        path.startsWith("M 0 0")) {
      return null;
    }
    
    // Also check if ANY part of the path goes through the top-left corner
    const pathSegments = path.split(/[ML]\s*/).filter(Boolean);
    for (const segment of pathSegments) {
      const coords = segment.trim().split(/[\s,]+/).map(Number);
      // If any coordinates are in the top-left corner zone
      if (coords.length >= 2 && coords[0] < 100 && coords[1] < 100) {
        return null;
      }
    }
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
  
  return (
    <circle
      cx={cx}
      cy={cy}
      r={radius}
      fill={color}
    />
  );
};
