
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
  
  // Create a ref to track DOM elements for post-render inspection
  const containerRef = useRef<HTMLDivElement>(null);
  
  // If we're rendering as a definition, return the definition component
  if (renderAsDefinition) {
    return (
      <defs>
        <ConnectionDefinition 
          {...props}
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
  
  // Create a wrapper div to help with debugging
  return (
    <div ref={containerRef} data-connection-id={id}>
      <AnimatedConnection 
        {...props}
        lineVariants={lineVariants}
        dotVariants={dotVariants}
      />
    </div>
  );
};

export default ConnectionLine;
