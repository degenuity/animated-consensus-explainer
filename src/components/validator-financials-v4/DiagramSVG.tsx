
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
  ].join(" ");
  
  // IMPORTANT: In SVG, z-index has no effect - rendering order is determined by DOM order
  // The last element in the DOM is rendered on top
  return (
    <div className={containerClasses}>
      <AnimationStyleProvider />
      
      {/* 1. BackgroundLayer - Rendered first (bottom-most in SVG stacking context) */}
      <BackgroundLayer connectionPaths={connectionPaths} />
      
      {/* 2. BoxLayer - Rendered second (middle layer) */}
      <BoxLayer ref={svgRef} boxes={boxes} />
      
      {/* 3. ForegroundLayer - Rendered LAST (top-most layer)
          This ensures foreground connections appear on top of all other elements */}
      <ForegroundLayer connectionPaths={connectionPaths} />
    </div>
  );
};

export default DiagramSVG;
