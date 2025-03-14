
import React from 'react';
import { motion } from "framer-motion";
import { Percent } from "lucide-react";

const ProfitabilityBoxV2 = () => {
  return (
    <div className="bg-[#1a2233] border border-[#2a3349] p-4 rounded-lg">
      <div className="flex items-center justify-center mb-4">
        <Percent className="h-5 w-5 text-blue-400 mr-2" />
        <span className="text-xl text-white">profitability</span>
      </div>
      
      {/* Using grid with dramatically larger gap for more spacing */}
      <div className="grid grid-cols-3 gap-16 px-6 py-4">
        {/* First column - Now showing total validator rewards (swapped) */}
        <motion.div 
          initial={{ opacity: 0, y: 10 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.3, delay: 0.6 }}
          className="border border-green-500/70 bg-[#141b29] p-3 rounded col-span-1"
          style={{ width: "170%" }} // Increased width by 50% (from 120% to 170%)
        >
          <div className="text-green-400 text-sm font-medium">total validator rewards</div>
          <div className="text-xs text-gray-300 mt-1">aggregate</div>
        </motion.div>
        
        {/* Middle column with operator - Changed from + to - */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.3, delay: 0.65 }}
          className="flex items-center justify-center"
        >
          <span className="text-[#8E9196] text-3xl font-normal">-</span>
        </motion.div>
        
        {/* Third column - Now showing operational costs (swapped) */}
        <motion.div 
          initial={{ opacity: 0, y: 10 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.3, delay: 0.7 }}
          className="border border-yellow-500/70 bg-[#141b29] p-3 rounded col-span-1"
          style={{ width: "120%" }} // Kept the original width (120%)
        >
          <div className="text-yellow-400 text-sm font-medium">operational costs</div>
          <div className="text-xs text-gray-300 mt-1">only cost is server</div>
        </motion.div>
      </div>
    </div>
  );
};

export default ProfitabilityBoxV2;
