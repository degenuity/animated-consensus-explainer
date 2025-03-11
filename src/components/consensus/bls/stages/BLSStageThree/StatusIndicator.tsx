
import React from 'react';
import { motion } from "framer-motion";

export const StatusIndicator: React.FC = () => {
  return (
    <div className="absolute bottom-2 left-0 right-0 text-center">
      <motion.div 
        className="text-xs text-green-300 font-medium bg-slate-800/70 mx-auto rounded-full px-3 py-1 inline-block border border-green-500/30"
        initial={{ opacity: 0, y: 10 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 0.5 }}
      >
        <motion.span 
          className="inline-block w-2 h-2 rounded-full bg-green-400 mr-1.5 align-middle"
          animate={{ opacity: [1, 0.4, 1] }}
          transition={{ duration: 1.5, repeat: Infinity }}
        />
        Leader verifies the aggregated signature in constant time
      </motion.div>
    </div>
  );
};
