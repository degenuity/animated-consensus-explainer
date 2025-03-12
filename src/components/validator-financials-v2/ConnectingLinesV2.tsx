
import React from 'react';
import { motion } from "framer-motion";

const ConnectingLinesV2 = () => {
  const flowAnimation = {
    animate: { 
      x: [0, 100, 0],
      opacity: [0, 1, 0]
    },
    transition: { 
      duration: 3,
      repeat: Infinity,
      ease: "linear"
    }
  };

  const verticalFlowAnimation = {
    animate: { 
      y: [0, 100, 0],
      opacity: [0, 1, 0]
    },
    transition: { 
      duration: 3,
      repeat: Infinity,
      ease: "linear"
    }
  };

  return (
    <>
      {/* Inflation to Internal Rewards */}
      <svg className="absolute top-[170px] left-[230px]" width="60" height="4" xmlns="http://www.w3.org/2000/svg">
        <line x1="0" y1="2" x2="60" y2="2" stroke="#3B82F6" strokeWidth="2" />
        <motion.circle 
          cx="30" 
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

      {/* Deflation to Network Usage Costs (50%) */}
      <svg className="absolute top-[170px] right-[240px]" width="60" height="4" xmlns="http://www.w3.org/2000/svg">
        <line x1="0" y1="2" x2="60" y2="2" stroke="#EAB308" strokeWidth="2" />
        <motion.circle 
          cx="30" 
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

      {/* 50% indicator near deflation */}
      <div className="absolute top-[200px] right-[280px] bg-gray-500/30 rounded-full px-2 py-0.5 text-xs text-gray-300">
        50%
      </div>

      {/* Total Stake to Internal Rewards (left arrows) */}
      <svg className="absolute top-[240px] left-[490px]" width="60" height="4" xmlns="http://www.w3.org/2000/svg">
        <line x1="0" y1="2" x2="60" y2="2" stroke="#3B82F6" strokeWidth="2" />
        <motion.circle 
          cx="30" 
          cy="2" 
          r="3" 
          fill="#3B82F6" 
          animate={{ 
            x: [30, -30, 30],
            opacity: [0, 1, 0]
          }}
          transition={{ 
            duration: 2,
            repeat: Infinity,
            ease: "linear"
          }}
        />
      </svg>

      <svg className="absolute top-[290px] left-[490px]" width="60" height="4" xmlns="http://www.w3.org/2000/svg">
        <line x1="0" y1="2" x2="60" y2="2" stroke="#3B82F6" strokeWidth="2" />
        <motion.circle 
          cx="30" 
          cy="2" 
          r="3" 
          fill="#3B82F6" 
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

      {/* Total Stake to Block Production Eligibility (vertical) */}
      <svg className="absolute top-[310px] left-[630px]" width="4" height="190" xmlns="http://www.w3.org/2000/svg">
        <line x1="2" y1="0" x2="2" y2="190" stroke="#3B82F6" strokeWidth="2" />
        <motion.circle 
          cx="2" 
          cy="95" 
          r="3" 
          fill="#3B82F6" 
          animate={{ 
            y: [-95, 95, -95],
            opacity: [0, 1, 0]
          }}
          transition={{ 
            duration: 3,
            repeat: Infinity,
            ease: "linear"
          }}
        />
      </svg>

      {/* Internal Rewards to Block Production Eligibility (vertical) */}
      <svg className="absolute top-[350px] left-[380px]" width="4" height="150" xmlns="http://www.w3.org/2000/svg">
        <line x1="2" y1="0" x2="2" y2="150" stroke="#10B981" strokeWidth="2" />
        <motion.circle 
          cx="2" 
          cy="75" 
          r="3" 
          fill="#10B981" 
          animate={{ 
            y: [-75, 75, -75],
            opacity: [0, 1, 0]
          }}
          transition={{ 
            duration: 2.5,
            repeat: Infinity,
            ease: "linear"
          }}
        />
      </svg>

      {/* Network Usage Costs to Profitability (vertical) */}
      <svg className="absolute top-[350px] right-[320px]" width="4" height="150" xmlns="http://www.w3.org/2000/svg">
        <line x1="2" y1="0" x2="2" y2="150" stroke="#10B981" strokeWidth="2" />
        <motion.circle 
          cx="2" 
          cy="75" 
          r="3" 
          fill="#10B981" 
          animate={{ 
            y: [-75, 75, -75],
            opacity: [0, 1, 0]
          }}
          transition={{ 
            duration: 2.8,
            repeat: Infinity,
            ease: "linear"
          }}
        />
      </svg>

      {/* Network Costs to Operational Costs (vertical) */}
      <svg className="absolute top-[600px] right-[370px]" width="4" height="50" xmlns="http://www.w3.org/2000/svg">
        <line x1="2" y1="0" x2="2" y2="50" stroke="#EAB308" strokeWidth="2" />
        <motion.circle 
          cx="2" 
          cy="25" 
          r="3" 
          fill="#EAB308" 
          animate={{ 
            y: [-25, 25, -25],
            opacity: [0, 1, 0]
          }}
          transition={{ 
            duration: 2,
            repeat: Infinity,
            ease: "linear"
          }}
        />
      </svg>
    </>
  );
};

export default ConnectingLinesV2;
