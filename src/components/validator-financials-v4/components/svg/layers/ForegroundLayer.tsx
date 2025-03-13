
import React from 'react';
import { zoomedViewBox } from '../data/constants';
import ConnectionLine from '../connection/ConnectionLine';

interface ForegroundLayerProps {
  connectionPaths: any[];
}

const ForegroundLayer: React.FC<ForegroundLayerProps> = ({ connectionPaths }) => {
  // Filter connections that should be rendered in the foreground
  const foregroundConnections = connectionPaths.filter(conn => conn.renderOrder === 'foreground');
  
  return (
    <svg
      width="100%"
      height="100%"
      viewBox={zoomedViewBox}
      preserveAspectRatio="xMidYMid meet"
      className="absolute top-0 left-0"
    >
      {foregroundConnections.map((connection, index) => (
        <ConnectionLine
          key={`connection-fg-${connection.id}-${index}`}
          {...connection}
          animationIndex={connection.animationIndex || index}
          animateMotion={true}
          animationDuration={connection.animationDuration || 1.5}
        />
      ))}
    </svg>
  );
};

export default ForegroundLayer;
