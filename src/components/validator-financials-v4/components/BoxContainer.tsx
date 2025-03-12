
import React from 'react';
import { motion } from 'framer-motion';
import { CircleDollarSign, TrendingUp, TrendingDown, Database, ServerCrash, ShieldCheck } from 'lucide-react';

interface BoxContainerProps {
  position: string;
  iconType: 'inflation' | 'internal-rewards' | 'total-stake' | 'network-costs' | 'deflation' | 'block-production';
  title: string;
  subtitle: string;
  description?: string;
  color: string;
  animationDelay?: number;
  className?: string;
}

const BoxContainer: React.FC<BoxContainerProps> = ({
  position,
  iconType,
  title,
  subtitle,
  description,
  color,
  animationDelay = 0,
  className = ""
}) => {
  const getIcon = () => {
    switch (iconType) {
      case 'inflation':
        return <TrendingUp size={28} className="text-blue-400" />;
      case 'internal-rewards':
        return <CircleDollarSign size={28} className="text-emerald-400" />;
      case 'total-stake':
        return <Database size={28} className="text-blue-300" />;
      case 'network-costs':
        return <ServerCrash size={28} className="text-orange-400" />;
      case 'deflation':
        return <TrendingDown size={28} className="text-amber-400" />;
      case 'block-production':
        return <ShieldCheck size={28} className="text-blue-400" />;
      default:
        return <CircleDollarSign size={28} className="text-emerald-400" />;
    }
  };

  return (
    <motion.div
      className={`absolute ${position} ${className}`}
      initial={{ y: -50, opacity: 0 }}
      animate={{ y: 0, opacity: 1 }}
      transition={{ duration: 0.8, delay: animationDelay, type: "spring" }}
    >
      <motion.div 
        className="w-64 bg-[#141824] rounded-lg flex flex-col shadow-lg overflow-hidden"
        animate={{ 
          boxShadow: [`0 0 0px rgba(${color}, 0)`, `0 0 15px rgba(${color}, 0.25)`, `0 0 0px rgba(${color}, 0)`]
        }}
        transition={{ duration: 3, repeat: Infinity }}
      >
        {/* Icon and header section */}
        <div className="p-4 flex items-center gap-3 border-b border-[#2a3349]">
          <div className={`flex justify-center items-center rounded-full p-2 bg-[#1a1f31]`}>
            {getIcon()}
          </div>
          <div className="text-xl font-semibold text-white">{title}</div>
        </div>
        
        {/* Content section */}
        <div className="p-4 flex flex-col gap-2">
          <div className="text-md text-gray-200">{subtitle}</div>
          {description && <div className="text-xs text-gray-400">{description}</div>}

          {/* Only for internal rewards, add sub-boxes */}
          {iconType === 'internal-rewards' && (
            <div className="mt-3 space-y-2">
              <div className="p-3 rounded bg-[#182235] border border-[#2c365a] text-white text-sm">
                Commission
              </div>
              <div className="p-3 rounded bg-[#182235] border border-[#2c365a] text-white text-sm">
                Staking Rewards
              </div>
              <div className="p-3 rounded bg-[#182235] border border-[#2c365a] text-white text-sm">
                Voting Rewards
              </div>
            </div>
          )}
        </div>
      </motion.div>
    </motion.div>
  );
};

export default BoxContainer;
