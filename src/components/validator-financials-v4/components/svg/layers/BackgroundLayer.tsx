
import React from 'react';
import { zoomedViewBox } from '../data/constants';
import ConnectionLine from '../connection/ConnectionLine';

interface BackgroundLayerProps {
  connectionPaths: any[];
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
          key={`connection-bg-${connection.id || index}`}
          path={connection.path}
          color={connection.color}
          animationIndex={connection.animationIndex || index}
          animateMotion={true}
          id={connection.id}
          targetBoxId={connection.targetBoxId}
          animationDuration={connection.animationDuration || 1.5}
        />
      ))}
    </svg>
  );
};

export default BackgroundLayer;
