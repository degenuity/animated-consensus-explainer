
import React from 'react';
import { OperatorProps } from './types';

const MathOperator = ({ top, left, operator }: OperatorProps) => {
  return (
    <div 
      className="text-gray-500 text-xl" 
      style={{ position: 'absolute', top, left }}
    >
      {operator}
    </div>
  );
};

export default MathOperator;
