
import React from 'react';
import { ConnectionLabel } from './ConnectionLabel';
import { ConnectionDot } from './ConnectionDot';
import { ConnectionProps } from './types';

export const ConnectionDefinition: React.FC<ConnectionProps> = ({
  path,
  color,
  dotPosition,
  label,
  labelPosition,
  animateMotion,
  id
}) => {
  return (
    <g id={`connection-${id}`}>
      <path
        d={path}
        stroke={color}
        strokeWidth="2"
        fill="none"
      />
      
      {dotPosition && !animateMotion && (
        <circle
          cx={dotPosition.x}
          cy={dotPosition.y}
          r="5"
          fill={color}
        />
      )}
      
      {animateMotion && (
        <ConnectionDot 
          path={path}
          color={color}
          animated={true}
        />
      )}
      
      {label && labelPosition && (
        <ConnectionLabel 
          label={label} 
          position={labelPosition} 
          color={color} 
        />
      )}
    </g>
  );
};
