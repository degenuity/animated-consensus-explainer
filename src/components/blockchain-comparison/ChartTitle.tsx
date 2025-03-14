
import React from 'react';
import { motion } from "framer-motion";

const ChartTitle: React.FC = () => {
  return (
    <motion.div
      initial={{ opacity: 0, y: -10 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.5, delay: 0.2 }}
      className="text-center mb-4"
    >
      <h3 className="text-xl sm:text-2xl md:text-3xl font-bold bg-clip-text text-transparent bg-gradient-to-r from-blue-400 via-purple-400 to-blue-400">
        Blockchain Technology Comparison
      </h3>
      <motion.p 
        className="text-sm md:text-base text-gray-400"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 0.5, delay: 0.4 }}
      >
        Parallelism vs Nakamoto Coefficient
      </motion.p>
    </motion.div>
  );
};

export default ChartTitle;
