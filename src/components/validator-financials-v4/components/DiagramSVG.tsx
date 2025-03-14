
import React from 'react';
import AnimationStyleProvider from './svg/AnimationStyleProvider';
import { BackgroundLayer, BoxLayer, ForegroundLayer } from './svg/layers';
import { boxes } from './svg/data/boxes';
import { connectionPaths } from './svg/data/connections';
import { useDiagramDebug } from '../hooks/useDiagramDebug';

const DiagramSVG = () => {
  const svgRef = useDiagramDebug();
  
  // Maximized container class with zero padding for maximum diagram size
  const containerClasses = [
    "w-full h-full relative", 
    "overflow-visible", // Essential to prevent cropping
    "flex items-center justify-center" // Center the diagram in available space
  ].join(" ");
  
  return (
    <div 
      className={containerClasses} 
      style={{ 
        position: 'relative', 
        transform: 'translateZ(0)' // Force stacking context with hardware acceleration
      }}
    >
      <AnimationStyleProvider />
      
      {/* Background Layer - Contains background connections - z-index: 5 */}
      <BackgroundLayer connectionPaths={connectionPaths} />
      
      {/* Box Layer - Contains all boxes - z-index: 10 */}
      <BoxLayer ref={svgRef} boxes={boxes} />
      
      {/* Foreground Layer - Contains foreground connections - z-index: 300 */}
      <ForegroundLayer connectionPaths={connectionPaths} />
    </div>
  );
};

export default DiagramSVG;
