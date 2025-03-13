
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
  // Enhanced debugging for animation paths - especially for stake weight
  useEffect(() => {
    if (path && (path.includes("stake-weight") || path.includes("total-stake-to-stake"))) {
      console.log("Stake weight connection path analysis:", { 
        path,
        pathType: typeof path,
        pathLength: path.length,
        pathSegments: path.split(/[ML]\s*/).filter(Boolean),
        animated, 
        animationDuration
      });
    }
  }, [path, animated, animationDuration]);
  
  // Detailed path parsing to extract exact endpoints
  useEffect(() => {
    if (path) {
      // First, clean up the path string by ensuring consistent spacing
      const cleanPath = path.replace(/([ML])\s*/g, '$1 ').trim();
      
      // Parse the path to extract all coordinates precisely
      const segments = cleanPath.split(/([ML])\s/).filter(Boolean);
      const coordinates = [];
      let currentCommand = '';
      
      for (let i = 0; i < segments.length; i++) {
        if (segments[i] === 'M' || segments[i] === 'L') {
          currentCommand = segments[i];
        } else if (currentCommand) {
          const coords = segments[i].trim().split(/\s+/);
          if (coords.length >= 2) {
            coordinates.push({ 
              command: currentCommand, 
              x: parseFloat(coords[0]), 
              y: parseFloat(coords[1]) 
            });
          }
        }
      }
      
      // For the stake weight path, provide extremely detailed logging
      if (path.includes("stake-weight") || path.includes("total-stake-to-stake")) {
        console.log("Detailed stake weight path analysis:", {
          rawPath: path,
          cleanPath,
          segments,
          coordinates,
          startPoint: coordinates.length > 0 ? coordinates[0] : null,
          endPoint: coordinates.length > 0 ? coordinates[coordinates.length - 1] : null,
          allPoints: coordinates
        });
      }
    }
  }, [path]);
  
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
