
import React from 'react';
import { 
  TrendingUp, 
  TrendingDown, 
  BarChart3, 
  Lock, 
  ServerCrash, 
  Box, 
  Percent, 
  CircleDollarSign
} from 'lucide-react';

interface BoxIconProps {
  icon: 'inflation' | 'deflation' | 'internal-rewards' | 'total-stake' | 'network-costs' | 'block-production' | 'block-rewards' | 'profitability';
  size?: number;
}

const BoxIcon: React.FC<BoxIconProps> = ({ icon, size = 22 }) => {
  switch (icon) {
    case 'inflation': 
      return <TrendingUp size={size} />;
    case 'deflation': 
      return <TrendingDown size={size} />;
    case 'internal-rewards': 
      return <BarChart3 size={size} className="text-blue-400" />;
    case 'total-stake': 
      return <Lock size={size} className="text-blue-400" />;
    case 'network-costs': 
      return <ServerCrash size={size} className="text-orange-400" />;
    case 'block-production': 
      return <Box size={size} className="text-blue-400" />;
    case 'block-rewards': 
      return <CircleDollarSign size={size} className="text-blue-400" />;
    case 'profitability': 
      return <Percent size={size} className="text-blue-400" />;
    default: 
      return null;
  }
};

export default BoxIcon;
