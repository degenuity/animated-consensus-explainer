
import React from 'react';
import { viewBoxWidth, viewBoxHeight } from '../data/constants';
import { connectionPaths } from '../data/connections';
import ConnectionLine from '../connection/ConnectionLine';

interface ForegroundLayerProps {
  connectionPaths: typeof connectionPaths;
}

const ForegroundLayer: React.FC<ForegroundLayerProps> = ({ connectionPaths }) => {
  // Filter connections that should be rendered in the foreground
  const foregroundConnections = connectionPaths.filter(conn => conn.renderOrder === 'foreground');
  
  return (
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
  );
};

export default ForegroundLayer;
