
import React, { useEffect, useRef } from 'react';
import { useIsMobile } from '@/hooks/use-mobile';
import {
  BoxComponent,
  ConnectionLine,
} from '.';

import { viewBoxWidth, viewBoxHeight } from './data/constants';
import { boxes } from './data/boxes';
import { connectionPaths } from './data/connections';

const DiagramSVG = () => {
  const isMobile = useIsMobile();
  const svgRef = useRef<SVGSVGElement>(null);
  
  // Enhanced useEffect for debugging all box positions
  useEffect(() => {
    if (svgRef.current) {
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
      
      // Find the base fees box position for debugging
      const networkCostsGroup = Array.from(allGroups).find(g => 
        g.getAttribute('data-id') === 'network-usage-costs'
      );
      
      if (networkCostsGroup) {
        const baseFeesBox = networkCostsGroup.querySelector('[data-item-id="base-fees"]');
        
        if (baseFeesBox) {
          const baseFeesRect = baseFeesBox.getBoundingClientRect();
          const svgRect = svgRef.current.getBoundingClientRect();
          
          // Calculate relative position within SVG
          const relativeX = baseFeesRect.left - svgRect.left;
          const relativeY = baseFeesRect.top - svgRect.top;
          
          // Calculate the SVG coordinate based on viewBox
          const svgX = (relativeX / svgRect.width) * viewBoxWidth;
          const svgY = (relativeY / svgRect.height) * viewBoxHeight;
          
          console.log('BASE FEES BOX COORDS:', {
            id: 'base-fees',
            clientRect: {
              top: baseFeesRect.top,
              left: baseFeesRect.left,
              width: baseFeesRect.width,
              height: baseFeesRect.height,
              bottom: baseFeesRect.bottom,
            },
            svgCoordinates: {
              x: svgX,
              y: svgY,
              width: (baseFeesRect.width / svgRect.width) * viewBoxWidth,
              height: (baseFeesRect.height / svgRect.height) * viewBoxHeight,
              bottom: svgY + (baseFeesRect.height / svgRect.height) * viewBoxHeight,
              centerX: svgX + (baseFeesRect.width / svgRect.width) * viewBoxWidth / 2,
              bottomCenterX: svgX + (baseFeesRect.width / svgRect.width) * viewBoxWidth / 2,
              bottomCenterY: svgY + (baseFeesRect.height / svgRect.height) * viewBoxHeight
            }
          });
        } else {
          console.log("Base fees box not found in DOM");
        }
      }
    }
  }, []);
  
  // Identify connections that need to be on top
  const backgroundConnections = connectionPaths.filter(conn => conn.renderOrder === 'background');
  const foregroundConnections = connectionPaths.filter(conn => 
    conn.renderOrder === 'foreground' || conn.renderOrder === undefined
  );
  
  return (
    <div className="w-full h-full relative px-4">
      <style>
        {`
          @keyframes moveDotRight {
            0% { transform: translateX(-20px); }
            100% { transform: translateX(20px); }
          }
          @keyframes moveDotLeft {
            0% { transform: translateX(20px); }
            100% { transform: translateX(-20px); }
          }
          @keyframes moveDotUp {
            0% { transform: translateY(20px); }
            100% { transform: translateY(-20px); }
          }
          @keyframes moveDotDown {
            0% { transform: translateY(-20px); }
            100% { transform: translateY(20px); }
          }
        `}
      </style>
      
      {/* Background SVG - Contains all background connections and elements */}
      <svg
        width="100%"
        height="100%"
        viewBox={`0 0 ${viewBoxWidth} ${viewBoxHeight}`}
        preserveAspectRatio="xMidYMid meet"
        className="absolute top-0 left-0"
      >
        {backgroundConnections.map((connection, index) => (
          <ConnectionLine
            key={`connection-bg-${connection.id}-${index}`}
            {...connection}
            animationIndex={connection.animationIndex || index}
            dotPosition={connection.dotPosition}
            animationDirection={connection.animationDirection}
            animateMotion={connection.animateMotion}
            animationDuration={connection.animationDuration}
          />
        ))}
      </svg>
      
      {/* Box Layer SVG - Contains all boxes */}
      <svg
        ref={svgRef}
        width="100%"
        height="100%"
        viewBox={`0 0 ${viewBoxWidth} ${viewBoxHeight}`}
        preserveAspectRatio="xMidYMid meet"
        className="absolute top-0 left-0"
      >
        {boxes.map((box, index) => (
          <BoxComponent
            key={`box-${index}`}
            {...box}
            data-id={box.title.replace(/\s+/g, '-')}
          />
        ))}
      </svg>
      
      {/* Foreground SVG - Contains only the connections that need to be on top */}
      <svg
        width="100%"
        height="100%"
        viewBox={`0 0 ${viewBoxWidth} ${viewBoxHeight}`}
        preserveAspectRatio="xMidYMid meet"
        className="absolute top-0 left-0"
      >
        {foregroundConnections.map((connection, index) => (
          <ConnectionLine
            key={`connection-fg-${connection.id}-${index}`}
            {...connection}
            animationIndex={connection.animationIndex || index}
            dotPosition={connection.dotPosition}
            animationDirection={connection.animationDirection}
            animateMotion={connection.animateMotion}
            animationDuration={connection.animationDuration}
          />
        ))}
      </svg>
    </div>
  );
};

export default DiagramSVG;
