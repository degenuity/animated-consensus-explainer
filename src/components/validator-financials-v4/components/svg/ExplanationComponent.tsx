import React from 'react';
import { motion } from 'framer-motion';

const ExplanationComponent: React.FC = () => {
  return (
    <motion.g
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ delay: 3 }}
    >
      {/* This was moved to the boxes array as an explanation box */}
    </motion.g>
  );
};

export default ExplanationComponent;
