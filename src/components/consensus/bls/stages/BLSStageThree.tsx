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
      {/* Leader Node */}
      <motion.div
        className="absolute top-1/2 left-[15%] transform -translate-x-1/2 -translate-y-1/2 z-20"
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
      
      {/* Aggregated Signature Flow */}
      <motion.div
        className="absolute top-1/2 left-[25%] w-[10%] h-0.5 bg-gradient-to-r from-red-500 to-red-500/0"
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
      
      {/* Verification Process - Central Element */}
      <div className="absolute top-[30%] left-[50%] transform -translate-x-1/2 -translate-y-1/2">
        <motion.div 
          className="relative flex flex-col items-center"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.6 }}
        >
          <motion.div 
            className="flex items-center justify-center space-x-4 mb-4"
            initial={{ y: -20, opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            transition={{ delay: 0.8 }}
          >
            <motion.div
              className="w-12 h-12 rounded-lg bg-red-400/10 border border-red-500 flex items-center justify-center"
              animate={{ 
                borderColor: ["rgba(239, 68, 68, 0.5)", "rgba(239, 68, 68, 0.9)", "rgba(239, 68, 68, 0.5)"] 
              }}
              transition={{ duration: 2, repeat: Infinity }}
            >
              <motion.span 
                className="text-red-400 font-bold"
                animate={{ scale: [0.95, 1.05, 0.95] }}
                transition={{ duration: 2, repeat: Infinity }}
              >
                Agg
              </motion.span>
            </motion.div>
            
            <motion.div
              className="flex items-center"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 1 }}
            >
              <motion.div 
                className="w-8 h-0.5 bg-gradient-to-r from-red-500 to-red-500/0"
                animate={{ 
                  scaleX: [1, 1.2, 1],
                  opacity: [0.5, 1, 0.5]
                }}
                transition={{ duration: 2, repeat: Infinity }}
                style={{ transformOrigin: 'left' }}
              />
            </motion.div>
            
            <motion.div
              className="w-12 h-12 rounded-lg bg-slate-800 border border-red-500 flex items-center justify-center"
              animate={{
                borderColor: ["rgba(239, 68, 68, 0.5)", "rgba(239, 68, 68, 0.9)", "rgba(239, 68, 68, 0.5)"]
              }}
              transition={{ duration: 2, repeat: Infinity, delay: 0.3 }}
            >
              <motion.span 
                className="text-red-400 font-bold"
                animate={{ scale: [0.95, 1.05, 0.95] }}
                transition={{ duration: 2, repeat: Infinity, delay: 0.3 }}
              >
                PKs
              </motion.span>
            </motion.div>
          </motion.div>
          
          <motion.div
            className="w-full h-0.5 bg-slate-600/50 my-2"
            initial={{ scaleX: 0 }}
            animate={{ scaleX: 1 }}
            transition={{ delay: 1.2, duration: 0.5 }}
            style={{ transformOrigin: 'center' }}
          />
        </motion.div>
      </div>
      
      {/* Leader Verification - Check Mark */}
      <motion.div
        className="absolute top-1/2 right-[15%] transform -translate-y-1/2 z-10"
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
      
      {/* Verification Time Info - Moving it higher from bottom (to top-[75%]) to avoid overlap with status indicator */}
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
      
      {/* Status Indicator */}
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
    </motion.div>
  );
};
