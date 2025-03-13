
import React from 'react';
import { viewBoxWidth, viewBoxHeight } from '../data/constants';
import { connectionPaths } from '../data/connections';
import ConnectionLine from '../connection/ConnectionLine';
import ExplanationComponent from '../ExplanationComponent';
import Logo from '../Logo';

interface BackgroundLayerProps {
  connectionPaths: typeof connectionPaths;
}

const BackgroundLayer: React.FC<BackgroundLayerProps> = ({ connectionPaths }) => {
  // Filter connections that should be rendered in the background
  const backgroundConnections = connectionPaths.filter(conn => conn.renderOrder === 'background');
  
  return (
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
  );
};

export default BackgroundLayer;
