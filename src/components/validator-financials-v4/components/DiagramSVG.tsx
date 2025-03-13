
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
  
  // Add responsive padding based on screen size
  const containerPadding = isMobile ? "px-0" : "px-0";
  
  return (
    <div className={`w-full h-full relative ${containerPadding}`}>
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
