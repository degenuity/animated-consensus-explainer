
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
    console.log("DiagramSVG mounted - debugging enabled");
    
    // Log dot collision events for debugging
    const handleDotCollision = (event: any) => {
      console.log('🎯 Dot collision detected:', event.detail);
      
      // Visual debug indicator in the console
      console.log(`⚡ HIGHLIGHT EVENT: Target=${event.detail.targetId}, Source=${event.detail.sourceId || 'unknown'}, Time=${new Date().toISOString()}`);
    };
    
    window.addEventListener('dotCollision', handleDotCollision);
    
    // Manually trigger some test collision events after a delay to check if highlighting works
    setTimeout(() => {
      console.log('🔍 Testing collision events...');
      
      ['inflation', 'stake-weight', 'block-rewards'].forEach((id, index) => {
        setTimeout(() => {
          const testEvent = new CustomEvent('dotCollision', {
            detail: { 
              targetId: id,
              dotColor: '#3B82F6',
              sourceId: 'test',
              timestamp: Date.now()
            },
            bubbles: true,
            cancelable: true,
          });
          console.log(`🧪 Triggering test collision for: ${id}`);
          window.dispatchEvent(testEvent);
        }, index * 1000); // Stagger the test events
      });
    }, 5000);
    
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
