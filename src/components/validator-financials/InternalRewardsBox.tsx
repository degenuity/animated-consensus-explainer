
import React from 'react';
import { motion } from "framer-motion";
import { Database } from "lucide-react";

const InternalRewardsBox = () => (
  <motion.div
    initial={{ opacity: 0, y: 30 }}
    animate={{ opacity: 1, y: 0 }}
    transition={{ duration: 0.7, delay: 0.1 }}
    className="w-full"
  >
    <div className="bg-gray-900/70 border border-gray-700 p-4 rounded-lg h-full">
      <div className="flex items-center mb-3">
        <Database className="h-5 w-5 text-blue-400 mr-2" />
        <span className="text-xl text-white">internal rewards</span>
      </div>
      
      <div className="space-y-2">
        <motion.div 
          initial={{ opacity: 0, x: -10 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.3, delay: 0.3 }}
          className="border border-green-500/70 bg-gray-800/50 p-2 rounded text-sm text-white"
        >
          commission
        </motion.div>
        <motion.div 
          initial={{ opacity: 0, x: -10 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.3, delay: 0.4 }}
          className="border border-green-500/70 bg-gray-800/50 p-2 rounded text-sm text-white"
        >
          staking rewards
        </motion.div>
        <motion.div 
          initial={{ opacity: 0, x: -10 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.3, delay: 0.5 }}
          className="border border-green-500/70 bg-gray-800/50 p-2 rounded text-sm text-white"
        >
          voting rewards
        </motion.div>
      </div>
    </div>
  </motion.div>
);

export default InternalRewardsBox;
