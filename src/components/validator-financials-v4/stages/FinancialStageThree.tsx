
import React, { useEffect, useRef } from 'react';
import { motion } from "framer-motion";
import { DollarSign, PercentSquare, Clock, ShieldCheck, Wallet } from "lucide-react";

interface FinancialStageThreeProps {
  isActive: boolean;
}

const FinancialStageThree: React.FC<FinancialStageThreeProps> = ({ isActive }) => {
  const transitionTimeoutRef = useRef<NodeJS.Timeout | null>(null);
  const mounted = useRef(true);

  useEffect(() => {
    mounted.current = true;
    
    if (isActive) {
      // Set a timeout to transition back to stage one
      transitionTimeoutRef.current = setTimeout(() => {
        if (!mounted.current) return;
        
        // Dispatch event to signal completion of stage three
        const event = new CustomEvent('financial-v4-stage-three-complete');
        document.dispatchEvent(event);
      }, 6000); // 6 second transition before restarting
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
        {/* Profitability box */}
        <motion.div
          className="absolute left-1/2 transform -translate-x-1/2 top-1/4 -translate-y-1/2"
          initial={{ y: -50, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          transition={{ duration: 0.8, type: "spring" }}
        >
          <motion.div 
            className="w-48 h-44 bg-gradient-to-br from-green-600 to-emerald-400 rounded-xl flex flex-col items-center justify-center p-4 shadow-lg"
            animate={{ 
              boxShadow: ["0 0 0px rgba(22, 163, 74, 0)", "0 0 20px rgba(22, 163, 74, 0.5)", "0 0 0px rgba(22, 163, 74, 0)"]
            }}
            transition={{ duration: 3, repeat: Infinity }}
          >
            <DollarSign size={36} className="text-white mb-2" />
            <div className="text-xl font-bold text-white">Validator Profitability</div>
            <div className="text-sm text-white/80 mt-1 text-center">Economic sustainability</div>
          </motion.div>
        </motion.div>
        
        {/* Four factors in a grid */}
        {[
          { icon: <ShieldCheck size={24} />, text: "Security Stake", color: "from-indigo-600 to-indigo-400", x: "-37.5%", y: "80%" },
          { icon: <PercentSquare size={24} />, text: "APR Return", color: "from-blue-600 to-blue-400", x: "-12.5%", y: "80%" },
          { icon: <Clock size={24} />, text: "Uptime", color: "from-orange-600 to-orange-400", x: "12.5%", y: "80%" },
          { icon: <Wallet size={24} />, text: "Operating Costs", color: "from-red-600 to-red-400", x: "37.5%", y: "80%" }
        ].map((factor, idx) => (
          <motion.div
            key={`factor-${idx}`}
            className="absolute"
            style={{ 
              left: `calc(50% + ${factor.x})`, 
              top: factor.y 
            }}
            initial={{ y: 50, opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            transition={{ duration: 0.6, delay: 0.3 + idx * 0.2, type: "spring" }}
          >
            <motion.div 
              className={`w-24 h-24 bg-gradient-to-br ${factor.color} rounded-lg flex flex-col items-center justify-center p-2 shadow-lg`}
              whileHover={{ scale: 1.05 }}
            >
              <div className="text-white mb-1">{factor.icon}</div>
              <div className="text-xs font-bold text-white text-center">{factor.text}</div>
            </motion.div>
          </motion.div>
        ))}
        
        {/* Connections */}
        {["-37.5%", "-12.5%", "12.5%", "37.5%"].map((x, idx) => (
          <motion.div 
            key={`connect-${idx}`}
            className="absolute"
            style={{ 
              top: "calc(25% + 22px)", 
              left: `calc(50% + ${x})`,
              height: "calc(55% - 22px)",
              width: "2px"
            }}
            initial={{ opacity: 0, scaleY: 0, transformOrigin: "top" }}
            animate={{ opacity: 1, scaleY: 1 }}
            transition={{ duration: 0.4, delay: 1.0 + idx * 0.1 }}
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
                fill="#34D399"
                animate={{ 
                  y: ["-40%", "40%", "-40%"],
                  opacity: [0, 1, 0]
                }}
                transition={{ 
                  duration: 2.5,
                  repeat: Infinity,
                  repeatType: "loop",
                  ease: "easeInOut",
                  delay: 1.5 + idx * 0.2
                }}
              />
            </svg>
          </motion.div>
        ))}
        
        {/* Conclusion text */}
        <motion.div
          className="absolute left-1/2 bottom-6 transform -translate-x-1/2 bg-slate-800/80 rounded-lg px-5 py-2"
          initial={{ opacity: 0, y: 10 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 2.5 }}
        >
          <div className="text-sm text-white text-center">
            <span className="font-semibold text-emerald-400">Balanced economic model</span> ensures long-term sustainability
          </div>
        </motion.div>
      </div>
    </motion.div>
  );
};

export default FinancialStageThree;
