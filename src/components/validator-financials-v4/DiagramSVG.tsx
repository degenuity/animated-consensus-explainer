
import React, { useEffect, useRef } from 'react';
import AnimationStyleProvider from './components/svg/AnimationStyleProvider';
import { BackgroundLayer, BoxLayer, ForegroundLayer } from './components/svg/layers';
import { boxes } from './components/svg/data/boxes';
import { connectionPaths } from './components/svg/data/connections';
import { useDiagramDebug } from './hooks/useDiagramDebug';

const DiagramSVG = () => {
  const svgRef = useDiagramDebug();
  const containerRef = useRef<HTMLDivElement>(null);
  
  // Focused safety check for rogue dots
  useEffect(() => {
    console.log("DiagramSVG mounted - checking all connections for origin (0,0) paths");
    
    // Find any suspicious connection that might create a dot at origin
    const suspiciousConnections = connectionPaths.filter(conn => {
      const hasOriginPath = conn.path && (
        conn.path.includes("M 0,0") || 
        conn.path.includes("M 0 0") ||
        conn.path.startsWith("M0,0") ||
        conn.path.startsWith("M 0,")
      );
      
      const hasOriginDot = conn.dotPosition && 
        parseFloat(conn.dotPosition.x) < 50 && 
        parseFloat(conn.dotPosition.y) < 50;
        
      return hasOriginPath || hasOriginDot;
    });
    
    if (suspiciousConnections.length > 0) {
      console.error("FOUND SUSPICIOUS CONNECTIONS:", suspiciousConnections);
    }
    
    // Targeted DOM check for rogue dots
    const checkForRogueDots = () => {
      if (containerRef.current) {
        const circles = containerRef.current.querySelectorAll('circle');
        circles.forEach(circle => {
          const cx = parseFloat(circle.getAttribute('cx') || '9999');
          const cy = parseFloat(circle.getAttribute('cy') || '9999');
          
          // Only inspect circles very close to origin (0,0)
          if (!isNaN(cx) && !isNaN(cy) && cx < 50 && cy < 50) {
            console.error("FOUND ROGUE DOT:", {
              cx, cy,
              fill: circle.getAttribute('fill'),
              parent: circle.parentElement?.tagName
            });
            
            // Remove only the rogue dot, not all dots
            circle.remove();
          }
        });
      }
    };
    
    // Check once after initial render
    setTimeout(checkForRogueDots, 500);
    
    // Create an interval to check for rogue dots periodically
    const intervalId = setInterval(checkForRogueDots, 2000);
    
    return () => {
      clearInterval(intervalId);
    };
  }, []);
  
  // Maximized container class with zero padding for maximum diagram size
  const containerClasses = [
    "w-full h-full relative", 
    "overflow-visible", // Essential to prevent cropping
    "flex items-center justify-center" // Center the diagram in available space
  ].join(" ");
  
  return (
    <div className={containerClasses} ref={containerRef}>
      <AnimationStyleProvider />
      
      {/* Background Layer - Contains all background connections and elements */}
      <BackgroundLayer connectionPaths={connectionPaths} />
      
      {/* Box Layer - Contains all boxes */}
      <BoxLayer ref={svgRef} boxes={boxes} />
      
      {/* Foreground Layer - Contains only the connections that need to be on top */}
      <ForegroundLayer connectionPaths={connectionPaths} />
      
      {/* Invisible shield just over the origin area to block any interactions */}
      <div 
        className="absolute top-0 left-0 w-[50px] h-[50px] z-50"
        style={{ pointerEvents: 'none' }}
      />
    </div>
  );
};

export default DiagramSVG;
