
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
    }
  }, []);

  return svgRef;
};

export default useDiagramDebug;
