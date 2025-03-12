
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
        <span className="text-lg text-white">block production eligibility</span>
      </div>
      
      <div className="grid grid-cols-3 gap-3">
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
          <motion.div 
            initial={{ opacity: 0 }}
            animate={{ opacity: 0.2 }}
            transition={{ duration: 0.5, delay: 0.8 }}
            className="absolute inset-0 flex items-center justify-center text-gray-500 font-bold text-xl"
          >
            ×
          </motion.div>
        </motion.div>
        <motion.div 
          initial={{ opacity: 0, y: 10 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.3, delay: 0.7 }}
          className="relative border border-blue-500/70 bg-gray-800/50 p-3 rounded"
        >
          <div className="text-blue-400 text-sm font-medium">performance/ reputation</div>
          <div className="text-xs text-gray-300 mt-1">from recorded history</div>
          <motion.div 
            initial={{ opacity: 0 }}
            animate={{ opacity: 0.2 }}
            transition={{ duration: 0.5, delay: 0.9 }}
            className="absolute inset-0 flex items-center justify-center text-gray-500 font-bold text-xl"
          >
            ×
          </motion.div>
        </motion.div>
      </div>
    </div>
  </motion.div>
);

export default BlockProductionEligibilityBox;
