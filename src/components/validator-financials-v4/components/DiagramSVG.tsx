
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
  
  return (
    <div className="w-full h-full relative px-6">
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
