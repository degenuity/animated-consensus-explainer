
import React from 'react';
import { zoomedViewBox } from '../data/constants';
import { connectionPaths } from '../data/connections';
import ConnectionLine from '../connection/ConnectionLine';

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
      viewBox={zoomedViewBox}
      preserveAspectRatio="xMidYMid meet"
      className="absolute top-0 left-0"
    >
      {backgroundConnections.map((connection, index) => (
        <ConnectionLine
          key={`connection-bg-${connection.id}-${index}`}
          {...connection}
          animationIndex={connection.animationIndex || index}
        />
      ))}
    </svg>
  );
};

export default BackgroundLayer;
