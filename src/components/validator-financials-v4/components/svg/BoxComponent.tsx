
import React from 'react';
import { BoxProps } from './box/types';
import SimpleBox from './box/SimpleBox';
import ComplexBox from './box/ComplexBox';

/**
 * BoxComponent is the main component responsible for rendering SVG boxes 
 * in the validator financials diagram.
 */
const BoxComponent: React.FC<BoxProps> = (props) => {
  // Special handling for the Block Production box to identify its subitems
  if (props.title === "block production eligibility" && props.subitems) {
    // Log the positions of each subitem in the block production box
    console.log("Block Production Box:", {
      title: props.title,
      x: props.x,
      y: props.y,
      width: props.width,
      height: props.height,
      subitems: props.subitems?.map(item => ({
        id: item.id,
        text: item.text,
        // Approximate position calculation based on box position and layout
        position: item.id === "performance" ? "left" : 
                 item.id === "randomness" ? "middle" : 
                 item.id === "stake-weight" ? "right" : "unknown"
      }))
    });
  }
  
  // Use the simple box style for boxes like Inflation and Deflation
  if (props.simpleStyle) {
    return <SimpleBox boxProps={props} />;
  }
  
  // Use complex box for boxes with subitems
  return <ComplexBox boxProps={props} />;
};

export default BoxComponent;
