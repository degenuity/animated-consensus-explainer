
import React, { useEffect, useRef } from 'react';
import { useIsMobile } from '@/hooks/use-mobile';
import {
  BoxComponent,
  ConnectionLine,
  ExplanationComponent,
  Logo
} from './components/svg';
import { viewBoxWidth, viewBoxHeight } from './components/svg/data/constants';
import { boxes } from './components/svg/data/boxes';
import { connectionPaths } from './components/svg/data/connections';

const DiagramSVG = () => {
  const isMobile = useIsMobile();
  const svgRef = useRef<SVGSVGElement>(null);

  // Use effect to log the exact coordinates of the stake weight box for debugging
  useEffect(() => {
    if (svgRef.current) {
      const stakeWeightElement = svgRef.current.querySelector('[data-id="stake-weight"]');
      if (stakeWeightElement) {
        const rect = stakeWeightElement.getBoundingClientRect();
        const svgRect = svgRef.current.getBoundingClientRect();
        
        // Calculate relative position within SVG
        const relativeX = rect.left - svgRect.left;
        const relativeY = rect.top - svgRect.top;
        
        // Calculate the SVG coordinate based on viewBox and client rect
        const svgWidth = svgRect.width;
        const svgHeight = svgRect.height;
        
        const svgX = (relativeX / svgWidth) * viewBoxWidth;
        const svgY = (relativeY / svgHeight) * viewBoxHeight;
        
        console.log('Stake weight box exact coordinates:', {
          id: 'stake-weight',
          svgViewBox: { width: viewBoxWidth, height: viewBoxHeight },
          clientRect: {
            top: rect.top,
            left: rect.left,
            width: rect.width,
            height: rect.height
          },
          svgCoordinates: {
            x: svgX,
            y: svgY,
            topCenter: {
              x: svgX + (rect.width / svgWidth) * viewBoxWidth / 2,
              y: svgY
            }
          }
        });
      }
    }
  }, []);

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
      
      {/* Create separate SVGs for each layer */}
      {/* Background SVG - Contains all background connections and elements */}
      <svg
        width="100%"
        height="100%"
        viewBox={`0 0 ${viewBoxWidth} ${viewBoxHeight}`}
        preserveAspectRatio="xMidYMid meet"
        className="absolute top-0 left-0"
      >
        <ExplanationComponent />
        <Logo />
        
        {backgroundConnections.map((connection, index) => (
          <ConnectionLine
            key={`connection-bg-${connection.id}-${index}`}
            id={connection.id}
            path={connection.path}
            color={connection.color}
            animationIndex={connection.animationIndex || index}
            dotPosition={connection.dotPosition}
            label={connection.label}
            labelPosition={connection.labelPosition}
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
            x={box.x}
            y={box.y}
            width={box.width}
            height={box.height}
            title={box.title}
            subtitle={box.subtitle}
            icon={box.icon}
            color={box.color}
            animationIndex={box.animationIndex}
            subitems={box.subitems}
            simpleStyle={box.simpleStyle}
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
            id={connection.id}
            path={connection.path}
            color={connection.color}
            animationIndex={connection.animationIndex || index}
            dotPosition={connection.dotPosition}
            label={connection.label}
            labelPosition={connection.labelPosition}
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
