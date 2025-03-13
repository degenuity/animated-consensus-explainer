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
  // Enhanced debugging for the stake weight path
  if (path?.includes("total-stake-to-stake-weight")) {
    console.log("Stake weight path details:", { 
      path,
      endPoint: "705,550",
      animated, 
      animationDuration,
      coordinates: path.split(/[ML]\s*/).filter(Boolean).map(coord => {
        const [x, y] = coord.trim().split(/\s+/).map(Number);
        return { x, y };
      })
    });
  }
  
  if (path?.includes("block-production")) {
    console.log("Block production box connection:", {
      path,
      boxPositions: {
        performance: "Left box - approximately at x=320-445, y=550",
        randomness: "Middle box - approximately at x=585, y=550",
        stakeWeight: "Right box - approximately at x=705, y=550"
      }
    });
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
