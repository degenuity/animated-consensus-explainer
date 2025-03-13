
import React, { useEffect, useRef, useState } from 'react';
import { motion } from 'framer-motion';
import SimpleBox from './SimpleBox';
import ComplexBox from './ComplexBox';
import { BoxProps } from './types';

const BoxComponent: React.FC<BoxProps> = (props) => {
  const boxRef = useRef<SVGGElement>(null);
  const [isHighlighted, setIsHighlighted] = useState(false);
  
  useEffect(() => {
    // For debugging, log the box title
    console.log(`Box mounted: ${props.title} with ID ${props.title.replace(/\s+/g, '-')}`);
    
    const handleDotCollision = (event: CustomEvent) => {
      const { targetId } = event.detail;
      
      // Check if this box is the target
      if (targetId === props.title.replace(/\s+/g, '-') || 
          (props.subitems && props.subitems.some(item => 
            typeof item !== 'string' && item.id === targetId))) {
        
        // Debug log for matched collision
        console.log(`✨ HIGHLIGHT TRIGGERED for box: ${props.title}`);
        
        // Highlight the box
        setIsHighlighted(true);
        
        // Reset after animation duration - shorter now for more immediate effect
        setTimeout(() => {
          setIsHighlighted(false);
        }, 400); // Shorter duration for a more subtle effect
      }
    };
    
    // Add event listener
    window.addEventListener('dotCollision', handleDotCollision as EventListener);
    
    // Clean up
    return () => {
      window.removeEventListener('dotCollision', handleDotCollision as EventListener);
    };
  }, [props.title, props.subitems]);
  
  // Generate styling properties based on highlight state
  const getHighlightColor = () => {
    // Create more subtle complementary colors
    const baseColor = props.color || props.borderColor || '#3B82F6';
    
    if (baseColor.includes('3B82F6')) return "#8B5CF6"; // Purple for blue boxes
    if (baseColor.includes('10B981')) return "#06B6D4"; // Cyan for green boxes
    if (baseColor.includes('EAB308')) return "#F97316"; // Orange for yellow boxes
    return "#EC4899"; // Pink fallback
  };
  
  const borderColor = isHighlighted 
    ? getHighlightColor()
    : props.borderColor || props.color || '#3B82F6';
  
  const borderWidth = isHighlighted ? "2" : "1.5"; // More subtle difference
  const filter = isHighlighted ? "drop-shadow(0 0 3px rgba(255, 255, 255, 0.4))" : "none"; // More subtle glow
  
  // Determine if this is a complex or simple box
  const isComplex = props.subitems && props.subitems.length > 0;
  
  // Set up the props for the correct box component
  const boxStyleProps = {
    ...props,
    borderColor,
    borderWidth,
  };
  
  return (
    <motion.g
      ref={boxRef}
      data-id={props.title.replace(/\s+/g, '-')}
      initial={{ opacity: 0 }}
      animate={{ 
        opacity: 1,
        scale: isHighlighted ? [1, 1.01, 1] : 1, // More subtle scale animation when highlighted
      }}
      transition={{ 
        duration: 0.3, 
        delay: props.animationIndex ? props.animationIndex * 0.1 : 0,
        scale: {
          duration: 0.3, // Shorter duration for more immediate effect
          ease: "easeInOut",
          times: [0, 0.5, 1]
        }
      }}
      style={{
        filter,
        transition: 'filter 0.2s ease, stroke 0.2s ease, stroke-width 0.2s ease'
      }}
    >
      {isComplex ? (
        <ComplexBox boxProps={boxStyleProps} />
      ) : (
        <SimpleBox boxProps={boxStyleProps} />
      )}
    </motion.g>
  );
};

export default BoxComponent;
