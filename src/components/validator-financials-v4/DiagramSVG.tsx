
import React, { useEffect, useRef } from 'react';
import { useIsMobile } from '@/hooks/use-mobile';
import {
  BoxComponent,
  ConnectionLine,
  // ExplanationComponent removed from here
  // Logo completely removed from here
} from './components/svg';
import { viewBoxWidth, viewBoxHeight } from './components/svg/data/constants';
import { boxes } from './components/svg/data/boxes';
import { connectionPaths } from './components/svg/data/connections';
import { useDiagramDebug } from './hooks/useDiagramDebug';

const DiagramSVG = () => {
  const isMobile = useIsMobile();
  const svgRef = useDiagramDebug();
  
  // Separate connections by rendering order
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
        {/* Both ExplanationComponent and Logo completely removed from here */}
        
        {backgroundConnections.map((connection, index) => (
          <ConnectionLine
            key={`connection-bg-${connection.id}-${index}`}
            {...connection}
            animationIndex={connection.animationIndex || index}
            dotPosition={connection.dotPosition}
            animationDirection={connection.animationDirection}
            animateMotion={connection.animateMotion}
            animationDuration={connection.animationDuration}
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
            data-id={box.title}
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
            dotPosition={connection.dotPosition}
            animationDirection={connection.animationDirection}
            animateMotion={connection.animateMotion}
            animationDuration={connection.animationDuration}
          />
        ))}
      </svg>
    </div>
  );
};

export default DiagramSVG;
