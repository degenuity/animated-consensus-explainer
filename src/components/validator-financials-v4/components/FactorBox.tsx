
import React from 'react';
import { motion } from 'framer-motion';

interface FactorBoxProps {
  icon: React.ReactNode;
  text: string;
  color: string;
  position: string;
  index: number;
}

const FactorBox: React.FC<FactorBoxProps> = ({ icon, text, color, position, index }) => {
  return (
    <motion.div
      className="absolute"
      style={{ 
        left: position, 
        top: '540px',
        transform: 'translateX(-50%)'
      }}
      initial={{ y: 20, opacity: 0 }}
      animate={{ y: 0, opacity: 1 }}
      transition={{ duration: 0.6, delay: 1.5 + index * 0.2, type: "spring" }}
    >
      <motion.div 
        className="w-16 h-16 bg-[#1a2233] border border-[#2a3349] rounded-lg flex flex-col items-center justify-center p-1 shadow-lg"
        whileHover={{ scale: 1.05 }}
        animate={{ 
          boxShadow: ["0 0 0px rgba(124, 58, 237, 0)", "0 0 15px rgba(124, 58, 237, 0.2)", "0 0 0px rgba(124, 58, 237, 0)"]
        }}
        transition={{ duration: 2, repeat: Infinity }}
      >
        <div className={`${color} mb-1`}>{icon}</div>
        <div className="text-[10px] font-medium text-white text-center">{text}</div>
      </motion.div>
    </motion.div>
  );
};

export default FactorBox;
