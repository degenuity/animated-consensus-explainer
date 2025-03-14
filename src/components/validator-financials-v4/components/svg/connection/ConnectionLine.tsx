
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
    renderOrder,
    id,
    // Extracting all props with defaults to pass to appropriate components
    ...restProps
  } = props;
  
  // CRITICAL: Enforce the renderOrder prop - default to "background" if not specified
  const effectiveRenderOrder = renderOrder || "background";
  
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
          animationIndex={animationIndex}
          renderOrder={effectiveRenderOrder}
          id={id}
        />
      </defs>
    );
  }
  
  // Skip rendering if path is missing
  if (!path) {
    return null;
  }
  
  // Regular rendering with animations - IMPORTANT: Pass renderOrder correctly
  return (
    <AnimatedConnection 
      {...restProps}
      path={path}
      dotPosition={dotPosition}
      animationIndex={animationIndex}
      lineVariants={lineVariants}
      dotVariants={dotVariants}
      renderOrder={effectiveRenderOrder} // Ensure renderOrder is explicitly passed
      id={id}
    />
  );
};

export default ConnectionLine;
