
import React from 'react';
import { motion } from 'framer-motion';

const ExplanationText: React.FC = () => {
  return (
    <motion.div
      className="absolute left-1/2 bottom-4 transform -translate-x-1/2 bg-[#1a2233]/80 px-4 py-2 rounded-lg border border-[#2a3349]"
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.5, delay: 2.5 }}
    >
      <div className="text-sm text-white/90 text-center max-w-lg">
        X1's validator economics balance block production rewards against operational requirements
        <br />
        <span className="text-emerald-400 font-medium">Sustainable profitability</span> ensures long-term network health
      </div>
    </motion.div>
  );
};

export default ExplanationText;
