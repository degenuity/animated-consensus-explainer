
import React from 'react';
import { motion } from "framer-motion";
import { Check } from "lucide-react";

export const LeaderVerification: React.FC = () => {
  return (
    <motion.div
      className="absolute top-1/2 right-[15%] transform -translate-y-1/2 z-10"
      initial={{ opacity: 0, scale: 0.5 }}
      animate={{ 
        opacity: 1, 
        scale: 1,
        transition: { delay: 1.2 }
      }}
    >
      <motion.div 
        className="w-16 h-16 rounded-full bg-slate-800 border-2 border-green-500 flex items-center justify-center shadow-lg shadow-green-500/20"
        animate={{
          boxShadow: ["0 0 5px rgba(74, 222, 128, 0.1)", "0 0 15px rgba(74, 222, 128, 0.4)", "0 0 5px rgba(74, 222, 128, 0.1)"],
        }}
        transition={{ duration: 2, repeat: Infinity }}
      >
        <motion.div
          initial={{ scale: 0 }}
          animate={{ scale: 1 }}
          transition={{ type: "spring", damping: 12, delay: 1.3 }}
        >
          <Check className="text-green-500" size={28} />
        </motion.div>
      </motion.div>
    </motion.div>
  );
};
