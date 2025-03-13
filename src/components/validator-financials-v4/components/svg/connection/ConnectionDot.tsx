
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
  // Enhanced debugging for the stake weight path
  useEffect(() => {
    if (path?.includes("total-stake-to-stake-weight")) {
      console.log("Stake weight path detailed analysis:", { 
        path,
        pathType: typeof path,
        pathSegments: path.split(/[ML]\s*/).filter(Boolean),
        endPoint: path.split(/[ML]\s*/).filter(Boolean).pop(),
        animated, 
        animationDuration
      });
    }
  }, [path, animated, animationDuration]);
  
  // Debug the path coordinates more precisely
  useEffect(() => {
    if (path) {
      const segments = path.split(/([ML])\s*/).filter(Boolean);
      const coordinates = [];
      let currentCommand = '';
      
      // Parse the path to extract exact coordinates
      for (let i = 0; i < segments.length; i++) {
        if (segments[i] === 'M' || segments[i] === 'L') {
          currentCommand = segments[i];
        } else if (currentCommand) {
          const [x, y] = segments[i].trim().split(/\s+/);
          coordinates.push({ command: currentCommand, x: parseFloat(x), y: parseFloat(y) });
        }
      }
      
      if (path.includes("total-stake-to-stake-weight") || path.includes("block-production")) {
        console.log("Detailed path analysis:", {
          pathId: path.includes("stake-weight") ? "total-stake-to-stake-weight" : "block-production",
          segments,
          coordinates,
          lastPoint: coordinates.length > 0 ? coordinates[coordinates.length - 1] : null
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
