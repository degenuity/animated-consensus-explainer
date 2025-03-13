
import React, { useEffect, useRef } from 'react';

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
  // Reference for the circle element to monitor it
  const circleRef = useRef<SVGCircleElement | null>(null);
  
  // Debugging: Log all dot rendering
  console.log("Rendering ConnectionDot:", { path, color, cx, cy, animated });
  
  // Specific check for dangerous dots at top-left
  const dangerZoneSize = 50; // Only block dots very close to origin
  
  if (cx && cy) {
    const numCx = parseFloat(cx);
    const numCy = parseFloat(cy);
    
    // If dot is in danger zone, block it
    if (numCx < dangerZoneSize && numCy < dangerZoneSize) {
      console.error("BLOCKED DOT IN DANGER ZONE:", { cx, cy, color });
      return null;
    }
  }
  
  // SPECIFIC check for the exact SVG path that's creating the rogue dot
  // This is focused on catching exactly the problem pattern
  if (animated && path && (
      path.includes("M 0,0") || 
      path.includes("M 0 0") ||
      path.startsWith("M0,0") || 
      path.startsWith("M 0,") ||
      path.includes(" 0 0 ")
  )) {
    console.error("BLOCKED SUSPICIOUS PATH:", { path, color });
    return null;
  }

  // Normal rendering path for animated dots
  if (animated && path) {
    return (
      <g>
        <circle
          ref={circleRef}
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
      </g>
    );
  }
  
  // Static dots
  if (cx && cy) {
    return (
      <circle
        ref={circleRef}
        cx={cx}
        cy={cy}
        r={radius}
        fill={color}
      />
    );
  }
  
  return null;
};
