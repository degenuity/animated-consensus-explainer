
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

    {/* Total Stake to Block Production Eligibility/Stake Weight - cleaner curved line */}
    <div className="absolute top-[340px] left-[400px]">
      <svg width="400" height="420" className="overflow-visible">
        <path 
          d="M 380 0 C 380 160, 300 250, 0 210" 
          fill="none" 
          stroke="rgba(59, 130, 246, 0.8)" 
          strokeWidth="2"
        />
        <motion.circle 
          cx="0" 
          cy="0" 
          r="4" 
          fill="#3B82F6"
          animate={{ 
            offsetDistance: ["0%", "100%"],
            opacity: [0, 1, 0]
          }}
          transition={{ 
            duration: 4,
            repeat: Infinity,
            ease: "linear"
          }}
          style={{ 
            offsetPath: "path('M 380 0 C 380 160, 300 250, 0 210')" 
          }}
        />
      </svg>
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
