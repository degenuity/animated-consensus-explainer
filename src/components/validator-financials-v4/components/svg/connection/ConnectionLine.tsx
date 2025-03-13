
import React, { useRef, useEffect } from 'react';

interface ConnectionPathProps {
  path: string;
  color: string;
  animationIndex?: number;
  dotPosition?: { x: string; y: string } | undefined;
  animationDirection?: 'right' | 'left' | 'up' | 'down' | undefined;
  animateMotion?: boolean;
  id?: string;
  targetBoxId?: string;
  animationDuration?: number;
}

const ConnectionLine: React.FC<ConnectionPathProps> = ({
  path,
  color,
  animationIndex = 0,
  dotPosition,
  animationDirection,
  animateMotion = true,
  id,
  targetBoxId,
  animationDuration = 1.5
}) => {
  const dotRef = useRef<SVGCircleElement>(null);
  const pathRef = useRef<SVGPathElement>(null);
  const animationRef = useRef<SVGAnimateMotionElement>(null);
  
  // Extract target box ID from the connection ID if not explicitly provided
  const getTargetBoxId = () => {
    if (targetBoxId) return targetBoxId;
    if (!id) return null;
    
    // Parse connection IDs to determine target boxes
    if (id === "base-fees-to-block-rewards") return "block-rewards";
    if (id === "base-fee-bottom-to-block-rewards") return "block-rewards";
    if (id === "block-rewards-to-total-validator-rewards") return "total-validator-rewards";
    if (id === "internal-rewards-to-total-validator-rewards") return "total-validator-rewards";
    if (id === "delegated-stake-to-commission") return "commission";
    if (id === "own-stake-to-staking-rewards") return "staking-rewards";
    if (id === "base-fee-right-to-deflation") return "deflation";
    if (id === "total-stake-to-stake-weight") return "stake-weight";
    if (id === "inflation-to-internal-rewards") return "internal-rewards";
    
    return null;
  };
  
  useEffect(() => {
    if (!dotRef.current || !animationRef.current) return;
    
    const target = getTargetBoxId();
    if (!target) return;
    
    // For debugging
    console.log(`Connection line setup: ${id} → ${target}`);
    
    // Track animation progress more precisely
    let previousEndTime = 0;
    
    // Handle animation events to trigger the collision at the precise moment
    const handleAnimationEnd = () => {
      const targetBoxId = target;
      console.log(`🔵 Dot collision event: ${id} → ${targetBoxId}`);
      
      const collisionEvent = new CustomEvent('dotCollision', {
        detail: { 
          targetId: targetBoxId,
          dotColor: color,
          sourceId: id,
          timestamp: Date.now()
        },
        bubbles: true,
        cancelable: true,
      });
      
      // Dispatch the event on window
      window.dispatchEvent(collisionEvent);
    };
    
    // Add animation end event to the animateMotion element for precise timing
    const animationElement = animationRef.current;
    if (animationElement) {
      animationElement.addEventListener('endEvent', handleAnimationEnd);
    }
    
    return () => {
      if (animationElement) {
        animationElement.removeEventListener('endEvent', handleAnimationEnd);
      }
    };
  }, [color, id, animationDuration]);
  
  // Calculate animation delay based on index
  const delay = animationIndex * 0.1;
  
  return (
    <g>
      <path
        ref={pathRef}
        d={path}
        fill="none"
        stroke={color}
        strokeWidth="1.5"
        strokeDasharray="4 2"
        opacity="0.6"
      />
      
      {animateMotion && (
        <circle
          ref={dotRef}
          r="4"
          fill={color}
        >
          <animateMotion
            ref={animationRef}
            path={path}
            dur={`${animationDuration}s`}
            begin={`${delay}s`}
            repeatCount="indefinite"
            rotate="auto"
          />
        </circle>
      )}
    </g>
  );
};

export default ConnectionLine;
