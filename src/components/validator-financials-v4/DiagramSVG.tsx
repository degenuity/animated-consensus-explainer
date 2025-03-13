
import React, { useEffect } from 'react';
import { useIsMobile } from '@/hooks/use-mobile';
import AnimationStyleProvider from './components/svg/AnimationStyleProvider';
import { BackgroundLayer, BoxLayer, ForegroundLayer } from './components/svg/layers';
import { boxes } from './components/svg/data/boxes';
import { connectionPaths } from './components/svg/data/connections';
import { useDiagramDebug } from './hooks/useDiagramDebug';

const DiagramSVG = () => {
  const isMobile = useIsMobile();
  const svgRef = useDiagramDebug();
  
  useEffect(() => {
    // Log dot collision events
    const handleDotCollision = (event: any) => {
      console.log('Dot collision detected:', event.detail);
    };
    
    window.addEventListener('dotCollision', handleDotCollision);
    
    return () => {
      window.removeEventListener('dotCollision', handleDotCollision);
    };
  }, []);
  
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
