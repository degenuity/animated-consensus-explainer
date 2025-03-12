
import React from 'react';
import { motion } from "framer-motion";
import { Tag } from "lucide-react";

const NetworkUsageCostsBox = () => (
  <motion.div
    initial={{ opacity: 0, y: 30 }}
    animate={{ opacity: 1, y: 0 }}
    transition={{ duration: 0.7, delay: 0.3 }}
    className="w-full"
  >
    <div className="bg-gray-900/70 border border-gray-700 p-4 rounded-lg h-full">
      <div className="flex items-center mb-3">
        <Tag className="h-5 w-5 text-blue-400 mr-2" />
        <span className="text-xl text-white">network usage costs</span>
      </div>
      
      <div className="space-y-1">
        <motion.div 
          initial={{ opacity: 0, x: -10 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.3, delay: 0.4 }}
          className="border border-yellow-500/70 bg-gray-800/50 p-2 rounded text-sm text-white"
        >
          base fees
        </motion.div>
        
        <motion.div 
          initial={{ opacity: 0, scale: 0.95 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.5, delay: 0.5 }}
          className="bg-gray-900/90 border border-gray-700 p-3 rounded mt-4"
        >
          <div className="text-white mb-2">block rewards</div>
          <div className="space-y-2">
            <motion.div 
              initial={{ opacity: 0, x: -5 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.3, delay: 0.6 }}
              className="border border-green-500/70 bg-gray-800/50 p-2 rounded text-xs text-white"
            >
              priority fees
            </motion.div>
            <motion.div 
              initial={{ opacity: 0, x: -5 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.3, delay: 0.7 }}
              className="border border-green-500/70 bg-gray-800/50 p-2 rounded text-xs text-white"
            >
              MEV
            </motion.div>
          </div>
        </motion.div>
      </div>
    </div>
  </motion.div>
);

export default NetworkUsageCostsBox;
