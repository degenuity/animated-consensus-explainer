
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
    let hasTriggeredForCycle = false; // Track if we've already triggered for this animation cycle
    
    // Improved function to dispatch the custom event with debouncing
    const triggerCollisionEvent = () => {
      const now = Date.now();
      if (now - lastTriggerTime < MIN_INTERVAL || hasTriggeredForCycle) return;
      
      lastTriggerTime = now;
      hasTriggeredForCycle = true; // Mark as triggered for this cycle
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
      
      // Reset the trigger flag after the animation duration
      setTimeout(() => {
        hasTriggeredForCycle = false;
      }, animationDuration * 1000);
    };
    
    const animationElement = animationRef.current;
    
    // Listen specifically for the end of animation
    const handleAnimationEnd = () => {
      // Only trigger at the end of the animation
      triggerCollisionEvent();
    };
    
    // Track animation progress to detect when near the end
    let isNearEnd = false;
    const endThreshold = 0.95; // Consider 95% of the way as "near end"
    
    const handleAnimationUpdate = (event: any) => {
      // Skip if we've already triggered
      if (hasTriggeredForCycle) return;
      
      // If we have access to the event's progress value
      if (event && typeof event.progress === 'number') {
        // Only trigger when we're near the end
        if (event.progress >= endThreshold && !isNearEnd) {
          isNearEnd = true;
          triggerCollisionEvent();
        } else if (event.progress < endThreshold) {
          isNearEnd = false;
        }
      }
    };
    
    if (animationElement) {
      // Add SVG-specific event listeners for animation end
      animationElement.addEventListener('endEvent', handleAnimationEnd);
      animationElement.addEventListener('end', handleAnimationEnd);
      
      // Listen for timeupdate which happens throughout the animation
      animationElement.addEventListener('timeupdate', handleAnimationUpdate);
      
      // Periodic check that only triggers near the expected end time
      // This is a fallback mechanism
      const checkInterval = animationDuration * 1000 / 10; // Check 10 times during the animation
      let startTime: number | null = null;
      
      const animationTimer = setInterval(() => {
        if (startTime === null) {
          startTime = Date.now();
          return;
        }
        
        const elapsed = Date.now() - startTime;
        const progress = elapsed / (animationDuration * 1000);
        
        // Only trigger when very close to the end of a cycle
        if (progress % 1 >= endThreshold && progress % 1 <= 1.0 && !hasTriggeredForCycle) {
          triggerCollisionEvent();
        }
        
        // Reset startTime for next cycle if we've completed a cycle
        if (progress >= 1.0) {
          startTime = Date.now();
          hasTriggeredForCycle = false;
        }
      }, checkInterval);
      
      return () => {
        clearInterval(animationTimer);
        
        if (animationElement) {
          animationElement.removeEventListener('endEvent', handleAnimationEnd);
          animationElement.removeEventListener('end', handleAnimationEnd);
          animationElement.removeEventListener('timeupdate', handleAnimationUpdate);
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
