
import React from 'react';
import { motion } from "framer-motion";
import { Database } from "lucide-react";

const InternalRewardsBoxV2 = () => {
  return (
    <div className="bg-[#1a2233] border border-[#2a3349] p-4 rounded-lg">
      <div className="flex items-center justify-center mb-4">
        <Database className="h-5 w-5 text-blue-400 mr-2" />
        <span className="text-xl text-white">internal rewards</span>
      </div>
      
      <div className="space-y-6 px-6">
        <motion.div 
          initial={{ opacity: 0, x: -10 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.3, delay: 0.3 }}
          className="border border-green-500/70 bg-[#141b29] p-4 rounded text-sm text-white"
        >
          commission
        </motion.div>
        <motion.div 
          initial={{ opacity: 0, x: -10 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.3, delay: 0.4 }}
          className="border border-green-500/70 bg-[#141b29] p-4 rounded text-sm text-white"
        >
          staking rewards
        </motion.div>
        <motion.div 
          initial={{ opacity: 0, x: -10 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.3, delay: 0.5 }}
          className="border border-green-500/70 bg-[#141b29] p-4 rounded text-sm text-white"
        >
          voting rewards
        </motion.div>
      </div>
    </div>
  );
};

export default InternalRewardsBoxV2;
