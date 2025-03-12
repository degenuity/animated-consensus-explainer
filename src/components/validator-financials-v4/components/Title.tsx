
import React from 'react';
import { motion } from 'framer-motion';

const Title: React.FC = () => {
  return (
    <motion.div 
      className="text-white text-3xl font-bold mt-4 mb-8"
      initial={{ opacity: 0, y: -20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.5 }}
    >
      X1 Validator Financials
    </motion.div>
  );
};

export default Title;
