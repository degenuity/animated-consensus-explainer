
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
  
  // Global safety check: Log every connection line rendering attempt
  console.log(`ConnectionLine render attempt: ${id}`, { 
    dotPosition, 
    path: path?.substring(0, 30) + '...'
  });
  
  // SAFETY CHECK: Completely disable ANY dots in the top-left quadrant
  const containerRef = useRef<HTMLDivElement>(null);
  let safeProps = { ...props };
  
  // Block dots in an expanded danger zone
  if (dotPosition) {
    const x = parseFloat(dotPosition.x);
    const y = parseFloat(dotPosition.y);
    
    if (x < 200 && y < 200) {
      console.error(`MASTER BLOCK: Connection ${id} attempted to render dot in danger zone:`, { x, y });
      safeProps = {
        ...props,
        dotPosition: undefined,
        animateMotion: false // Disable any animation that might create dots
      };
    }
  }
  
  // Block any paths that might create dots in the corner
  if (path && (path.includes("M 0,0") || path.includes("L 0,0") || 
      path.startsWith("M 0 ") || path.includes(" 0,0"))) {
    console.error(`MASTER BLOCK: Connection ${id} has suspicious path:`, path);
    return null; // Don't render anything with suspicious paths
  }
  
  // If we're rendering as a definition, pass the modified safe props
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
  
  // Create a wrapper div to help with finding and removing rogue dots
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
