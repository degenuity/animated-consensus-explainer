
import React from 'react';
import AnimationStyleProvider from './components/svg/AnimationStyleProvider';
import { BackgroundLayer, BoxLayer, ForegroundLayer } from './components/svg/layers';
import { boxes } from './components/svg/data/boxes';
import { connectionPaths } from './components/svg/data/connections';
import { useDiagramDebug } from './hooks/useDiagramDebug';

const DiagramSVG = () => {
  const svgRef = useDiagramDebug();
  
  // Enhanced debugging to find the rogue dot
  React.useEffect(() => {
    console.log("DiagramSVG mounted - searching for rogue dots");
    
    // Debug all connection paths to find any that might position dots in the corner
    connectionPaths.forEach(conn => {
      if (conn.dotPosition) {
        const x = parseFloat(conn.dotPosition.x);
        const y = parseFloat(conn.dotPosition.y);
        
        if (x < 100 && y < 100) {
          console.error("FOUND SUSPICIOUS CONNECTION DOT POSITION:", {
            id: conn.id,
            position: conn.dotPosition,
            path: conn.path
          });
        }
      }
      
      // Check if any paths have points near the origin
      if (conn.path && (conn.path.includes("M 0") || conn.path.includes("L 0,0"))) {
        console.error("FOUND PATH WITH ORIGIN POINT:", {
          id: conn.id,
          path: conn.path
        });
      }
    });
    
    // Delayed check for any DOM elements that might be rogue dots
    setTimeout(() => {
      if (document.querySelector('svg')) {
        const circles = document.querySelectorAll('circle');
        circles.forEach(circle => {
          const cx = parseFloat(circle.getAttribute('cx') || '1000');
          const cy = parseFloat(circle.getAttribute('cy') || '1000');
          
          if (cx < 100 && cy < 100) {
            console.error("FOUND ROGUE DOT IN DOM:", {
              cx, cy,
              fill: circle.getAttribute('fill'),
              parent: circle.parentElement
            });
          }
        });
      }
    }, 1000);
  }, []);
  
  // Optimized container class for maximum visibility
  const containerClasses = [
    "w-full h-full relative", 
    "overflow-visible", // Essential to prevent cropping
    "flex items-center justify-center" // Center the diagram in available space
  ].join(" ");
  
  return (
    <div className={containerClasses}>
      <AnimationStyleProvider />
      
      {/* Background Layer - Contains all background connections and elements */}
      <BackgroundLayer connectionPaths={connectionPaths} />
      
      {/* Box Layer - Contains all boxes */}
      <BoxLayer ref={svgRef} boxes={boxes} />
      
      {/* Foreground Layer - Contains only the connections that need to be on top */}
      <ForegroundLayer connectionPaths={connectionPaths} />
    </div>
  );
};

export default DiagramSVG;
