
import React from 'react';
import { motion } from "framer-motion";
import { TrendingUp, TrendingDown } from "lucide-react";

const BoxAnimation = () => {
  return (
    <div className="flex justify-center gap-8 items-center py-12">
      {/* Blue Box */}
      <motion.div
        initial={{ opacity: 0, x: -50 }}
        animate={{ opacity: 1, x: 0 }}
        transition={{ duration: 0.6 }}
        className="w-64 h-64"
      >
        <div className="bg-blue-500 text-white p-6 rounded-lg shadow-lg h-full flex flex-col items-center justify-center">
          <TrendingUp className="mb-4 h-10 w-10" />
          <div className="text-2xl font-semibold">Blue Box</div>
          <div className="text-sm opacity-90 mt-2">First Element</div>
        </div>
      </motion.div>

      {/* Yellow Box */}
      <motion.div
        initial={{ opacity: 0, x: 50 }}
        animate={{ opacity: 1, x: 0 }}
        transition={{ duration: 0.6, delay: 0.3 }}
        className="w-64 h-64"
      >
        <div className="bg-yellow-500 text-white p-6 rounded-lg shadow-lg h-full flex flex-col items-center justify-center">
          <TrendingDown className="mb-4 h-10 w-10" />
          <div className="text-2xl font-semibold">Yellow Box</div>
          <div className="text-sm opacity-90 mt-2">Second Element</div>
        </div>
      </motion.div>
    </div>
  );
};

export default BoxAnimation;
