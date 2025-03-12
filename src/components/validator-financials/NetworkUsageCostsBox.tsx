
import React from 'react';
import { motion } from "framer-motion";
import { Tag } from "lucide-react";

const NetworkUsageCostsBox = () => (
  <motion.div
    initial={{ opacity: 0, y: 30 }}
    animate={{ opacity: 1, y: 0 }}
    transition={{ duration: 0.7, delay: 0.3 }}
    className="lg:col-span-4 lg:col-start-8"
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
);

export default NetworkUsageCostsBox;
