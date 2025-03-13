
import React from 'react';
import { motion } from "framer-motion";
import { Lock } from "lucide-react";

const TotalStakeBoxV2 = () => {
  return (
    <div className="bg-[#1a2233] border border-[#2a3349] p-4 rounded-lg">
      {/* Title section */}
      <div className="flex items-center justify-center mb-3">
        <Lock className="h-5 w-5 text-blue-400 mr-2" />
        <span className="text-xl text-white">total stake</span>
      </div>
      
      {/* Content section */}
      <div className="px-4 py-3 flex flex-col space-y-6">
        {/* First item */}
        <motion.div 
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.3, delay: 0.3 }}
          className="border border-blue-500/70 bg-[#141b29] p-3 rounded text-sm text-white"
        >
          delegated stake
        </motion.div>
        
        {/* Second item */}
        <motion.div 
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.3, delay: 0.4 }}
          className="border border-blue-500/70 bg-[#141b29] p-3 rounded text-sm text-white"
        >
          own stake
        </motion.div>
      </div>
    </div>
  );
};

export default TotalStakeBoxV2;
