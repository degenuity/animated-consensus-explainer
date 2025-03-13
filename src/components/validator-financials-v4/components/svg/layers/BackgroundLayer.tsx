
import React from 'react';
import { viewBoxWidth, viewBoxHeight } from '../data/constants';
import { connectionPaths } from '../data/connections';
import ConnectionLine from '../connection/ConnectionLine';

interface BackgroundLayerProps {
  connectionPaths: typeof connectionPaths;
}

const BackgroundLayer: React.FC<BackgroundLayerProps> = ({ connectionPaths }) => {
  // Filter connections that should be rendered in the background
  const backgroundConnections = connectionPaths.filter(conn => {
    // Only include connections with renderOrder 'background'
    // AND ensure they don't start at the top-left corner (which would be the green dot)
    return conn.renderOrder === 'background' && 
           // Filter out any paths that might start at the top left corner
           !(conn.path && (conn.path.startsWith('M 0') || conn.path.startsWith('M0,0')));
  });
  
  return (
    <svg
      width="100%"
      height="100%"
      viewBox={`0 0 ${viewBoxWidth} ${viewBoxHeight}`}
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
