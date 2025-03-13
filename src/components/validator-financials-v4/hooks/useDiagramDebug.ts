
import { useEffect, RefObject } from 'react';
import { viewBoxWidth, viewBoxHeight } from '../components/svg/data/constants';
import { boxes } from '../components/svg/data/boxes';

/**
 * Custom hook that logs debugging information about diagram elements
 */
export const useDiagramDebug = (svgRef: RefObject<SVGSVGElement>) => {
  useEffect(() => {
    if (!svgRef.current) return;
    
    // Find the total stake box
    const totalStakeBox = boxes.find(box => box.title === "total stake");
    if (totalStakeBox) {
      console.log("Total stake box definition:", totalStakeBox);
    }

    // Try to find all subitems within boxes after rendering
    setTimeout(() => {
      if (!svgRef.current) return;
      
      // Give time for rendering
      const allGroups = svgRef.current.querySelectorAll('g');
      
      // Look for delegated stake specifically
      const delegatedStakeElement = svgRef.current.querySelector('[data-item-id="delegated-stake"]');
      if (delegatedStakeElement) {
        const rect = delegatedStakeElement.getBoundingClientRect();
        const svgRect = svgRef.current.getBoundingClientRect();
        
        // Calculate relative position within SVG
        const relativeX = rect.left - svgRect.left;
        const relativeY = rect.top - svgRect.top;
        
        // Calculate the SVG coordinate
        const svgWidth = svgRect.width;
        const svgHeight = svgRect.height;
        
        const svgX = (relativeX / svgWidth) * viewBoxWidth;
        const svgY = (relativeY / svgHeight) * viewBoxHeight;
        
        console.log('DELEGATED STAKE EXACT COORDINATES:', {
          id: 'delegated-stake',
          clientRect: {
            top: rect.top,
            left: rect.left,
            width: rect.width,
            height: rect.height
          },
          svgCoordinates: {
            x: svgX,
            y: svgY,
            // Calculate left center point
            leftCenter: {
              x: svgX,
              y: svgY + (rect.height / svgHeight) * viewBoxHeight / 2
            }
          }
        });
      } else {
        console.log("Delegated stake element not found, searching in all groups...");
        
        // Search through all groups to find anything with delegated stake
        allGroups.forEach(group => {
          const text = group.textContent || '';
          if (text.toLowerCase().includes('delegated stake')) {
            console.log("Found possible delegated stake container:", group);
            const rect = group.getBoundingClientRect();
            const svgRect = svgRef.current.getBoundingClientRect();
            
            // Calculate relative position
            const relativeX = rect.left - svgRect.left;
            const relativeY = rect.top - svgRect.top;
            
            // Calculate the SVG coordinate
            const svgX = (relativeX / svgRect.width) * viewBoxWidth;
            const svgY = (relativeY / svgRect.height) * viewBoxHeight;
            
            console.log('Possible delegated stake position:', {
              text: text,
              svgCoordinates: {
                x: svgX,
                y: svgY,
                width: (rect.width / svgRect.width) * viewBoxWidth,
                height: (rect.height / svgRect.height) * viewBoxHeight
              }
            });
          }
        });
      }
    }, 500);
  }, [svgRef]);
  
  // Enhanced useEffect for debugging all box positions
  useEffect(() => {
    if (!svgRef.current) return;
    
    console.log("DiagramSVG mounted - checking for block production boxes");
    
    // Look for all subitems to identify stake weight and randomness
    const allGroups = svgRef.current.querySelectorAll('g');
    
    // Find all items specifically in block production
    const blockProductionGroup = Array.from(allGroups).find(g => 
      g.getAttribute('data-id') === 'block-production-eligibility'
    );
    
    if (blockProductionGroup) {
      console.log("Found block production group:", blockProductionGroup);
      
      // Try to find the stake weight and randomness boxes
      const stakeWeightBox = blockProductionGroup.querySelector('[data-item-id="stake-weight"]');
      const randomnessBox = blockProductionGroup.querySelector('[data-item-id="randomness"]');
      
      if (stakeWeightBox) {
        const stakeWeightRect = stakeWeightBox.getBoundingClientRect();
        const svgRect = svgRef.current.getBoundingClientRect();
        
        // Calculate relative position within SVG
        const relativeX = stakeWeightRect.left - svgRect.left;
        const relativeY = stakeWeightRect.top - svgRect.top;
        
        // Calculate the SVG coordinate based on viewBox
        const svgX = (relativeX / svgRect.width) * viewBoxWidth;
        const svgY = (relativeY / svgRect.height) * viewBoxHeight;
        
        console.log('STAKE WEIGHT BOX COORDS:', {
          id: 'stake-weight',
          clientRect: {
            top: stakeWeightRect.top,
            left: stakeWeightRect.left,
            width: stakeWeightRect.width,
            height: stakeWeightRect.height
          },
          svgCoordinates: {
            x: svgX,
            y: svgY,
            centerX: svgX + (stakeWeightRect.width / svgRect.width) * viewBoxWidth / 2
          }
        });
      } else {
        console.log("Stake weight box not found in DOM");
      }
      
      if (randomnessBox) {
        const randomnessRect = randomnessBox.getBoundingClientRect();
        const svgRect = svgRef.current.getBoundingClientRect();
        
        // Calculate relative position within SVG
        const relativeX = randomnessRect.left - svgRect.left;
        const relativeY = randomnessRect.top - svgRect.top;
        
        // Calculate the SVG coordinate based on viewBox
        const svgX = (relativeX / svgRect.width) * viewBoxWidth;
        const svgY = (relativeY / svgRect.height) * viewBoxHeight;
        
        console.log('RANDOMNESS BOX COORDS:', {
          id: 'randomness',
          clientRect: {
            top: randomnessRect.top,
            left: randomnessRect.left,
            width: randomnessRect.width,
            height: randomnessRect.height
          },
          svgCoordinates: {
            x: svgX,
            y: svgY,
            centerX: svgX + (randomnessRect.width / svgRect.width) * viewBoxWidth / 2
          }
        });
      } else {
        console.log("Randomness box not found in DOM");
      }
    }
    
    // Find exact positions of all boxes in the block production section
    const blockProductionBox = boxes.find(box => box.title === "block production eligibility");
    if (blockProductionBox && blockProductionBox.subitems) {
      console.log("Block production box definition:", {
        position: { x: blockProductionBox.x, y: blockProductionBox.y },
        dimensions: { width: blockProductionBox.width, height: blockProductionBox.height },
        subitems: blockProductionBox.subitems.map(item => {
          if (typeof item === 'string') return item;
          return {
            id: item.id,
            text: item.text,
            isOperator: item.isOperator
          };
        })
      });
    }
  }, [svgRef]);
};
