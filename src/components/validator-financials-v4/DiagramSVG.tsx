
import React, { useEffect, useRef } from 'react';
import AnimationStyleProvider from './components/svg/AnimationStyleProvider';
import { BackgroundLayer, BoxLayer, ForegroundLayer } from './components/svg/layers';
import { boxes } from './components/svg/data/boxes';
import { connectionPaths } from './components/svg/data/connections';
import { useDiagramDebug } from './hooks/useDiagramDebug';

const DiagramSVG = () => {
  const svgRef = useDiagramDebug();
  const containerRef = useRef<HTMLDivElement>(null);
  
  // Extreme safety measure: Scan the entire DOM for rogue dots after rendering
  useEffect(() => {
    console.log("DiagramSVG mounted - extreme safety measures engaged");
    
    // First debug all connection paths
    connectionPaths.forEach(conn => {
      if (conn.dotPosition) {
        const x = parseFloat(conn.dotPosition.x);
        const y = parseFloat(conn.dotPosition.y);
        
        if (x < 200 && y < 200) {
          console.error("FOUND SUSPICIOUS CONNECTION DOT POSITION:", {
            id: conn.id,
            position: conn.dotPosition,
            path: conn.path
          });
        }
      }
    });
    
    // Create an interval to continuously check for and remove any rogue dots
    const cleanupInterval = setInterval(() => {
      if (containerRef.current) {
        // Find any SVG elements within our container
        const svgElements = containerRef.current.querySelectorAll('svg');
        svgElements.forEach(svg => {
          // Check for circles in each SVG
          const circles = svg.querySelectorAll('circle');
          
          circles.forEach(circle => {
            const cx = parseFloat(circle.getAttribute('cx') || '1000');
            const cy = parseFloat(circle.getAttribute('cy') || '1000');
            
            if (cx < 200 && cy < 200) {
              console.error("FOUND AND REMOVING ROGUE DOT IN DOM:", {
                cx, cy,
                fill: circle.getAttribute('fill')
              });
              
              // Remove the element
              circle.remove();
            }
            
            // Check for circles with animateMotion that might move to the corner
            const animateMotion = circle.querySelector('animateMotion');
            if (animateMotion) {
              const path = animateMotion.getAttribute('path');
              if (path && (path.includes("M 0") || path.includes("L 0,0"))) {
                console.error("FOUND AND REMOVING CIRCLE WITH DANGEROUS ANIMATION PATH:", {
                  path
                });
                circle.remove();
              }
            }
          });
        });
      }
    }, 500); // Check every 500ms
    
    return () => {
      clearInterval(cleanupInterval);
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
      
      {/* Invisible overlay to detect and block any clicks in the danger zone */}
      <div 
        className="absolute top-0 left-0 w-[200px] h-[200px] z-50 opacity-0"
        onClick={(e) => {
          console.log("Clicked in danger zone", e);
          e.stopPropagation();
        }}
      />
    </div>
  );
};

export default DiagramSVG;
