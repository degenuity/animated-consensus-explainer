
import React from 'react';
import { motion } from 'framer-motion';

const Title: React.FC = () => {
  return (
    <motion.h2
      initial={{ opacity: 0, y: -10 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.8 }}
      className="text-3xl font-bold mb-0 text-white text-left w-full pl-4 mt-2"
    >
      X1 Validator Financials
    </motion.h2>
  );
};

export default Title;
