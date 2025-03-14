
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
  
  return (
    <svg
      width="100%"
      height="100%"
      viewBox={isMobile ? zoomedViewBox : desktopViewBox}
      preserveAspectRatio="xMidYMid meet"
      className="absolute top-0 left-0 w-full h-full overflow-visible pointer-events-none"
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
