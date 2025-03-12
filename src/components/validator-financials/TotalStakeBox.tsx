
import React from 'react';
import { motion } from "framer-motion";
import { Lock } from "lucide-react";

const TotalStakeBox = () => (
  <motion.div
    initial={{ opacity: 0, y: 30 }}
    animate={{ opacity: 1, y: 0 }}
    transition={{ duration: 0.6, delay: 0.1 }}
    className="lg:col-span-3 lg:col-start-5"
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
);

export default TotalStakeBox;
