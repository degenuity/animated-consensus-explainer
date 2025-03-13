
import React, { useEffect, useRef } from 'react';
import { useConnectionAnimation } from '../hooks/useConnectionAnimation';
import { ConnectionDefinition } from './ConnectionDefinition';
import { AnimatedConnection } from './AnimatedConnection';
import { ConnectionProps } from './types';

const ConnectionLine: React.FC<ConnectionProps> = (props) => {
  const { 
    animationIndex,
    renderAsDefinition = false,
    path,
    dotPosition,
    id,
    // Extracting all props with defaults to pass to appropriate components
    ...restProps
  } = props;
  
  // Debugging: Log connection rendering with detailed info
  console.log(`Rendering ConnectionLine: ${id}`, { 
    dotPosition, 
    path: path?.substring(0, 100)
  });
  
  // Create a ref to track DOM elements for post-render inspection
  const containerRef = useRef<HTMLDivElement>(null);
  
  // ONLY block dots in the top-left corner (0,0 to 50,50)
  // We're using a smaller area now to avoid blocking legitimate dots
  let safeProps = { ...props };
  
  if (dotPosition) {
    const x = parseFloat(dotPosition.x);
    const y = parseFloat(dotPosition.y);
    
    // Only block dots that are very close to the origin (0,0)
    if (x < 50 && y < 50) {
      console.error(`DANGEROUS DOT BLOCKED: Connection ${id} with dot at (${x}, ${y})`);
      safeProps = {
        ...props,
        dotPosition: undefined,
        animateMotion: false
      };
    }
  }
  
  // If we're rendering as a definition, return the definition component
  if (renderAsDefinition) {
    return (
      <defs>
        <ConnectionDefinition 
          {...safeProps}
          animationIndex={animationIndex}
        />
      </defs>
    );
  }
  
  // Skip rendering if path is missing
  if (!path) {
    return null;
  }
  
  // Get animation variants for this connection
  const { lineVariants, dotVariants } = useConnectionAnimation({
    animationIndex: animationIndex || 0,
    dotAnimationDuration: props.animationDuration || 2,
    pathAnimationDuration: 0.7
  });
  
  // Create a wrapper div to help with finding any rogue dots
  return (
    <div ref={containerRef} data-connection-id={id}>
      <AnimatedConnection 
        {...safeProps}
        lineVariants={lineVariants}
        dotVariants={dotVariants}
      />
    </div>
  );
};

export default ConnectionLine;
