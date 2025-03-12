
import React from 'react';
import { motion } from "framer-motion";

const ConnectingLines = () => (
  <>
    {/* Inflation to Internal Rewards */}
    <div className="absolute top-[120px] left-[180px] w-[80px] h-[2px] bg-blue-500/60 rotate-[45deg]">
      <motion.div 
        className="absolute top-0 left-0 h-full w-[20px] bg-blue-400"
        animate={{ 
          x: [0, 80, 0],
          opacity: [0, 1, 0]
        }}
        transition={{ 
          duration: 2,
          repeat: Infinity,
          ease: "linear"
        }}
      />
    </div>

    {/* Total Stake to Internal Rewards - Horizontal line */}
    <div className="absolute top-[220px] left-[480px] w-[100px] h-[2px] bg-blue-500/60 -rotate-[15deg]">
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

    {/* Network Usage Costs to Deflation */}
    <div className="absolute top-[180px] right-[250px] w-[100px] h-[2px] bg-yellow-500/60 rotate-[-45deg]">
      <motion.div 
        className="absolute top-0 left-0 h-full w-[20px] bg-yellow-400"
        animate={{ 
          x: [0, 100, 0],
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
    <div className="absolute top-[300px] left-[300px] h-[120px] w-[2px] bg-green-500/60">
      <motion.div 
        className="absolute top-0 left-0 w-full h-[20px] bg-green-400"
        animate={{ 
          y: [0, 120, 0],
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
    <div className="absolute top-[180px] left-[450px] h-[240px] w-[2px] bg-blue-500/60">
      <motion.div 
        className="absolute top-0 left-0 w-full h-[20px] bg-blue-400"
        animate={{ 
          y: [0, 240, 0],
          opacity: [0, 1, 0]
        }}
        transition={{ 
          duration: 2.8,
          repeat: Infinity,
          ease: "linear"
        }}
      />
    </div>

    {/* Network Usage Costs to Profitability */}
    <div className="absolute top-[280px] right-[200px] h-[140px] w-[2px] bg-green-500/60">
      <motion.div 
        className="absolute top-0 left-0 w-full h-[20px] bg-green-400"
        animate={{ 
          y: [0, 140, 0],
          opacity: [0, 1, 0]
        }}
        transition={{ 
          duration: 2.6,
          repeat: Infinity,
          ease: "linear"
        }}
      />
    </div>
  </>
);

export default ConnectingLines;
