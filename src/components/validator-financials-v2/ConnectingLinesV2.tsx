
import React from 'react';
import { motion } from "framer-motion";
import { ArrowRight } from "lucide-react";

const ConnectingLinesV2 = () => {
  return (
    <>
      {/* Inflation to Internal Rewards (blue line) */}
      <svg className="absolute top-[125px] left-[280px]" width="140" height="4" xmlns="http://www.w3.org/2000/svg">
        <line x1="0" y1="2" x2="140" y2="2" stroke="#3B82F6" strokeWidth="2" />
        <motion.div 
          style={{
            position: 'absolute',
            right: '-12px',
            top: '-4px',
            transform: 'translateY(-50%)'
          }}
        >
          <ArrowRight className="text-blue-500 h-4 w-4" />
        </motion.div>
        <motion.circle 
          cx="70" 
          cy="2" 
          r="3" 
          fill="#3B82F6" 
          animate={{ 
            x: [-40, 40, -40],
            opacity: [0, 1, 0]
          }}
          transition={{ 
            duration: 2,
            repeat: Infinity,
            ease: "linear"
          }}
        />
      </svg>

      {/* Network Usage Costs to Deflation (yellow line) */}
      <div className="absolute top-[125px] right-[280px] w-[140px] h-[2px] bg-yellow-500">
        <motion.div 
          style={{
            position: 'absolute',
            right: '-12px',
            top: '-4px'
          }}
        >
          <ArrowRight className="text-yellow-500 h-4 w-4" />
        </motion.div>
        <motion.div 
          className="h-full w-[20px] bg-yellow-400"
          animate={{ 
            x: [120, 0, 120],
            opacity: [0, 1, 0]
          }}
          transition={{ 
            duration: 2.5,
            repeat: Infinity,
            ease: "linear"
          }}
        />
      </div>

      {/* Total Stake to Internal Rewards (blue lines) */}
      <div className="absolute top-[270px] left-[480px] w-[140px] h-[2px] bg-blue-500 transform -scale-x-100">
        <motion.div 
          className="h-full w-[20px] bg-blue-400"
          animate={{ 
            x: [120, 0, 120],
            opacity: [0, 1, 0]
          }}
          transition={{ 
            duration: 2.5,
            repeat: Infinity,
            ease: "linear"
          }}
        />
      </div>

      <div className="absolute top-[310px] left-[480px] w-[140px] h-[2px] bg-blue-500 transform -scale-x-100">
        <motion.div 
          className="h-full w-[20px] bg-blue-400"
          animate={{ 
            x: [120, 0, 120],
            opacity: [0, 1, 0]
          }}
          transition={{ 
            duration: 2.5,
            repeat: Infinity,
            ease: "linear"
          }}
        />
      </div>

      {/* Total Stake to Block Production (blue vertical line) */}
      <div className="absolute top-[350px] left-[50%] h-[250px] w-[2px] bg-blue-500">
        <motion.div 
          className="w-full h-[20px] bg-blue-400"
          animate={{ 
            y: [0, 250, 0],
            opacity: [0, 1, 0]
          }}
          transition={{ 
            duration: 3,
            repeat: Infinity,
            ease: "linear"
          }}
        />
      </div>

      {/* Internal Rewards to Block Production (green vertical lines) */}
      <div className="absolute top-[350px] left-[220px] h-[250px] w-[2px] bg-green-500">
        <motion.div 
          className="w-full h-[20px] bg-green-400"
          animate={{ 
            y: [0, 250, 0],
            opacity: [0, 1, 0]
          }}
          transition={{ 
            duration: 3,
            repeat: Infinity,
            ease: "linear"
          }}
        />
      </div>

      {/* Network Usage Costs to Profitability (green vertical line) */}
      <div className="absolute top-[350px] right-[220px] h-[250px] w-[2px] bg-green-500">
        <motion.div 
          className="w-full h-[20px] bg-green-400"
          animate={{ 
            y: [0, 250, 0],
            opacity: [0, 1, 0]
          }}
          transition={{ 
            duration: 3,
            repeat: Infinity,
            ease: "linear"
          }}
        />
      </div>

      {/* Network Usage Costs to Operational Costs (yellow vertical line) */}
      <div className="absolute top-[700px] right-[220px] h-[100px] w-[2px] bg-yellow-500">
        <motion.div 
          className="w-full h-[20px] bg-yellow-400"
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

      {/* 50% indicators */}
      <div className="absolute top-[95px] right-[380px] bg-gray-800 rounded-full px-2 py-0.5 text-xs text-gray-300">
        50%
      </div>
      
      <div className="absolute top-[95px] right-[180px] bg-gray-800 rounded-full px-2 py-0.5 text-xs text-gray-300">
        50%
      </div>
      
      <div className="absolute top-[540px] left-[50%] transform -translate-x-1/2 bg-gray-800 rounded-full px-2 py-0.5 text-xs text-gray-300">
        50%
      </div>

      {/* Multiplication signs */}
      <div className="absolute top-[600px] left-[400px] text-gray-500 text-xl">×</div>
      <div className="absolute top-[600px] left-[600px] text-gray-500 text-xl">×</div>

      {/* Plus sign */}
      <div className="absolute top-[600px] right-[280px] text-gray-500 text-xl">+</div>
    </>
  );
};

export default ConnectingLinesV2;
