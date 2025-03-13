
import React, { useRef } from 'react';

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
  
  // Only block dots at exact origin (0,0)
  // This is the key fix - we only block dots that are exactly at 0,0
  if ((cx === "0" && cy === "0") || (cx === "0.0" && cy === "0.0")) {
    console.error("BLOCKED DOT AT EXACT ORIGIN:", { cx, cy, color });
    return null;
  }
  
  // For animated dots, only block if the path starts exactly at the origin
  // We only check for the exact pattern to avoid blocking legitimate paths
  if (animated && path && path.match(/^M\s*0\s*,\s*0\s+/)) {
    console.error("BLOCKED DOT WITH PATH STARTING AT EXACT ORIGIN:", { path: path.substring(0, 20), color });
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
