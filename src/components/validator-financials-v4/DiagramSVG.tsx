
import React, { useEffect, useRef } from 'react';
import AnimationStyleProvider from './components/svg/AnimationStyleProvider';
import { BackgroundLayer, BoxLayer, ForegroundLayer } from './components/svg/layers';
import { boxes } from './components/svg/data/boxes';
import { connectionPaths } from './components/svg/data/connections';
import { useDiagramDebug } from './hooks/useDiagramDebug';

const DiagramSVG = () => {
  const svgRef = useDiagramDebug();
  const containerRef = useRef<HTMLDivElement>(null);
  
  // Focused safety check just for rogue dots at exact origin
  useEffect(() => {
    console.log("DiagramSVG mounted - checking for rogue dots at exact origin");
    
    // Find any suspicious connection that might create a dot at exact origin
    const suspiciousConnections = connectionPaths.filter(conn => {
      const hasOriginPath = conn.path && (
        conn.path.match(/^M\s*0\s*,\s*0\s+/)
      );
      
      const hasOriginDot = conn.dotPosition && 
        conn.dotPosition.x === "0" && 
        conn.dotPosition.y === "0";
        
      return hasOriginPath || hasOriginDot;
    });
    
    if (suspiciousConnections.length > 0) {
      console.error("FOUND SUSPICIOUS CONNECTIONS WITH EXACT ORIGIN PATHS:", suspiciousConnections);
    }
    
    // Targeted DOM check for rogue dots exactly at 0,0
    const checkForRogueDots = () => {
      if (containerRef.current) {
        const circles = containerRef.current.querySelectorAll('circle');
        circles.forEach(circle => {
          const cx = parseFloat(circle.getAttribute('cx') || '9999');
          const cy = parseFloat(circle.getAttribute('cy') || '9999');
          
          // Only remove circles exactly at 0,0 (with small tolerance)
          if (!isNaN(cx) && !isNaN(cy) && cx < 1 && cy < 1) {
            console.error("FOUND ROGUE DOT AT EXACT ORIGIN:", {
              cx, cy,
              fill: circle.getAttribute('fill'),
              parent: circle.parentElement?.tagName
            });
            
            // Remove only the exact origin dot
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
      
      {/* Invisible shield just to block any interactions at the exact origin */}
      <div 
        className="absolute top-0 left-0 w-[2px] h-[2px] z-50 pointer-events-none"
        style={{ 
          backgroundColor: 'transparent',
          position: 'absolute', 
          top: 0, 
          left: 0
        }}
      />
    </div>
  );
};

export default DiagramSVG;
