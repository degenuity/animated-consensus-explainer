
import React from 'react';
import { motion } from "framer-motion";
import BoxAnimation from './BoxAnimation';

const ValidatorFinancialsV3 = () => {
  return (
    <motion.div 
      className="w-full relative overflow-hidden bg-[#0f1218] min-h-[400px] py-16"
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ duration: 1 }}
    >
      <div className="max-w-7xl mx-auto relative">
        <div className="flex justify-center items-center">
          <BoxAnimation />
        </div>
      </div>
    </motion.div>
  );
};

export default ValidatorFinancialsV3;
