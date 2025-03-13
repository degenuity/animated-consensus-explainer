
import React from 'react';
import { motion } from "framer-motion";
import { Box } from "lucide-react";

const BlockProductionEligibilityBoxV2 = () => {
  return (
    <div className="bg-[#1a2233] border border-[#2a3349] p-4 rounded-lg">
      <div className="flex items-center justify-center mb-4">
        <Box className="h-5 w-5 text-blue-400 mr-2" />
        <span className="text-xl text-white">block production eligibility</span>
      </div>
      
      {/* Using grid with dramatically larger gap for more spacing */}
      <div className="grid grid-cols-5 gap-12 px-6 py-4">
        {/* First column */}
        <motion.div 
          initial={{ opacity: 0, y: 10 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.3, delay: 0.5 }}
          className="border border-blue-500/70 bg-[#141b29] p-4 rounded col-span-1"
          style={{ width: "110%" }} // Increased width by 10%
        >
          <div className="text-blue-400 text-sm font-medium px-1">stake weight</div>
          <div className="text-xs text-gray-300 mt-1 px-1">amount of XNT staked</div>
        </motion.div>

        {/* First operator */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.3, delay: 0.55 }}
          className="flex items-center justify-center"
        >
          <span className="text-[#0E7490] text-3xl font-normal">×</span>
        </motion.div>

        {/* Second column */}
        <motion.div 
          initial={{ opacity: 0, y: 10 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.3, delay: 0.6 }}
          className="border border-blue-500/70 bg-[#141b29] p-4 rounded col-span-1"
          style={{ width: "110%" }} // Increased width by 10%
        >
          <div className="text-blue-400 text-sm font-medium px-1">randomness</div>
          <div className="text-xs text-gray-300 mt-1 px-1">ACP anti-collusion protocol</div>
        </motion.div>
        
        {/* Second operator */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.3, delay: 0.65 }}
          className="flex items-center justify-center"
        >
          <span className="text-[#0E7490] text-3xl font-normal">×</span>
        </motion.div>
        
        {/* Third column */}
        <motion.div 
          initial={{ opacity: 0, y: 10 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.3, delay: 0.7 }}
          className="border border-blue-500/70 bg-[#141b29] p-4 rounded col-span-1"
          style={{ width: "110%" }} // Increased width by 10%
        >
          <div className="text-blue-400 text-sm font-medium px-1">performance</div>
          <div className="text-xs text-gray-300 mt-1 px-1">from recorded history</div>
        </motion.div>
      </div>
    </div>
  );
};

export default BlockProductionEligibilityBoxV2;
