
import React, { useEffect, useRef } from 'react';
import { motion, useAnimation } from "framer-motion";

interface AggregationAnimationProps {
  onComplete?: () => void;
}

export const AggregationAnimation: React.FC<AggregationAnimationProps> = ({ onComplete }) => {
  const controls = useAnimation();
  const hasTriggeredCallback = useRef(false);
  
  useEffect(() => {
    const animate = async () => {
      // Move the box to position where its right side will touch the leader box's left side
      // Stopping at x:20 as requested
      await controls.start({
        opacity: [0, 1, 1],
        x: [0, 20, 20], // Keeping x position at 20
        scale: [0.8, 1.2, 1]
      });
      
      // Ensure callback is only triggered once
      if (!hasTriggeredCallback.current && onComplete) {
        hasTriggeredCallback.current = true;
        onComplete();
      }
    };
    
    animate();
    
    // Reset the ref when the component unmounts or gets updated
    return () => {
      hasTriggeredCallback.current = false;
    };
  }, [controls, onComplete]);

  return (
    <motion.div
      className="absolute"
      style={{ 
        top: "50%",
        right: "25%", 
        transform: "translateY(-50%)",
        zIndex: 10 
      }}
      initial={{ opacity: 0, x: 0 }}
      animate={controls}
      transition={{
        duration: 5, // Slower animation
        times: [0, 0.3, 1],
        repeat: 0,
        delay: 1.5,
      }}
    >
      <motion.div 
        className="h-10 w-10 px-2 py-1 rounded-md bg-indigo-500 flex items-center justify-center shadow-lg"
        animate={{ 
          boxShadow: ["0px 0px 0px rgba(99, 102, 241, 0.3)", "0px 0px 15px rgba(99, 102, 241, 0.5)", "0px 0px 5px rgba(99, 102, 241, 0.3)"]
        }}
        transition={{ 
          duration: 2, 
          repeat: Infinity,
          repeatType: "reverse"
        }}
      >
        <motion.span 
          className="text-white font-bold text-xs"
          animate={{ 
            textShadow: ["0px 0px 0px rgba(255, 255, 255, 0)", "0px 0px 5px rgba(255, 255, 255, 0.7)", "0px 0px 0px rgba(255, 255, 255, 0)"] 
          }}
          transition={{ 
            duration: 1.5, 
            repeat: Infinity 
          }}
        >
          Agg
        </motion.span>
      </motion.div>
    </motion.div>
  );
};
