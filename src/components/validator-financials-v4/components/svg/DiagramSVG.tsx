
import React from 'react';
import { useIsMobile } from '@/hooks/use-mobile';
import {
  BoxComponent,
  ConnectionLine,
} from '.';
import ExplanationComponent from './ExplanationComponent';
import Logo from './Logo';
import { viewBoxWidth, viewBoxHeight } from './data/constants';
import { boxes } from './data/boxes';
import { connectionPaths } from './data/connections';

const DiagramSVG = () => {
  const isMobile = useIsMobile();
  
  // Sort connections by zIndex to ensure proper layering
  const sortedConnections = [...connectionPaths].sort((a, b) => {
    const zIndexA = a.zIndex || 0;
    const zIndexB = b.zIndex || 0;
    return zIndexA - zIndexB;
  });
  
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
        {/* Draw first all background elements */}
        {sortedConnections.filter(conn => !conn.zIndex || conn.zIndex < 10).map((connection, index) => (
          <ConnectionLine
            key={`connection-background-${index}`}
            path={connection.path}
            color={connection.color}
            animationIndex={connection.animationIndex}
            dotPosition={connection.dotPosition}
            label={connection.label}
            labelPosition={connection.labelPosition}
            animationDirection={connection.animationDirection}
            animateMotion={connection.animateMotion}
            zIndex={connection.zIndex}
          />
        ))}
        
        {/* Draw all boxes */}
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
        
        {/* Draw foreground connections (with higher z-index) above everything else */}
        {sortedConnections.filter(conn => conn.zIndex && conn.zIndex >= 10).map((connection, index) => (
          <ConnectionLine
            key={`connection-foreground-${index}`}
            path={connection.path}
            color={connection.color}
            animationIndex={connection.animationIndex}
            dotPosition={connection.dotPosition}
            label={connection.label}
            labelPosition={connection.labelPosition}
            animationDirection={connection.animationDirection}
            animateMotion={connection.animateMotion}
            zIndex={connection.zIndex}
          />
        ))}
        
        {/* Explanation Text */}
        <ExplanationComponent />
        
        {/* X1 Logo */}
        <Logo />
      </svg>
    </div>
  );
};

export default DiagramSVG;
