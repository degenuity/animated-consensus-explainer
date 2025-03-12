
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
        className="w-52 h-44 bg-[#1a2233] border border-[#2a3349] rounded-xl flex flex-col items-center justify-center p-4 shadow-lg"
        animate={{ 
          boxShadow: [`0 0 0px rgba(${color}, 0)`, `0 0 20px rgba(${color}, 0.3)`, `0 0 0px rgba(${color}, 0)`]
        }}
        transition={{ duration: 3, repeat: Infinity }}
      >
        {icon}
        <motion.div 
          className="text-lg font-bold text-white"
          animate={{ scale: [1, 1.05, 1] }}
          transition={{ duration: 2, repeat: Infinity }}
        >
          {title}
        </motion.div>
        <div className="text-sm text-white/80 mt-1">{subtitle}</div>
        {description && <div className="text-xs text-white/70 mt-2 text-center">{description}</div>}
      </motion.div>
    </motion.div>
  );
};

export default BoxContainer;
