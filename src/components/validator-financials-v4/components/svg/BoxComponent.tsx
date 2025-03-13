
import React, { useEffect, useRef } from 'react';
import { BoxProps } from './box/types';
import SimpleBox from './box/SimpleBox';
import ComplexBox from './box/ComplexBox';

/**
 * BoxComponent is the main component responsible for rendering SVG boxes 
 * in the validator financials diagram.
 */
const BoxComponent: React.FC<BoxProps> = (props) => {
  // Create a ref to measure the box
  const boxRef = useRef<SVGGElement>(null);
  
  useEffect(() => {
    // Special case for the block production eligibility box and its subitems
    if (props.title === "block production eligibility" && props.subitems) {
      // Get coordinates for all the boxes in block production
      const performanceItem = props.subitems.find(item => item.id === "performance-reputation");
      const randomnessItem = props.subitems.find(item => item.id === "randomness");
      const stakeWeightItem = props.subitems.find(item => item.id === "stake-weight");
      
      if (performanceItem && randomnessItem && stakeWeightItem) {
        // Calculate approximate positions of boxes within the block production container
        // Using the HorizontalItemsRenderer's logic as reference
        const contentItems = props.subitems.filter(item => !item.isOperator);
        const operatorItems = props.subitems.filter(item => item.isOperator);
        
        const boxLeft = props.x;
        const boxWidth = props.width;
        
        // These values should match what's in HorizontalItemsRenderer.tsx
        const operatorWidth = 15;
        const itemMargin = 16;
        const totalOperatorWidth = operatorItems.length * operatorWidth;
        const totalMargins = (props.subitems.length - 1) * itemMargin;
        const remainingWidth = boxWidth - 20 - totalOperatorWidth - totalMargins;
        
        // Calculate widths based on the ratios used in HorizontalItemsRenderer
        const baseWidth = remainingWidth / contentItems.length;
        const performanceWidth = baseWidth * 1.0;
        const randomnessWidth = baseWidth * 0.9;
        const stakeWeightWidth = baseWidth * 1.1;
        
        // Calculate x positions for content items
        let currentX = boxLeft + 10; // Start with left padding
        let xPositions = {
          performance: 0,
          randomness: 0,
          stakeWeight: 0
        };
        
        for (let i = 0; i < props.subitems.length; i++) {
          const item = props.subitems[i];
          let itemWidth = item.isOperator ? operatorWidth : 
                          item.id === "performance-reputation" ? performanceWidth :
                          item.id === "randomness" ? randomnessWidth :
                          item.id === "stake-weight" ? stakeWeightWidth : baseWidth;
          
          // Store center positions
          if (item.id === "performance-reputation") {
            xPositions.performance = currentX + itemWidth / 2;
          } else if (item.id === "randomness") {
            xPositions.randomness = currentX + itemWidth / 2;
          } else if (item.id === "stake-weight") {
            xPositions.stakeWeight = currentX + itemWidth / 2;
          }
          
          // Update for next item
          currentX += itemWidth + itemMargin;
        }
        
        // Log the calculated center positions
        console.log("EXACT CENTER COORDINATES OF BLOCK PRODUCTION BOXES:", {
          boxTitle: props.title,
          boxPosition: { x: props.x, y: props.y },
          boxDimensions: { width: props.width, height: props.height },
          centerPositions: {
            performance: { x: xPositions.performance, y: props.y + 70 }, // 70 = yOffset(50) + height/2
            randomness: { x: xPositions.randomness, y: props.y + 70 },
            stakeWeight: { x: xPositions.stakeWeight, y: props.y + 70 }
          },
          topCenterPositions: {
            performance: { x: xPositions.performance, y: props.y + 50 }, // 50 = yOffset for items
            randomness: { x: xPositions.randomness, y: props.y + 50 },
            stakeWeight: { x: xPositions.stakeWeight, y: props.y + 50 }
          }
        });
      }
    }
    
    // For profitability box to get total validator rewards and operational costs positions
    if (props.title === "profitability" && props.subitems) {
      const validatorRewardsItem = props.subitems.find(item => item.id === "total-validator-rewards");
      const operationalCostsItem = props.subitems.find(item => item.id === "operational-costs");
      
      if (validatorRewardsItem && operationalCostsItem) {
        // Calculate approximate center positions
        const boxLeft = props.x;
        const boxWidth = props.width;
        
        // These should match the values in HorizontalItemsRenderer
        const contentItems = props.subitems.filter(item => !item.isOperator);
        const operatorItems = props.subitems.filter(item => item.isOperator);
        
        const operatorWidth = 15;
        const itemMargin = 16;
        const totalOperatorWidth = operatorItems.length * operatorWidth;
        const totalMargins = (props.subitems.length - 1) * itemMargin;
        const remainingWidth = boxWidth - 20 - totalOperatorWidth - totalMargins;
        
        // Equal width for profitability box items
        const itemWidth = remainingWidth / contentItems.length;
        
        // Calculate positions
        let currentX = boxLeft + 10; // Start with left padding
        let xPositions = {
          validatorRewards: 0,
          operationalCosts: 0
        };
        
        for (let i = 0; i < props.subitems.length; i++) {
          const item = props.subitems[i];
          const width = item.isOperator ? operatorWidth : itemWidth;
          
          if (item.id === "total-validator-rewards") {
            xPositions.validatorRewards = currentX + width / 2;
          } else if (item.id === "operational-costs") {
            xPositions.operationalCosts = currentX + width / 2;
          }
          
          currentX += width + itemMargin;
        }
        
        console.log("EXACT CENTER COORDINATES OF PROFITABILITY BOXES:", {
          boxTitle: props.title,
          boxPosition: { x: props.x, y: props.y },
          boxDimensions: { width: props.width, height: props.height },
          centerPositions: {
            validatorRewards: { x: xPositions.validatorRewards, y: props.y + 70 },
            operationalCosts: { x: xPositions.operationalCosts, y: props.y + 70 }
          },
          topCenterPositions: {
            validatorRewards: { x: xPositions.validatorRewards, y: props.y + 50 },
            operationalCosts: { x: xPositions.operationalCosts, y: props.y + 50 }
          }
        });
      }
    }
  }, [props.title, props.subitems, props.x, props.y, props.width, props.height]);
  
  // Use the simple box style for boxes like Inflation and Deflation
  if (props.simpleStyle) {
    return <SimpleBox boxProps={props} />;
  }
  
  // Use complex box for boxes with subitems
  return <g ref={boxRef}><ComplexBox boxProps={props} /></g>;
};

export default BoxComponent;
