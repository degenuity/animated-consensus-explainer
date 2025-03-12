
import React from 'react';
import { BoxProps } from './types';
import SimpleBox from './SimpleBox';
import ComplexBox from './ComplexBox';

/**
 * BoxComponent is the main component responsible for rendering SVG boxes 
 * in the validator financials diagram.
 */
const BoxComponent: React.FC<BoxProps> = (props) => {
  // Use the simple box style for boxes like Inflation and Deflation
  if (props.simpleStyle) {
    return <SimpleBox boxProps={props} />;
  }
  
  // Use complex box for boxes with subitems
  return <ComplexBox boxProps={props} />;
};

export default BoxComponent;
