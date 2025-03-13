
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
  
  // SAFETY CHECK: If dot position is in the top-left danger zone, don't render it
  if (dotPosition) {
    const x = parseFloat(dotPosition.x);
    const y = parseFloat(dotPosition.y);
    
    if (x < 100 && y < 100) {
      console.log("PREVENTING DOT IN DANGER ZONE:", { id: props.id, x, y });
      // Create a modified props object without the dotPosition
      const safeProps = {
        ...props,
        dotPosition: undefined
      };
      
      // If we're rendering as a definition, pass the modified props
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
      
      // Regular rendering with animations but without dot
      const { lineVariants, dotVariants } = useConnectionAnimation({
        animationIndex: animationIndex || 0,
        dotAnimationDuration: props.animationDuration || 2,
        pathAnimationDuration: 0.7
      });
      
      return (
        <AnimatedConnection 
          {...safeProps}
          lineVariants={lineVariants}
          dotVariants={dotVariants}
        />
      );
    }
  }
  
  // Normal behavior for dots outside the danger zone
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
  
  // Skip rendering if path is missing
  if (!path) {
    return null;
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
