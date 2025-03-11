
import React from 'react';
import { motion } from "framer-motion";

export const LeaderNode: React.FC = () => {
  return (
    <motion.div
      className="absolute top-1/2 left-[18%] transform -translate-x-1/2 -translate-y-1/2 z-20"
      initial={{ scale: 0.9, opacity: 0 }}
      animate={{ scale: 1, opacity: 1 }}
      transition={{ delay: 0.2, type: "spring" }}
    >
      <motion.div 
        className="w-24 h-24 rounded-lg bg-slate-800 border-2 border-green-500 flex flex-col items-center justify-center shadow-lg"
        animate={{
          boxShadow: [
            '0 0 0px rgba(74, 222, 128, 0)',
            '0 0 15px rgba(74, 222, 128, 0.3)',
            '0 0 0px rgba(74, 222, 128, 0)'
          ]
        }}
        transition={{ duration: 3, repeat: Infinity }}
      >
        <motion.span
          className="text-lg font-bold text-green-400 mb-1"
        >
          Leader
        </motion.span>
        <motion.div
          className="text-xs text-slate-300 bg-slate-900/50 px-2 py-1 rounded-full mt-1"
          animate={{ opacity: [0.7, 1, 0.7] }}
          transition={{ duration: 2, repeat: Infinity }}
        >
          Verifying...
        </motion.div>
      </motion.div>
      
      <motion.div 
        className="absolute -top-10 -right-5 w-10 h-10 rounded-md bg-indigo-500 flex items-center justify-center shadow-lg"
        initial={{ opacity: 0, scale: 0.8 }}
        animate={{ 
          opacity: [0, 1, 1],
          scale: [0.8, 1, 1]
        }}
        transition={{ delay: 0.5, duration: 1 }}
      >
        <span className="text-white font-bold text-xs">Agg</span>
      </motion.div>
    </motion.div>
  );
};
