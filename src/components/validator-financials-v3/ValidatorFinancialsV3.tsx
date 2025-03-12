
import React from 'react';
import { motion } from "framer-motion";
import BoxAnimation from './BoxAnimation';

const ValidatorFinancialsV3 = () => {
  return (
    <motion.div 
      className="w-full relative overflow-hidden bg-[#0f1218] py-8 px-4"
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ duration: 1 }}
    >
      <div className="max-w-[1200px] mx-auto relative">
        <motion.h2
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="text-3xl md:text-4xl font-bold mb-6 md:mb-8 text-white text-center"
        >
          X1 Validator Financials
        </motion.h2>

        <div className="flex justify-center items-center overflow-x-auto">
          <div className="min-w-[900px] transform scale-[0.85] md:scale-[0.9] lg:scale-100 origin-top">
            <BoxAnimation />
          </div>
        </div>

        {/* X1 Logo */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.7, delay: 0.7 }}
          className="absolute bottom-0 right-6 text-4xl md:text-6xl font-bold text-gray-500/50"
        >
          X1
        </motion.div>
      </div>
    </motion.div>
  );
};

export default ValidatorFinancialsV3;
