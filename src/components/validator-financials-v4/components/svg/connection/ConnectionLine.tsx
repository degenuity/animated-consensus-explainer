
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
    
    // Track animation state to prevent duplicate events
    let lastTriggerTime = 0;
    const MIN_INTERVAL = 100; // Minimum milliseconds between triggers to prevent duplicates
    
    // Improved function to dispatch the custom event with debouncing
    const triggerCollisionEvent = () => {
      const now = Date.now();
      if (now - lastTriggerTime < MIN_INTERVAL) return;
      
      lastTriggerTime = now;
      const targetBoxId = target;
      console.log(`🔵 Dot collision event: ${id} → ${targetBoxId}`);
      
      const collisionEvent = new CustomEvent('dotCollision', {
        detail: { 
          targetId: targetBoxId,
          dotColor: color,
          sourceId: id,
          timestamp: now
        },
        bubbles: true,
        cancelable: true,
      });
      
      // Dispatch the event on window
      window.dispatchEvent(collisionEvent);
    };
    
    // Use both web standard event names and SVG-specific event names
    const animationElement = animationRef.current;
    
    // Event listener for standard web animation end
    const handleAnimationEnd = () => {
      triggerCollisionEvent();
    };
    
    // SVG-specific animateMotion events
    if (animationElement) {
      // Add SVG-specific event listeners
      animationElement.addEventListener('endEvent', handleAnimationEnd);
      animationElement.addEventListener('end', handleAnimationEnd);
      
      // For more precise timing, listen to the standard 'animationend' event on the circle
      if (dotRef.current) {
        dotRef.current.addEventListener('animationend', handleAnimationEnd);
      }
      
      // Observe the dot's position using MutationObserver
      // This helps detect when the dot reaches the end of the path
      let lastSegmentReached = false;
      const observer = new MutationObserver((mutations) => {
        for (const mutation of mutations) {
          if (mutation.type === 'attributes' && 
              (mutation.attributeName === 'transform' || mutation.attributeName === 'cx' || mutation.attributeName === 'cy')) {
            
            // When dot is at the end of the path (determined by transform value)
            // This is a heuristic approach to detect end of path
            const transform = dotRef.current?.getAttribute('transform');
            if (transform && !lastSegmentReached) {
              // Use heuristic to detect if we're near the end of the path
              // Note: This is not perfect but helps improve timing
              lastSegmentReached = true;
              triggerCollisionEvent();
              
              // Reset after a short delay to allow for next animation cycle
              setTimeout(() => {
                lastSegmentReached = false;
              }, animationDuration * 1000 * 0.8);
            }
          }
        }
      });
      
      if (dotRef.current) {
        observer.observe(dotRef.current, { attributes: true });
      }
      
      // Periodic check as a fallback, but with improved timing
      // Only trigger if we haven't detected end through other methods
      const timer = setInterval(() => {
        // Only trigger if no event was recently triggered
        if (Date.now() - lastTriggerTime > animationDuration * 1000 * 0.8) {
          triggerCollisionEvent();
        }
      }, animationDuration * 1000);
      
      return () => {
        clearInterval(timer);
        observer.disconnect();
        
        if (animationElement) {
          animationElement.removeEventListener('endEvent', handleAnimationEnd);
          animationElement.removeEventListener('end', handleAnimationEnd);
        }
        
        if (dotRef.current) {
          dotRef.current.removeEventListener('animationend', handleAnimationEnd);
        }
      };
    }
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
            id={`animation-${id || 'unknown'}`}
          />
        </circle>
      )}
    </g>
  );
};

export default ConnectionLine;
