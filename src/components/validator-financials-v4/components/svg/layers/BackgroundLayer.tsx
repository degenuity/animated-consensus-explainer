
import React from 'react';
import { zoomedViewBox, desktopViewBox } from '../data/constants';
import { ConnectionLine } from '../connection';
import { useIsMobile } from '@/hooks/use-mobile';

interface BackgroundLayerProps {
  connectionPaths: any[];
}

const BackgroundLayer: React.FC<BackgroundLayerProps> = ({ connectionPaths }) => {
  // Filter connections that should be rendered in the background
  const backgroundConnections = connectionPaths.filter(conn => conn.renderOrder === 'background');
  const isMobile = useIsMobile();
  
  // Add a console log to verify which connections are being rendered in the background
  console.info("Background connections:", backgroundConnections.map(c => c.id));
  
  return (
    <svg
      width="100%"
      height="100%"
      viewBox={isMobile ? zoomedViewBox : desktopViewBox}
      preserveAspectRatio="xMidYMid meet"
      className="absolute top-0 left-0 w-full h-full overflow-visible"
      style={{ 
        pointerEvents: 'none',
        zIndex: 10, // Lower z-index than boxes (20) and foreground (100)
        isolation: 'isolate' // Creates a new stacking context
      }}
    >
      <g className="pointer-events-auto">
        {backgroundConnections.map((connection, index) => (
          <ConnectionLine
            key={`connection-bg-${connection.id}-${index}`}
            {...connection}
            animationIndex={connection.animationIndex || index}
          />
        ))}
      </g>
    </svg>
  );
};

export default BackgroundLayer;
