
import React, { forwardRef } from 'react';
import { zoomedViewBox, desktopViewBox } from '../data/constants';
import { BoxComponent } from '../box';
import { Box } from '../box/types';
import { useIsMobile } from '@/hooks/use-mobile';

interface BoxLayerProps {
  boxes: Box[];
}

const BoxLayer = forwardRef<SVGSVGElement, BoxLayerProps>(({ boxes }, ref) => {
  const isMobile = useIsMobile();
  
  return (
    <svg
      ref={ref}
      width="100%"
      height="100%"
      viewBox={isMobile ? zoomedViewBox : desktopViewBox}
      preserveAspectRatio="xMidYMid meet"
      className="absolute top-0 left-0 w-full h-full overflow-visible"
      style={{ 
        pointerEvents: 'none',
        zIndex: 15, // Lower z-index than before (was 20) to ensure lines can pass over boxes
        isolation: 'isolate' // Creates a new stacking context
      }}
    >
      <g className="pointer-events-auto">
        {boxes.map((box, index) => (
          <BoxComponent
            key={`box-${index}`}
            {...box}
            data-id={box.title.replace(/\s+/g, '-')}
          />
        ))}
      </g>
    </svg>
  );
});

BoxLayer.displayName = 'BoxLayer';

export default BoxLayer;
