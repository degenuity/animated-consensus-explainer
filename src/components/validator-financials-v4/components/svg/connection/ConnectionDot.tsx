
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
  // SAFETY CHECK 1: Don't render anything if required props are missing
  if (animated && !path) {
    console.log("Skipping animated dot - missing path");
    return null;
  }
  
  // SAFETY CHECK 2: For static dots, don't render if coordinates are missing
  if (!animated && (!cx || !cy)) {
    console.log("Skipping static dot - missing coordinates");
    return null;
  }
  
  // SAFETY CHECK 3: Block any dots in the top-left danger zone (expanded area)
  // This is a failsafe to prevent any dots from appearing in the top-left corner
  if (cx && cy) {
    const numCx = parseFloat(cx);
    const numCy = parseFloat(cy);
    
    if (numCx < 100 && numCy < 100) {
      console.log("BLOCKED DOT IN TOP-LEFT ZONE:", { cx, cy, color });
      return null; // Absolutely no rendering in the expanded danger zone
    }
  }
  
  // Only render animated dots if they have a valid path
  if (animated && path) {
    // SAFETY CHECK 4: Don't allow any animations that could position dots in the corner
    // This is a double-failsafe since we're already blocking by coordinates above
    if (path.includes("M 0") || path.includes("M0") || 
        (path.includes("L 0") && path.includes("0 0"))) {
      console.log("BLOCKED ANIMATION PATH WITH TOP-LEFT COORDINATES:", path);
      return null;
    }
    
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
  
  // For static dots, we've already filtered out any in the danger zone
  return (
    <circle
      cx={cx}
      cy={cy}
      r={radius}
      fill={color}
    />
  );
};
