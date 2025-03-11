
import React from 'react';
import { motion } from "framer-motion";
import { Server } from "lucide-react";

interface RelayNodeProps {
  showSuccessEffect?: boolean;
}

export const RelayNode: React.FC<RelayNodeProps> = ({ showSuccessEffect = false }) => {
  return (
    <motion.div
      className="absolute top-1/2 left-1/2 w-20 h-20"
      style={{
        transform: 'translate(-50%, -50%)',
        zIndex: 20
      }}
      initial={{ scale: 0.8 }}
      animate={{ scale: 1 }}
      transition={{ type: "spring", stiffness: 100 }}
    >
      <motion.div
        className="absolute inset-0 rounded-xl"
        style={{
          background: 'radial-gradient(circle, rgba(99, 102, 241, 0.4) 0%, rgba(99, 102, 241, 0) 70%)',
        }}
        animate={{
          scale: [1, 1.2, 1],
          opacity: [0.5, 0.8, 0.5]
        }}
        transition={{
          duration: 4,
          repeat: Infinity,
          ease: "easeInOut"
        }}
      />
      
      <motion.div className="w-20 h-20 rounded-xl bg-slate-800 border-2 border-indigo-500 flex flex-col items-center justify-center shadow-lg shadow-indigo-500/20 relative">
        <Server className="text-indigo-400" size={20} />
        <motion.span
          className="text-indigo-400 font-bold text-xs mt-1"
        >
          Relay Node
        </motion.span>
      </motion.div>
    </motion.div>
  );
};
