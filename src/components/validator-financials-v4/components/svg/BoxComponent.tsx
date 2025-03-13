
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
      // Find the specific subitems we need to track
      const stakeWeightItem = props.subitems.find(item => item.id === "stake-weight");
      const randomnessItem = props.subitems.find(item => item.id === "randomness");
      const performanceItem = props.subitems.find(item => item.id === "performance-reputation");
      
      if (stakeWeightItem && randomnessItem && performanceItem) {
        // Log critical info about the stake weight item to understand its position
        console.log("STAKE WEIGHT ITEM FOUND:", {
          id: stakeWeightItem.id,
          text: stakeWeightItem.text,
          index: props.subitems.findIndex(item => item.id === "stake-weight"),
          totalItems: props.subitems.length,
          itemOrder: props.subitems.map(item => item.id)
        });
        
        // Calculate the position more accurately based on the order and spacing
        const boxLeft = props.x;
        const boxWidth = props.width;
        
        // These values should match what's in HorizontalItemsRenderer.tsx
        const operatorItems = props.subitems.filter(item => item.isOperator);
        const contentItems = props.subitems.filter(item => !item.isOperator);
        
        const operatorWidth = 15; // Matches HorizontalItemsRenderer
        const itemMargin = 16;    // Matches HorizontalItemsRenderer
        const totalOperatorWidth = operatorItems.length * operatorWidth;
        const totalMargins = (props.subitems.length - 1) * itemMargin;
        const remainingWidth = boxWidth - 20 - totalMargins - totalOperatorWidth;
        
        // Calculate individual item widths
        const baseWidth = remainingWidth / contentItems.length;
        
        // Get the indices of items for position calculation
        const stakeWeightIndex = contentItems.findIndex(item => item.id === "stake-weight");
        const randomnessIndex = contentItems.findIndex(item => item.id === "randomness");
        const performanceIndex = contentItems.findIndex(item => item.id === "performance-reputation");
        
        // For block production box (530px width), apply specific ratios from HorizontalItemsRenderer
        let contentItemWidths: number[] = [];
        contentItems.forEach(item => {
          if (item.id === 'randomness') {
            contentItemWidths.push(baseWidth * 0.9);
          } else if (item.id === 'stake-weight') {
            contentItemWidths.push(baseWidth * 1.1);
          } else if (item.id === 'performance-reputation') {
            contentItemWidths.push(baseWidth * 1.0);
          } else {
            contentItemWidths.push(baseWidth * 0.8);
          }
        });
        
        // Calculate center positions of each item
        let currentX = boxLeft + 10; // Start with left padding
        let xPositions: Record<string, number> = {};
        let operatorIndex = 0;
        let contentIndex = 0;
        
        for (let i = 0; i < props.subitems.length; i++) {
          const item = props.subitems[i];
          let itemWidth: number;
          
          if (item.isOperator) {
            itemWidth = operatorWidth;
            operatorIndex++;
          } else {
            itemWidth = contentItemWidths[contentIndex];
            contentIndex++;
          }
          
          // Store center positions with item ID
          xPositions[item.id || `item-${i}`] = currentX + itemWidth / 2;
          
          // Update for next item
          currentX += itemWidth + itemMargin;
        }
        
        // Log the calculated precise center positions
        console.log("EXACT STAKE WEIGHT COORDINATES:", {
          boxTitle: props.title,
          boxPosition: { x: props.x, y: props.y },
          boxDimensions: { width: props.width, height: props.height },
          itemCenters: xPositions,
          stakeWeightCenter: {
            x: xPositions[stakeWeightItem.id || "stake-weight"], 
            y: props.y + 70 // Approximation for vertical center
          },
          randomnessCenter: {
            x: xPositions[randomnessItem.id || "randomness"],
            y: props.y + 70
          },
          performanceCenter: {
            x: xPositions[performanceItem.id || "performance-reputation"],
            y: props.y + 70
          },
          // Log the top center of the stake weight item
          stakeWeightTopCenter: {
            x: xPositions[stakeWeightItem.id || "stake-weight"],
            y: props.y + 50 // Top of the item (matches yOffset in HorizontalItemsRenderer)
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
  return <g ref={boxRef} data-id={props.title.replace(/\s+/g, '-')}>
    <ComplexBox boxProps={props} />
  </g>;
};

export default BoxComponent;
