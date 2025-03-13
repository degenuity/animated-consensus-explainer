
import React, { useEffect, useRef } from 'react';
import { BoxProps } from './types';

interface BoxDebuggerProps {
  boxProps: BoxProps;
}

/**
 * BoxDebugger provides debug information for boxes, especially those with subitems
 * that need precise position calculations for connections.
 */
const BoxDebugger: React.FC<BoxDebuggerProps> = ({ boxProps }) => {
  const boxRef = useRef<SVGGElement>(null);
  
  useEffect(() => {
    // Special case debugging for specific box types
    if (boxProps.title === "block production eligibility" && boxProps.subitems) {
      debugBlockProductionEligibility(boxProps);
    }
    
    // For profitability box
    if (boxProps.title === "profitability" && boxProps.subitems) {
      debugProfitabilityBox(boxProps);
    }
  }, [boxProps]);
  
  // Debug helper for block production eligibility box
  const debugBlockProductionEligibility = (props: BoxProps) => {
    // Find the specific subitems we need to track
    const stakeWeightItem = props.subitems?.find(item => item.id === "stake-weight");
    const randomnessItem = props.subitems?.find(item => item.id === "randomness");
    const performanceItem = props.subitems?.find(item => item.id === "performance-reputation");
    
    if (stakeWeightItem && randomnessItem && performanceItem && props.subitems) {
      // Calculate positions based on layout algorithm
      calculateAndLogItemPositions(props, stakeWeightItem, randomnessItem, performanceItem);
    }
  };
  
  // Debug helper for profitability box
  const debugProfitabilityBox = (props: BoxProps) => {
    if (!props.subitems) return;
    
    const validatorRewardsItem = props.subitems.find(item => item.id === "total-validator-rewards");
    const operationalCostsItem = props.subitems.find(item => item.id === "operational-costs");
    
    if (validatorRewardsItem && operationalCostsItem) {
      // Calculate approximate center positions
      calculateAndLogProfitabilityPositions(props, validatorRewardsItem, operationalCostsItem);
    }
  };
  
  // Calculate and log positions for block production eligibility items
  const calculateAndLogItemPositions = (props: BoxProps, stakeWeightItem: any, randomnessItem: any, performanceItem: any) => {
    if (!props.subitems) return;
    
    // These values should match what's in HorizontalItemsRenderer.tsx
    const operatorItems = props.subitems.filter(item => item.isOperator);
    const contentItems = props.subitems.filter(item => !item.isOperator);
    
    const operatorWidth = 15; // Matches HorizontalItemsRenderer
    const itemMargin = 16;    // Matches HorizontalItemsRenderer
    const totalOperatorWidth = operatorItems.length * operatorWidth;
    const totalMargins = (props.subitems.length - 1) * itemMargin;
    const remainingWidth = props.width - 20 - totalMargins - totalOperatorWidth;
    
    // Calculate individual item widths
    const baseWidth = remainingWidth / contentItems.length;
    
    // Get the indices of items for position calculation
    const stakeWeightIndex = contentItems.findIndex(item => item.id === "stake-weight");
    const randomnessIndex = contentItems.findIndex(item => item.id === "randomness");
    const performanceIndex = contentItems.findIndex(item => item.id === "performance-reputation");
    
    // Apply specific ratios from HorizontalItemsRenderer
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
    
    // Calculate positions
    calculateAndLogItemCenters(props, contentItems, operatorItems, contentItemWidths, operatorWidth, itemMargin);
  };
  
  // Calculate and log positions for profitability items
  const calculateAndLogProfitabilityPositions = (props: BoxProps, validatorRewardsItem: any, operationalCostsItem: any) => {
    if (!props.subitems) return;
    
    // Calculate values for horizontal layout
    const contentItems = props.subitems.filter(item => !item.isOperator);
    const operatorItems = props.subitems.filter(item => item.isOperator);
    
    const operatorWidth = 15;
    const itemMargin = 16;
    const totalOperatorWidth = operatorItems.length * operatorWidth;
    const totalMargins = (props.subitems.length - 1) * itemMargin;
    const remainingWidth = props.width - 20 - totalOperatorWidth - totalMargins;
    
    // Equal width for profitability box items
    const itemWidth = remainingWidth / contentItems.length;
    
    // Calculate positions
    let currentX = props.x + 10; // Start with left padding
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
  };
  
  // Helper to calculate and log center positions of items
  const calculateAndLogItemCenters = (
    props: BoxProps, 
    contentItems: any[], 
    operatorItems: any[], 
    contentItemWidths: number[], 
    operatorWidth: number, 
    itemMargin: number
  ) => {
    if (!props.subitems) return;
    
    // Calculate center positions of each item
    let currentX = props.x + 10; // Start with left padding
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
    
    console.log("EXACT STAKE WEIGHT COORDINATES:", {
      boxTitle: props.title,
      boxPosition: { x: props.x, y: props.y },
      boxDimensions: { width: props.width, height: props.height },
      itemCenters: xPositions,
      // Log centers for specific items
      stakeWeightCenter: {
        x: xPositions["stake-weight"], 
        y: props.y + 70 // Approximation for vertical center
      },
      randomnessCenter: {
        x: xPositions["randomness"],
        y: props.y + 70
      },
      performanceCenter: {
        x: xPositions["performance-reputation"],
        y: props.y + 70
      },
      // Log the top center of the stake weight item
      stakeWeightTopCenter: {
        x: xPositions["stake-weight"],
        y: props.y + 50 // Top of the item
      }
    });
  };
  
  return <g ref={boxRef} data-debug={boxProps.title.replace(/\s+/g, '-')} />;
};

export default BoxDebugger;
