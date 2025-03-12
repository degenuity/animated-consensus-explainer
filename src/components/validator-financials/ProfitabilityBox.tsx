
import React from 'react';
import { motion } from "framer-motion";
import { Percent } from "lucide-react";

const ProfitabilityBox = () => (
  <motion.div
    initial={{ opacity: 0, y: 30 }}
    animate={{ opacity: 1, y: 0 }}
    transition={{ duration: 0.7, delay: 0.5 }}
    className="lg:col-span-5 lg:col-start-7"
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
);

export default ProfitabilityBox;
