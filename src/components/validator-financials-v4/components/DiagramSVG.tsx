
import React from 'react';
import { useIsMobile } from '@/hooks/use-mobile';
import { BoxComponent, ConnectionLine, ExplanationComponent, Logo } from './svg';
import { viewBoxWidth, viewBoxHeight, boxes } from './svg/data';
import { connectionPaths } from './svg/data/connections';

const DiagramSVG = () => {
  const isMobile = useIsMobile();

  // Separate connections by rendering order
  const backgroundConnections = connectionPaths.filter(conn => conn.renderOrder === 'background');
  const foregroundConnections = connectionPaths.filter(conn => conn.renderOrder === 'foreground');
  
  return (
    <div className="w-full h-full relative">
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
      <svg
        width="100%"
        height="100%"
        viewBox={`0 0 ${viewBoxWidth} ${viewBoxHeight}`}
        preserveAspectRatio="xMidYMid meet"
      >
        {/* Background layer */}
        <g id="background-layer">
          {/* Explanation and Logo */}
          <ExplanationComponent />
          <Logo />
          
          {/* Background Connections */}
          {backgroundConnections.map((connection, index) => (
            <ConnectionLine
              key={`connection-bg-${connection.id}-${index}`}
              path={connection.path}
              color={connection.color}
              animationIndex={connection.animationIndex}
              dotPosition={connection.dotPosition}
              label={connection.label}
              labelPosition={connection.labelPosition}
              animationDirection={connection.animationDirection}
              animateMotion={connection.animateMotion}
              id={connection.id}
            />
          ))}
        </g>
        
        {/* Content Layer - Boxes */}
        <g id="boxes-layer">
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
            />
          ))}
        </g>
        
        {/* Foreground Layer - Lines that need to be on top */}
        <g id="foreground-layer">
          {foregroundConnections.map((connection, index) => (
            <ConnectionLine
              key={`connection-fg-${connection.id}-${index}`}
              path={connection.path}
              color={connection.color}
              animationIndex={connection.animationIndex}
              dotPosition={connection.dotPosition}
              label={connection.label}
              labelPosition={connection.labelPosition}
              animationDirection={connection.animationDirection}
              animateMotion={connection.animateMotion}
              id={connection.id}
            />
          ))}
        </g>
      </svg>
    </div>
  );
};

export default DiagramSVG;
