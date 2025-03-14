
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
    <div className={containerClasses}>
      <AnimationStyleProvider />
      
      {/* Background Layer - Contains all background connections and elements - z-index: 10 */}
      <BackgroundLayer connectionPaths={connectionPaths} />
      
      {/* Box Layer - Contains all boxes - z-index: 20 */}
      <BoxLayer ref={svgRef} boxes={boxes} />
      
      {/* Foreground Layer - Contains only the connections that need to be on top - z-index: 30 */}
      <ForegroundLayer connectionPaths={connectionPaths} />
    </div>
  );
};

export default DiagramSVG;
