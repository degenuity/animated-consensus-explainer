
import React from 'react';
import { viewBoxWidth, viewBoxHeight } from '../data/constants';
import { connectionPaths } from '../data/connections';
import ConnectionLine from '../connection/ConnectionLine';

interface ForegroundLayerProps {
  connectionPaths: typeof connectionPaths;
}

const ForegroundLayer: React.FC<ForegroundLayerProps> = ({ connectionPaths }) => {
  // Filter connections that should be rendered in the foreground
  // AND apply the same strict filtering to remove any dots near top-left
  const foregroundConnections = connectionPaths.filter(conn => {
    // First, only include connections with renderOrder 'foreground'
    if (conn.renderOrder !== 'foreground') return false;
    
    // Second, ensure they don't have any paths starting at or near the top-left corner
    if (conn.path) {
      // Check for any paths starting at or near origin (top-left)
      if (conn.path.startsWith('M 0') || 
          conn.path.startsWith('M0') || 
          conn.path.startsWith('M 0,0') || 
          conn.path.startsWith('M0,0') ||
          conn.path.startsWith('M 0 0')) {
        return false;
      }
      
      // Check for any path segments that might position dots near the origin
      const pathSegments = conn.path.split(/[ML]\s*/).filter(Boolean);
      for (const segment of pathSegments) {
        const coords = segment.trim().split(/[\s,]+/).map(Number);
        // If any coordinates are near the origin/top-left corner
        if (coords.length >= 2 && coords[0] < 100 && coords[1] < 100) {
          return false;
        }
      }
    }
    
    // Third, ensure no dot position is in the top-left corner
    if (conn.dotPosition) {
      const x = parseFloat(conn.dotPosition.x);
      const y = parseFloat(conn.dotPosition.y);
      if ((x < 100 && y < 100) || isNaN(x) || isNaN(y)) {
        return false;
      }
    }
    
    return true;
  });
  
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
          {...connection}
          animationIndex={connection.animationIndex || index}
        />
      ))}
    </svg>
  );
};

export default ForegroundLayer;
