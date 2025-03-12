
import React from 'react';
import { motion } from "framer-motion";

const ConnectingLines = () => (
  <>
    {/* Inflation to Internal Rewards */}
    <div className="absolute top-[220px] left-[180px] w-[90px] h-[2px] bg-blue-500/80">
      <motion.div 
        className="absolute top-0 left-0 h-full w-[20px] bg-blue-400"
        animate={{ 
          x: [0, 90, 0],
          opacity: [0, 1, 0]
        }}
        transition={{ 
          duration: 2,
          repeat: Infinity,
          ease: "linear"
        }}
      />
    </div>

    {/* Total Stake to Internal Rewards - first row */}
    <div className="absolute top-[285px] left-[380px] w-[80px] h-[2px] transform -rotate-45 origin-left bg-blue-500/80">
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

    {/* Total Stake to Internal Rewards - second row */}
    <div className="absolute top-[345px] left-[380px] w-[60px] h-[2px] transform -rotate-45 origin-left bg-blue-500/80">
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

    {/* Total Stake to Network Usage Costs */}
    <div className="absolute top-[220px] right-[510px] w-[120px] h-[2px] transform rotate-45 origin-left bg-yellow-500/80">
      <motion.div 
        className="absolute top-0 left-0 h-full w-[20px] bg-yellow-400"
        animate={{ 
          x: [0, 120, 0],
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
    <div className="absolute top-[230px] right-[180px] w-[90px] h-[2px] bg-yellow-500/80">
      <motion.div 
        className="absolute top-0 left-0 h-full w-[20px] bg-yellow-400"
        animate={{ 
          x: [0, 90, 0],
          opacity: [0, 1, 0]
        }}
        transition={{ 
          duration: 2.5,
          repeat: Infinity,
          ease: "linear"
        }}
      />
      <div className="absolute top-[-12px] right-[-24px] bg-gray-500/30 rounded-full px-2 py-0.5 text-xs text-gray-300">
        50%
      </div>
    </div>

    {/* Internal Rewards to Block Production Eligibility */}
    <div className="absolute top-[400px] left-[350px] h-[140px] w-[2px] bg-green-500/80">
      <motion.div 
        className="absolute top-0 left-0 w-full h-[20px] bg-green-400"
        animate={{ 
          y: [0, 140, 0],
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
    <div className="absolute top-[400px] right-[350px] h-[140px] w-[2px] bg-green-500/80">
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
    
    {/* Total Stake to Block Production Eligibility */}
    <div className="absolute top-[200px] left-[500px] h-[330px] w-[2px] bg-blue-500/80">
      <motion.div 
        className="absolute top-0 left-0 w-full h-[20px] bg-blue-400"
        animate={{ 
          y: [0, 330, 0],
          opacity: [0, 1, 0]
        }}
        transition={{ 
          duration: 4,
          repeat: Infinity,
          ease: "linear"
        }}
      />
    </div>
  </>
);

export default ConnectingLines;
