
import React from 'react';
import { zoomedViewBox, desktopViewBox } from '../data/constants';
import { ConnectionLine } from '../connection';
import { useIsMobile } from '@/hooks/use-mobile';

interface ForegroundLayerProps {
  connectionPaths: any[];
}

const ForegroundLayer: React.FC<ForegroundLayerProps> = ({ connectionPaths }) => {
  // Filter connections that should be rendered in the foreground
  const foregroundConnections = connectionPaths.filter(conn => conn.renderOrder === 'foreground');
  const isMobile = useIsMobile();
  
  // Ensure the SVG appears on top by setting a high z-index
  return (
    <svg
      width="100%"
      height="100%"
      viewBox={isMobile ? zoomedViewBox : desktopViewBox}
      preserveAspectRatio="xMidYMid meet"
      className="absolute top-0 left-0 w-full h-full overflow-visible pointer-events-none z-30"
      style={{ zIndex: 30 }} // Explicit z-index for browsers that need it
    >
      {foregroundConnections.map((connection, index) => (
        <ConnectionLine
          key={`connection-fg-${connection.id}-${index}`}
          {...connection}
          animationIndex={connection.animationIndex || index}
        />
      ))}
    </svg>
  );
};

export default ForegroundLayer;
