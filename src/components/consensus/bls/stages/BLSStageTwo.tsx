
import React, { useState, useEffect } from 'react';
import { motion } from "framer-motion";
import { User, Server, Check, ArrowRight } from "lucide-react";

interface BLSStageTwoProps {
  activeSection: number;
  activeFormula: number;
}

export const BLSStageTwo: React.FC<BLSStageTwoProps> = ({ activeSection, activeFormula }) => {
  const [leaderReceived, setLeaderReceived] = useState(false);
  const [showSuccessEffect, setShowSuccessEffect] = useState(false);

  useEffect(() => {
    setLeaderReceived(false);
    setShowSuccessEffect(false);
    
    if (activeSection === 1 && activeFormula === 1) {
      const receiveTimer = setTimeout(() => {
        setLeaderReceived(true);
        
        const successTimer = setTimeout(() => {
          setShowSuccessEffect(true);
        }, 800);
        
        return () => clearTimeout(successTimer);
      }, 2000);
      
      return () => clearTimeout(receiveTimer);
    }
  }, [activeSection, activeFormula]);

  if (activeSection !== 1 || activeFormula !== 1) return null;
  
  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      className="absolute inset-0"
    >
      <div className="absolute inset-0">
        {Array.from({ length: 10 }).map((_, i) => {
          const angle = (i * 36) * (Math.PI / 180);
          const radius = 120;
          const x = Math.cos(angle) * radius;
          const y = Math.sin(angle) * radius;
          
          return (
            <motion.div
              key={`agg-validator-${i}`}
              className="absolute top-1/2 left-1/2"
              style={{
                x, 
                y,
                translateX: "-50%",
                translateY: "-50%",
              }}
            >
              <div className="w-8 h-8 rounded-full bg-slate-800 border border-indigo-500/30 flex items-center justify-center opacity-70">
                <User size={12} className="text-indigo-400/70" />
              </div>
            </motion.div>
          );
        })}
      </div>
      
      <motion.div
        className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 z-20"
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
      
      <motion.div
        className="absolute top-1/2 right-4 transform -translate-y-1/2"
        initial={{ x: 50, opacity: 0 }}
        animate={{ 
          x: 0, 
          opacity: 1,
          scale: showSuccessEffect ? [1, 1.15, 1] : 1,
        }}
        transition={{ 
          delay: 0.8, 
          type: "spring",
          scale: { duration: 0.8, repeat: showSuccessEffect ? Infinity : 0 }
        }}
      >
        <motion.div 
          className={`w-16 h-16 rounded-xl bg-slate-800 flex items-center justify-center shadow-md flex-col transition-all duration-700 overflow-hidden relative ${leaderReceived ? 'border-2 border-green-500' : 'border-2 border-red-500/20'}`}
          animate={{
            boxShadow: leaderReceived ? 
              ["0 0 0px rgba(74, 222, 128, 0)", "0 0 20px rgba(74, 222, 128, 0.4)", "0 0 10px rgba(74, 222, 128, 0.2)"] : 
              "none",
            backgroundColor: leaderReceived ? ["rgb(30 41 59)", "rgb(20 83 45 / 30%)", "rgb(30 41 59)"] : "rgb(30 41 59)"
          }}
          transition={{ 
            duration: 2, 
            repeat: showSuccessEffect ? Infinity : 0,
            times: leaderReceived ? [0, 0.5, 1] : undefined
          }}
        >
          {showSuccessEffect && (
            <motion.div
              className="absolute inset-0 bg-green-500/10"
              initial={{ opacity: 0 }}
              animate={{ 
                opacity: [0, 0.6, 0],
                scale: [0.9, 1.1, 1]
              }}
              transition={{ 
                duration: 2,
                repeat: Infinity,
                ease: "easeInOut"
              }}
            />
          )}
          
          <motion.span
            className={`text-sm font-bold transition-colors duration-500 ${leaderReceived ? 'text-green-400' : 'text-red-400/70'}`}
            animate={{
              textShadow: showSuccessEffect ? 
                ["0 0 0px rgba(74, 222, 128, 0)", "0 0 10px rgba(74, 222, 128, 0.7)", "0 0 0px rgba(74, 222, 128, 0)"] : 
                "none"
            }}
            transition={{ duration: 1.5, repeat: showSuccessEffect ? Infinity : 0 }}
          >
            Leader
          </motion.span>
          
          {leaderReceived && (
            <motion.div
              initial={{ scale: 0, opacity: 0 }}
              animate={{ 
                scale: 1, 
                opacity: 1,
                rotate: showSuccessEffect ? [0, 10, 0, -10, 0] : 0
              }}
              transition={{
                type: "spring", 
                damping: 12,
                rotate: { repeat: showSuccessEffect ? Infinity : 0, duration: 2 }
              }}
              className="mt-1"
            >
              <Check size={16} className="text-green-400" />
            </motion.div>
          )}
        </motion.div>
      </motion.div>
      
      <motion.div
        className="absolute top-1/2 left-1/2 transform -translate-y-1/2 z-30"
        initial={{ opacity: 0, x: 0 }}
        animate={{
          opacity: [0, 1, 1, 0],
          x: [0, 100, 100, 100],
          scale: [0.8, 1.2, 1.2, 0.8]
        }}
        transition={{
          duration: 4,
          repeat: Infinity,
          repeatDelay: 1,
          delay: 1.5,
          times: [0, 0.3, 0.7, 1]
        }}
      >
        <div className="h-10 w-10 px-2 py-1 rounded-md bg-indigo-500 flex items-center justify-center shadow-lg shadow-indigo-500/30">
          <span className="text-white font-bold text-xs">Agg</span>
        </div>
      </motion.div>
      
      <motion.div
        className="absolute top-1/2 right-[43%] transform -translate-y-1/2"
        animate={{
          x: [0, 10, 0],
          opacity: [0.5, 1, 0.5]
        }}
        transition={{ 
          duration: 2,
          repeat: Infinity 
        }}
      >
        <ArrowRight className="text-indigo-400" size={20} />
      </motion.div>
      
      <div className="absolute bottom-2 left-0 right-0 text-center">
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
    </motion.div>
  );
};
