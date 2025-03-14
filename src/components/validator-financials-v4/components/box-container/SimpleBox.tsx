
import React from 'react';
import { motion } from 'framer-motion';
import IconSelector from './IconSelector';

interface SimpleBoxProps {
  title: string;
  subtitle?: string;
  iconType: 'inflation' | 'internal-rewards' | 'total-stake' | 'network-costs' | 'deflation' | 'block-production' | 'profitability';
  color: string;
}

const SimpleBox: React.FC<SimpleBoxProps> = ({ title, subtitle, iconType, color }) => {
  return (
    <div className={`p-3 sm:p-5 md:p-6 flex flex-col items-center text-center rounded-lg`}
         style={{ backgroundColor: `rgba(${color}, 0.9)` }}>
      <div className="mb-2 sm:mb-3">
        <IconSelector iconType={iconType} />
      </div>
      <div className="text-lg sm:text-2xl font-semibold text-white mb-1 sm:mb-2 whitespace-normal">{title.toLowerCase()}</div>
      {subtitle && <div className="text-xs sm:text-md text-white/90 whitespace-normal">{subtitle}</div>}
    </div>
  );
};

export default SimpleBox;
