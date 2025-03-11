
import React from 'react';
import { motion } from "framer-motion";
import { Clock } from "lucide-react";

export const VerificationTimeInfo: React.FC = () => {
  return (
    <motion.div 
      className="absolute right-[15%] top-[75%] bg-slate-800/80 backdrop-blur border border-green-500 rounded-lg px-4 py-2 shadow-lg"
      initial={{ opacity: 0, y: 20, scale: 0.9 }}
      animate={{
        opacity: 1,
        y: 0,
        scale: 1,
      }}
      transition={{ 
        delay: 1.5,
        type: "spring",
        stiffness: 300,
        damping: 20
      }}
    >
      <motion.div 
        className="flex items-center gap-2"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 1.7 }}
      >
        <Clock size={14} className="text-green-400" />
        <motion.p 
          className="text-sm font-bold text-green-400"
          animate={{ 
            textShadow: ["0 0 0px rgba(74, 222, 128, 0)", "0 0 5px rgba(74, 222, 128, 0.5)", "0 0 0px rgba(74, 222, 128, 0)"]
          }}
          transition={{ duration: 2, repeat: Infinity }}
        >
          O(1) Constant Time Verification
        </motion.p>
      </motion.div>
      
      <motion.div 
        className="w-full h-0.5 bg-gradient-to-r from-green-500/20 via-green-500/50 to-green-500/20 mt-1.5"
        initial={{ scaleX: 0 }}
        animate={{ scaleX: 1 }}
        transition={{ delay: 1.9, duration: 0.8 }}
        style={{ transformOrigin: 'left' }}
      />
      
      <motion.p 
        className="text-xs text-slate-300 mt-1.5"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 2 }}
      >
        Single pairing check for all signatures
      </motion.p>
    </motion.div>
  );
};
