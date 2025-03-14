
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
          renderOrder={renderOrder}
          id={id}
        />
      </defs>
    );
  }
  
  // Skip rendering if path is missing
  if (!path) {
    return null;
  }
  
  // Assign different z-indices based on connection ID for precise control
  // Note: z-index in SVG only works for positioned elements within the same stacking context
  // This might not always work as expected across different SVG elements/layers
  const zIndex = renderOrder === 'foreground' ? 300 : 1;
  
  console.log(`Rendering connection: ${id} with zIndex: ${zIndex}`);
  
  // Regular rendering with animations
  return (
    <g style={{ zIndex }}>
      <AnimatedConnection 
        {...props}
        lineVariants={lineVariants}
        dotVariants={dotVariants}
      />
    </g>
  );
};

export default ConnectionLine;
