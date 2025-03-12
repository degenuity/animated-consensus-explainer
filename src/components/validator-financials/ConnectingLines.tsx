
import React from 'react';
import { motion } from "framer-motion";

const ConnectingLines = () => (
  <>
    {/* Inflation to Internal Rewards */}
    <div className="absolute top-[250px] left-[170px] w-[100px] h-[2px] bg-blue-500/80 transform rotate-45 origin-left">
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

    {/* Total Stake to Internal Rewards - vertical line */}
    <div className="absolute top-[200px] left-[300px] h-[150px] w-[2px] bg-blue-500/80">
      <motion.div 
        className="absolute top-0 left-0 w-full h-[20px] bg-blue-400"
        animate={{ 
          y: [0, 150, 0],
          opacity: [0, 1, 0]
        }}
        transition={{ 
          duration: 2,
          repeat: Infinity,
          ease: "linear"
        }}
      />
    </div>

    {/* Total Stake to Network Usage Costs */}
    <div className="absolute top-[200px] right-[300px] w-[100px] h-[2px] transform rotate-45 origin-left bg-yellow-500/80">
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

    {/* Network Usage Costs to Deflation - with 50% label */}
    <div className="absolute top-[250px] right-[170px] w-[100px] h-[2px] bg-yellow-500/80 transform rotate-[315deg] origin-right">
      <motion.div 
        className="absolute top-0 right-0 h-full w-[20px] bg-yellow-400"
        animate={{ 
          x: [0, -100, 0],
          opacity: [0, 1, 0]
        }}
        transition={{ 
          duration: 2.5,
          repeat: Infinity,
          ease: "linear"
        }}
      />
      <div className="absolute top-[-20px] right-[40px] bg-gray-500/30 rounded-full px-2 py-0.5 text-xs text-gray-300">
        50%
      </div>
    </div>

    {/* Internal Rewards to Block Production Eligibility */}
    <div className="absolute top-[450px] left-[250px] h-[150px] w-[2px] bg-green-500/80">
      <motion.div 
        className="absolute top-0 left-0 w-full h-[20px] bg-green-400"
        animate={{ 
          y: [0, 150, 0],
          opacity: [0, 1, 0]
        }}
        transition={{ 
          duration: 3,
          repeat: Infinity,
          ease: "linear"
        }}
      />
    </div>

    {/* Network Usage Costs to Profitability */}
    <div className="absolute top-[450px] right-[250px] h-[150px] w-[2px] bg-green-500/80">
      <motion.div 
        className="absolute top-0 left-0 w-full h-[20px] bg-green-400"
        animate={{ 
          y: [0, 150, 0],
          opacity: [0, 1, 0]
        }}
        transition={{ 
          duration: 2.6,
          repeat: Infinity,
          ease: "linear"
        }}
      />
    </div>
    
    {/* Total Stake to Block Production Eligibility - longer vertical line */}
    <div className="absolute top-[200px] left-[350px] h-[400px] w-[2px] bg-blue-500/80">
      <motion.div 
        className="absolute top-0 left-0 w-full h-[20px] bg-blue-400"
        animate={{ 
          y: [0, 400, 0],
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
    <div className="absolute top-[400px] right-[430px] w-[40px] h-[2px] bg-gray-500/50">
      <div className="absolute top-[-12px] left-[10px] bg-gray-500/30 rounded-full px-2 py-0.5 text-xs text-gray-300">
        50%
      </div>
    </div>
  </>
);

export default ConnectingLines;
