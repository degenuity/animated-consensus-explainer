
import React from 'react';
import { motion } from "framer-motion";

export const AggregatedSignatureFlow: React.FC = () => {
  return (
    <motion.div
      className="absolute top-1/2 left-[43%] w-[15%] h-0.5 bg-gradient-to-r from-red-500 to-red-500/0"
      initial={{ scaleX: 0, opacity: 0 }}
      animate={{ 
        scaleX: 1,
        opacity: [0, 1, 0.5]
      }}
      transition={{ 
        duration: 1,
        repeat: Infinity,
        repeatDelay: 2
      }}
      style={{ transformOrigin: 'left' }}
    />
  );
};
