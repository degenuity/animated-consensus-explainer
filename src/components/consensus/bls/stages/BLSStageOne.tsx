
import React, { useEffect, useState } from 'react';
import { motion } from "framer-motion";
import { User, Server } from "lucide-react";

interface BLSStageOneProps {
  activeSection: number;
  activeFormula: number;
}

export const BLSStageOne: React.FC<BLSStageOneProps> = ({ activeSection, activeFormula }) => {
  const [innerKey, setInnerKey] = useState(0);
  
  // Reset animation when component becomes active
  useEffect(() => {
    if (activeSection === 1 && activeFormula === 0) {
      setInnerKey(prev => prev + 1);
    }
  }, [activeSection, activeFormula]);
  
  if (activeSection !== 1 || activeFormula !== 0) return null;
  
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
                Relay Node
              </motion.span>
            </motion.div>
          </motion.div>
        </motion.div>

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
                
                <motion.div
                  className="absolute w-8 h-8 rounded-md bg-purple-600 flex items-center justify-center shadow-lg shadow-purple-500/30"
                  initial={{ 
                    x: 0, 
                    y: 0,
                    opacity: 0,
                    scale: 0.7
                  }}
                  animate={{ 
                    x: [0, -x * 0.7],
                    y: [0, -y * 0.7],
                    opacity: [0, 0.9, 0],
                    scale: [0.7, 1, 0.7]
                  }}
                  transition={{
                    duration: 2,
                    repeat: Infinity,
                    delay: i * 0.3,
                    repeatDelay: 1
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
      
      <div className="absolute bottom-2 left-0 right-0 text-center">
        <motion.div 
          className="text-xs text-purple-300 font-medium bg-slate-800/70 mx-auto rounded-full px-3 py-1 inline-block border border-purple-500/30"
          initial={{ opacity: 0, y: 10 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 1 }}
        >
          <motion.span 
            className="inline-block w-2 h-2 rounded-full bg-purple-400 mr-1.5 align-middle"
            animate={{ opacity: [1, 0.4, 1] }}
            transition={{ duration: 1.5, repeat: Infinity }}
          />
          Each validator sends message M to the relay node
        </motion.div>
      </div>
    </motion.div>
  );
};
