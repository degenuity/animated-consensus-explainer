
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
  
  // ONLY check for exact M 0,0 or M0,0 path pattern
  let safeProps = { ...props };
  
  if (path && path.match(/^M\s*0\s*,\s*0\s+/)) {
    console.error(`BLOCKED EXACT ORIGIN PATH: Connection ${id} with path starting with ${path.substring(0, 20)}`);
    // Add a slight offset to prevent the dot at 0,0
    safeProps = {
      ...props,
      path: path.replace(/^M\s*0\s*,\s*0\s+/, 'M 1,1 ')
    };
  }
  
  // ONLY block dots exactly at 0,0 (not near 0,0)
  if (dotPosition) {
    const x = dotPosition.x;
    const y = dotPosition.y;
    
    if ((x === "0" && y === "0") || (x === "0.0" && y === "0.0")) {
      console.error(`BLOCKED EXACT ORIGIN DOT: Connection ${id} with dot at (${x}, ${y})`);
      safeProps = {
        ...props,
        dotPosition: { x: "1", y: "1" } // Offset slightly instead of removing
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
