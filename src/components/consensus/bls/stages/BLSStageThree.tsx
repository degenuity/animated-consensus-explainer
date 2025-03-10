
import React from 'react';
import { motion } from "framer-motion";
import { Check } from "lucide-react";

interface BLSStageThreeProps {
  activeSection: number;
  activeFormula: number;
}

export const BLSStageThree: React.FC<BLSStageThreeProps> = ({ activeSection, activeFormula }) => {
  if (activeSection !== 1 || activeFormula !== 2) return null;
  
  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      className="absolute inset-0"
    >
      <motion.div
        className="absolute top-1/2 left-1/3 transform -translate-x-1/2 -translate-y-1/2 z-20"
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
      
      <div className="absolute top-[40%] left-2/3 transform -translate-x-1/2 -translate-y-1/2">
        <motion.div
          className="bg-slate-800 border border-red-500 p-2 rounded-lg shadow-md flex items-center justify-center overflow-hidden relative"
          initial={{ y: -20, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          transition={{ delay: 0.4 }}
        >
          <motion.span
            className="absolute inset-0 bg-red-400/10"
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
          <motion.p
            className="text-red-400 font-mono text-sm font-bold relative z-10"
            animate={{ scale: [0.95, 1.05, 0.95] }}
            transition={{ duration: 2, repeat: Infinity }}
          >
            𝑒(σ<sub>agg</sub>,g)
          </motion.p>
        </motion.div>
        
        <motion.div
          className="my-2 flex justify-center"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.6 }}
        >
          <span className="text-xl text-red-400">=</span>
        </motion.div>
        
        <motion.div
          className="bg-slate-800 border border-red-500 p-2 rounded-lg shadow-md flex items-center justify-center overflow-hidden relative"
          initial={{ y: 20, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          transition={{ delay: 0.8 }}
        >
          <motion.span
            className="absolute inset-0 bg-red-400/10"
            animate={{ 
              width: ["0%", "100%", "0%"],
              left: ["0%", "0%", "100%"] 
            }}
            transition={{ 
              duration: 3,
              repeat: Infinity,
              ease: "easeInOut",
              delay: 0.5
            }}
          />
          <motion.p
            className="text-red-400 font-mono text-sm font-bold relative z-10"
            animate={{ scale: [0.95, 1.05, 0.95] }}
            transition={{ duration: 2, repeat: Infinity }}
          >
            𝑒(H(M),∑pk<sub>i</sub>)
          </motion.p>
        </motion.div>
      </div>
      
      <motion.div
        className="absolute top-1/2 left-[43%] w-[15%] h-0.5 bg-gradient-to-r from-red-500 to-red-500/0"
        initial={{ scaleX: 0, opacity: 0 }}
        animate={{ 
          scaleX: 1,
          opacity: [0, 1, 0.5]
        }}
        transition={{ 
          duration: 1,
          repeat: Infinity,
          repeatDelay: 2
        }}
        style={{ transformOrigin: 'left' }}
      />
      
      <motion.div
        className="absolute top-1/2 right-1/6 transform -translate-y-1/2 z-10"
        animate={{
          opacity: [0, 0, 1],
          scale: [0.5, 0.5, 1]
        }}
        transition={{ 
          duration: 3,
          repeat: Infinity,
          repeatDelay: 0.5,
          times: [0, 0.7, 1]
        }}
      >
        <div className="w-16 h-16 rounded-full bg-slate-800 border-2 border-green-500 flex items-center justify-center shadow-lg shadow-green-500/20">
          <Check className="text-green-500" size={28} />
        </div>
      </motion.div>
      
      <motion.div 
        className="absolute right-10 top-[65%] bg-slate-800 border border-green-500 rounded-lg px-3 py-1.5 shadow-md shadow-green-500/10"
        initial={{ opacity: 0, y: 10 }}
        animate={{
          opacity: [0, 1, 1, 0],
          y: [10, 0, 0, -10]
        }}
        transition={{ 
          duration: 3,
          repeat: Infinity,
          repeatDelay: 0.5,
          times: [0, 0.1, 0.9, 1]
        }}
      >
        <motion.p 
          className="text-xs font-bold text-green-400"
          animate={{ scale: [0.95, 1.05, 0.95] }}
          transition={{ duration: 1.5, repeat: Infinity }}
        >
          O(1) Constant Time
        </motion.p>
      </motion.div>
      
      <div className="absolute bottom-2 left-0 right-0 text-center">
        <motion.div 
          className="text-xs text-red-300 font-medium bg-slate-800/70 mx-auto rounded-full px-3 py-1 inline-block border border-red-500/30"
          initial={{ opacity: 0, y: 10 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.5 }}
        >
          <motion.span 
            className="inline-block w-2 h-2 rounded-full bg-red-400 mr-1.5 align-middle"
            animate={{ opacity: [1, 0.4, 1] }}
            transition={{ duration: 1.5, repeat: Infinity }}
          />
          Leader verifies the aggregated signature in constant time
        </motion.div>
      </div>
    </motion.div>
  );
};
