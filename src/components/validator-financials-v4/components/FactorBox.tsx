
import React from 'react';
import { motion } from 'framer-motion';
import { Activity, ArrowRightLeft, Cpu, DollarSign, Gauge, PercentCircle, Scale, Wallet } from 'lucide-react';

interface FactorBoxProps {
  title: string;
  description: string;
  color: string;
  position: string;
  index: number;
}

const FactorBox: React.FC<FactorBoxProps> = ({
  title,
  description,
  color,
  position,
  index
}) => {
  const getIcon = () => {
    switch (title.toLowerCase()) {
      case 'commission rate':
        return <PercentCircle size={16} className="text-white" />;
      case 'token price':
        return <DollarSign size={16} className="text-white" />;
      case 'network usage':
        return <Activity size={16} className="text-white" />;
      case 'transaction fees':
        return <Wallet size={16} className="text-white" />;
      case 'validator count':
        return <Scale size={16} className="text-white" />;
      default:
        return <Gauge size={16} className="text-white" />;
    }
  };

  return (
    <motion.div
      className={`absolute ${position}`}
      initial={{ opacity: 0, scale: 0.8 }}
      animate={{ opacity: 1, scale: 1 }}
      transition={{ duration: 0.5, delay: 0.8 + (index * 0.1) }}
    >
      <div className={`bg-[#141824] border border-[#2c3656] p-3 rounded-md w-40 shadow-lg`}>
        <div className="flex items-center gap-2 mb-1">
          <div className={`p-1 rounded-full bg-[#${color}]`}>
            {getIcon()}
          </div>
          <div className="text-sm font-medium text-white">{title}</div>
        </div>
        <div className="text-xs text-gray-400">{description}</div>
      </div>
    </motion.div>
  );
};

export default FactorBox;
