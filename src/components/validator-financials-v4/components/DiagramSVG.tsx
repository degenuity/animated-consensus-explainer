
import React from 'react';
import { useIsMobile } from '@/hooks/use-mobile';
import {
  BoxComponent,
  ConnectionLine,
  ExplanationComponent,
  Logo,
  viewBoxWidth,
  viewBoxHeight,
  boxes,
  connectionPaths
} from './svg';

const DiagramSVG = () => {
  const isMobile = useIsMobile();
  
  return (
    <div className="w-full h-full relative">
      <svg
        width="100%"
        height="100%"
        viewBox={`0 0 ${viewBoxWidth} ${viewBoxHeight}`}
        preserveAspectRatio="xMidYMid meet"
      >
        {/* Draw all connection lines */}
        {connectionPaths.map((connection, index) => (
          <ConnectionLine
            key={`connection-${index}`}
            path={connection.path}
            color={connection.color}
            animationIndex={connection.animationIndex}
            dotPosition={connection.dotPosition}
            label={connection.label}
            labelPosition={connection.labelPosition}
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
        
        {/* Explanation Text */}
        <ExplanationComponent />
        
        {/* X1 Logo */}
        <Logo />
      </svg>
    </div>
  );
};

export default DiagramSVG;
