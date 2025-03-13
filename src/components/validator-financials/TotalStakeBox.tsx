
import React, { useEffect, useRef } from 'react';
import { motion } from "framer-motion";
import { Lock } from "lucide-react";

const TotalStakeBox = () => {
  const boxRef = useRef<HTMLDivElement>(null);
  
  useEffect(() => {
    if (boxRef.current) {
      const rect = boxRef.current.getBoundingClientRect();
      console.log('Total stake box coordinates:', {
        bottom: rect.bottom,
        left: rect.left,
        width: rect.width,
        height: rect.height,
        centerX: rect.left + rect.width / 2,
        centerY: rect.bottom,
        // Log exact bottom center
        bottomCenter: {
          x: rect.left + rect.width / 2,
          y: rect.bottom
        }
      });
    }
  }, []);

  return (
    <motion.div
      ref={boxRef}
      initial={{ opacity: 0, y: 30 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.6, delay: 0.1 }}
      className="w-full"
    >
      <div className="bg-gray-900/70 border border-gray-700 p-4 rounded-lg h-full">
        <div className="flex items-center mb-3">
          <Lock className="h-5 w-5 text-blue-400 mr-2" />
          <span className="text-xl text-white">total stake</span>
        </div>
        
        <div className="space-y-2">
          <motion.div 
            initial={{ opacity: 0, x: -10 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.3, delay: 0.3 }}
            className="border border-blue-500/70 bg-gray-800/50 p-2 rounded text-sm text-white"
          >
            delegated stake
          </motion.div>
          <motion.div 
            initial={{ opacity: 0, x: -10 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.3, delay: 0.4 }}
            className="border border-blue-500/70 bg-gray-800/50 p-2 rounded text-sm text-white"
          >
            own stake
          </motion.div>
        </div>
      </div>
    </motion.div>
  );
};

export default TotalStakeBox;
