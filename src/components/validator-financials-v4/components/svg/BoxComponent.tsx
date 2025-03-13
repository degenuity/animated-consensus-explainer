
import React from 'react';
import { BoxProps } from './box/types';
import SimpleBox from './box/SimpleBox';
import ComplexBox from './box/ComplexBox';

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
