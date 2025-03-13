
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
      
      {/* Content section */}
      <div className="px-4 py-3 flex flex-col space-y-3"> {/* Further reduced space-y from 4 to 3 */}
        {/* Base fees item */}
        <motion.div 
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.3, delay: 0.4 }}
          className="border border-yellow-500/70 bg-[#141b29] p-3 rounded text-sm text-white text-left"
        >
          base fees
        </motion.div>
        
        {/* Block rewards container */}
        <motion.div 
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.5, delay: 0.5 }}
          className="border border-blue-500/70 bg-[#141b29] p-4 rounded"
        >
          {/* Block rewards title - now left-aligned */}
          <div className="text-white text-sm text-left mb-5"> {/* Changed text-lg to text-sm and increased margin-bottom from 3 to 5 */}
            block rewards
          </div>
            
          {/* Block rewards content items */}
          <div className="flex flex-col space-y-10"> {/* Increased space-y from 6 to 10 for even more separation */}
            {/* Priority fees - text left-aligned */}
            <motion.div 
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ duration: 0.3, delay: 0.6 }}
              className="border border-green-500/70 bg-[#101620] p-2 rounded text-sm text-white text-left"
            >
              priority fees
            </motion.div>
              
            {/* MEV - text left-aligned */}
            <motion.div 
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ duration: 0.3, delay: 0.7 }}
              className="border border-green-500/70 bg-[#101620] p-2 rounded text-sm text-white text-left"
            >
              MEV
            </motion.div>
          </div>
        </motion.div>
      </div>
    </div>
  );
};

export default NetworkUsageCostsBoxV2;
