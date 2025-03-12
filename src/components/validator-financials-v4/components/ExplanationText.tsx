
import React from 'react';
import { motion } from 'framer-motion';

const ExplanationText: React.FC = () => {
  return (
    <motion.div
      className="absolute bottom-[60px] right-[35%] w-64 text-center"
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ duration: 1, delay: 1.5 }}
    >
      <p className="text-sm text-gray-400">
        Validator profitability is determined by the balance of token inflation, 
        transaction fees, network usage, and stake allocation
      </p>
    </motion.div>
  );
};

export default ExplanationText;
