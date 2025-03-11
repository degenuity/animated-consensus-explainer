
import React from 'react';
import { motion } from "framer-motion";
import { Check, Clock } from "lucide-react";

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
        initial={{ opacity: 0, scale: 0.5 }}
        animate={{ 
          opacity: 1, 
          scale: 1,
          transition: { delay: 1.2 }
        }}
      >
        <motion.div 
          className="w-16 h-16 rounded-full bg-slate-800 border-2 border-green-500 flex items-center justify-center shadow-lg shadow-green-500/20"
          animate={{
            boxShadow: ["0 0 5px rgba(74, 222, 128, 0.1)", "0 0 15px rgba(74, 222, 128, 0.4)", "0 0 5px rgba(74, 222, 128, 0.1)"],
          }}
          transition={{ duration: 2, repeat: Infinity }}
        >
          <motion.div
            initial={{ scale: 0 }}
            animate={{ scale: 1 }}
            transition={{ type: "spring", damping: 12, delay: 1.3 }}
          >
            <Check className="text-green-500" size={28} />
          </motion.div>
        </motion.div>
      </motion.div>
      
      <motion.div 
        className="absolute right-10 top-[65%] bg-slate-800/80 backdrop-blur border border-green-500 rounded-lg px-4 py-2 shadow-lg"
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
