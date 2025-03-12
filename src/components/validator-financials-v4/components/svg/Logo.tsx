
import React from 'react';
import { motion } from 'framer-motion';

const Logo: React.FC = () => {
  return (
    <motion.g
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ delay: 3.5 }}
    >
      <text
        x="1150"
        y="780"
        fill="#ffffff"
        fontSize="48"
        fontWeight="bold"
        fontFamily="sans-serif"
        opacity="0.2"
      >
        X1
      </text>
    </motion.g>
  );
};

export default Logo;
