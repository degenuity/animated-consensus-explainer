
import React from 'react';
import { motion } from "framer-motion";

const ConnectingLines = () => (
  <>
    {/* Adjusted positions for the connecting lines to match reference image */}
    
    {/* Inflation to Internal Rewards */}
    <div className="absolute top-[150px] left-[200px] w-[100px] h-[2px] bg-blue-500/60 rotate-[30deg]">
      <motion.div 
        className="absolute top-0 left-0 h-full w-[20px] bg-blue-400"
        animate={{ 
          x: [0, 100, 0],
          opacity: [0, 1, 0]
        }}
        transition={{ 
          duration: 2,
          repeat: Infinity,
          ease: "linear"
        }}
      />
    </div>

    {/* Total Stake to Internal Rewards */}
    <div className="absolute top-[150px] left-[420px] w-[100px] h-[2px] bg-blue-500/60 rotate-[-30deg]">
      <motion.div 
        className="absolute top-0 left-0 h-full w-[20px] bg-blue-400"
        animate={{ 
          x: [0, 100, 0],
          opacity: [0, 1, 0]
        }}
        transition={{ 
          duration: 2,
          repeat: Infinity,
          ease: "linear"
        }}
      />
    </div>

    {/* Base Fees to Deflation */}
    <div className="absolute top-[230px] right-[200px] w-[80px] h-[2px] bg-yellow-500/60 rotate-[30deg]">
      <motion.div 
        className="absolute top-0 left-0 h-full w-[20px] bg-yellow-400"
        animate={{ 
          x: [0, 80, 0],
          opacity: [0, 1, 0]
        }}
        transition={{ 
          duration: 2.5,
          repeat: Infinity,
          ease: "linear"
        }}
      />
    </div>

    {/* Internal Rewards to Block Production Eligibility */}
    <div className="absolute top-[260px] left-[220px] h-[100px] w-[2px] bg-green-500/60">
      <motion.div 
        className="absolute top-0 left-0 w-full h-[20px] bg-green-400"
        animate={{ 
          y: [0, 100, 0],
          opacity: [0, 1, 0]
        }}
        transition={{ 
          duration: 3,
          repeat: Infinity,
          ease: "linear"
        }}
      />
    </div>

    {/* Total Stake to Block Production Eligibility */}
    <div className="absolute top-[170px] left-[420px] h-[190px] w-[2px] bg-blue-500/60">
      <motion.div 
        className="absolute top-0 left-0 w-full h-[20px] bg-blue-400"
        animate={{ 
          y: [0, 190, 0],
          opacity: [0, 1, 0]
        }}
        transition={{ 
          duration: 2.8,
          repeat: Infinity,
          ease: "linear"
        }}
      />
    </div>

    {/* Block Rewards to Profitability */}
    <div className="absolute top-[380px] right-[310px] h-[70px] w-[2px] bg-green-500/60">
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

    {/* Network Usage Costs to Profitability */}
    <div className="absolute top-[260px] right-[320px] h-[190px] w-[2px] bg-yellow-500/60">
      <motion.div 
        className="absolute top-0 left-0 w-full h-[20px] bg-yellow-400"
        animate={{ 
          y: [0, 190, 0],
          opacity: [0, 1, 0]
        }}
        transition={{ 
          duration: 3.2,
          repeat: Infinity,
          ease: "linear"
        }}
      />
    </div>
  </>
);

export default ConnectingLines;
