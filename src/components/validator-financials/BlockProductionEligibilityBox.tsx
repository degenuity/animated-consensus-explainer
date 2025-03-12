
import React from 'react';
import { motion } from "framer-motion";
import { Box } from "lucide-react";

const BlockProductionEligibilityBox = () => (
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
          className="border border-blue-500/70 bg-gray-800/50 p-3 rounded"
        >
          <div className="text-blue-400 text-sm font-medium">stake weight</div>
          <div className="text-xs text-gray-300 mt-1">amount of XNT staked</div>
        </motion.div>
        <motion.div 
          initial={{ opacity: 0, y: 10 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.3, delay: 0.6 }}
          className="relative border border-blue-500/70 bg-gray-800/50 p-3 rounded"
        >
          <div className="text-blue-400 text-sm font-medium">randomness</div>
          <div className="text-xs text-gray-300 mt-1">ACP anti-collusion protocol</div>
          <div className="absolute right-4 top-1/2 transform -translate-y-1/2 text-gray-500 font-bold text-xl">
            ×
          </div>
        </motion.div>
        <motion.div 
          initial={{ opacity: 0, y: 10 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.3, delay: 0.7 }}
          className="relative border border-blue-500/70 bg-gray-800/50 p-3 rounded"
        >
          <div className="text-blue-400 text-sm font-medium">performance/ reputation</div>
          <div className="text-xs text-gray-300 mt-1">from recorded history</div>
          <div className="absolute right-4 top-1/2 transform -translate-y-1/2 text-gray-500 font-bold text-xl">
            ×
          </div>
        </motion.div>
      </div>
    </div>
  </motion.div>
);

export default BlockProductionEligibilityBox;
