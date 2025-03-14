
import React from 'react';
import AnimationStyleProvider from './components/svg/AnimationStyleProvider';
import { BackgroundLayer, BoxLayer, ForegroundLayer } from './components/svg/layers';
import { boxes } from './components/svg/data/boxes';
import { connectionPaths } from './components/svg/data/connections';
import { useDiagramDebug } from './hooks/useDiagramDebug';

const DiagramSVG = () => {
  const svgRef = useDiagramDebug();
  
  // Optimized container class for maximum visibility
  const containerClasses = [
    "w-full h-full relative", 
    "overflow-visible", // Essential to prevent cropping
    "px-1 sm:px-2" // Minimal padding to maximize diagram size
  ].join(" ");
  
  return (
    <div 
      className={containerClasses}
    >
      <AnimationStyleProvider />
      
      {/* The order of these layers determines their stacking order in SVG */}
      {/* Each layer must be a direct child of the container div */}
      
      {/* 1. Background Layer - Rendered FIRST (bottom layer) */}
      <BackgroundLayer connectionPaths={connectionPaths} />
      
      {/* 2. Box Layer - Rendered SECOND (middle layer) */}
      <BoxLayer ref={svgRef} boxes={boxes} />
      
      {/* 3. Foreground Layer - Rendered LAST (top layer)
          This ensures foreground connections appear on top of boxes */}
      <ForegroundLayer connectionPaths={connectionPaths} />
    </div>
  );
};

export default DiagramSVG;
