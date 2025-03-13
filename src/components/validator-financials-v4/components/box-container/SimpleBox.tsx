
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
    <div className={`p-3 sm:p-4 md:p-5 flex flex-col items-center text-center rounded-lg`}
         style={{ backgroundColor: `rgba(${color}, 0.9)` }}>
      <div className="mb-2 sm:mb-3">
        <IconSelector iconType={iconType} />
      </div>
      <div className="text-lg sm:text-xl font-semibold text-white mb-1">{title.toLowerCase()}</div>
      {subtitle && <div className="text-xs sm:text-sm text-white/90 whitespace-normal">{subtitle}</div>}
    </div>
  );
};

export default SimpleBox;
