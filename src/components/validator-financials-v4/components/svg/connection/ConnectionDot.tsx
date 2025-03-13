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
  // Add logging for the specific base-fee-bottom-to-block-rewards path
  if (path === "M 1090 210 L 1090 260") {
    console.log("ConnectionDot for base-fee-bottom-to-block-rewards with:", { animated, animationDuration, path });
  }
  
  // Add logging for the updated block-rewards-to-total-validator-rewards path
  if (path === "M 1090 410 L 1090 450 L 1019.5 450 L 1019.5 550") {
    console.log("ConnectionDot for block-rewards-to-total-validator-rewards with:", { animated, animationDuration, path });
    console.log("Total validator rewards destination:", { x: 1019.5, y: 550 });
  }
  
  // Add specific logging for profitability box components with exact coordinates
  if (path && path.includes("total-validator-rewards")) {
    console.log("Total validator rewards path coordinates:", path);
  }
  
  if (path && path.includes("operational-costs")) {
    console.log("Operational costs path coordinates:", path);
  }
  
  // Log all connections to help debug
  if (path) {
    console.log(`Connection path: ${path}`);
  }
  
  if (animated && path) {
    return (
      <g>
        {/* Main dot with motion animation */}
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
          {/* Enhanced pulsating size effect */}
          <animate
            attributeName="r"
            values="3;6;3"
            dur="0.8s"
            repeatCount="indefinite"
          />
          {/* Enhanced pulsating opacity effect */}
          <animate
            attributeName="opacity"
            values="0.7;1;0.7"
            dur="0.8s"
            repeatCount="indefinite"
          />
        </circle>
        
        {/* Secondary trail dot (slightly smaller and more transparent) */}
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
        
        {/* Tertiary trail dot (even smaller and more transparent) for longer paths */}
        <circle
          r={radius * 0.6}
          fill={color}
          opacity="0.4"
        >
          <animateMotion
            path={path}
            dur={`${animationDuration}s`}
            repeatCount="indefinite"
            rotate="auto"
            keyPoints="0.1;1.1" 
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
