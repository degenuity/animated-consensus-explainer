
import React from 'react';
import { motion } from "framer-motion";
import { Server } from "lucide-react";

interface RelayNodeProps {
  showSuccessEffect?: boolean;
}

export const RelayNode: React.FC<RelayNodeProps> = ({ showSuccessEffect = false }) => {
  return (
    <div className="absolute inset-0 flex items-center justify-center" style={{ zIndex: 20 }}>
      <div className="relative">
        <motion.div
          className="absolute"
          style={{
            width: '120px',
            height: '120px',
            top: '-60px',
            left: '-60px',
            background: 'radial-gradient(circle, rgba(99, 102, 241, 0.4) 0%, rgba(99, 102, 241, 0) 70%)',
            borderRadius: '50%'
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
        
        <motion.div 
          initial={{ scale: 0.8 }}
          animate={{ scale: 1 }}
          transition={{ type: "spring", stiffness: 100 }}
          className="w-20 h-20 rounded-xl bg-slate-800 border-2 border-indigo-500 flex flex-col items-center justify-center shadow-lg shadow-indigo-500/20"
        >
          <Server className="text-indigo-400" size={20} />
          <motion.span
            className="text-indigo-400 font-bold text-xs mt-1"
          >
            Relay node
          </motion.span>
        </motion.div>
      </div>
    </div>
  );
};
