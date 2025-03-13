
import React from 'react';
import { zoomedViewBox, desktopViewBox } from '../data/constants';
import { connectionPaths } from '../data/connections';
import ConnectionLine from '../connection/ConnectionLine';
import { useIsMobile } from '@/hooks/use-mobile';

interface ForegroundLayerProps {
  connectionPaths: typeof connectionPaths;
}

const ForegroundLayer: React.FC<ForegroundLayerProps> = ({ connectionPaths }) => {
  // Filter connections that should be rendered in the foreground
  const foregroundConnections = connectionPaths.filter(conn => conn.renderOrder === 'foreground');
  const isMobile = useIsMobile();
  
  return (
    <svg
      width="100%"
      height="100%"
      viewBox={isMobile ? zoomedViewBox : desktopViewBox}
      preserveAspectRatio="xMidYMid meet"
      className="absolute top-0 left-0 overflow-visible pointer-events-none"
    >
      <g className="pointer-events-auto">
        {foregroundConnections.map((connection, index) => (
          <ConnectionLine
            key={`connection-fg-${connection.id}-${index}`}
            {...connection}
            animationIndex={connection.animationIndex || index}
          />
        ))}
      </g>
    </svg>
  );
};

export default ForegroundLayer;
