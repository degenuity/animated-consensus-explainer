
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
        {/* Background layers and explanation */}
        <ExplanationComponent />
        <Logo />
        
        {/* Render the diagram in three distinct layers */}
        
        {/* Layer 1: First render all background connections (lines 1, 4, 5, 6, 7, 8) */}
        {connectionPaths
          .filter(conn => conn.id !== 'delegated-stake-to-commission' && conn.id !== 'own-stake-to-staking-rewards')
          .map((connection, index) => (
            <ConnectionLine
              key={`connection-bg-${index}`}
              path={connection.path}
              color={connection.color}
              animationIndex={connection.animationIndex}
              dotPosition={connection.dotPosition}
              label={connection.label}
              labelPosition={connection.labelPosition}
              animationDirection={connection.animationDirection}
              animateMotion={connection.animateMotion}
            />
          ))}
        
        {/* Layer 2: Then render all boxes */}
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
        
        {/* Layer 3: Finally render the problematic connections on top of everything */}
        {connectionPaths
          .filter(conn => conn.id === 'delegated-stake-to-commission' || conn.id === 'own-stake-to-staking-rewards')
          .map((connection, index) => (
            <ConnectionLine
              key={`connection-fg-${index}`}
              path={connection.path}
              color={connection.color}
              animationIndex={connection.animationIndex}
              dotPosition={connection.dotPosition}
              label={connection.label}
              labelPosition={connection.labelPosition}
              animationDirection={connection.animationDirection}
              animateMotion={connection.animateMotion}
            />
          ))}
      </svg>
    </div>
  );
};

export default DiagramSVG;
