
import React, { useRef, useEffect } from 'react';
import { motion } from 'framer-motion';

interface ConnectionPathProps {
  path: string;
  color: string;
  animationIndex?: number;
  dotPosition?: { x: string; y: string };
  animationDirection?: 'right' | 'left' | 'up' | 'down';
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
  animateMotion,
  id,
  targetBoxId,
  animationDuration = 1.5
}) => {
  const dotRef = useRef<SVGCircleElement>(null);
  const pathRef = useRef<SVGPathElement>(null);
  const animationRef = useRef<Animation | null>(null);
  
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
    if (!dotRef.current || !animateMotion) return;
    
    const target = getTargetBoxId();
    if (!target) return;
    
    // Observe when the dot finishes its animation
    const handleAnimationIteration = () => {
      // When the animation completes, dispatch a custom event
      const collisionEvent = new CustomEvent('dotCollision', {
        detail: { 
          targetId: target,
          dotColor: color,
          sourceId: id
        }
      });
      window.dispatchEvent(collisionEvent);
    };
    
    // Add event listeners
    const dotElement = dotRef.current;
    dotElement.addEventListener('animationiteration', handleAnimationIteration);
    
    return () => {
      if (dotElement) {
        dotElement.removeEventListener('animationiteration', handleAnimationIteration);
      }
    };
  }, [animateMotion, color, id]);
  
  if (animateMotion) {
    return (
      <g>
        <path
          d={path}
          fill="none"
          stroke={color}
          strokeWidth="1.5"
          strokeDasharray="4 2"
          opacity="0.6"
          ref={pathRef}
        />
        
        <motion.circle
          ref={dotRef}
          r="4"
          fill={color}
          animate={{
            offsetDistance: ["0%", "100%"]
          }}
          transition={{ 
            duration: animationDuration,
            repeat: Infinity,
            ease: "linear",
            delay: animationIndex * 0.1
          }}
          style={{
            offsetPath: `path('${path}')`,
            zIndex: 100
          }}
        />
      </g>
    );
  }
  
  // For dots that move with CSS animation
  if (dotPosition && animationDirection) {
    return (
      <g>
        <path
          d={path}
          fill="none"
          stroke={color}
          strokeWidth="1.5"
          strokeDasharray="4 2"
          opacity="0.6"
        />
        
        <circle
          ref={dotRef}
          cx={dotPosition.x}
          cy={dotPosition.y}
          r="4"
          fill={color}
          style={{
            animation: `moveDot${animationDirection.charAt(0).toUpperCase() + animationDirection.slice(1)} 1.5s infinite linear`,
          }}
        />
      </g>
    );
  }
  
  // For static connection lines (no animation)
  return (
    <path
      d={path}
      fill="none"
      stroke={color}
      strokeWidth="1.5"
      strokeDasharray="4 2"
      opacity="0.8"
    />
  );
};

export default ConnectionLine;
