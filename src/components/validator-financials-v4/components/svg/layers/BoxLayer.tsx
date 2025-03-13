
import React, { forwardRef } from 'react';
import { zoomedViewBox } from '../data/constants';
import { BoxComponent } from '../box';
import { Box } from '../box/types';

interface BoxLayerProps {
  boxes: Box[];
}

const BoxLayer = forwardRef<SVGSVGElement, BoxLayerProps>(({ boxes }, ref) => {
  return (
    <svg
      ref={ref}
      width="100%"
      height="100%"
      viewBox={zoomedViewBox}
      preserveAspectRatio="xMidYMid meet"
      className="absolute top-0 left-0"
    >
      {boxes.map((box, index) => (
        <BoxComponent
          key={`box-${index}`}
          x={box.x}
          y={box.y}
          width={box.width}
          height={box.height}
          title={box.title}
          subtitle={box.subtitle}
          icon={box.icon}
          color={box.color}
          animationIndex={box.animationIndex}
          subitems={box.subitems}
          simpleStyle={box.simpleStyle}
          data-id={box.title.replace(/\s+/g, '-')}
        />
      ))}
    </svg>
  );
});

BoxLayer.displayName = 'BoxLayer';

export default BoxLayer;
