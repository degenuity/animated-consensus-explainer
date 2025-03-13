
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
      
      {/* Using grid with larger gap for more spacing */}
      <div className="grid grid-cols-3 gap-12 px-6 py-4">
        {/* First column */}
        <motion.div 
          initial={{ opacity: 0, y: 10 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.3, delay: 0.6 }}
          className="border border-yellow-500/70 bg-[#141b29] p-3 rounded col-span-1"
        >
          <div className="text-yellow-400 text-sm font-medium">operational costs</div>
          <div className="text-xs text-gray-300 mt-1">only cost is server</div>
        </motion.div>
        
        {/* Middle column with operator */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.3, delay: 0.65 }}
          className="flex items-center justify-center"
        >
          <span className="text-[#8E9196] text-2xl font-normal">+</span>
        </motion.div>
        
        {/* Third column */}
        <motion.div 
          initial={{ opacity: 0, y: 10 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.3, delay: 0.7 }}
          className="border border-green-500/70 bg-[#141b29] p-3 rounded col-span-1"
        >
          <div className="text-green-400 text-sm font-medium">total validator rewards</div>
          <div className="text-xs text-gray-300 mt-1">aggregate</div>
        </motion.div>
      </div>
    </div>
  );
};

export default ProfitabilityBoxV2;
