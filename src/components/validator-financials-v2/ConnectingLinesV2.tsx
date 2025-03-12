
import React from 'react';
import { motion } from "framer-motion";
import { ArrowRight } from "lucide-react";

const ConnectingLinesV2 = () => {
  return (
    <>
      {/* Inflation to Internal Rewards (blue line) */}
      <svg className="absolute top-[125px] left-[255px]" width="160" height="4" xmlns="http://www.w3.org/2000/svg">
        <line x1="0" y1="2" x2="160" y2="2" stroke="#3B82F6" strokeWidth="2" />
        <motion.div 
          style={{
            position: 'absolute',
            right: '-8px',
            top: '-4px',
          }}
        >
          <ArrowRight className="text-blue-500 h-4 w-4" />
        </motion.div>
        <motion.circle 
          cx="80" 
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

      {/* Network Usage Costs to Deflation (yellow line with 50% marker) */}
      <div className="absolute top-[120px] right-[255px] w-[155px] h-[2px] bg-yellow-500">
        <motion.div 
          style={{
            position: 'absolute',
            right: '-8px',
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
      
      {/* 50% indicator for Network Usage to Deflation */}
      <div className="absolute top-[102px] right-[327px] bg-[#0f1218] border border-gray-800 rounded-full px-2 py-0.5 text-xs text-gray-300">
        50%
      </div>

      {/* Delegated Stake to Commission (blue line) */}
      <svg className="absolute top-[268px] left-[570px]" width="150" height="4" xmlns="http://www.w3.org/2000/svg">
        <line x1="0" y1="2" x2="150" y2="2" stroke="#3B82F6" strokeWidth="2" />
        <motion.div 
          style={{
            position: 'absolute',
            left: '-8px',
            top: '-4px',
            transform: 'rotate(180deg)'
          }}
        >
          <ArrowRight className="text-blue-500 h-4 w-4" />
        </motion.div>
        <motion.circle 
          cx="75" 
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

      {/* Own Stake to Staking Rewards (blue line) */}
      <svg className="absolute top-[314px] left-[570px]" width="150" height="4" xmlns="http://www.w3.org/2000/svg">
        <line x1="0" y1="2" x2="150" y2="2" stroke="#3B82F6" strokeWidth="2" />
        <motion.div 
          style={{
            position: 'absolute',
            left: '-8px',
            top: '-4px',
            transform: 'rotate(180deg)'
          }}
        >
          <ArrowRight className="text-blue-500 h-4 w-4" />
        </motion.div>
        <motion.circle 
          cx="75" 
          cy="2" 
          r="3" 
          fill="#3B82F6" 
          animate={{ 
            x: [-40, 40, -40],
            opacity: [0, 1, 0]
          }}
          transition={{ 
            duration: 2.3,
            repeat: Infinity,
            ease: "linear"
          }}
        />
      </svg>

      {/* Block Rewards to Profitability (green vertical line) */}
      <svg className="absolute top-[370px] right-[290px]" width="2" height="230" xmlns="http://www.w3.org/2000/svg">
        <line x1="1" y1="0" x2="1" y2="230" stroke="#10B981" strokeWidth="2" />
        <motion.circle 
          cx="1" 
          cy="115" 
          r="3" 
          fill="#10B981" 
          animate={{ 
            y: [-100, 100, -100],
            opacity: [0, 1, 0]
          }}
          transition={{ 
            duration: 3,
            repeat: Infinity,
            ease: "linear"
          }}
        />
      </svg>

      {/* Voting Rewards to Block Production (green vertical line) */}
      <svg className="absolute top-[362px] left-[391px]" width="2" height="238" xmlns="http://www.w3.org/2000/svg">
        <line x1="1" y1="0" x2="1" y2="238" stroke="#10B981" strokeWidth="2" />
        <motion.circle 
          cx="1" 
          cy="119" 
          r="3" 
          fill="#10B981" 
          animate={{ 
            y: [-100, 100, -100],
            opacity: [0, 1, 0]
          }}
          transition={{ 
            duration: 3,
            repeat: Infinity,
            ease: "linear"
          }}
        />
      </svg>

      {/* Total Stake to Block Production (blue vertical line) */}
      <svg className="absolute top-[498px] left-[672px]" width="2" height="102" xmlns="http://www.w3.org/2000/svg">
        <line x1="1" y1="0" x2="1" y2="102" stroke="#3B82F6" strokeWidth="2" />
        <motion.circle 
          cx="1" 
          cy="51" 
          r="3" 
          fill="#3B82F6" 
          animate={{ 
            y: [-30, 30, -30],
            opacity: [0, 1, 0]
          }}
          transition={{ 
            duration: 2,
            repeat: Infinity,
            ease: "linear"
          }}
        />
      </svg>

      {/* Network Usage Costs to Operational Costs (yellow vertical line) */}
      <svg className="absolute top-[370px] right-[140px]" width="2" height="300" xmlns="http://www.w3.org/2000/svg">
        <line x1="1" y1="0" x2="1" y2="300" stroke="#EAB308" strokeWidth="2" />
        <motion.circle 
          cx="1" 
          cy="150" 
          r="3" 
          fill="#EAB308" 
          animate={{ 
            y: [-120, 120, -120],
            opacity: [0, 1, 0]
          }}
          transition={{ 
            duration: 3,
            repeat: Infinity,
            ease: "linear"
          }}
        />
      </svg>

      {/* Network Usage Costs to Block Rewards (green line with 50% marker) */}
      <svg className="absolute top-[200px] right-[320px]" width="2" height="60" xmlns="http://www.w3.org/2000/svg">
        <line x1="1" y1="0" x2="1" y2="60" stroke="#10B981" strokeWidth="2" />
        <motion.circle 
          cx="1" 
          cy="30" 
          r="3" 
          fill="#10B981" 
          animate={{ 
            y: [-20, 20, -20],
            opacity: [0, 1, 0]
          }}
          transition={{ 
            duration: 1.5,
            repeat: Infinity,
            ease: "linear"
          }}
        />
      </svg>
      
      {/* 50% indicator for Network Usage to Block Rewards */}
      <div className="absolute top-[225px] right-[335px] bg-[#0f1218] border border-gray-800 rounded-full px-2 py-0.5 text-xs text-gray-300">
        50%
      </div>

      {/* Multiplication signs */}
      <div className="absolute top-[600px] left-[420px] text-gray-500 text-xl">×</div>
      <div className="absolute top-[600px] left-[580px] text-gray-500 text-xl">×</div>

      {/* Plus sign for Profitability */}
      <div className="absolute top-[600px] right-[225px] text-gray-500 text-xl">+</div>
    </>
  );
};

export default ConnectingLinesV2;
