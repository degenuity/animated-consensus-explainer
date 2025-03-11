
import React, { useState, useEffect } from 'react';
import { motion } from "framer-motion";
import { Check, Clock } from "lucide-react";

interface BLSStageThreeProps {
  activeSection: number;
  activeFormula: number;
}

export const BLSStageThree: React.FC<BLSStageThreeProps> = ({ activeSection, activeFormula }) => {
  const [verifiedSignatures, setVerifiedSignatures] = useState<number[]>([]);
  
  useEffect(() => {
    if (activeSection !== 1 || activeFormula !== 2) {
      setVerifiedSignatures([]);
      return;
    }
    
    // Clear the verification state
    setVerifiedSignatures([]);
    
    // Verify signatures one by one
    const verifyInterval = setInterval(() => {
      setVerifiedSignatures(prev => {
        if (prev.length < 10) {
          return [...prev, prev.length];
        }
        return prev;
      });
    }, 500);
    
    return () => clearInterval(verifyInterval);
  }, [activeSection, activeFormula]);
  
  if (activeSection !== 1 || activeFormula !== 2) return null;
  
  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      className="absolute inset-0 flex items-center justify-center"
    >
      <div className="relative w-full h-full">
        {/* Leader Node - Top Left */}
        <motion.div
          className="absolute top-[15%] left-[15%]"
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
        </motion.div>
        
        {/* Aggregation Box with Signatures - Left Middle */}
        <motion.div 
          className="absolute left-[10%] top-[40%] bg-slate-800/90 backdrop-blur rounded-lg p-3 border border-indigo-500/50 shadow-lg max-w-[250px]"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.4 }}
        >
          <motion.div className="text-sm font-medium text-indigo-400 mb-2 flex items-center">
            <motion.div 
              className="w-6 h-6 rounded-md bg-indigo-500 flex items-center justify-center shadow-md mr-2"
            >
              <span className="text-white font-bold text-xs">Agg</span>
            </motion.div>
            Aggregated Signatures
          </motion.div>
          <div className="h-32 overflow-y-auto pr-2 grid grid-cols-2 gap-2">
            {Array.from({ length: 10 }).map((_, index) => (
              <motion.div
                key={index}
                className={`p-2 rounded-md text-xs flex items-center justify-between ${
                  verifiedSignatures.includes(index) 
                    ? 'bg-green-900/30 border border-green-500/50' 
                    : 'bg-slate-700/50 border border-slate-600/50'
                }`}
                initial={{ opacity: 0 }}
                animate={{ 
                  opacity: 1,
                  backgroundColor: verifiedSignatures.includes(index) 
                    ? ["rgba(20, 83, 45, 0.3)", "rgba(20, 83, 45, 0.5)", "rgba(20, 83, 45, 0.3)"]
                    : "rgba(51, 65, 85, 0.5)",
                }}
                transition={{ 
                  delay: index * 0.1 + 0.5,
                  backgroundColor: {
                    duration: 2,
                    repeat: verifiedSignatures.includes(index) ? Infinity : 0,
                  }
                }}
              >
                <span className={verifiedSignatures.includes(index) ? 'text-green-400' : 'text-white'}>
                  σ<sub>{index + 1}</sub>
                </span>
                {verifiedSignatures.includes(index) && (
                  <motion.div
                    initial={{ scale: 0 }}
                    animate={{ scale: 1 }}
                    transition={{ type: "spring" }}
                  >
                    <Check size={16} className="text-green-400" />
                  </motion.div>
                )}
              </motion.div>
            ))}
          </div>
        </motion.div>
        
        {/* Verification Process - Central Element */}
        <div className="absolute top-1/2 left-[55%] transform -translate-x-1/2 -translate-y-1/2">
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
                  σ<sub>agg</sub>
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
          </motion.div>
        </div>
        
        {/* Verification Time Info - Right Middle */}
        <motion.div 
          className="absolute right-[10%] top-[40%] bg-slate-800/80 backdrop-blur border border-green-500 rounded-lg px-4 py-3 shadow-lg max-w-[250px]"
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
            className="w-full h-0.5 bg-gradient-to-r from-green-500/20 via-green-500/50 to-green-500/20 mt-2"
            initial={{ scaleX: 0 }}
            animate={{ scaleX: 1 }}
            transition={{ delay: 1.9, duration: 0.8 }}
            style={{ transformOrigin: 'left' }}
          />
          
          <motion.p 
            className="text-xs text-slate-300 mt-2"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 2 }}
          >
            Single pairing check for all signatures
          </motion.p>
        </motion.div>
        
        {/* Status Indicator - Bottom */}
        <div className="absolute bottom-4 left-0 right-0 text-center">
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
            <span className="mr-1">Verifying signatures:</span>
            <span className="text-green-400 font-bold">{verifiedSignatures.length}</span>
            <span className="text-gray-400">/10</span>
            <span className="ml-1">
              {verifiedSignatures.length === 10 ? '(Complete!)' : '(In progress...)'}
            </span>
          </motion.div>
        </div>
      </div>
    </motion.div>
  );
};
