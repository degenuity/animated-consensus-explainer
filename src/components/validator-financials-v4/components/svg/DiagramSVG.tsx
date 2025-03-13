
import React, { useEffect, useRef } from 'react';
import { useIsMobile } from '@/hooks/use-mobile';
import {
  BoxComponent,
  ConnectionLine,
} from '.';

import { viewBoxWidth, viewBoxHeight } from './data/constants';
import { boxes } from './data/boxes';
import { connectionPaths } from './data/connections';

const DiagramSVG = () => {
  const isMobile = useIsMobile();
  const svgRef = useRef<SVGSVGElement>(null);
  
  // Enhanced useEffect for debugging all box positions and monitoring collision events
  useEffect(() => {
    if (svgRef.current) {
      console.log("DiagramSVG mounted - debugging enabled");
      
      // Log SVG dimensions for debugging
      const svgRect = svgRef.current.getBoundingClientRect();
      console.log("SVG dimensions:", {
        width: svgRect.width,
        height: svgRect.height,
        viewBox: `0 0 ${viewBoxWidth} ${viewBoxHeight}`
      });
      
      // Add global listener for all collision events to debug
      const handleAnyCollision = (event: CustomEvent) => {
        console.log("🎯 Global collision detected:", event.detail);
      };
      
      window.addEventListener('dotCollision', handleAnyCollision as EventListener);
      
      return () => {
        window.removeEventListener('dotCollision', handleAnyCollision as EventListener);
      };
    }
  }, []);
  
  // Identify connections that need to be on top
  const backgroundConnections = connectionPaths.filter(conn => conn.renderOrder === 'background');
  const foregroundConnections = connectionPaths.filter(conn => conn.renderOrder === 'foreground');
  
  return (
    <div className="w-full h-full relative px-6">
      <style>
        {`
          @keyframes moveDotRight {
            0% { transform: translateX(-20px); }
            100% { transform: translateX(20px); }
          }
          @keyframes moveDotLeft {
            0% { transform: translateX(20px); }
            100% { transform: translateX(-20px); }
          }
          @keyframes moveDotUp {
            0% { transform: translateY(20px); }
            100% { transform: translateY(-20px); }
          }
          @keyframes moveDotDown {
            0% { transform: translateY(-20px); }
            100% { transform: translateY(20px); }
          }
          
          /* Add pulse animation for debug purposes */
          @keyframes pulse-highlight {
            0%, 100% { stroke-width: 1.5; filter: none; }
            50% { stroke-width: 3; filter: drop-shadow(0 0 8px rgba(255, 255, 255, 0.8)); }
          }
        `}
      </style>
      
      {/* Background SVG - Contains all background connections and elements */}
      <svg
        width="100%"
        height="100%"
        viewBox={`0 0 ${viewBoxWidth} ${viewBoxHeight}`}
        preserveAspectRatio="xMidYMid meet"
        className="absolute top-0 left-0"
      >
        {backgroundConnections.map((connection, index) => (
          <ConnectionLine
            key={`connection-bg-${connection.id}-${index}`}
            {...connection}
            animationIndex={connection.animationIndex || index}
            animateMotion={connection.animateMotion !== false} // Ensure true by default
            animationDuration={connection.animationDuration || 1.5}
          />
        ))}
      </svg>
      
      {/* Box Layer SVG - Contains all boxes */}
      <svg
        ref={svgRef}
        width="100%"
        height="100%"
        viewBox={`0 0 ${viewBoxWidth} ${viewBoxHeight}`}
        preserveAspectRatio="xMidYMid meet"
        className="absolute top-0 left-0"
      >
        {boxes.map((box, index) => (
          <BoxComponent
            key={`box-${index}`}
            {...box}
            data-id={box.title.replace(/\s+/g, '-')}
            animationIndex={index}
          />
        ))}
      </svg>
      
      {/* Foreground SVG - Contains only the connections that need to be on top */}
      <svg
        width="100%"
        height="100%"
        viewBox={`0 0 ${viewBoxWidth} ${viewBoxHeight}`}
        preserveAspectRatio="xMidYMid meet"
        className="absolute top-0 left-0"
      >
        {foregroundConnections.map((connection, index) => (
          <ConnectionLine
            key={`connection-fg-${connection.id}-${index}`}
            {...connection}
            animationIndex={connection.animationIndex || index}
            animateMotion={connection.animateMotion !== false} // Ensure true by default
            animationDuration={connection.animationDuration || 1.5}
          />
        ))}
      </svg>
    </div>
  );
};

export default DiagramSVG;
