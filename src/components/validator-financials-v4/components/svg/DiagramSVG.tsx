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
  
  // Identify connections that need to be on top
  const topConnections = connectionPaths.filter(conn => 
    conn.id === 'delegated-stake-to-commission' || 
    conn.id === 'own-stake-to-staking-rewards'
  );
  
  // Other connections
  const otherConnections = connectionPaths.filter(conn => 
    conn.id !== 'delegated-stake-to-commission' && 
    conn.id !== 'own-stake-to-staking-rewards'
  );
  
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
      
      {/* Single SVG with all elements properly ordered */}
      <svg
        width="100%"
        height="100%"
        viewBox={`0 0 ${viewBoxWidth} ${viewBoxHeight}`}
        preserveAspectRatio="xMidYMid meet"
      >
        {/* Define connections first */}
        <defs>
          {connectionPaths.map((connection, index) => (
            <ConnectionLine
              key={`connection-def-${index}`}
              path={connection.path}
              color={connection.color}
              animationIndex={connection.animationIndex}
              dotPosition={connection.dotPosition}
              label={connection.label}
              labelPosition={connection.labelPosition}
              animationDirection={connection.animationDirection}
              animateMotion={connection.animateMotion}
              id={connection.id}
              renderAsDefinition={true}
            />
          ))}
        </defs>
        
        {/* Layer 1: Background elements and explanations */}
        <ExplanationComponent />
        <Logo />
        
        {/* Layer 2: Regular connections */}
        {otherConnections.map((connection, index) => (
          <use 
            key={`connection-use-${index}`} 
            href={`#connection-${connection.id}`}
            xlinkHref={`#connection-${connection.id}`} // For older browsers
          />
        ))}
        
        {/* Layer 3: Boxes */}
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
        
        {/* Layer 4: Top connections */}
        {topConnections.map((connection, index) => (
          <use 
            key={`connection-top-${index}`} 
            href={`#connection-${connection.id}`}
            xlinkHref={`#connection-${connection.id}`} // For older browsers
          />
        ))}
      </svg>
    </div>
  );
};

export default DiagramSVG;
