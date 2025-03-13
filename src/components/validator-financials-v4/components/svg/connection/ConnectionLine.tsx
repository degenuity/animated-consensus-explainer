
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
    if (!dotRef.current) return;
    
    const target = getTargetBoxId();
    if (!target) return;
    
    // Handle animation completion to trigger the collision event
    const handleAnimationIteration = () => {
      // When the animation completes, dispatch a custom event
      const collisionEvent = new CustomEvent('dotCollision', {
        detail: { 
          targetId: target,
          dotColor: color,
          sourceId: id,
          timestamp: Date.now() // Add timestamp to ensure uniqueness
        }
      });
      window.dispatchEvent(collisionEvent);
      
      // Log collision for debugging
      console.log(`🔵 Dot reached destination: ${target} from ${id || 'unknown'}`);
    };
    
    // Add event listeners
    const dotElement = dotRef.current;
    dotElement.addEventListener('animationiteration', handleAnimationIteration);
    
    return () => {
      if (dotElement) {
        dotElement.removeEventListener('animationiteration', handleAnimationIteration);
      }
    };
  }, [color, id]);
  
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
