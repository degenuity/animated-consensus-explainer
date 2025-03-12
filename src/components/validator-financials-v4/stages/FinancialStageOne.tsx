
import React, { useEffect, useRef } from 'react';
import { motion } from "framer-motion";
import { TrendingUp, TrendingDown, Coins } from "lucide-react";

interface FinancialStageOneProps {
  isActive: boolean;
}

const FinancialStageOne: React.FC<FinancialStageOneProps> = ({ isActive }) => {
  const transitionTimeoutRef = useRef<NodeJS.Timeout | null>(null);
  const mounted = useRef(true);

  useEffect(() => {
    mounted.current = true;
    
    if (isActive) {
      // Set a timeout to transition to stage two
      transitionTimeoutRef.current = setTimeout(() => {
        if (!mounted.current) return;
        
        // Dispatch event to signal completion of stage one
        const event = new CustomEvent('financial-v4-stage-one-complete');
        document.dispatchEvent(event);
      }, 6000); // 6 second transition to next stage
    }
    
    return () => {
      mounted.current = false;
      
      if (transitionTimeoutRef.current) {
        clearTimeout(transitionTimeoutRef.current);
        transitionTimeoutRef.current = null;
      }
    };
  }, [isActive]);

  if (!isActive) return null;
  
  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      className="absolute inset-0"
    >
      <div className="relative h-full w-full flex flex-col items-center justify-center">
        {/* Inflation box */}
        <motion.div
          className="absolute left-1/4 transform -translate-x-1/2"
          initial={{ y: -50, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          transition={{ duration: 0.8, type: "spring" }}
        >
          <motion.div 
            className="w-40 h-40 bg-gradient-to-br from-blue-600 to-blue-400 rounded-xl flex flex-col items-center justify-center p-4 shadow-lg"
            animate={{ 
              boxShadow: ["0 0 0px rgba(37, 99, 235, 0)", "0 0 20px rgba(37, 99, 235, 0.5)", "0 0 0px rgba(37, 99, 235, 0)"]
            }}
            transition={{ duration: 3, repeat: Infinity }}
          >
            <TrendingUp size={36} className="text-white mb-2" />
            <motion.div 
              className="text-xl font-bold text-white"
              animate={{ scale: [1, 1.05, 1] }}
              transition={{ duration: 2, repeat: Infinity }}
            >
              Inflation
            </motion.div>
            <div className="text-sm text-white/80 mt-1">Token Issuance</div>
          </motion.div>
        </motion.div>
        
        {/* Deflation box */}
        <motion.div
          className="absolute right-1/4 transform translate-x-1/2"
          initial={{ y: -50, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          transition={{ duration: 0.8, delay: 0.3, type: "spring" }}
        >
          <motion.div 
            className="w-40 h-40 bg-gradient-to-br from-amber-600 to-amber-400 rounded-xl flex flex-col items-center justify-center p-4 shadow-lg"
            animate={{ 
              boxShadow: ["0 0 0px rgba(217, 119, 6, 0)", "0 0 20px rgba(217, 119, 6, 0.5)", "0 0 0px rgba(217, 119, 6, 0)"]
            }}
            transition={{ duration: 3, repeat: Infinity }}
          >
            <TrendingDown size={36} className="text-white mb-2" />
            <motion.div 
              className="text-xl font-bold text-white"
              animate={{ scale: [1, 1.05, 1] }}
              transition={{ duration: 2, repeat: Infinity }}
            >
              Deflation
            </motion.div>
            <div className="text-sm text-white/80 mt-1">Token Burns</div>
          </motion.div>
        </motion.div>
        
        {/* Flow animation between boxes */}
        <motion.div className="absolute top-1/2 transform -translate-y-1/2 flex items-center w-1/2">
          <svg width="100%" height="4" className="overflow-visible">
            <motion.line 
              x1="0" 
              y1="2" 
              x2="100%" 
              y2="2" 
              stroke="#4B5563" 
              strokeWidth="2"
            />
            <motion.circle
              cx="50%"
              cy="2"
              r="4"
              fill="#60A5FA"
              initial={{ opacity: 0 }}
              animate={{ 
                x: ["-45%", "45%", "-45%"],
                opacity: [0, 1, 0]
              }}
              transition={{ 
                duration: 4,
                repeat: Infinity,
                repeatType: "loop",
                ease: "easeInOut"
              }}
            />
          </svg>
        </motion.div>
        
        {/* Supply balance point */}
        <motion.div
          className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2"
          initial={{ scale: 0 }}
          animate={{ scale: 1 }}
          transition={{ duration: 0.5, delay: 1.2, type: "spring" }}
        >
          <motion.div 
            className="w-14 h-14 rounded-full bg-gradient-to-r from-violet-600 to-indigo-600 flex items-center justify-center shadow-lg"
            animate={{ 
              boxShadow: ["0 0 0px rgba(124, 58, 237, 0)", "0 0 20px rgba(124, 58, 237, 0.5)", "0 0 0px rgba(124, 58, 237, 0)"]
            }}
            transition={{ duration: 2.5, repeat: Infinity }}
          >
            <Coins className="text-white" size={24} />
          </motion.div>
          <motion.div
            className="absolute top-16 left-1/2 transform -translate-x-1/2 whitespace-nowrap bg-slate-800/80 rounded-full px-3 py-1 text-xs text-white"
            initial={{ opacity: 0, y: -5 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 1.8 }}
          >
            Token Supply Balance
          </motion.div>
        </motion.div>
      </div>
    </motion.div>
  );
};

export default FinancialStageOne;
