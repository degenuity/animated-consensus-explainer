
import React from 'react';
import { motion } from 'framer-motion';

const Title: React.FC = () => {
  return (
    <motion.h2
      initial={{ opacity: 0, y: -10 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.8 }}
      className="text-2xl font-bold mb-10 mt-4 text-white text-center"
    >
      X1 Validator Economics
    </motion.h2>
  );
};

export default Title;
