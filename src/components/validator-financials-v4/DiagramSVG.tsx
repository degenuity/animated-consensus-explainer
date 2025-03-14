
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
  
  return (
    <div className={containerClasses}>
      <AnimationStyleProvider />
      
      {/* FUNDAMENTAL SVG STACKING - DOM ORDER MATTERS! */}
      {/* 1. First layer - Background connections */}
      <BackgroundLayer connectionPaths={connectionPaths} />
      
      {/* 2. Second layer - The boxes with content */}
      <BoxLayer ref={svgRef} boxes={boxes} />
      
      {/* 3. CRITICAL: Foreground layer MUST be last in DOM order to appear on top */}
      <ForegroundLayer connectionPaths={connectionPaths} />
    </div>
  );
};

export default DiagramSVG;
