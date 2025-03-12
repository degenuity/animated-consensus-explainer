
import React, { useEffect, useRef } from 'react';
import { motion } from "framer-motion";
import { TrendingUp, TrendingDown, Coins, ArrowDown, ArrowUp } from "lucide-react";

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
      <div className="relative h-full w-full">
        {/* Inflation box */}
        <motion.div
          className="absolute left-[5%] top-[100px]"
          initial={{ y: -50, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          transition={{ duration: 0.8, type: "spring" }}
        >
          <motion.div 
            className="w-52 h-48 bg-gradient-to-br from-blue-600 to-blue-400 rounded-xl flex flex-col items-center justify-center p-4 shadow-lg"
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
            <div className="text-xs text-white/70 mt-2 text-center">New tokens created through consensus rewards</div>
          </motion.div>
        </motion.div>
        
        {/* Deflation box */}
        <motion.div
          className="absolute right-[5%] top-[100px]"
          initial={{ y: -50, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          transition={{ duration: 0.8, delay: 0.3, type: "spring" }}
        >
          <motion.div 
            className="w-52 h-48 bg-gradient-to-br from-amber-600 to-amber-400 rounded-xl flex flex-col items-center justify-center p-4 shadow-lg"
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
            <div className="text-xs text-white/70 mt-2 text-center">Tokens removed from supply via transaction fees</div>
          </motion.div>
        </motion.div>
        
        {/* Total Stake box - center position */}
        <motion.div
          className="absolute left-1/2 transform -translate-x-1/2 top-[300px]"
          initial={{ scale: 0 }}
          animate={{ scale: 1 }}
          transition={{ duration: 0.5, delay: 1.2, type: "spring" }}
        >
          <motion.div 
            className="w-56 h-52 bg-gradient-to-br from-violet-600 to-indigo-600 rounded-xl flex flex-col items-center justify-center p-4 shadow-lg"
            animate={{ 
              boxShadow: ["0 0 0px rgba(124, 58, 237, 0)", "0 0 20px rgba(124, 58, 237, 0.5)", "0 0 0px rgba(124, 58, 237, 0)"]
            }}
            transition={{ duration: 2.5, repeat: Infinity }}
          >
            <Coins className="text-white mb-2" size={36} />
            <div className="text-xl font-bold text-white">Token Supply</div>
            <div className="text-sm text-white/80 mt-1">Balance</div>
            <div className="text-xs text-white/70 mt-2 text-center">
              Dynamic equilibrium between inflation and deflation mechanisms
            </div>
          </motion.div>
        </motion.div>
        
        {/* Connection lines with flowing indicators */}
        {/* Left to center line */}
        <motion.div
          className="absolute"
          style={{
            top: '124px', 
            left: 'calc(5% + 52px)', 
            width: 'calc(50% - 5% - 52px - 28px)',
            height: '200px'
          }}
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.3, delay: 0.9 }}
        >
          <svg width="100%" height="100%" className="overflow-visible">
            {/* Horizontal part */}
            <line 
              x1="0" 
              y1="50" 
              x2="100%" 
              y2="50" 
              stroke="#6366F1" 
              strokeWidth="2" 
              strokeDasharray="4 2"
            />
            
            {/* Vertical part */}
            <line 
              x1="100%" 
              y1="50" 
              x2="100%" 
              y2="176" 
              stroke="#6366F1" 
              strokeWidth="2" 
              strokeDasharray="4 2"
            />
            
            {/* Arrow indicators */}
            <motion.g
              animate={{
                x: [0, '100%', 0],
              }}
              transition={{
                duration: 8,
                repeat: Infinity,
                ease: "linear"
              }}
            >
              <circle cx="50%" cy="50" r="4" fill="#6366F1" />
            </motion.g>
            
            <motion.g
              animate={{
                y: [0, 126, 0],
              }}
              transition={{
                duration: 8,
                repeat: Infinity,
                ease: "linear",
                delay: 4
              }}
            >
              <circle cx="100%" cy="110" r="4" fill="#6366F1" />
            </motion.g>
          </svg>
          
          {/* Down arrow indicator */}
          <motion.div
            className="absolute"
            style={{ right: 0, top: '100px' }}
            animate={{ y: [0, 5, 0] }}
            transition={{ duration: 1.5, repeat: Infinity }}
          >
            <ArrowDown className="text-blue-400" size={16} />
          </motion.div>
        </motion.div>
        
        {/* Right to center line */}
        <motion.div
          className="absolute"
          style={{
            top: '124px', 
            right: 'calc(5% + 52px)', 
            width: 'calc(50% - 5% - 52px - 28px)',
            height: '200px'
          }}
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.3, delay: 0.9 }}
        >
          <svg width="100%" height="100%" className="overflow-visible">
            {/* Horizontal part */}
            <line 
              x1="0" 
              y1="50" 
              x2="100%" 
              y2="50" 
              stroke="#F59E0B" 
              strokeWidth="2" 
              strokeDasharray="4 2"
            />
            
            {/* Vertical part */}
            <line 
              x1="0" 
              y1="50" 
              x2="0" 
              y2="176" 
              stroke="#F59E0B" 
              strokeWidth="2" 
              strokeDasharray="4 2"
            />
            
            {/* Arrow indicators */}
            <motion.g
              animate={{
                x: ['100%', 0, '100%'],
              }}
              transition={{
                duration: 8,
                repeat: Infinity,
                ease: "linear"
              }}
            >
              <circle cx="50%" cy="50" r="4" fill="#F59E0B" />
            </motion.g>
            
            <motion.g
              animate={{
                y: [0, 126, 0],
              }}
              transition={{
                duration: 8,
                repeat: Infinity,
                ease: "linear",
                delay: 4
              }}
            >
              <circle cx="0" cy="110" r="4" fill="#F59E0B" />
            </motion.g>
          </svg>
          
          {/* Down arrow indicator */}
          <motion.div
            className="absolute"
            style={{ left: 0, top: '100px' }}
            animate={{ y: [0, 5, 0] }}
            transition={{ duration: 1.5, repeat: Infinity }}
          >
            <ArrowDown className="text-amber-400" size={16} />
          </motion.div>
        </motion.div>
        
        {/* Supply mechanics explanation */}
        <motion.div
          className="absolute left-1/2 bottom-12 transform -translate-x-1/2 bg-black/30 px-4 py-2 rounded-lg"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 2.5 }}
        >
          <div className="text-sm text-white/90 text-center max-w-lg">
            X1's token supply balances inflation from consensus rewards with deflation from transaction fee burns
          </div>
        </motion.div>
      </div>
    </motion.div>
  );
};

export default FinancialStageOne;
