
import React, { useEffect, useState, useRef, memo } from 'react';
import { motion } from "framer-motion";
import { User, Server } from "lucide-react";
import { StatusMessage } from './components';

interface BLSStageOneProps {
  activeSection: number;
  activeFormula: number;
  showX1Label?: boolean;
}

// Memoize the component to prevent unnecessary re-renders
export const BLSStageOne = memo(({ activeSection, activeFormula, showX1Label = false }: BLSStageOneProps) => {
  const [innerKey, setInnerKey] = useState(0);
  const prevFormulaRef = useRef(activeFormula);
  
  // Reset animation when component becomes active or when coming from Stage 3
  useEffect(() => {
    const wasInactive = prevFormulaRef.current !== 0 && activeFormula === 0;
    prevFormulaRef.current = activeFormula;
    
    if ((activeSection === 1 && activeFormula === 0) || wasInactive) {
      // Force animation restart
      setInnerKey(prev => prev + 1);
    }
  }, [activeSection, activeFormula]);
  
  // Original condition: Only render when this is the active section OR formula
  if (activeSection !== 1 && activeFormula !== 0) return null;
  
  return (
    <motion.div
      key={innerKey}
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      className="absolute inset-0"
    >
      <div className="absolute inset-0 flex items-center justify-center">
        <motion.div
          className="absolute z-20"
          initial={{ scale: 0.95 }}
          animate={{ scale: [0.95, 1.05, 0.95] }}
          transition={{ duration: 3, repeat: Infinity, ease: "easeInOut" }}
        >
          <motion.div className="w-20 h-20 rounded-xl bg-slate-800 border-2 border-purple-500 flex items-center justify-center shadow-lg shadow-purple-500/20">
            <motion.div
              className="flex flex-col items-center justify-center"
              animate={{ opacity: [0.8, 1, 0.8] }}
              transition={{ duration: 2, repeat: Infinity }}
            >
              <Server className="text-purple-400 mb-1" size={20} />
              <motion.span className="text-xs font-bold text-purple-300">
                {showX1Label ? "X1" : "Relay node"}
              </motion.span>
            </motion.div>
          </motion.div>
        </motion.div>

        {/* Render all 10 validators in a circle */}
        {Array.from({ length: 10 }).map((_, i) => {
          const angle = (i * 36) * (Math.PI / 180);
          const radius = 120;
          const x = Math.cos(angle) * radius;
          const y = Math.sin(angle) * radius;
          
          return (
            <motion.div
              key={`validator-${i}`}
              initial={{ opacity: 0, x: 0, y: 0 }}
              animate={{ 
                opacity: 1,
                x, 
                y,
              }}
              transition={{ 
                delay: i * 0.1,
                duration: 0.5,
                type: "spring",
              }}
              className="absolute"
              style={{
                transform: `translate(${x}px, ${y}px)`,
              }}
            >
              <motion.div
                className="flex flex-col items-center"
                whileHover={{ scale: 1.1 }}
              >
                <div className="w-10 h-10 rounded-full bg-slate-800 border-2 border-purple-500 flex items-center justify-center shadow-md">
                  <User size={15} className="text-purple-400" />
                </div>
                
                {/* Signature message box with "M" */}
                <motion.div
                  className="absolute w-8 h-8 rounded-md bg-purple-600 flex items-center justify-center shadow-lg shadow-purple-500/30"
                  initial={{
                    x: 0,
                    y: 0,
                    opacity: 0,
                    scale: 0.5
                  }}
                  animate={{ 
                    x: -x * 0.6, 
                    y: -y * 0.6,
                    opacity: 1,
                    scale: 1
                  }}
                  exit={{
                    opacity: 0,
                    scale: 0.5
                  }}
                  transition={{
                    duration: 1.5,
                    repeat: Infinity,
                    repeatType: "reverse",
                    delay: i * 0.3,
                    ease: "easeInOut"
                  }}
                >
                  <span className="text-white font-bold text-xs">M</span>
                </motion.div>
                
                <motion.p 
                  className="text-xs mt-2 text-purple-300 font-medium"
                  initial={{ opacity: 0 }}
                  animate={{ opacity: 1 }}
                  transition={{ delay: 0.5 + i * 0.05 }}
                >
                  σ<sub>{i+1}</sub>
                </motion.p>
              </motion.div>
            </motion.div>
          );
        })}
      </div>
      
      {/* Add the status message box at the bottom */}
      <div className="absolute bottom-4 left-0 right-0 flex justify-center">
        <StatusMessage>
          Each validator creates a signature <strong className="text-purple-400">σ<sub>i</sub></strong> on message M using their secret key
        </StatusMessage>
      </div>
    </motion.div>
  );
});

// Add displayName for better debugging
BLSStageOne.displayName = 'BLSStageOne';
