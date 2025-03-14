
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
  
  // Add a console log to verify which connections are being rendered in the foreground
  console.info("Foreground connections:", foregroundConnections.map(c => c.id));
  
  return (
    <svg
      width="100%"
      height="100%"
      viewBox={isMobile ? zoomedViewBox : desktopViewBox}
      preserveAspectRatio="xMidYMid meet"
      className="absolute top-0 left-0 w-full h-full overflow-visible pointer-events-none"
      style={{ 
        zIndex: 300, // Much higher z-index than boxes (10)
        position: 'relative', // Ensure it creates a stacking context
      }}
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
