
import React, { useEffect, useRef } from 'react';
import { motion } from "framer-motion";
import { Box } from "lucide-react";

const BlockProductionEligibilityBox = () => {
  const stakeWeightRef = useRef<HTMLDivElement>(null);
  
  useEffect(() => {
    if (stakeWeightRef.current) {
      const rect = stakeWeightRef.current.getBoundingClientRect();
      console.log('Stake weight box coordinates:', {
        top: rect.top,
        left: rect.left,
        width: rect.width,
        height: rect.height,
        centerX: rect.left + rect.width / 2,
        centerY: rect.top,
        // Log exact top center
        topCenter: {
          x: rect.left + rect.width / 2,
          y: rect.top
        }
      });
    }
  }, []);

  return (
    <motion.div
      initial={{ opacity: 0, y: 30 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.7, delay: 0.4 }}
      className="w-full"
    >
      <div className="bg-gray-900/70 border border-gray-700 p-4 rounded-lg h-full">
        <div className="flex items-center mb-4">
          <Box className="h-5 w-5 text-blue-400 mr-2" />
          <span className="text-xl text-white">block production eligibility</span>
        </div>
        
        <div className="grid grid-cols-3 gap-4">
          <motion.div 
            initial={{ opacity: 0, y: 10 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.3, delay: 0.5 }}
            id="stake-weight-box"
            ref={stakeWeightRef}
            className="border border-blue-500/70 bg-gray-800/50 p-3 rounded"
          >
            <div className="text-blue-400 text-sm font-medium">stake weight</div>
            <div className="text-xs text-gray-300 mt-1">amount of XNT staked</div>
          </motion.div>
          <motion.div 
            initial={{ opacity: 0, y: 10 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.3, delay: 0.6 }}
            className="border border-blue-500/70 bg-gray-800/50 p-3 rounded"
          >
            <div className="text-blue-400 text-sm font-medium">randomness</div>
            <div className="text-xs text-gray-300 mt-1">ACP anti-collusion</div>
          </motion.div>
          <motion.div 
            initial={{ opacity: 0, y: 10 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.3, delay: 0.7 }}
            className="border border-blue-500/70 bg-gray-800/50 p-3 rounded"
          >
            <div className="text-blue-400 text-sm font-medium">performance</div>
            <div className="text-xs text-gray-300 mt-1">from recorded history</div>
          </motion.div>
        </div>
      </div>
    </motion.div>
  );
};

export default BlockProductionEligibilityBox;
