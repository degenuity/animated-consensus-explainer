
import React from 'react';
import { motion } from "framer-motion";
import { Database, Lock, Tag, Box, Percent, TrendingUp, TrendingDown } from "lucide-react";

const ValidatorFinancials = () => {
  return (
    <div className="w-full py-10 px-4 relative overflow-hidden">
      <motion.h2
        initial={{ opacity: 0, y: -20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8 }}
        className="text-3xl font-bold mb-12 text-white"
      >
        X1 Validator Financials
      </motion.h2>

      <div className="relative w-full max-w-5xl mx-auto grid grid-cols-1 gap-8">
        {/* Connecting Lines with Light Effects */}
        {/* Inflation to Internal Rewards */}
        <div className="absolute top-[170px] left-[210px] w-[50px] h-[2px] bg-blue-500/60">
          <motion.div 
            className="absolute top-0 left-0 h-full w-[20px] bg-blue-400"
            animate={{ 
              x: [0, 50, 0],
              opacity: [0, 1, 0]
            }}
            transition={{ 
              duration: 2,
              repeat: Infinity,
              ease: "linear"
            }}
          />
        </div>

        {/* Total Stake to Internal Rewards */}
        <div className="absolute top-[268px] left-[568px] w-[80px] h-[2px] bg-blue-500/60">
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

        {/* Total Stake to Internal Rewards (second line) */}
        <div className="absolute top-[315px] left-[568px] w-[80px] h-[2px] bg-blue-500/60">
          <motion.div 
            className="absolute top-0 left-0 h-full w-[20px] bg-blue-400"
            animate={{ 
              x: [0, 80, 0],
              opacity: [0, 1, 0]
            }}
            transition={{ 
              duration: 2.2,
              repeat: Infinity,
              ease: "linear"
            }}
          />
        </div>

        {/* Block Rewards to Deflation */}
        <div className="absolute top-[255px] right-[356px] w-[80px] h-[2px] bg-blue-500/60">
          <motion.div 
            className="absolute top-0 left-0 h-full w-[20px] bg-blue-400"
            animate={{ 
              x: [0, 80, 0],
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
        <div className="absolute top-[410px] left-[350px] h-[70px] w-[2px] bg-green-500/60">
          <motion.div 
            className="absolute top-0 left-0 w-full h-[20px] bg-green-400"
            animate={{ 
              y: [0, 70, 0],
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
        <div className="absolute top-[375px] left-[620px] h-[105px] w-[2px] bg-blue-500/60">
          <motion.div 
            className="absolute top-0 left-0 w-full h-[20px] bg-blue-400"
            animate={{ 
              y: [0, 105, 0],
              opacity: [0, 1, 0]
            }}
            transition={{ 
              duration: 2.8,
              repeat: Infinity,
              ease: "linear"
            }}
          />
        </div>

        {/* Block Rewards to Profitability */}
        <div className="absolute top-[390px] right-[330px] h-[90px] w-[2px] bg-green-500/60">
          <motion.div 
            className="absolute top-0 left-0 w-full h-[20px] bg-green-400"
            animate={{ 
              y: [0, 90, 0],
              opacity: [0, 1, 0]
            }}
            transition={{ 
              duration: 2.6,
              repeat: Infinity,
              ease: "linear"
            }}
          />
        </div>

        {/* Operational Costs to Profitability */}
        <div className="absolute bottom-[210px] right-[250px] h-[60px] w-[2px] bg-yellow-500/60">
          <motion.div 
            className="absolute top-0 left-0 w-full h-[20px] bg-yellow-400"
            animate={{ 
              y: [0, 60, 0],
              opacity: [0, 1, 0]
            }}
            transition={{ 
              duration: 2.4,
              repeat: Infinity,
              ease: "linear"
            }}
          />
        </div>

        {/* Main Boxes */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-6">
          {/* Left Side - Inflation */}
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6 }}
            className="lg:col-span-2"
          >
            <div className="bg-blue-500 text-white p-4 rounded-lg shadow-lg h-[120px] flex flex-col items-center justify-center">
              <TrendingUp className="mb-2 h-6 w-6" />
              <div className="text-xl font-semibold">inflation</div>
              <div className="text-sm opacity-75">token issuance</div>
            </div>
          </motion.div>

          {/* Center-Left - Internal Rewards */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7, delay: 0.1 }}
            className="lg:col-span-3 lg:col-start-3"
          >
            <div className="bg-gray-900/70 border border-gray-700 p-4 rounded-lg">
              <div className="flex items-center mb-3">
                <Database className="h-5 w-5 text-blue-400 mr-2" />
                <span className="text-lg text-white">internal rewards</span>
              </div>
              
              <div className="space-y-2">
                <div className="border border-green-500/70 bg-gray-800/50 p-2 rounded text-sm text-white">
                  commission
                </div>
                <div className="border border-green-500/70 bg-gray-800/50 p-2 rounded text-sm text-white">
                  staking rewards
                </div>
                <div className="border border-green-500/70 bg-gray-800/50 p-2 rounded text-sm text-white">
                  voting rewards
                </div>
              </div>
            </div>
          </motion.div>

          {/* Center - Total Stake */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7, delay: 0.2 }}
            className="lg:col-span-3 lg:col-start-6"
          >
            <div className="bg-gray-900/70 border border-gray-700 p-4 rounded-lg">
              <div className="flex items-center mb-3">
                <Lock className="h-5 w-5 text-blue-400 mr-2" />
                <span className="text-lg text-white">total stake</span>
              </div>
              
              <div className="space-y-2">
                <div className="border border-blue-500/70 bg-gray-800/50 p-2 rounded text-sm text-white">
                  delegated stake
                </div>
                <div className="border border-blue-500/70 bg-gray-800/50 p-2 rounded text-sm text-white">
                  own stake
                </div>
              </div>
            </div>
          </motion.div>

          {/* Center-Right - Network Usage Costs */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7, delay: 0.3 }}
            className="lg:col-span-3 lg:col-start-9"
          >
            <div className="bg-gray-900/70 border border-gray-700 p-4 rounded-lg">
              <div className="flex items-center mb-3">
                <Tag className="h-5 w-5 text-blue-400 mr-2" />
                <span className="text-lg text-white">network usage costs</span>
              </div>
              
              <div className="space-y-2">
                <div className="border border-yellow-500/70 bg-gray-800/50 p-2 rounded text-sm text-white">
                  base fees
                </div>
                <div className="text-center text-gray-400 text-sm my-1">50%</div>
                <div className="bg-gray-900/90 border border-gray-700 p-3 rounded">
                  <div className="text-white mb-2">block rewards</div>
                  <div className="space-y-2">
                    <div className="border border-green-500/70 bg-gray-800/50 p-2 rounded text-xs text-white">
                      priority fees
                    </div>
                    <div className="border border-green-500/70 bg-gray-800/50 p-2 rounded text-xs text-white">
                      MEV
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </motion.div>

          {/* Right Side - Deflation */}
          <motion.div
            initial={{ opacity: 0, x: 50 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6 }}
            className="lg:col-span-2 lg:col-start-12 mt-5"
          >
            <div className="bg-yellow-500 text-white p-4 rounded-lg shadow-lg h-[120px] flex flex-col items-center justify-center">
              <TrendingDown className="mb-2 h-6 w-6" />
              <div className="text-xl font-semibold">deflation</div>
              <div className="text-sm opacity-75">token burns</div>
            </div>
          </motion.div>
        </div>

        {/* Bottom Section */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-6 mt-6">
          {/* Block Production Eligibility */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7, delay: 0.4 }}
            className="lg:col-span-1"
          >
            <div className="bg-gray-900/70 border border-gray-700 p-4 rounded-lg">
              <div className="flex items-center mb-4">
                <Box className="h-5 w-5 text-blue-400 mr-2" />
                <span className="text-lg text-white">block production eligibility</span>
              </div>
              
              <div className="grid grid-cols-3 gap-3">
                <div className="border border-blue-500/70 bg-gray-800/50 p-3 rounded">
                  <div className="text-blue-400 text-sm font-medium">stake weight</div>
                  <div className="text-xs text-gray-300 mt-1">amount of XNT staked</div>
                </div>
                <div className="relative border border-blue-500/70 bg-gray-800/50 p-3 rounded">
                  <div className="text-blue-400 text-sm font-medium">randomness</div>
                  <div className="text-xs text-gray-300 mt-1">ACP anti-collusion protocol</div>
                  <div className="absolute inset-0 flex items-center justify-center text-gray-500 font-bold opacity-20 text-xl">×</div>
                </div>
                <div className="relative border border-blue-500/70 bg-gray-800/50 p-3 rounded">
                  <div className="text-blue-400 text-sm font-medium">performance/ reputation</div>
                  <div className="text-xs text-gray-300 mt-1">from recorded history</div>
                  <div className="absolute inset-0 flex items-center justify-center text-gray-500 font-bold opacity-20 text-xl">×</div>
                </div>
              </div>
            </div>
          </motion.div>

          {/* Profitability */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7, delay: 0.5 }}
            className="lg:col-span-1"
          >
            <div className="bg-gray-900/70 border border-gray-700 p-4 rounded-lg">
              <div className="flex items-center mb-4">
                <Percent className="h-5 w-5 text-blue-400 mr-2" />
                <span className="text-lg text-white">profitability</span>
              </div>
              
              <div className="grid grid-cols-2 gap-3">
                <div className="border border-yellow-500/70 bg-gray-800/50 p-3 rounded">
                  <div className="text-yellow-400 text-sm font-medium">operational costs</div>
                  <div className="text-xs text-gray-300 mt-1">only cost is server</div>
                </div>
                <div className="relative border border-green-500/70 bg-gray-800/50 p-3 rounded">
                  <div className="text-green-400 text-sm font-medium">total validator rewards</div>
                  <div className="text-xs text-gray-300 mt-1">aggregate</div>
                  <div className="absolute inset-0 flex items-center justify-center text-gray-500 font-bold opacity-20 text-xl">+</div>
                </div>
              </div>
            </div>
          </motion.div>
        </div>

        {/* Bottom Note */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7, delay: 0.6 }}
          className="lg:col-span-1 lg:col-start-9 lg:col-end-12 mt-4"
        >
          <div className="bg-gray-900/70 border border-gray-700 p-4 rounded-lg">
            <div className="text-white font-medium mb-1">Minimal operational costs</div>
            <div className="text-sm text-gray-300">
              Voting transactions on X1 are free, keeping operational expenses at minimum.
            </div>
          </div>
        </motion.div>

        {/* X1 Logo */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.7, delay: 0.7 }}
          className="absolute bottom-4 right-4 text-3xl font-bold text-white"
        >
          X1
        </motion.div>
      </div>
    </div>
  );
};

export default ValidatorFinancials;
