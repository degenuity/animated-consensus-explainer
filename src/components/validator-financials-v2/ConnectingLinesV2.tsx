
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
      <svg className="absolute top-[120px] left-[250px]" width="80" height="4" xmlns="http://www.w3.org/2000/svg">
        <line x1="0" y1="2" x2="80" y2="2" stroke="#3B82F6" strokeWidth="2" />
        <motion.circle 
          cx="40" 
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

      {/* Deflation to Network Usage Costs */}
      <svg className="absolute top-[100px] right-[240px]" width="80" height="4" xmlns="http://www.w3.org/2000/svg">
        <line x1="0" y1="2" x2="80" y2="2" stroke="#EAB308" strokeWidth="2" />
        <motion.circle 
          cx="40" 
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
      <div className="absolute top-[130px] right-[400px] bg-gray-500/30 rounded-full px-2 py-0.5 text-xs text-gray-300">
        50%
      </div>

      {/* Total Stake to Profitability (Blue Vertical Line to Bottom) */}
      <svg className="absolute top-[300px] right-[320px]" width="4" height="300" xmlns="http://www.w3.org/2000/svg">
        <line x1="2" y1="0" x2="2" y2="300" stroke="#3B82F6" strokeWidth="2" />
        <motion.circle 
          cx="2" 
          cy="150" 
          r="3" 
          fill="#3B82F6" 
          animate={{ 
            y: [-150, 150, -150],
            opacity: [0, 1, 0]
          }}
          transition={{ 
            duration: 3,
            repeat: Infinity,
            ease: "linear"
          }}
        />
      </svg>

      {/* Internal Rewards to Profitability (Green Vertical Line) */}
      <svg className="absolute top-[300px] left-[400px]" width="4" height="300" xmlns="http://www.w3.org/2000/svg">
        <line x1="2" y1="0" x2="2" y2="300" stroke="#10B981" strokeWidth="2" />
        <motion.circle 
          cx="2" 
          cy="150" 
          r="3" 
          fill="#10B981" 
          animate={{ 
            y: [-150, 150, -150],
            opacity: [0, 1, 0]
          }}
          transition={{ 
            duration: 2.5,
            repeat: Infinity,
            ease: "linear"
          }}
        />
      </svg>

      {/* Network Usage Costs Block Rewards to Profitability (Green Vertical Line) */}
      <svg className="absolute top-[350px] right-[370px]" width="4" height="250" xmlns="http://www.w3.org/2000/svg">
        <line x1="2" y1="0" x2="2" y2="250" stroke="#10B981" strokeWidth="2" />
        <motion.circle 
          cx="2" 
          cy="125" 
          r="3" 
          fill="#10B981" 
          animate={{ 
            y: [-125, 125, -125],
            opacity: [0, 1, 0]
          }}
          transition={{ 
            duration: 2.8,
            repeat: Infinity,
            ease: "linear"
          }}
        />
      </svg>

      {/* Network Usage 50% indicator at bottom */}
      <div className="absolute top-[470px] right-[380px] bg-gray-500/30 rounded-full px-2 py-0.5 text-xs text-gray-300">
        50%
      </div>

      {/* Operational Costs to Note (vertical) */}
      <svg className="absolute top-[700px] left-[50%]" width="4" height="80" xmlns="http://www.w3.org/2000/svg">
        <line x1="2" y1="0" x2="2" y2="80" stroke="#EAB308" strokeWidth="2" />
        <motion.circle 
          cx="2" 
          cy="40" 
          r="3" 
          fill="#EAB308" 
          animate={{ 
            y: [-40, 40, -40],
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
