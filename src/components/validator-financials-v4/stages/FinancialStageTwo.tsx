
import React, { useEffect, useRef } from 'react';
import { motion } from "framer-motion";
import { CircleDollarSign, ServerCrash, Database, BarChart3, ArrowDown, PlusCircle, MinusCircle } from "lucide-react";

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
      <div className="relative h-full w-full">
        {/* Top row */}
        {/* Total Stake Box - Center top */}
        <motion.div
          className="absolute left-1/2 transform -translate-x-1/2 top-[80px]"
          initial={{ y: -50, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          transition={{ duration: 0.8, type: "spring" }}
        >
          <motion.div 
            className="w-52 h-44 bg-gradient-to-br from-violet-600 to-indigo-600 rounded-xl flex flex-col items-center justify-center p-4 shadow-lg"
            animate={{ 
              boxShadow: ["0 0 0px rgba(124, 58, 237, 0)", "0 0 20px rgba(124, 58, 237, 0.5)", "0 0 0px rgba(124, 58, 237, 0)"]
            }}
            transition={{ duration: 3, repeat: Infinity }}
          >
            <Database size={32} className="text-white mb-2" />
            <div className="text-lg font-bold text-white">Total Stake</div>
            <div className="text-xs text-white/80 mt-1 text-center">
              Validator collateral determining network participation and rewards
            </div>
          </motion.div>
        </motion.div>

        {/* Middle row */}
        {/* Internal Rewards - Left middle */}
        <motion.div
          className="absolute left-[5%] top-[230px]"
          initial={{ x: -50, opacity: 0 }}
          animate={{ x: 0, opacity: 1 }}
          transition={{ duration: 0.8, delay: 0.3, type: "spring" }}
        >
          <motion.div 
            className="w-52 h-44 bg-gradient-to-br from-emerald-600 to-emerald-400 rounded-xl flex flex-col items-center justify-center p-4 shadow-lg"
            animate={{ 
              boxShadow: ["0 0 0px rgba(5, 150, 105, 0)", "0 0 20px rgba(5, 150, 105, 0.5)", "0 0 0px rgba(5, 150, 105, 0)"]
            }}
            transition={{ duration: 3, repeat: Infinity }}
          >
            <CircleDollarSign size={32} className="text-white mb-2" />
            <div className="text-lg font-bold text-white">Internal Rewards</div>
            <div className="text-xs text-white/80 mt-1 text-center">
              Consensus participation rewards <br />earned by validators
            </div>
          </motion.div>
        </motion.div>
        
        {/* Network Usage Costs - Right middle */}
        <motion.div
          className="absolute right-[5%] top-[230px]"
          initial={{ x: 50, opacity: 0 }}
          animate={{ x: 0, opacity: 1 }}
          transition={{ duration: 0.8, delay: 0.3, type: "spring" }}
        >
          <motion.div 
            className="w-52 h-44 bg-gradient-to-br from-orange-600 to-orange-400 rounded-xl flex flex-col items-center justify-center p-4 shadow-lg"
            animate={{ 
              boxShadow: ["0 0 0px rgba(234, 88, 12, 0)", "0 0 20px rgba(234, 88, 12, 0.5)", "0 0 0px rgba(234, 88, 12, 0)"]
            }}
            transition={{ duration: 3, repeat: Infinity }}
          >
            <ServerCrash size={32} className="text-white mb-2" />
            <div className="text-lg font-bold text-white">Network Costs</div>
            <div className="text-xs text-white/80 mt-1 text-center">
              Transaction processing and <br />operational expenses
            </div>
          </motion.div>
        </motion.div>
        
        {/* Bottom row */}
        {/* Economic model box - Bottom */}
        <motion.div
          className="absolute left-1/2 transform -translate-x-1/2 bottom-[80px]"
          initial={{ y: 50, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          transition={{ duration: 0.8, delay: 0.6, type: "spring" }}
        >
          <motion.div 
            className="w-52 h-44 bg-gradient-to-br from-blue-700 to-indigo-700 rounded-xl flex flex-col items-center justify-center p-4 shadow-lg"
            animate={{ 
              boxShadow: ["0 0 0px rgba(29, 78, 216, 0)", "0 0 20px rgba(29, 78, 216, 0.5)", "0 0 0px rgba(29, 78, 216, 0)"]
            }}
            transition={{ duration: 3, repeat: Infinity }}
          >
            <BarChart3 size={32} className="text-white mb-2" />
            <div className="text-lg font-bold text-white">Economic Balance</div>
            <div className="text-xs text-white/80 mt-1 text-center">
              Sustainable validator economics <br />for network operations
            </div>
          </motion.div>
        </motion.div>
        
        {/* Connecting lines with flow animations */}
        {/* Top to left middle */}
        <motion.div
          className="absolute"
          style={{
            top: '124px',
            left: 'calc(50% - 26px)',
            height: '106px',
            width: 'calc(45% - 26px)'
          }}
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.3, delay: 1.2 }}
        >
          <svg width="100%" height="100%" className="overflow-visible">
            {/* Horizontal part */}
            <line 
              x1="0" 
              y1="0" 
              x2="0" 
              y2="50" 
              stroke="#8B5CF6" 
              strokeWidth="2" 
              strokeDasharray="4 2"
            />
            
            {/* Vertical part */}
            <line 
              x1="0" 
              y1="50" 
              x2="-100%" 
              y2="50" 
              stroke="#8B5CF6" 
              strokeWidth="2" 
              strokeDasharray="4 2"
            />
            
            {/* Connection to left middle box */}
            <line 
              x1="-100%" 
              y1="50" 
              x2="-100%" 
              y2="106" 
              stroke="#8B5CF6" 
              strokeWidth="2" 
              strokeDasharray="4 2"
            />
            
            {/* Animated circle */}
            <motion.circle
              cx="0"
              cy="25"
              r="4"
              fill="#8B5CF6"
              animate={{ 
                y: [0, 50, 50],
                x: [0, 0, '-100%']
              }}
              transition={{ 
                duration: 3,
                repeat: Infinity,
                repeatType: "loop",
                times: [0, 0.3, 1],
                ease: "easeInOut"
              }}
            />
          </svg>
          
          {/* Plus icon - staking generates rewards */}
          <motion.div
            className="absolute"
            style={{ left: '-50%', top: '40px' }}
            animate={{ scale: [1, 1.2, 1] }}
            transition={{ duration: 2, repeat: Infinity }}
          >
            <PlusCircle className="text-emerald-400" size={16} />
          </motion.div>
        </motion.div>
        
        {/* Top to right middle */}
        <motion.div
          className="absolute"
          style={{
            top: '124px',
            right: 'calc(50% - 26px)',
            height: '106px',
            width: 'calc(45% - 26px)'
          }}
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.3, delay: 1.5 }}
        >
          <svg width="100%" height="100%" className="overflow-visible">
            {/* Vertical part */}
            <line 
              x1="0" 
              y1="0" 
              x2="0" 
              y2="50" 
              stroke="#8B5CF6" 
              strokeWidth="2" 
              strokeDasharray="4 2"
            />
            
            {/* Horizontal part */}
            <line 
              x1="0" 
              y1="50" 
              x2="100%" 
              y2="50" 
              stroke="#8B5CF6" 
              strokeWidth="2" 
              strokeDasharray="4 2"
            />
            
            {/* Connection to right middle box */}
            <line 
              x1="100%" 
              y1="50" 
              x2="100%" 
              y2="106" 
              stroke="#8B5CF6" 
              strokeWidth="2" 
              strokeDasharray="4 2"
            />
            
            {/* Animated circle */}
            <motion.circle
              cx="0"
              cy="25"
              r="4"
              fill="#8B5CF6"
              animate={{ 
                y: [0, 50, 50],
                x: [0, 0, '100%']
              }}
              transition={{ 
                duration: 3,
                repeat: Infinity,
                repeatType: "loop",
                times: [0, 0.3, 1],
                ease: "easeInOut",
                delay: 0.5
              }}
            />
          </svg>
          
          {/* Minus icon - costs */}
          <motion.div
            className="absolute"
            style={{ right: '-50%', top: '40px' }}
            animate={{ scale: [1, 1.2, 1] }}
            transition={{ duration: 2, repeat: Infinity }}
          >
            <MinusCircle className="text-orange-400" size={16} />
          </motion.div>
        </motion.div>
        
        {/* Left middle to bottom */}
        <motion.div
          className="absolute"
          style={{
            top: '274px',
            left: 'calc(5% + 26px)',
            height: 'calc(100% - 274px - 102px)',
            width: 'calc(45% - 5%)'
          }}
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.3, delay: 1.8 }}
        >
          <svg width="100%" height="100%" className="overflow-visible">
            {/* Vertical part */}
            <line 
              x1="0" 
              y1="0" 
              x2="0" 
              y2="50%" 
              stroke="#10B981" 
              strokeWidth="2" 
              strokeDasharray="4 2"
            />
            
            {/* Horizontal part */}
            <line 
              x1="0" 
              y1="50%" 
              x2="100%" 
              y2="50%" 
              stroke="#10B981" 
              strokeWidth="2" 
              strokeDasharray="4 2"
            />
            
            {/* Connection to bottom box */}
            <line 
              x1="100%" 
              y1="50%" 
              x2="100%" 
              y2="100%" 
              stroke="#10B981" 
              strokeWidth="2" 
              strokeDasharray="4 2"
            />
            
            {/* Animated circle */}
            <motion.circle
              cx="0"
              cy="25%"
              r="4"
              fill="#10B981"
              animate={{ 
                y: [0, '50%', '50%'],
                x: [0, 0, '100%', '100%'],
                cy: ['25%', '25%', '25%', '100%']
              }}
              transition={{ 
                duration: 4,
                repeat: Infinity,
                repeatType: "loop",
                times: [0, 0.25, 0.75, 1],
                ease: "easeInOut"
              }}
            />
          </svg>
        </motion.div>
        
        {/* Right middle to bottom */}
        <motion.div
          className="absolute"
          style={{
            top: '274px',
            right: 'calc(5% + 26px)',
            height: 'calc(100% - 274px - 102px)',
            width: 'calc(45% - 5%)'
          }}
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.3, delay: 2.1 }}
        >
          <svg width="100%" height="100%" className="overflow-visible">
            {/* Vertical part */}
            <line 
              x1="100%" 
              y1="0" 
              x2="100%" 
              y2="50%" 
              stroke="#F97316" 
              strokeWidth="2" 
              strokeDasharray="4 2"
            />
            
            {/* Horizontal part */}
            <line 
              x1="100%" 
              y1="50%" 
              x2="0" 
              y2="50%" 
              stroke="#F97316" 
              strokeWidth="2" 
              strokeDasharray="4 2"
            />
            
            {/* Connection to bottom box */}
            <line 
              x1="0" 
              y1="50%" 
              x2="0" 
              y2="100%" 
              stroke="#F97316" 
              strokeWidth="2" 
              strokeDasharray="4 2"
            />
            
            {/* Animated circle */}
            <motion.circle
              cx="100%"
              cy="25%"
              r="4"
              fill="#F97316"
              animate={{ 
                y: [0, '50%', '50%'],
                x: ['100%', '100%', 0, 0],
                cy: ['25%', '25%', '25%', '100%']
              }}
              transition={{ 
                duration: 4,
                repeat: Infinity,
                repeatType: "loop",
                times: [0, 0.25, 0.75, 1],
                ease: "easeInOut",
                delay: 0.5
              }}
            />
          </svg>
        </motion.div>
        
        {/* Explanation text */}
        <motion.div
          className="absolute left-1/2 transform -translate-x-1/2 top-[380px] bg-black/30 px-4 py-2 rounded-lg"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 2.5 }}
        >
          <div className="text-sm text-white/90 text-center max-w-lg">
            X1's economic model balances validator rewards against network operating costs
          </div>
        </motion.div>
      </div>
    </motion.div>
  );
};

export default FinancialStageTwo;
