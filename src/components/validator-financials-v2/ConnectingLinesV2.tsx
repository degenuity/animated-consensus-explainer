
import React from 'react';
import { motion } from "framer-motion";
import { ArrowRight } from "lucide-react";

const ConnectingLinesV2 = () => {
  return (
    <>
      {/* Inflation to Internal Rewards (blue line) */}
      <svg className="absolute" style={{ top: '160px', left: '154px' }} width="110" height="4" xmlns="http://www.w3.org/2000/svg">
        <line x1="0" y1="2" x2="110" y2="2" stroke="#3B82F6" strokeWidth="2" />
        <motion.circle 
          cx="50" 
          cy="2" 
          r="3" 
          fill="#3B82F6" 
          animate={{ 
            x: [-30, 30, -30],
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
      <svg className="absolute" style={{ top: '160px', right: '154px' }} width="110" height="4" xmlns="http://www.w3.org/2000/svg">
        <line x1="0" y1="2" x2="110" y2="2" stroke="#EAB308" strokeWidth="2" />
        <motion.circle 
          cx="50" 
          cy="2" 
          r="3" 
          fill="#EAB308" 
          animate={{ 
            x: [30, -30, 30],
            opacity: [0, 1, 0]
          }}
          transition={{ 
            duration: 2.5,
            repeat: Infinity,
            ease: "linear"
          }}
        />
      </svg>
      
      {/* 50% indicator for Network Usage to Deflation */}
      <div className="absolute top-[140px] right-[210px] bg-[#0f1218] border border-gray-800 rounded-full px-2 py-0.5 text-xs text-gray-300">
        50%
      </div>

      {/* Delegated Stake to Commission (left to right blue line) */}
      <svg className="absolute" style={{ top: '213px', left: '382px' }} width="150" height="4" xmlns="http://www.w3.org/2000/svg">
        <line x1="0" y1="2" x2="150" y2="2" stroke="#3B82F6" strokeWidth="2" />
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

      {/* Own Stake to Staking Rewards (left to right blue line) */}
      <svg className="absolute" style={{ top: '257px', left: '382px' }} width="150" height="4" xmlns="http://www.w3.org/2000/svg">
        <line x1="0" y1="2" x2="150" y2="2" stroke="#3B82F6" strokeWidth="2" />
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

      {/* Network Usage Costs to Block Rewards (vertical yellow line with 50% indicator) */}
      <svg className="absolute" style={{ top: '212px', left: '640px' }} width="2" height="55" xmlns="http://www.w3.org/2000/svg">
        <line x1="1" y1="0" x2="1" y2="55" stroke="#EAB308" strokeWidth="2" />
        <motion.circle 
          cx="1" 
          cy="25" 
          r="3" 
          fill="#EAB308" 
          animate={{ 
            y: [-15, 15, -15],
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
      <div className="absolute" style={{ top: '230px', left: '655px' }} className="bg-[#0f1218] border border-gray-800 rounded-full px-2 py-0.5 text-xs text-gray-300">
        50%
      </div>

      {/* Block Rewards to Priority Fees (vertical yellow line) */}
      <svg className="absolute" style={{ top: '267px', left: '640px' }} width="2" height="35" xmlns="http://www.w3.org/2000/svg">
        <line x1="1" y1="0" x2="1" y2="35" stroke="#10B981" strokeWidth="2" />
        <motion.circle 
          cx="1" 
          cy="17" 
          r="3" 
          fill="#10B981" 
          animate={{ 
            y: [-10, 10, -10],
            opacity: [0, 1, 0]
          }}
          transition={{ 
            duration: 1.5,
            repeat: Infinity,
            ease: "linear"
          }}
        />
      </svg>

      {/* Voting Rewards to Block Production Eligibility (vertical green line) */}
      <svg className="absolute" style={{ top: '300px', left: '383px' }} width="2" height="245" xmlns="http://www.w3.org/2000/svg">
        <line x1="1" y1="0" x2="1" y2="245" stroke="#10B981" strokeWidth="2" />
        <motion.circle 
          cx="1" 
          cy="122" 
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

      {/* Block Rewards to Profitability (vertical green line) */}
      <svg className="absolute" style={{ top: '267px', left: '750px' }} width="2" height="314" xmlns="http://www.w3.org/2000/svg">
        <line x1="1" y1="0" x2="1" y2="314" stroke="#10B981" strokeWidth="2" />
        <motion.circle 
          cx="1" 
          cy="157" 
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
      <svg className="absolute" style={{ top: '360px', left: '640px' }} width="2" height="185" xmlns="http://www.w3.org/2000/svg">
        <line x1="1" y1="0" x2="1" y2="185" stroke="#3B82F6" strokeWidth="2" />
        <motion.circle 
          cx="1" 
          cy="92" 
          r="3" 
          fill="#3B82F6" 
          animate={{ 
            y: [-80, 80, -80],
            opacity: [0, 1, 0]
          }}
          transition={{ 
            duration: 2.5,
            repeat: Infinity,
            ease: "linear"
          }}
        />
      </svg>

      {/* Network Usage Costs to Operational Costs (yellow vertical line) */}
      <svg className="absolute" style={{ top: '267px', left: '900px' }} width="2" height="364" xmlns="http://www.w3.org/2000/svg">
        <line x1="1" y1="0" x2="1" y2="364" stroke="#EAB308" strokeWidth="2" />
        <motion.circle 
          cx="1" 
          cy="180" 
          r="3" 
          fill="#EAB308" 
          animate={{ 
            y: [-160, 160, -160],
            opacity: [0, 1, 0]
          }}
          transition={{ 
            duration: 3.5,
            repeat: Infinity,
            ease: "linear"
          }}
        />
      </svg>

      {/* Multiplication sign between Stake Weight and Randomness */}
      <div className="absolute" style={{ top: '593px', left: '420px' }} className="text-gray-500 text-xl">×</div>

      {/* Multiplication sign between Randomness and Performance */}
      <div className="absolute" style={{ top: '593px', left: '580px' }} className="text-gray-500 text-xl">×</div>

      {/* Plus sign for Profitability */}
      <div className="absolute" style={{ top: '630px', left: '830px' }} className="text-gray-500 text-xl">+</div>
    </>
  );
};

export default ConnectingLinesV2;
