
import React from 'react';
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
    // Extracting all props with defaults to pass to appropriate components
    ...restProps
  } = props;
  
  // ADDITIONAL VALIDATION: Don't render connections starting at or containing the top-left corner
  if (path) {
    // Check if path starts at or goes near origin
    if (path.startsWith('M 0') || 
        path.startsWith('M0') || 
        path.startsWith('M 0,0') || 
        path.startsWith('M0,0') ||
        path.startsWith('M 0 0')) {
      return null;
    }
    
    // Check if any part of the path goes through the top-left corner
    const pathSegments = path.split(/[ML]\s*/).filter(Boolean);
    for (const segment of pathSegments) {
      const coords = segment.trim().split(/[\s,]+/).map(Number);
      // If any coordinates are near origin
      if (coords.length >= 2 && coords[0] < 100 && coords[1] < 100) {
        return null;
      }
    }
  }
  
  // Check for dots in the top-left corner
  if (dotPosition) {
    const x = parseFloat(dotPosition.x);
    const y = parseFloat(dotPosition.y);
    if ((x < 100 && y < 100) || isNaN(x) || isNaN(y)) {
      return null;
    }
  }
  
  const { lineVariants, dotVariants } = useConnectionAnimation({
    animationIndex: animationIndex || 0,
    dotAnimationDuration: props.animationDuration || 2,
    pathAnimationDuration: 0.7
  });
  
  // If we're rendering as a definition for later use with <use>, return a <defs> element
  if (renderAsDefinition) {
    return (
      <defs>
        <ConnectionDefinition 
          {...restProps}
          path={path}
          dotPosition={dotPosition}
          animationIndex={animationIndex} // Pass animationIndex explicitly
        />
      </defs>
    );
  }
  
  // Regular rendering with animations
  return (
    <AnimatedConnection 
      {...props}
      lineVariants={lineVariants}
      dotVariants={dotVariants}
    />
  );
};

export default ConnectionLine;
