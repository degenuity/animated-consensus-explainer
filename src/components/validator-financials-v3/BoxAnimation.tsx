import React from 'react';
import { motion } from "framer-motion";
import { TrendingUp, TrendingDown, BarChart3, PieChart, LineChart, ArrowRight, ArrowDown, Lock, Tag, Box, Percent } from "lucide-react";

const BoxAnimation = () => {
  return (
    <div className="flex flex-col items-center py-12">
      {/* Top row with blue, grey and yellow boxes */}
      <div className="flex justify-center gap-4 items-center mb-12 relative">
        {/* Blue Box */}
        <motion.div
          initial={{ opacity: 0, x: -30 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.6 }}
          className="w-48 h-48"
        >
          <div className="bg-blue-500 text-white p-6 rounded-lg shadow-lg h-full flex flex-col items-center justify-center">
            <TrendingUp className="mb-4 h-8 w-8" />
            <div className="text-xl font-semibold">inflation</div>
            <div className="text-sm opacity-90 mt-2">token issuance</div>
          </div>
        </motion.div>

        {/* Animated Line with Arrow from Blue Box to Grey 1 */}
        <motion.div 
          className="absolute top-[75px] left-[190px] w-[60px] h-[2px] bg-blue-400"
          initial={{ width: 0 }}
          animate={{ width: 60 }}
          transition={{ duration: 0.6, delay: 0.8 }}
        >
          <motion.div 
            className="absolute right-0 top-0"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 1.2 }}
          >
            <ArrowRight className="text-blue-400 h-4 w-4" style={{ transform: 'translateX(50%) translateY(-25%)' }} />
          </motion.div>
          <motion.div 
            className="absolute top-0 left-0 h-full w-[10px] bg-blue-300"
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
        </motion.div>

        {/* Grey Box 1 - Internal Rewards */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.2 }}
          className="w-64 h-64"
        >
          <div className="bg-gray-800/90 border border-gray-700 p-4 rounded-lg shadow-lg h-full">
            <div className="flex items-center mb-3">
              <BarChart3 className="h-5 w-5 text-blue-400 mr-2" />
              <span className="text-xl text-white">internal rewards</span>
            </div>
            <div className="space-y-2">
              <motion.div 
                initial={{ opacity: 0, x: -10 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.3, delay: 0.3 }}
                className="border border-green-500/70 bg-gray-800/50 p-2 rounded text-sm text-white"
              >
                commission
              </motion.div>
              <motion.div 
                initial={{ opacity: 0, x: -10 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.3, delay: 0.4 }}
                className="border border-green-500/70 bg-gray-800/50 p-2 rounded text-sm text-white"
              >
                staking rewards
              </motion.div>
              <motion.div 
                initial={{ opacity: 0, x: -10 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.3, delay: 0.5 }}
                className="border border-green-500/70 bg-gray-800/50 p-2 rounded text-sm text-white"
              >
                voting rewards
              </motion.div>
            </div>
          </div>
        </motion.div>

        {/* Grey Box 2 - Total Stake */}
        <motion.div
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.3 }}
          className="w-64 h-64"
        >
          <div className="bg-gray-800/90 border border-gray-700 p-4 rounded-lg shadow-lg h-full">
            <div className="flex items-center mb-3">
              <Lock className="h-5 w-5 text-blue-400 mr-2" />
              <span className="text-xl text-white">total stake</span>
            </div>
            <div className="space-y-2">
              <motion.div 
                initial={{ opacity: 0, x: -10 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.3, delay: 0.3 }}
                className="border border-blue-500/70 bg-gray-800/50 p-2 rounded text-sm text-white"
              >
                delegated stake
              </motion.div>
              <motion.div 
                initial={{ opacity: 0, x: -10 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.3, delay: 0.4 }}
                className="border border-blue-500/70 bg-gray-800/50 p-2 rounded text-sm text-white"
              >
                own stake
              </motion.div>
            </div>
          </div>
        </motion.div>

        {/* Grey Box 3 - Network Usage Costs */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.4 }}
          className="w-64 h-64"
        >
          <div className="bg-gray-800/90 border border-gray-700 p-4 rounded-lg shadow-lg h-full">
            <div className="flex items-center mb-3">
              <Tag className="h-5 w-5 text-blue-400 mr-2" />
              <span className="text-xl text-white">network usage costs</span>
            </div>
            <div className="space-y-3">
              <motion.div 
                initial={{ opacity: 0, x: -10 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.3, delay: 0.4 }}
                className="border border-yellow-500/70 bg-gray-800/50 p-2 rounded text-sm text-white"
              >
                base fees
              </motion.div>
              <div className="bg-gray-800/80 border border-gray-700 p-3 rounded mt-2">
                <div className="text-white mb-2">block rewards</div>
                <div className="space-y-2">
                  <motion.div 
                    initial={{ opacity: 0, x: -5 }}
                    animate={{ opacity: 1, x: 0 }}
                    transition={{ duration: 0.3, delay: 0.6 }}
                    className="border border-green-500/70 bg-gray-800/50 p-2 rounded text-xs text-white"
                  >
                    priority fees
                  </motion.div>
                  <motion.div 
                    initial={{ opacity: 0, x: -5 }}
                    animate={{ opacity: 1, x: 0 }}
                    transition={{ duration: 0.3, delay: 0.7 }}
                    className="border border-green-500/70 bg-gray-800/50 p-2 rounded text-xs text-white"
                  >
                    MEV
                  </motion.div>
                </div>
              </div>
            </div>
          </div>
        </motion.div>

        {/* Yellow Box */}
        <motion.div
          initial={{ opacity: 0, x: 30 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.6, delay: 0.5 }}
          className="w-48 h-48"
        >
          <div className="bg-yellow-500 text-white p-6 rounded-lg shadow-lg h-full flex flex-col items-center justify-center">
            <TrendingDown className="mb-4 h-8 w-8" />
            <div className="text-xl font-semibold">deflation</div>
            <div className="text-sm opacity-90 mt-2">token burns</div>
          </div>
        </motion.div>
      </div>

      {/* Lines connecting various elements */}
      <div className="relative w-full h-20">
        <motion.div 
          className="absolute left-[204px] top-[-115px] w-[2px] h-[120px] bg-gray-400"
          initial={{ height: 0 }}
          animate={{ height: 120 }}
          transition={{ duration: 0.8, delay: 1.0 }}
        >
          <motion.div 
            className="absolute left-0 top-0 w-full h-[10px] bg-gray-300"
            animate={{ 
              y: [0, 120, 0],
              opacity: [0, 1, 0]
            }}
            transition={{ 
              duration: 3,
              repeat: Infinity,
              ease: "linear"
            }}
          />
        </motion.div>
        
        <motion.div 
          className="absolute left-[204px] top-[5px] w-[170px] h-[2px] bg-gray-400"
          initial={{ width: 0 }}
          animate={{ width: 170 }}
          transition={{ duration: 0.8, delay: 1.8 }}
        >
          <motion.div 
            className="absolute right-0 top-0"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 2.4 }}
          >
            <ArrowRight className="text-gray-400 h-4 w-4" style={{ transform: 'translateX(50%) translateY(-25%)' }} />
          </motion.div>
          <motion.div 
            className="absolute top-0 left-0 h-full w-[10px] bg-gray-300"
            animate={{ 
              x: [0, 170, 0],
              opacity: [0, 1, 0]
            }}
            transition={{ 
              duration: 3,
              repeat: Infinity,
              ease: "linear"
            }}
          />
        </motion.div>
      </div>

      {/* Bottom row with box production and profitability */}
      <div className="flex justify-center gap-12 items-center">
        {/* Block Production Box */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.6 }}
          className="w-[380px]"
        >
          <div className="bg-gray-800/90 border border-gray-700 p-6 rounded-lg shadow-lg">
            <div className="flex items-center mb-4">
              <Box className="h-5 w-5 text-blue-400 mr-2" />
              <span className="text-xl text-white">block production eligibility</span>
            </div>
            
            <div className="space-y-4">
              <motion.div 
                initial={{ opacity: 0, y: 10 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.3, delay: 0.5 }}
                className="border border-blue-500/70 bg-gray-800/50 p-3 rounded"
              >
                <div className="text-blue-400 text-sm font-medium">stake weight</div>
                <div className="text-xs text-gray-300 mt-1">amount of XNT staked</div>
              </motion.div>

              <div className="flex gap-4">
                <motion.div 
                  initial={{ opacity: 0, y: 10 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.3, delay: 0.6 }}
                  className="relative border border-blue-500/70 bg-gray-800/50 p-3 rounded flex-1"
                >
                  <div className="text-blue-400 text-sm font-medium">randomness</div>
                  <div className="text-xs text-gray-300 mt-1">ACP anti-collusion protocol</div>
                  <div className="absolute right-3 top-1/2 transform -translate-y-1/2 text-gray-500 font-bold text-xl">
                    ×
                  </div>
                </motion.div>
                <motion.div 
                  initial={{ opacity: 0, y: 10 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.3, delay: 0.7 }}
                  className="relative border border-blue-500/70 bg-gray-800/50 p-3 rounded flex-1"
                >
                  <div className="text-blue-400 text-sm font-medium">performance/reputation</div>
                  <div className="text-xs text-gray-300 mt-1">from recorded history</div>
                  <div className="absolute right-3 top-1/2 transform -translate-y-1/2 text-gray-500 font-bold text-xl">
                    ×
                  </div>
                </motion.div>
              </div>
            </div>
          </div>
        </motion.div>

        {/* Profitability Box */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.7 }}
          className="w-[380px]"
        >
          <div className="bg-gray-800/90 border border-gray-700 p-6 rounded-lg shadow-lg">
            <div className="flex items-center mb-4">
              <Percent className="h-5 w-5 text-blue-400 mr-2" />
              <span className="text-xl text-white">profitability</span>
            </div>
            
            <div className="grid grid-cols-2 gap-4">
              <motion.div 
                initial={{ opacity: 0, y: 10 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.3, delay: 0.6 }}
                className="border border-yellow-500/70 bg-gray-800/50 p-3 rounded"
              >
                <div className="text-yellow-400 text-sm font-medium">operational costs</div>
                <div className="text-xs text-gray-300 mt-1">only cost is server</div>
              </motion.div>
              <motion.div 
                initial={{ opacity: 0, y: 10 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.3, delay: 0.7 }}
                className="relative border border-green-500/70 bg-gray-800/50 p-3 rounded"
              >
                <div className="text-green-400 text-sm font-medium">total validator rewards</div>
                <div className="text-xs text-gray-300 mt-1">aggregate</div>
                <div className="absolute right-4 top-1/2 transform -translate-y-1/2 text-gray-500 font-bold text-xl">
                  +
                </div>
              </motion.div>
            </div>
          </div>
        </motion.div>
      </div>

      {/* Operational costs note */}
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 0.6, delay: 1.0 }}
        className="mt-8 max-w-md mx-auto bg-gray-800/90 border border-gray-700 p-4 rounded-lg"
      >
        <h3 className="text-white font-medium mb-2">Minimal operational costs</h3>
        <p className="text-gray-300 text-sm">Voting transactions on X1 are free, keeping operational expenses at minimum.</p>
      </motion.div>
    </div>
  );
};

export default BoxAnimation;

