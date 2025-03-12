
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
      {/* Inflation to Network Usage Costs (blue line) */}
      <svg className="absolute top-[120px] left-[260px]" width="170" height="4" xmlns="http://www.w3.org/2000/svg">
        <line x1="0" y1="2" x2="170" y2="2" stroke="#3B82F6" strokeWidth="2" />
        <motion.circle 
          cx="85" 
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
      <svg className="absolute top-[120px] right-[260px]" width="170" height="4" xmlns="http://www.w3.org/2000/svg">
        <line x1="0" y1="2" x2="170" y2="2" stroke="#EAB308" strokeWidth="2" />
        <motion.circle 
          cx="85" 
          cy="2" 
          r="3" 
          fill="#EAB308" 
          animate={{ 
            x: [40, -40, 40],
            opacity: [0, 1, 0]
          }}
          transition={{ 
            duration: 2.5,
            repeat: Infinity,
            ease: "linear"
          }}
        />
      </svg>

      {/* 50% indicator near Network Usage Costs */}
      <div className="absolute top-[145px] right-[400px] bg-gray-500/30 rounded-full px-2 py-0.5 text-xs text-gray-300">
        50%
      </div>

      {/* Network Usage Costs to Total Stake (blue vertical line) */}
      <svg className="absolute top-[175px] right-[200px]" width="4" height="140" xmlns="http://www.w3.org/2000/svg">
        <line x1="2" y1="0" x2="2" y2="140" stroke="#3B82F6" strokeWidth="2" />
        <motion.circle 
          cx="2" 
          cy="70" 
          r="3" 
          fill="#3B82F6" 
          animate={{ 
            y: [-70, 70, -70],
            opacity: [0, 1, 0]
          }}
          transition={{ 
            duration: 3,
            repeat: Infinity,
            ease: "linear"
          }}
        />
      </svg>

      {/* Internal Rewards to Block Production (first green vertical line) */}
      <svg className="absolute top-[370px] left-[180px]" width="4" height="230" xmlns="http://www.w3.org/2000/svg">
        <line x1="2" y1="0" x2="2" y2="230" stroke="#10B981" strokeWidth="2" />
        <motion.circle 
          cx="2" 
          cy="115" 
          r="3" 
          fill="#10B981" 
          animate={{ 
            y: [-115, 115, -115],
            opacity: [0, 1, 0]
          }}
          transition={{ 
            duration: 2.5,
            repeat: Infinity,
            ease: "linear"
          }}
        />
      </svg>

      {/* Internal Rewards to Block Production (second green vertical line) */}
      <svg className="absolute top-[370px] left-[250px]" width="4" height="230" xmlns="http://www.w3.org/2000/svg">
        <line x1="2" y1="0" x2="2" y2="230" stroke="#10B981" strokeWidth="2" />
        <motion.circle 
          cx="2" 
          cy="115" 
          r="3" 
          fill="#10B981" 
          animate={{ 
            y: [-115, 115, -115],
            opacity: [0, 1, 0]
          }}
          transition={{ 
            duration: 2.8,
            repeat: Infinity,
            ease: "linear"
          }}
        />
      </svg>

      {/* Total Stake to Block Production (blue vertical line) */}
      <svg className="absolute top-[400px] right-[200px]" width="4" height="200" xmlns="http://www.w3.org/2000/svg">
        <line x1="2" y1="0" x2="2" y2="200" stroke="#3B82F6" strokeWidth="2" />
        <motion.circle 
          cx="2" 
          cy="100" 
          r="3" 
          fill="#3B82F6" 
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

      {/* Network Usage vertical line to Profitability */}
      <svg className="absolute top-[175px] left-[50%]" width="4" height="425" xmlns="http://www.w3.org/2000/svg">
        <line x1="2" y1="0" x2="2" y2="425" stroke="#10B981" strokeWidth="2" />
        <motion.circle 
          cx="2" 
          cy="212" 
          r="3" 
          fill="#10B981" 
          animate={{ 
            y: [-212, 212, -212],
            opacity: [0, 1, 0]
          }}
          transition={{ 
            duration: 4,
            repeat: Infinity,
            ease: "linear"
          }}
        />
      </svg>

      {/* 50% indicator in the middle */}
      <div className="absolute top-[540px] left-[51%] bg-gray-500/30 rounded-full px-2 py-0.5 text-xs text-gray-300">
        50%
      </div>

      {/* Operational Costs Note connection */}
      <svg className="absolute top-[700px] right-[200px]" width="4" height="120" xmlns="http://www.w3.org/2000/svg">
        <line x1="2" y1="0" x2="2" y2="120" stroke="#EAB308" strokeWidth="2" />
        <motion.circle 
          cx="2" 
          cy="60" 
          r="3" 
          fill="#EAB308" 
          animate={{ 
            y: [-60, 60, -60],
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
