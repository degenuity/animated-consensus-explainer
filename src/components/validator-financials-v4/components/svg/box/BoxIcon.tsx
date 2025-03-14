
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
}

const BoxIcon: React.FC<BoxIconProps> = ({ icon, size = 22 }) => {
  switch (icon) {
    case 'inflation': 
      return <TrendingUp size={size} color="white" />;
    case 'deflation': 
      return <TrendingDown size={size} color="white" />;
    case 'internal-rewards': 
      return <BarChart3 size={size} color="#10B981" />;
    case 'total-stake': 
      return <Lock size={size} color="#3B82F6" />;
    case 'network-costs': 
      return <ServerCrash size={size} color="#F97316" />;
    case 'block-production': 
      return <Box size={size} color="#3B82F6" />;
    case 'block-rewards': 
      return <CircleDollarSign size={size} color="#10B981" />;
    case 'profitability': 
      return <Percent size={size} color="#3B82F6" />;
    case 'info':
      return <Info size={size} color="#3B82F6" />;
    default: 
      return null;
  }
};

export default BoxIcon;
