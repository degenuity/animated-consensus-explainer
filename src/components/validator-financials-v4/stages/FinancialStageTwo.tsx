
import React, { useEffect, useRef } from 'react';
import { motion } from "framer-motion";
import { CircleDollarSign, ServerCrash, Database, BarChart3 } from "lucide-react";

interface FinancialStageTwoProps {
  isActive: boolean;
}

const FinancialStageTwo: React.FC<FinancialStageTwoProps> = ({ isActive }) => {
  const transitionTimeoutRef = useRef<NodeJS.Timeout | null>(null);
  const mounted = useRef(true);

  useEffect(() => {
    mounted.current = true;
    
    if (isActive) {
      // Set a timeout to transition to stage three
      transitionTimeoutRef.current = setTimeout(() => {
        if (!mounted.current) return;
        
        // Dispatch event to signal completion of stage two
        const event = new CustomEvent('financial-v4-stage-two-complete');
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
        {/* Internal Rewards */}
        <motion.div
          className="absolute left-1/4 transform -translate-x-1/2 top-1/4 -translate-y-1/2"
          initial={{ x: -50, opacity: 0 }}
          animate={{ x: 0, opacity: 1 }}
          transition={{ duration: 0.8, type: "spring" }}
        >
          <motion.div 
            className="w-40 h-36 bg-gradient-to-br from-emerald-600 to-emerald-400 rounded-xl flex flex-col items-center justify-center p-4 shadow-lg"
            animate={{ 
              boxShadow: ["0 0 0px rgba(5, 150, 105, 0)", "0 0 20px rgba(5, 150, 105, 0.5)", "0 0 0px rgba(5, 150, 105, 0)"]
            }}
            transition={{ duration: 3, repeat: Infinity }}
          >
            <CircleDollarSign size={32} className="text-white mb-2" />
            <div className="text-lg font-bold text-white">Internal Rewards</div>
            <div className="text-xs text-white/80 mt-1 text-center">Consensus participation</div>
          </motion.div>
        </motion.div>
        
        {/* Total Stake */}
        <motion.div
          className="absolute right-1/4 transform translate-x-1/2 top-1/4 -translate-y-1/2"
          initial={{ x: 50, opacity: 0 }}
          animate={{ x: 0, opacity: 1 }}
          transition={{ duration: 0.8, delay: 0.3, type: "spring" }}
        >
          <motion.div 
            className="w-40 h-36 bg-gradient-to-br from-violet-600 to-violet-400 rounded-xl flex flex-col items-center justify-center p-4 shadow-lg"
            animate={{ 
              boxShadow: ["0 0 0px rgba(124, 58, 237, 0)", "0 0 20px rgba(124, 58, 237, 0.5)", "0 0 0px rgba(124, 58, 237, 0)"]
            }}
            transition={{ duration: 3, repeat: Infinity }}
          >
            <Database size={32} className="text-white mb-2" />
            <div className="text-lg font-bold text-white">Total Stake</div>
            <div className="text-xs text-white/80 mt-1 text-center">Validator collateral</div>
          </motion.div>
        </motion.div>
        
        {/* Network Usage Costs */}
        <motion.div
          className="absolute left-1/2 transform -translate-x-1/2 top-1/4 -translate-y-1/2"
          initial={{ y: -50, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          transition={{ duration: 0.8, delay: 0.6, type: "spring" }}
        >
          <motion.div 
            className="w-40 h-36 bg-gradient-to-br from-orange-600 to-orange-400 rounded-xl flex flex-col items-center justify-center p-4 shadow-lg"
            animate={{ 
              boxShadow: ["0 0 0px rgba(234, 88, 12, 0)", "0 0 20px rgba(234, 88, 12, 0.5)", "0 0 0px rgba(234, 88, 12, 0)"]
            }}
            transition={{ duration: 3, repeat: Infinity }}
          >
            <ServerCrash size={32} className="text-white mb-2" />
            <div className="text-lg font-bold text-white">Network Costs</div>
            <div className="text-xs text-white/80 mt-1 text-center">Transaction processing</div>
          </motion.div>
        </motion.div>
        
        {/* Flow lines between boxes */}
        {[
          { start: "25%", end: "50%", top: "25%", delay: 1.0 },
          { start: "50%", end: "75%", top: "25%", delay: 1.3 }
        ].map((line, idx) => (
          <motion.div 
            key={`line-${idx}`}
            className="absolute"
            style={{ 
              top: line.top, 
              left: line.start,
              width: `calc(${line.end} - ${line.start})`,
              height: "2px"
            }}
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: line.delay }}
          >
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
                fill="#A78BFA"
                initial={{ opacity: 0 }}
                animate={{ 
                  x: ["-45%", "45%", "-45%"],
                  opacity: [0, 1, 0]
                }}
                transition={{ 
                  duration: 3,
                  repeat: Infinity,
                  repeatType: "loop",
                  ease: "easeInOut",
                  delay: line.delay + 0.5
                }}
              />
            </svg>
          </motion.div>
        ))}
        
        {/* Economic model box */}
        <motion.div
          className="absolute bottom-1/4 left-1/2 transform -translate-x-1/2"
          initial={{ y: 50, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          transition={{ duration: 0.8, delay: 1.8, type: "spring" }}
        >
          <motion.div 
            className="w-52 h-32 bg-gradient-to-br from-blue-700 to-indigo-700 rounded-xl flex flex-col items-center justify-center p-4 shadow-lg"
            animate={{ 
              boxShadow: ["0 0 0px rgba(29, 78, 216, 0)", "0 0 20px rgba(29, 78, 216, 0.5)", "0 0 0px rgba(29, 78, 216, 0)"]
            }}
            transition={{ duration: 3, repeat: Infinity }}
          >
            <BarChart3 size={32} className="text-white mb-2" />
            <div className="text-lg font-bold text-white">Economic Balance</div>
            <div className="text-xs text-white/80 mt-1 text-center">Sustainable network operations</div>
          </motion.div>
        </motion.div>
        
        {/* Vertical connections */}
        {[
          { top: "calc(25% + 18px)", left: "25%", height: "calc(50% - 42px)", delay: 2.0 },
          { top: "calc(25% + 18px)", left: "50%", height: "calc(50% - 42px)", delay: 2.2 },
          { top: "calc(25% + 18px)", left: "75%", height: "calc(50% - 42px)", delay: 2.4 }
        ].map((line, idx) => (
          <motion.div 
            key={`vline-${idx}`}
            className="absolute"
            style={{ 
              top: line.top, 
              left: line.left,
              height: line.height,
              width: "2px"
            }}
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: line.delay }}
          >
            <svg height="100%" width="4" className="overflow-visible">
              <motion.line 
                x1="2" 
                y1="0" 
                x2="2" 
                y2="100%" 
                stroke="#4B5563" 
                strokeWidth="2"
              />
              <motion.circle
                cx="2"
                cy="50%"
                r="4"
                fill="#A78BFA"
                initial={{ opacity: 0 }}
                animate={{ 
                  y: ["-45%", "45%", "-45%"],
                  opacity: [0, 1, 0]
                }}
                transition={{ 
                  duration: 3,
                  repeat: Infinity,
                  repeatType: "loop",
                  ease: "easeInOut",
                  delay: line.delay + 0.5
                }}
              />
            </svg>
          </motion.div>
        ))}
      </div>
    </motion.div>
  );
};

export default FinancialStageTwo;
