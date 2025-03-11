
import React from 'react';
import { motion } from "framer-motion";
import { ArrowRight } from "lucide-react";

interface AggregationAnimationProps {
  onComplete?: () => void;
}

export const AggregationAnimation: React.FC<AggregationAnimationProps> = ({ onComplete }) => {
  return (
    <>
      <motion.div
        className="absolute"
        style={{ 
          top: "50%",
          right: "25%", 
          transform: "translateY(-50%)",
          zIndex: 10 
        }}
        initial={{ opacity: 0, x: 0 }}
        animate={{
          opacity: [0, 1, 1, 0],
          x: [0, 100, 100, 100],
          scale: [0.8, 1.2, 1.2, 0.8]
        }}
        transition={{
          duration: 3,
          times: [0, 0.3, 0.8, 1],
          repeat: 0,
          delay: 1.5,
          onComplete: onComplete
        }}
      >
        <div className="h-10 w-10 px-2 py-1 rounded-md bg-indigo-500 flex items-center justify-center shadow-lg shadow-indigo-500/30">
          <span className="text-white font-bold text-xs">Agg</span>
        </div>
      </motion.div>
      
      <motion.div
        className="absolute"
        style={{ 
          top: "50%",
          left: "55%",
          transform: "translateY(-50%)",
          zIndex: 5 
        }}
        animate={{
          x: [0, 10, 0],
          opacity: [0.5, 1, 0.5]
        }}
        transition={{ 
          duration: 2,
          repeat: Infinity 
        }}
      >
        <ArrowRight className="text-indigo-400" size={20} />
      </motion.div>
    </>
  );
};
