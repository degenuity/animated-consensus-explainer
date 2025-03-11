
import React from 'react';
import { motion } from "framer-motion";
import { ArrowRight } from "lucide-react";

export const AggregationAnimation: React.FC = () => {
  return (
    <>
      <motion.div
        className="absolute top-1/2 left-1/2 transform -translate-y-1/2 z-30"
        initial={{ opacity: 0, x: 0 }}
        animate={{
          opacity: [0, 1, 1, 0],
          x: [0, 100, 100, 100],
          scale: [0.8, 1.2, 1.2, 0.8]
        }}
        transition={{
          duration: 4,
          repeat: Infinity,
          repeatDelay: 1,
          delay: 1.5,
          times: [0, 0.3, 0.7, 1]
        }}
      >
        <div className="h-10 w-10 px-2 py-1 rounded-md bg-indigo-500 flex items-center justify-center shadow-lg shadow-indigo-500/30">
          <span className="text-white font-bold text-xs">Agg</span>
        </div>
      </motion.div>
      
      <motion.div
        className="absolute top-1/2 right-[43%] transform -translate-y-1/2"
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
