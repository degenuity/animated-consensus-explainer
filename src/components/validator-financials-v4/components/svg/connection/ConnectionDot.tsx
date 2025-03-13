
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
  // Create a ref for the circle element to monitor it
  const circleRef = useRef<SVGCircleElement | null>(null);
  
  // EXTREME SAFETY CHECK 1: Log all dot rendering attempts for debugging
  console.log("CONNECTION DOT RENDER ATTEMPT:", { 
    path, 
    color, 
    cx, 
    cy, 
    animated,
    time: new Date().toISOString()
  });
  
  // EXTREME SAFETY CHECK 2: Block ANY dots in a much larger danger zone (entire top-left quadrant)
  const dangerZoneSize = 200; // Expanded from 100 to 200 for maximum safety
  
  if (cx && cy) {
    const numCx = parseFloat(cx);
    const numCy = parseFloat(cy);
    
    if (numCx < dangerZoneSize && numCy < dangerZoneSize) {
      console.error("BLOCKED DOT IN EXPANDED DANGER ZONE:", { cx, cy, color });
      return null; // Block rendering entirely
    }
  }
  
  // EXTREME SAFETY CHECK 3: Don't render ANY animated dots if they have an undefined or suspicious path
  if (animated && (!path || path.includes("M 0") || path.includes("M0") || 
      path.includes("L 0,0") || path.includes("0,0"))) {
    console.error("BLOCKED SUSPICIOUS ANIMATION PATH:", path);
    return null;
  }
  
  // Monitor the DOM element for position after rendering
  useEffect(() => {
    if (circleRef.current) {
      const position = circleRef.current.getBoundingClientRect();
      
      // If this dot appears in the top-left corner after rendering, remove it
      if (position.x < dangerZoneSize && position.y < dangerZoneSize) {
        console.error("POST-RENDER DOT IN DANGER ZONE! REMOVING:", {
          element: circleRef.current,
          position
        });
        
        // Remove the element from the DOM entirely
        circleRef.current.remove();
      }
    }
    
    // Also add a broader DOM check to catch any rogue circles that might be created elsewhere
    setTimeout(() => {
      const allCircles = document.querySelectorAll('circle');
      allCircles.forEach(circle => {
        const cx = parseFloat(circle.getAttribute('cx') || '1000');
        const cy = parseFloat(circle.getAttribute('cy') || '1000');
        
        // Get actual screen position
        const rect = circle.getBoundingClientRect();
        
        if ((cx < dangerZoneSize && cy < dangerZoneSize) || 
            (rect.left < dangerZoneSize && rect.top < dangerZoneSize)) {
          console.error("FOUND AND REMOVING ROGUE DOT:", {
            element: circle,
            cx, cy,
            position: rect
          });
          circle.remove();
        }
      });
    }, 300);
  }, []);
  
  // Only render animated dots if they have a valid path and aren't in the danger zone
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
  
  // For static dots, only render if we have valid coordinates outside danger zone
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
  
  // Default case - don't render anything
  return null;
};
