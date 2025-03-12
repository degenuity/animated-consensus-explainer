
import React from 'react';
import { motion } from "framer-motion";
import BoxAnimation from './BoxAnimation';

const ValidatorFinancialsV3 = () => {
  return (
    <motion.div 
      className="w-full relative overflow-hidden bg-[#0f1218] min-h-[800px] py-16"
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ duration: 1 }}
    >
      <div className="max-w-7xl mx-auto relative">
        <motion.h2
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="text-4xl font-bold mb-12 text-white text-center"
        >
          X1 Validator Financials
        </motion.h2>

        <div className="flex justify-center items-center">
          <BoxAnimation />
        </div>

        {/* X1 Logo */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.7, delay: 0.7 }}
          className="absolute bottom-0 right-6 text-6xl font-bold text-gray-500/50"
        >
          X1
        </motion.div>
      </div>
    </motion.div>
  );
};

export default ValidatorFinancialsV3;
