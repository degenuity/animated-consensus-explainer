
import React from 'react';
import { motion } from "framer-motion";

const ConnectingLines = () => (
  <>
    {/* Inflation to Internal Rewards */}
    <div className="absolute top-[150px] left-[180px] h-[100px] w-[2px] bg-blue-500/80">
      <motion.div 
        className="absolute top-0 left-0 w-full h-[20px] bg-blue-400"
        animate={{ 
          y: [0, 100, 0],
          opacity: [0, 1, 0]
        }}
        transition={{ 
          duration: 2,
          repeat: Infinity,
          ease: "linear"
        }}
      />
    </div>

    {/* Deflation to Network Usage Costs */}
    <div className="absolute top-[150px] right-[180px] h-[100px] w-[2px] bg-yellow-500/80">
      <motion.div 
        className="absolute top-0 left-0 w-full h-[20px] bg-yellow-400"
        animate={{ 
          y: [0, 100, 0],
          opacity: [0, 1, 0]
        }}
        transition={{ 
          duration: 2.5,
          repeat: Infinity,
          ease: "linear"
        }}
      />
    </div>

    {/* Total Stake to Internal Rewards - diagonal line */}
    <div className="absolute top-[300px] left-[330px] w-[120px] h-[2px] bg-blue-500/80 transform -rotate-[25deg]">
      <motion.div 
        className="absolute top-0 left-0 h-full w-[20px] bg-blue-400"
        animate={{ 
          x: [0, 120, 0],
          opacity: [0, 1, 0]
        }}
        transition={{ 
          duration: 2,
          repeat: Infinity,
          ease: "linear"
        }}
      />
    </div>

    {/* Total Stake to Network Usage Costs - diagonal line */}
    <div className="absolute top-[300px] right-[330px] w-[120px] h-[2px] bg-yellow-500/80 transform rotate-[25deg]">
      <motion.div 
        className="absolute top-0 right-0 h-full w-[20px] bg-yellow-400"
        animate={{ 
          x: [0, -120, 0],
          opacity: [0, 1, 0]
        }}
        transition={{ 
          duration: 2.5,
          repeat: Infinity,
          ease: "linear"
        }}
      />
    </div>

    {/* Internal Rewards to Block Production Eligibility - vertical */}
    <div className="absolute top-[320px] left-[180px] h-[380px] w-[2px] bg-green-500/80">
      <motion.div 
        className="absolute top-0 left-0 w-full h-[20px] bg-green-400"
        animate={{ 
          y: [0, 380, 0],
          opacity: [0, 1, 0]
        }}
        transition={{ 
          duration: 3,
          repeat: Infinity,
          ease: "linear"
        }}
      />
    </div>

    {/* Network Usage Costs to Profitability - vertical */}
    <div className="absolute top-[320px] right-[180px] h-[380px] w-[2px] bg-green-500/80">
      <motion.div 
        className="absolute top-0 left-0 w-full h-[20px] bg-green-400"
        animate={{ 
          y: [0, 380, 0],
          opacity: [0, 1, 0]
        }}
        transition={{ 
          duration: 2.6,
          repeat: Infinity,
          ease: "linear"
        }}
      />
    </div>
    
    {/* Total Stake to Block Production Eligibility - vertical */}
    <div className="absolute top-[420px] left-[50%] h-[280px] w-[2px] bg-blue-500/80 transform -translate-x-1/2">
      <motion.div 
        className="absolute top-0 left-0 w-full h-[20px] bg-blue-400"
        animate={{ 
          y: [0, 280, 0],
          opacity: [0, 1, 0]
        }}
        transition={{ 
          duration: 4,
          repeat: Infinity,
          ease: "linear"
        }}
      />
    </div>

    {/* 50% horizontal indicator near network usage costs */}
    <div className="absolute top-[300px] right-[390px] w-[40px] h-[2px] bg-gray-500/50">
      <div className="absolute top-[-12px] left-[10px] bg-gray-500/30 rounded-full px-2 py-0.5 text-xs text-gray-300">
        50%
      </div>
    </div>
    
    {/* 50% indicator for bottom path */}
    <div className="absolute top-[550px] left-[50%] bg-gray-500/30 rounded-full px-2 py-0.5 text-xs text-gray-300 transform -translate-x-1/2">
      50%
    </div>
  </>
);

export default ConnectingLines;
