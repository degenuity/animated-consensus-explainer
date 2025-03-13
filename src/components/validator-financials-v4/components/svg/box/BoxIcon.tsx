
import React from 'react';
import { 
  TrendingUp, 
  TrendingDown, 
  BarChart3, 
  Lock, 
  ServerCrash, 
  Box, 
  Percent, 
  CircleDollarSign,
  Info
} from 'lucide-react';

interface BoxIconProps {
  icon: 'inflation' | 'deflation' | 'internal-rewards' | 'total-stake' | 'network-costs' | 'block-production' | 'block-rewards' | 'profitability' | 'info';
  size?: number;
  className?: string; // Added className prop
}

const BoxIcon: React.FC<BoxIconProps> = ({ icon, size = 22, className }) => {
  switch (icon) {
    case 'inflation': 
      return <TrendingUp size={size} color="white" className={className} />;
    case 'deflation': 
      return <TrendingDown size={size} color="white" className={className} />;
    case 'internal-rewards': 
      return <BarChart3 size={size} color="#10B981" className={className} />;
    case 'total-stake': 
      return <Lock size={size} color="#3B82F6" className={className} />;
    case 'network-costs': 
      return <ServerCrash size={size} color="#F97316" className={className} />;
    case 'block-production': 
      return <Box size={size} color="#3B82F6" className={className} />;
    case 'block-rewards': 
      return <CircleDollarSign size={size} color="#10B981" className={className} />;
    case 'profitability': 
      return <Percent size={size} color="#3B82F6" className={className} />;
    case 'info':
      return <Info size={size} color="#3B82F6" className={className} />;
    default: 
      return null;
  }
};

export default BoxIcon;
