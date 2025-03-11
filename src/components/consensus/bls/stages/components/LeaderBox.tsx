
import React, { useEffect } from 'react';
import { motion } from "framer-motion";
import { Check } from "lucide-react";

interface LeaderBoxProps {
  leaderReceived: boolean;
  showSuccessEffect: boolean;
  verificationComplete?: boolean;  // New prop for verification status
}

export const LeaderBox: React.FC<LeaderBoxProps> = ({ 
  leaderReceived, 
  showSuccessEffect,
  verificationComplete = false   // Default to false if not provided
}) => {
  useEffect(() => {
    console.log("LeaderBox rendering with leaderReceived:", leaderReceived, 
                "showSuccessEffect:", showSuccessEffect,
                "verificationComplete:", verificationComplete);
  }, [leaderReceived, showSuccessEffect, verificationComplete]);
  
  // Define border and background classes based on the states
  const borderClass = verificationComplete 
    ? 'border-green-500' 
    : 'border-red-500';
  
  const glowClass = verificationComplete
    ? 'green-glow'
    : 'red-glow';
  
  return (
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
        scale: { duration: 0.8, repeat: showSuccessEffect ? 3 : 0 }
      }}
    >
      <motion.div 
        className={`w-16 h-16 rounded-xl bg-slate-800 flex items-center justify-center shadow-md flex-col transition-all duration-300 overflow-hidden relative border-2 ${borderClass} ${glowClass}`}
        animate={{
          boxShadow: verificationComplete ?
            ["0 0 0px rgba(74, 222, 128, 0)", "0 0 20px rgba(74, 222, 128, 0.4)", "0 0 10px rgba(74, 222, 128, 0.2)"] :
            ["0 0 0px rgba(239, 68, 68, 0)", "0 0 20px rgba(239, 68, 68, 0.4)", "0 0 10px rgba(239, 68, 68, 0.2)"]
        }}
        transition={{ 
          duration: 2, 
          repeat: Infinity,
          times: [0, 0.5, 1]
        }}
      >
        {showSuccessEffect && (
          <motion.div
            className={`absolute inset-0 ${verificationComplete ? 'bg-green-500/10' : 'bg-red-500/10'}`}
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
          className="text-sm font-bold"
          animate={{
            color: verificationComplete ? 
              "rgb(74 222 128)" :
              "rgb(248 113 113)"
          }}
          transition={{ 
            duration: 0.3
          }}
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
            <Check size={16} className={verificationComplete ? "text-green-400" : "text-red-400"} />
          </motion.div>
        )}
      </motion.div>
    </motion.div>
  );
};
