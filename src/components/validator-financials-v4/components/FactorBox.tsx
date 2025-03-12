
import React from 'react';
import { motion } from 'framer-motion';
import { ShieldCheck, Shuffle, Activity, DollarSign, TrendingUp } from 'lucide-react';

interface FactorBoxProps {
  title: string;
  description: string;
  color: string;
  position?: string;
  index?: number;
}

const FactorBox: React.FC<FactorBoxProps> = ({ 
  title, 
  description, 
  color, 
  position, 
  index = 0 
}) => {
  // Function to get the appropriate icon based on the title
  const getIcon = () => {
    switch (title.toLowerCase()) {
      case 'stake weight':
        return <ShieldCheck size={18} className="mb-1" />;
      case 'randomness':
        return <Shuffle size={18} className="mb-1" />;
      case 'performance':
        return <Activity size={18} className="mb-1" />;
      case 'operational costs':
        return <DollarSign size={18} className="mb-1" />;
      case 'total rewards':
        return <TrendingUp size={18} className="mb-1" />;
      default:
        return <ShieldCheck size={18} className="mb-1" />;
    }
  };

  // If position is provided, this is for the old absolute positioning
  if (position) {
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
          <div className={`text-${color}-400`}>{getIcon()}</div>
          <div className="text-[10px] font-medium text-white text-center">{title}</div>
        </motion.div>
      </motion.div>
    );
  }

  // For the new layout within a flex container
  return (
    <motion.div 
      className="bg-[#1a1f31] border border-[#2a3349] rounded-lg flex flex-col items-center justify-center p-3 shadow-lg"
      initial={{ scale: 0.9, opacity: 0 }}
      animate={{ scale: 1, opacity: 1 }}
      transition={{ duration: 0.4, delay: 0.2 + index * 0.1 }}
      whileHover={{ scale: 1.05 }}
    >
      <div className={`text-${color}-400`}>{getIcon()}</div>
      <div className="text-sm font-medium text-white text-center mt-1">{title}</div>
      <div className="text-[10px] text-gray-400 text-center mt-1">{description}</div>
    </motion.div>
  );
};

export default FactorBox;
