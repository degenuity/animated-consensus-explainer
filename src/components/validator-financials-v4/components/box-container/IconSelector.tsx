
import React from 'react';
import { CircleDollarSign, TrendingUp, TrendingDown, Database, ServerCrash, ShieldCheck, Box, Percent } from 'lucide-react';

type IconType = 'inflation' | 'internal-rewards' | 'total-stake' | 'network-costs' | 'deflation' | 'block-production' | 'profitability';

interface IconSelectorProps {
  iconType: IconType;
}

const IconSelector: React.FC<IconSelectorProps> = ({ iconType }) => {
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
    case 'profitability':
      return <Percent size={28} className="text-blue-400" />;
    default:
      return <CircleDollarSign size={28} className="text-emerald-400" />;
  }
};

export default IconSelector;
