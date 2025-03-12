
import React from 'react';
import { IndicatorProps } from './types';

const Indicator = ({ top, left, text, style }: IndicatorProps) => {
  return (
    <div 
      className="absolute bg-[#0f1218] border border-gray-800 rounded-full px-2 py-0.5 text-xs text-gray-300" 
      style={{ top, left, ...style }}
    >
      {text}
    </div>
  );
};

export default Indicator;
