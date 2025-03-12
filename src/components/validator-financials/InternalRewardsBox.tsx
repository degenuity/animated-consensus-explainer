
import React from 'react';
import { motion } from "framer-motion";
import { Database } from "lucide-react";

const InternalRewardsBox = () => (
  <motion.div
    initial={{ opacity: 0, y: 30 }}
    animate={{ opacity: 1, y: 0 }}
    transition={{ duration: 0.7, delay: 0.1 }}
    className="lg:col-span-3 lg:col-start-2"
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
);

export default InternalRewardsBox;
