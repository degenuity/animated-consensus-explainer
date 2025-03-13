
import { useRef, useEffect } from 'react';
import { viewBoxWidth, viewBoxHeight } from '../components/svg/data/constants';
import { boxes } from '../components/svg/data/boxes';

export const useDiagramDebug = () => {
  const svgRef = useRef<SVGSVGElement>(null);

  useEffect(() => {
    if (svgRef.current) {
      console.log("DiagramSVG mounted - checking for block production boxes");
      
      // Find the total stake box
      const totalStakeBox = boxes.find(box => box.title === "total stake");
      if (totalStakeBox) {
        console.log("Total stake box definition:", totalStakeBox);
        // Calculate and log the center X position
        const centerX = totalStakeBox.x + (totalStakeBox.width / 2);
        console.log(`Total stake box center X: ${centerX}`);
      }

      // Try to find all subitems within boxes
      setTimeout(() => {
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
        }
        
        // Look for stake weight specifically
        const stakeWeightElement = svgRef.current.querySelector('[data-item-id="stake-weight"]');
        if (stakeWeightElement) {
          const rect = stakeWeightElement.getBoundingClientRect();
          const svgRect = svgRef.current.getBoundingClientRect();
          
          // Calculate relative position within SVG
          const relativeX = rect.left - svgRect.left;
          const relativeY = rect.top - svgRect.top;
          
          // Calculate the SVG coordinate
          const svgWidth = svgRect.width;
          const svgHeight = svgRect.height;
          
          const svgX = (relativeX / svgWidth) * viewBoxWidth;
          const svgY = (relativeY / svgHeight) * viewBoxHeight;
          
          // Calculate center X position
          const centerX = svgX + ((rect.width / svgWidth) * viewBoxWidth) / 2;
          
          console.log('STAKE WEIGHT EXACT COORDINATES:', {
            id: 'stake-weight',
            clientRect: {
              top: rect.top,
              left: rect.left,
              width: rect.width,
              height: rect.height
            },
            svgCoordinates: {
              x: svgX,
              y: svgY,
              width: (rect.width / svgWidth) * viewBoxWidth,
              height: (rect.height / svgHeight) * viewBoxHeight,
              centerX: centerX,
              topCenter: {
                x: centerX,
                y: svgY
              }
            }
          });
        } else {
          console.log("Stake weight element not found, searching in all groups...");
        }
      }, 500);
    }
  }, []);

  return svgRef;
};

export default useDiagramDebug;
