
import React from 'react';
import { motion } from 'framer-motion';

const Logo: React.FC = () => {
  return (
    <motion.g
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ delay: 3 }}
    >
      <text
        x="1420"
        y="820"
        fontSize="40"
        fontWeight="bold"
        fill="rgba(255, 255, 255, 0.15)"
      >
        X1
      </text>
    </motion.g>
  );
};

export default Logo;
