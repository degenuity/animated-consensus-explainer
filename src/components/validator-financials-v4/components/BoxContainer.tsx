
import React from 'react';
import { motion } from 'framer-motion';
import { LucideIcon } from 'lucide-react';

interface BoxContainerProps {
  position: string;
  icon: React.ReactNode;
  title: string;
  subtitle: string;
  description?: string;
  color: string;
  animationDelay?: number;
  className?: string;
}

const BoxContainer: React.FC<BoxContainerProps> = ({
  position,
  icon,
  title,
  subtitle,
  description,
  color,
  animationDelay = 0,
  className = ""
}) => {
  return (
    <motion.div
      className={`absolute ${position} ${className}`}
      initial={{ y: -50, opacity: 0 }}
      animate={{ y: 0, opacity: 1 }}
      transition={{ duration: 0.8, delay: animationDelay, type: "spring" }}
    >
      <motion.div 
        className="w-52 bg-[#1a1f31] border border-[#2a3349] rounded-xl flex flex-col items-center justify-center p-6 shadow-lg"
        animate={{ 
          boxShadow: [`0 0 0px rgba(${color}, 0)`, `0 0 15px rgba(${color}, 0.25)`, `0 0 0px rgba(${color}, 0)`]
        }}
        transition={{ duration: 3, repeat: Infinity }}
      >
        <div className="mb-4">{icon}</div>
        <motion.div 
          className="text-xl font-semibold text-white text-center"
          animate={{ scale: [1, 1.03, 1] }}
          transition={{ duration: 2, repeat: Infinity }}
        >
          {title}
        </motion.div>
        <div className="text-sm text-gray-300 mt-1">{subtitle}</div>
        {description && <div className="text-xs text-gray-400 mt-3 text-center">{description}</div>}
      </motion.div>
    </motion.div>
  );
};

export default BoxContainer;
