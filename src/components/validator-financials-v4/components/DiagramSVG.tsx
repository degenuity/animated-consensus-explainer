
import React from 'react';
import { useIsMobile } from '@/hooks/use-mobile';
import AnimationStyleProvider from './svg/AnimationStyleProvider';
import { BackgroundLayer, BoxLayer, ForegroundLayer } from './svg/layers';
import { boxes } from './svg/data/boxes';
import { connectionPaths } from './svg/data/connections';
import { useDiagramDebug } from '../hooks/useDiagramDebug';

const DiagramSVG = () => {
  const isMobile = useIsMobile();
  const svgRef = useDiagramDebug();
  
  // Use responsive classes based on device type
  const containerClass = isMobile 
    ? "w-full h-full relative overflow-visible"  // Mobile - ensure overflow visibility
    : "w-full h-full relative"; // Desktop - standard display
  
  return (
    <div className={containerClass}>
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
