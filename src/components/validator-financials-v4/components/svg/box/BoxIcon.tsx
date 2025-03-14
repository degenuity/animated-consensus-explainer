
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
  className?: string;
}

const BoxIcon: React.FC<BoxIconProps> = ({ icon, size = 22, className = '' }) => {
  const iconProps = {
    size,
    className
  };
  
  switch (icon) {
    case 'inflation': 
      return <TrendingUp {...iconProps} color="white" />;
    case 'deflation': 
      return <TrendingDown {...iconProps} color="white" />;
    case 'internal-rewards': 
      return <BarChart3 {...iconProps} color="#10B981" />;
    case 'total-stake': 
      return <Lock {...iconProps} color="#3B82F6" />;
    case 'network-costs': 
      return <ServerCrash {...iconProps} color="#F97316" />;
    case 'block-production': 
      return <Box {...iconProps} color="#3B82F6" />;
    case 'block-rewards': 
      return <CircleDollarSign {...iconProps} color="#10B981" />;
    case 'profitability': 
      return <Percent {...iconProps} color="#3B82F6" />;
    case 'info':
      return <Info {...iconProps} color="#3B82F6" />;
    default: 
      return null;
  }
};

export default BoxIcon;
