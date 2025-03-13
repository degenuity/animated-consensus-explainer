
import React from 'react';
import { useIsMobile } from '@/hooks/use-mobile';
import {
  BoxComponent,
  ConnectionLine,
} from './components/svg';
import { desktopViewBox, zoomedViewBox } from './components/svg/data/constants';
import { boxes } from './components/svg/data/boxes';
import { connectionPaths } from './components/svg/data/connections';
import { useDiagramDebug } from './hooks/useDiagramDebug';

const DiagramSVG = () => {
  const isMobile = useIsMobile();
  const svgRef = useDiagramDebug();
  
  // Separate connections by rendering order
  const backgroundConnections = connectionPaths.filter(conn => conn.renderOrder === 'background');
  const foregroundConnections = connectionPaths.filter(conn => conn.renderOrder === 'foreground');
  
  // Using scaled padding for different screen sizes
  // This prevents cropping at all viewport sizes
  const containerClass = "w-full h-full relative overflow-visible px-2 sm:px-4 md:px-6 lg:px-8";
  
  return (
    <div className={containerClass}>
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
        viewBox={isMobile ? zoomedViewBox : desktopViewBox}
        preserveAspectRatio="xMidYMid meet"
        className="absolute top-0 left-0"
      >
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
        viewBox={isMobile ? zoomedViewBox : desktopViewBox}
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
        viewBox={isMobile ? zoomedViewBox : desktopViewBox}
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
