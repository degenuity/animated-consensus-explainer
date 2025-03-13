
import React, { useRef } from 'react';
import { useIsMobile } from '@/hooks/use-mobile';
import { BoxComponent, ConnectionLine } from './svg';
import { viewBoxWidth, viewBoxHeight } from './svg/data/constants';
import { boxes } from './svg/data/boxes';
import { connectionPaths } from './svg/data/connections';
import { BackgroundLayer, BoxLayer, ForegroundLayer } from './svg/layers';
import AnimationStyleProvider from './svg/AnimationStyleProvider';
import { useDiagramDebug } from '../hooks/useDiagramDebug';

const DiagramSVG = () => {
  const isMobile = useIsMobile();
  const svgRef = useRef<SVGSVGElement>(null);
  
  // Use the extracted debug hook
  useDiagramDebug(svgRef);
  
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
