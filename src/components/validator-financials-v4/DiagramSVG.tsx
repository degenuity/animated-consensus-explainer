
import React, { useRef } from 'react';
import AnimationStyleProvider from './components/svg/AnimationStyleProvider';
import { BackgroundLayer, BoxLayer, ForegroundLayer } from './components/svg/layers';
import { boxes } from './components/svg/data/boxes';
import { connectionPaths } from './components/svg/data/connections';
import { useDiagramDebug } from './hooks/useDiagramDebug';

const DiagramSVG = () => {
  const svgRef = useDiagramDebug();
  const containerRef = useRef<HTMLDivElement>(null);
  
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
    </div>
  );
};

export default DiagramSVG;
