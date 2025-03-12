
import React from 'react';
import { motion } from 'framer-motion';
import FactorBox from './FactorBox';

const FactorBoxes: React.FC = () => {
  return (
    <>
      {/* Block Production Eligibility Factors - centered below Block Production box */}
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 0.6, delay: 1.2 }}
        className="absolute left-1/2 top-[420px] transform -translate-x-1/2 flex flex-col gap-4"
      >
        {/* Stake Weight - Full width */}
        <motion.div 
          initial={{ opacity: 0, y: 10 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.4, delay: 1.4 }}
          className="w-[500px]"
        >
          <div className="bg-[#1a1f31] border border-[#2a3349] rounded-lg p-4">
            <div className="flex items-center mb-2">
              <span className="text-blue-400 text-base font-medium">stake weight</span>
            </div>
            <div className="text-xs text-gray-400">amount of XNT staked</div>
          </div>
        </motion.div>
        
        {/* Two smaller boxes in a row */}
        <div className="flex gap-4 justify-between">
          <motion.div 
            initial={{ opacity: 0, y: 10 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.4, delay: 1.6 }}
            className="flex-1 relative"
          >
            <div className="bg-[#1a1f31] border border-[#2a3349] rounded-lg p-4">
              <div className="flex items-center mb-2">
                <span className="text-blue-400 text-base font-medium">randomness</span>
              </div>
              <div className="text-xs text-gray-400">ACP anti-collusion protocol</div>
              <div className="absolute right-4 top-1/2 transform -translate-y-1/2 text-gray-500 text-xl">
                ×
              </div>
            </div>
          </motion.div>
          
          <motion.div 
            initial={{ opacity: 0, y: 10 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.4, delay: 1.8 }}
            className="flex-1 relative"
          >
            <div className="bg-[#1a1f31] border border-[#2a3349] rounded-lg p-4">
              <div className="flex items-center mb-2">
                <span className="text-blue-400 text-base font-medium">performance</span>
              </div>
              <div className="text-xs text-gray-400">from recorded history</div>
              <div className="absolute right-4 top-1/2 transform -translate-y-1/2 text-gray-500 text-xl">
                ×
              </div>
            </div>
          </motion.div>
        </div>
      </motion.div>
    </>
  );
};

export default FactorBoxes;
