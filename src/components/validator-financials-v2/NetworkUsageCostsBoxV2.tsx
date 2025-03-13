
import React from 'react';
import { motion } from "framer-motion";
import { Tag } from "lucide-react";

const NetworkUsageCostsBoxV2 = () => {
  return (
    <div className="bg-[#1a2233] border border-[#2a3349] p-4 rounded-lg">
      {/* Title section */}
      <div className="flex items-center justify-center mb-3">
        <Tag className="h-5 w-5 text-blue-400 mr-2" />
        <span className="text-xl text-white">network usage costs</span>
      </div>
      
      {/* Content section with explicit spacing */}
      <div className="px-4 py-3 flex flex-col space-y-6">
        {/* First item */}
        <motion.div 
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.3, delay: 0.4 }}
          className="border border-yellow-500/70 bg-[#141b29] p-3 rounded text-sm text-white"
        >
          base fees
        </motion.div>
        
        {/* Block rewards container */}
        <motion.div 
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.5, delay: 0.5 }}
          className="relative"
        >
          <div className="bg-[#141b29] border border-[#2a3349] p-3 rounded">
            <div className="text-white mb-5">block rewards</div>
            
            <div className="px-2 py-2 flex flex-col space-y-6">
              {/* First nested item */}
              <motion.div 
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ duration: 0.3, delay: 0.6 }}
                className="border border-green-500/70 bg-[#101620] p-2 rounded text-xs text-white"
              >
                priority fees
              </motion.div>
              
              {/* Second nested item */}
              <motion.div 
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ duration: 0.3, delay: 0.7 }}
                className="border border-green-500/70 bg-[#101620] p-2 rounded text-xs text-white"
              >
                MEV
              </motion.div>
            </div>
          </div>
        </motion.div>
      </div>
    </div>
  );
};

export default NetworkUsageCostsBoxV2;
