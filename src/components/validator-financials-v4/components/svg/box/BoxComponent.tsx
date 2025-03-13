
import React, { useEffect, useRef, useState } from 'react';
import { motion } from 'framer-motion';
import SimpleBox from './SimpleBox';
import ComplexBox from './ComplexBox';
import { BoxProps } from './types';

const BoxComponent: React.FC<BoxProps> = (props) => {
  const boxRef = useRef<SVGGElement>(null);
  const [isHighlighted, setIsHighlighted] = useState(false);
  
  useEffect(() => {
    const handleDotCollision = (event: CustomEvent) => {
      const { targetId } = event.detail;
      
      // Check if this box is the target
      if (targetId === props.title.replace(/\s+/g, '-') || 
          (props.subitems && props.subitems.some(item => 
            typeof item !== 'string' && item.id === targetId))) {
        
        // Highlight the box
        setIsHighlighted(true);
        
        // Reset after animation duration
        setTimeout(() => {
          setIsHighlighted(false);
        }, 600);
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
    // Create complementary colors for different box types
    const baseColor = props.color || props.borderColor || '#3B82F6';
    
    if (baseColor.includes('3B82F6')) return "#8B5CF6"; // Purple for blue boxes
    if (baseColor.includes('10B981')) return "#06B6D4"; // Cyan for green boxes
    if (baseColor.includes('EAB308')) return "#F97316"; // Orange for yellow boxes
    return "#EC4899"; // Pink fallback
  };
  
  const borderColor = isHighlighted 
    ? getHighlightColor()
    : props.borderColor || props.color || '#3B82F6';
  
  const borderWidth = isHighlighted ? "2.5" : "1.5";
  const filter = isHighlighted ? "drop-shadow(0 0 4px rgba(255, 255, 255, 0.5))" : "none";
  
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
      animate={{ opacity: 1 }}
      transition={{ 
        duration: 0.3, 
        delay: props.animationIndex ? props.animationIndex * 0.1 : 0
      }}
      style={{
        filter,
        transition: 'filter 0.3s ease'
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
