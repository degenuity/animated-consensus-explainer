
import React from 'react';
import { motion } from "framer-motion";

interface StatusMessageProps {
  leaderReceived: boolean;
  showSuccessEffect: boolean;
}

export const StatusMessage: React.FC<StatusMessageProps> = ({ leaderReceived, showSuccessEffect }) => {
  return (
    <div className="absolute bottom-12 left-0 right-0 text-center">
      <motion.div 
        className="text-xs text-indigo-300 font-medium bg-slate-800/70 mx-auto rounded-full px-3 py-1 inline-block border border-indigo-500/30"
        initial={{ opacity: 0, y: 10 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 0.5 }}
      >
        <motion.span 
          className="inline-block w-2 h-2 rounded-full bg-indigo-400 mr-1.5 align-middle"
          animate={{ opacity: [1, 0.4, 1] }}
          transition={{ duration: 1.5, repeat: Infinity }}
        />
        Relay node sends aggregated "Agg" signature to leader
        {leaderReceived && (
          <motion.span
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.2 }}
            className={`ml-1 ${showSuccessEffect ? 'text-green-400' : 'text-green-400/70'}`}
          >
            ✓ Received
          </motion.span>
        )}
      </motion.div>
    </div>
  );
};
