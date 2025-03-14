
import React from 'react';
import AnimationStyleProvider from './components/svg/AnimationStyleProvider';
import { BackgroundLayer, BoxLayer, ForegroundLayer } from './components/svg/layers';
import { boxes } from './components/svg/data/boxes';
import { connectionPaths } from './components/svg/data/connections';
import { useDiagramDebug } from './hooks/useDiagramDebug';

const DiagramSVG = () => {
  const svgRef = useDiagramDebug();
  
  // Debug the connections starting points
  console.log('Connection paths setup:', connectionPaths.map(conn => ({
    id: conn.id,
    startPoint: conn.path.split(' ')[1] + ',' + conn.path.split(' ')[2],
    endPoint: conn.path.split(' ')[conn.path.split(' ').length - 2] + ',' + conn.path.split(' ')[conn.path.split(' ').length - 1],
    renderOrder: conn.renderOrder,
    fullPath: conn.path
  })));
  
  // Optimized container class for maximum visibility
  const containerClasses = [
    "w-full h-full relative", 
    "overflow-visible", // Essential to prevent cropping
  ].join(" ");
  
  return (
    <div className={containerClasses}>
      <AnimationStyleProvider />
      
      {/* CRITICAL DOM ORDER FOR PROPER LAYERING:
          1. Background connections first (lowest layer)
          2. Boxes in the middle layer  
          3. Foreground connections last (highest layer) */}
      
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
