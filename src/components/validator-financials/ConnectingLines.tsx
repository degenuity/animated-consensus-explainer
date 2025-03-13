
import React from 'react';
import { motion } from "framer-motion";

const ConnectingLines = () => (
  <>
    {/* Inflation to Internal Rewards */}
    <div className="absolute top-[130px] left-[280px] w-[60px] h-[2px] bg-blue-500/80">
      <motion.div 
        className="absolute top-0 left-0 h-full w-[20px] bg-blue-400"
        animate={{ 
          x: [0, 60, 0],
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
    <div className="absolute top-[130px] right-[280px] w-[60px] h-[2px] bg-yellow-500/80">
      <motion.div 
        className="absolute top-0 right-0 h-full w-[20px] bg-yellow-400"
        animate={{ 
          x: [0, -60, 0],
          opacity: [0, 1, 0]
        }}
        transition={{ 
          duration: 2.5,
          repeat: Infinity,
          ease: "linear"
        }}
      />
    </div>

    {/* Total Stake to Internal Rewards - horizontal arrows */}
    <div className="absolute top-[270px] left-[340px] w-[100px] h-[2px] bg-blue-500/80">
      <motion.div 
        className="absolute top-0 left-0 h-full w-[20px] bg-blue-400"
        animate={{ 
          x: [100, 0, 100],
          opacity: [0, 1, 0]
        }}
        transition={{ 
          duration: 2,
          repeat: Infinity,
          ease: "linear"
        }}
      />
    </div>

    <div className="absolute top-[316px] left-[340px] w-[100px] h-[2px] bg-blue-500/80">
      <motion.div 
        className="absolute top-0 left-0 h-full w-[20px] bg-blue-400"
        animate={{ 
          x: [100, 0, 100],
          opacity: [0, 1, 0]
        }}
        transition={{ 
          duration: 2.5,
          repeat: Infinity,
          ease: "linear"
        }}
      />
    </div>

    {/* Network Usage Costs to Block Rewards - vertical */}
    <div className="absolute top-[320px] right-[180px] h-[70px] w-[2px] bg-green-500/80">
      <motion.div 
        className="absolute top-0 left-0 w-full h-[20px] bg-green-400"
        animate={{ 
          y: [0, 70, 0],
          opacity: [0, 1, 0]
        }}
        transition={{ 
          duration: 2.6,
          repeat: Infinity,
          ease: "linear"
        }}
      />
    </div>

    {/* Block Rewards to Profitability - vertical */}
    <div className="absolute top-[390px] right-[180px] h-[310px] w-[2px] bg-green-500/80">
      <motion.div 
        className="absolute top-0 left-0 w-full h-[20px] bg-green-400"
        animate={{ 
          y: [0, 310, 0],
          opacity: [0, 1, 0]
        }}
        transition={{ 
          duration: 3,
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

    {/* Total Stake to Block Production Eligibility - vertical - Updated with visually matching coordinates */}
    <div className="absolute top-[350px] right-[250px] w-[2px] h-[340px] bg-blue-500/80">
      <motion.div 
        className="absolute top-0 left-0 w-full h-[20px] bg-blue-400"
        animate={{ 
          y: [0, 340, 0],
          opacity: [0, 1, 0]
        }}
        transition={{ 
          duration: 4,
          repeat: Infinity,
          ease: "linear"
        }}
      />
    </div>

    {/* Network Usage Costs to Operational Costs (Profitability) */}
    <div className="absolute top-[700px] right-[220px] h-[80px] w-[2px] bg-yellow-500/80">
      <motion.div 
        className="absolute top-0 left-0 w-full h-[20px] bg-yellow-400"
        animate={{ 
          y: [0, 80, 0],
          opacity: [0, 1, 0]
        }}
        transition={{ 
          duration: 2.5,
          repeat: Infinity,
          ease: "linear"
        }}
      />
    </div>

    {/* 50% indicator near network usage costs */}
    <div className="absolute top-[200px] right-[220px] bg-gray-500/30 rounded-full px-2 py-0.5 text-xs text-gray-300">
      50%
    </div>
    
    {/* 50% indicator near deflation */}
    <div className="absolute top-[225px] right-[120px] bg-gray-500/30 rounded-full px-2 py-0.5 text-xs text-gray-300">
      50%
    </div>
    
    {/* 50% indicator for bottom path */}
    <div className="absolute top-[630px] left-[50%] bg-gray-500/30 rounded-full px-2 py-0.5 text-xs text-gray-300 transform -translate-x-1/2">
      50%
    </div>
  </>
);

export default ConnectingLines;
