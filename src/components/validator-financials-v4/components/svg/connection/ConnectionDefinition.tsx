
import React from 'react';
import { AnimatedConnection } from './AnimatedConnection';
import { useConnectionAnimation } from '../hooks/useConnectionAnimation';
import { ConnectionProps } from './types';

/**
 * ConnectionDefinition renders a connection as an SVG definition that can be referenced elsewhere.
 */
export const ConnectionDefinition: React.FC<ConnectionProps> = (props) => {
  const { lineVariants, dotVariants } = useConnectionAnimation({
    animationIndex: props.animationIndex || 0
  });
  
  return (
    <g id={`connection-${props.id}`}>
      <AnimatedConnection
        {...props}
        lineVariants={lineVariants}
        dotVariants={dotVariants}
      />
    </g>
  );
};
