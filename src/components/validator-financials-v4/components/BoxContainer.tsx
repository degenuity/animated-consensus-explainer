import React from 'react';
import { motion } from 'framer-motion';
import { CircleDollarSign, TrendingUp, TrendingDown, Database, ServerCrash, ShieldCheck, Box } from 'lucide-react';

interface SubBox {
  title: string;
  description?: string;
  fullWidth?: boolean;
}

interface BoxContainerProps {
  position: string;
  iconType: 'inflation' | 'internal-rewards' | 'total-stake' | 'network-costs' | 'deflation' | 'block-production';
  title: string;
  subtitle?: string;
  color: string;
  animationDelay?: number;
  className?: string;
  simpleStyle?: boolean;
  subBoxes?: (SubBox | string)[];
  useAlternativeStyle?: boolean;
}

const BoxContainer: React.FC<BoxContainerProps> = ({
  position,
  iconType,
  title,
  subtitle,
  color,
  animationDelay = 0,
  className = "",
  simpleStyle = false,
  subBoxes = [],
  useAlternativeStyle = false
}) => {
  const getIcon = () => {
    switch (iconType) {
      case 'block-production':
        return <Box size={28} className="text-blue-400" />;
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

  const renderSubBox = (box: SubBox | string, index: number) => {
    if (typeof box === 'string') {
      return (
        <div 
          key={index}
          className="p-3 rounded bg-[#182235] border border-[#2c365a] text-white text-sm"
        >
          {box}
        </div>
      );
    }

    return (
      <div 
        key={index}
        className={`p-4 rounded bg-[#1a1f31] border border-blue-500/20 
          ${box.fullWidth ? 'col-span-2' : 'col-span-1'}`}
      >
        <div className="text-blue-400 text-lg mb-2">{box.title}</div>
        {box.description && <div className="text-gray-400 text-sm">{box.description}</div>}
      </div>
    );
  };

  if (useAlternativeStyle) {
    return (
      <motion.div
        className={`absolute ${position} ${className}`}
        initial={{ y: -50, opacity: 0 }}
        animate={{ y: 0, opacity: 1 }}
        transition={{ duration: 0.8, delay: animationDelay }}
      >
        <div className="w-[600px] bg-[#141824] rounded-lg flex flex-col shadow-lg overflow-hidden">
          <div className="p-4 flex items-center gap-3">
            <div className="flex justify-center items-center rounded-full p-2">
              {getIcon()}
            </div>
            <div className="text-xl font-normal text-white lowercase">{title}</div>
          </div>
          
          <div className="p-4 grid grid-cols-2 gap-4">
            {subBoxes.map((box, index) => renderSubBox(box, index))}
          </div>
        </div>
      </motion.div>
    );
  }

  return (
    <motion.div
      className={`absolute ${position} ${className}`}
      initial={{ y: -50, opacity: 0 }}
      animate={{ y: 0, opacity: 1 }}
      transition={{ duration: 0.8, delay: animationDelay, type: "spring" }}
    >
      <motion.div 
        className={`w-64 bg-[#141824] rounded-lg flex flex-col shadow-lg overflow-hidden
          ${simpleStyle ? 'bg-opacity-0' : ''}`}
        animate={{ 
          boxShadow: simpleStyle ? 'none' : [`0 0 0px rgba(${color}, 0)`, `0 0 15px rgba(${color}, 0.25)`, `0 0 0px rgba(${color}, 0)`]
        }}
        transition={{ duration: 3, repeat: Infinity }}
      >
        {simpleStyle ? (
          <div className={`p-6 flex flex-col items-center text-center rounded-lg`} 
               style={{ backgroundColor: `rgba(${color}, 0.9)` }}>
            <div className="mb-4">{getIcon()}</div>
            <div className="text-2xl font-semibold text-white mb-2">{title.toLowerCase()}</div>
            {subtitle && <div className="text-md text-white/90">{subtitle}</div>}
          </div>
        ) : (
          <>
            <div className="p-4 flex items-center gap-3 border-b border-[#2a3349]">
              <div className="flex justify-center items-center rounded-full p-2 bg-[#1a1f31]">
                {getIcon()}
              </div>
              <div className="text-xl font-semibold text-white">{title}</div>
            </div>
            
            <div className="p-4 space-y-2">
              {subBoxes.map((box, index) => renderSubBox(box, index))}
            </div>
          </>
        )}
      </motion.div>
    </motion.div>
  );
};

export default BoxContainer;
