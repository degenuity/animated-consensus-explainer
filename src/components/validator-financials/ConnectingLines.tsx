
import React from 'react';
import { motion } from "framer-motion";

const ConnectingLines = () => (
  <>
    {/* Inflation to Internal Rewards */}
    <div className="absolute top-[150px] left-[180px] h-[70px] w-[2px] bg-blue-500/80">
      <motion.div 
        className="absolute top-0 left-0 w-full h-[20px] bg-blue-400"
        animate={{ 
          y: [0, 70, 0],
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
    <div className="absolute top-[150px] right-[180px] h-[70px] w-[2px] bg-yellow-500/80">
      <motion.div 
        className="absolute top-0 left-0 w-full h-[20px] bg-yellow-400"
        animate={{ 
          y: [0, 70, 0],
          opacity: [0, 1, 0]
        }}
        transition={{ 
          duration: 2.5,
          repeat: Infinity,
          ease: "linear"
        }}
      />
    </div>

    {/* Total Stake to Internal Rewards - diagonal line from middle to left */}
    <div className="absolute top-[400px] left-[280px] w-[120px] h-[2px] bg-blue-500/80 transform rotate-[35deg] origin-left">
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

    {/* Total Stake to Network Usage Costs - diagonal line from middle to right */}
    <div className="absolute top-[400px] right-[280px] w-[120px] h-[2px] bg-yellow-500/80 transform -rotate-[35deg] origin-right">
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
    <div className="absolute top-[470px] left-[50%] h-[230px] w-[2px] bg-blue-500/80 transform -translate-x-1/2">
      <motion.div 
        className="absolute top-0 left-0 w-full h-[20px] bg-blue-400"
        animate={{ 
          y: [0, 230, 0],
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
    <div className="absolute top-[580px] left-[50%] bg-gray-500/30 rounded-full px-2 py-0.5 text-xs text-gray-300 transform -translate-x-1/2">
      50%
    </div>
    
    {/* 50% indicator for diagonal path to internal rewards */}
    <div className="absolute top-[370px] left-[330px] bg-gray-500/30 rounded-full px-2 py-0.5 text-xs text-gray-300 transform rotate-[35deg]">
      50%
    </div>
    
    {/* 50% indicator for diagonal path to network costs */}
    <div className="absolute top-[370px] right-[330px] bg-gray-500/30 rounded-full px-2 py-0.5 text-xs text-gray-300 transform -rotate-[35deg]">
      50%
    </div>
  </>
);

export default ConnectingLines;
