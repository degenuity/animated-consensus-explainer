
import React from 'react';
import { useConnectionAnimation } from '../hooks/useConnectionAnimation';
import { ConnectionDefinition } from './ConnectionDefinition';
import { AnimatedConnection } from './AnimatedConnection';
import { ConnectionProps } from './types';

/**
 * ConnectionLine is a facade component that delegates rendering to specialized components
 * based on whether the connection should be rendered as a definition or a regular connection.
 */
const ConnectionLine: React.FC<ConnectionProps> = (props) => {
  const { 
    animationIndex,
    renderAsDefinition = false,
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
          {...restProps}
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
