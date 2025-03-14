
import React from 'react';
import { useConnectionAnimation } from '../hooks/useConnectionAnimation';
import { ConnectionDefinition } from './ConnectionDefinition';
import { AnimatedConnection } from './AnimatedConnection';
import { ConnectionProps } from './types';

const ConnectionLine: React.FC<Partial<ConnectionProps> & { id: string; path: string; color: string }> = (props) => {
  const { 
    animationIndex = 0,
    renderAsDefinition = false,
    path,
    dotPosition,
    renderOrder = 'background',
    // Extracting all props with defaults to pass to appropriate components
    ...restProps
  } = props;
  
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
          {...restProps as ConnectionProps}
          path={path}
          dotPosition={dotPosition}
          animationIndex={animationIndex}
          renderOrder={renderOrder}
        />
      </defs>
    );
  }
  
  // Skip rendering if path is missing
  if (!path) {
    return null;
  }
  
  // Regular rendering with animations
  return (
    <AnimatedConnection 
      {...props as ConnectionProps}
      lineVariants={lineVariants}
      dotVariants={dotVariants}
    />
  );
};

export default ConnectionLine;
