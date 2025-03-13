
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
    // Get more detailed position information for the stake weight box
    const stakeWeightItem = props.subitems.find(item => item.id === "stake-weight");
    if (stakeWeightItem) {
      // Calculate approximate center position
      const boxLeft = props.x;
      const boxWidth = props.width;
      const itemCount = props.subitems.filter(i => !i.isOperator).length;
      const operatorCount = props.subitems.filter(i => i.isOperator).length;
      
      // Get item index
      const contentItems = props.subitems.filter(i => !i.isOperator);
      const stakeWeightIndex = contentItems.findIndex(i => i.id === "stake-weight");
      
      // Approximate position calculation
      const totalItemWidth = boxWidth - 20; // 10px padding on each side
      const totalMargins = (props.subitems.length - 1) * 16; // 16px margins
      const operatorWidth = operatorCount * 15; // 15px for each operator
      const remainingWidth = totalItemWidth - totalMargins - operatorWidth;
      
      // Approximate position of stake weight center
      const itemWidthBase = remainingWidth / contentItems.length;
      const leftItems = contentItems.slice(0, stakeWeightIndex);
      const rightItems = contentItems.slice(stakeWeightIndex + 1);
      
      let approximateCenter = boxLeft + 10; // Start with left padding
      
      // Add width of left items
      leftItems.forEach((_, i) => {
        // Add item width plus margin
        approximateCenter += itemWidthBase + 16;
      });
      
      // Add operators before stake weight
      const operatorsBefore = props.subitems.filter((item, idx) => 
        item.isOperator && idx < props.subitems.findIndex(i => i.id === "stake-weight")
      ).length;
      
      approximateCenter += operatorsBefore * (15 + 16); // operator width + margin
      
      // Add half of stake weight width
      approximateCenter += itemWidthBase * 1.1 / 2; // Using the 1.1 factor from HorizontalItemsRenderer
      
      console.log("Detailed stake weight box positioning:", {
        boxTitle: props.title,
        boxX: props.x,
        boxY: props.y,
        boxWidth: props.width,
        stakeWeightItem,
        approximateCenterX: approximateCenter,
        approximateCenterY: props.y + 50, // Top of box + title bar height
        itemWidths: {
          base: itemWidthBase,
          performance: itemWidthBase * 1.0,
          randomness: itemWidthBase * 0.9,
          stakeWeight: itemWidthBase * 1.1
        },
        subitems: props.subitems?.map(item => ({
          id: item.id,
          text: item.text,
          isOperator: item.isOperator
        }))
      });
    }
    
    // Standard logging
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
