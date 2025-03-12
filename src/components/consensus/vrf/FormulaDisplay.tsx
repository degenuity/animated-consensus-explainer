
import React from 'react';
import { motion } from "framer-motion";

export const FormulaDisplay: React.FC = () => {
  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ delay: 0.3 }}
      className="p-4 bg-slate-700/50 rounded-lg border border-blue-500/20"
    >
      <p className="text-sm text-slate-300 mb-2 text-left">The selection probability 𝑃ᵢ for the validator i is computed as:</p>
      <motion.div 
        className="text-sm font-mono bg-slate-800/80 p-3 rounded overflow-hidden relative"
        initial={{ opacity: 0 }}
        animate={{ 
          opacity: 1,
          boxShadow: ["0 0 0px rgba(59, 130, 246, 0)", "0 0 20px rgba(59, 130, 246, 0.3)", "0 0 0px rgba(59, 130, 246, 0)"]
        }}
        transition={{ 
          duration: 2,
          repeat: Infinity
        }}
      >
        <motion.span
          className="absolute inset-0 bg-blue-400/10"
          initial={{ width: "0%" }}
          animate={{ 
            width: ["0%", "100%", "0%"],
            left: ["0%", "0%", "100%"] 
          }}
          transition={{ 
            duration: 3,
            repeat: Infinity,
            ease: "easeInOut"
          }}
        />
        <span className="relative z-10 text-cyan-300 font-bold tracking-wide text-lg flex justify-center">
          <span className="inline-flex items-baseline">
            P<sub className="text-sm">i</sub> = (<span className="text-blue-400">S<sub className="text-sm">i</sub></span> / <span className="text-blue-400">∑S<sub className="text-sm">j</sub></span>) <span className="text-cyan-300 mx-1">×</span> <span className="text-green-400 mx-1">F</span> <span className="text-cyan-300 mx-1">×</span> <span className="text-purple-400">A<sub className="text-sm">i</sub></span>
          </span>
        </span>
      </motion.div>
    </motion.div>
  );
};
