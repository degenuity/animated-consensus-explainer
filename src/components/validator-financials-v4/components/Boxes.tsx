
import React from 'react';
import BoxContainer from './BoxContainer';
import { 
  TrendingUp, TrendingDown, Database, CircleDollarSign,
  ServerCrash, ShieldCheck, DollarSign
} from 'lucide-react';

const Boxes: React.FC = () => {
  return (
    <>
      {/* Inflation box */}
      <BoxContainer
        position="left-[5%] top-[120px]"
        icon={<TrendingUp size={32} className="text-blue-400 mb-2" />}
        title="Inflation"
        subtitle="Token Issuance"
        description="New tokens created through consensus rewards"
        color="37, 99, 235"
        animationDelay={0}
      />

      {/* Internal Rewards Box - Left */}
      <BoxContainer
        position="left-[23%] top-[120px]"
        icon={<CircleDollarSign size={32} className="text-emerald-400 mb-2" />}
        title="Internal Rewards"
        subtitle="Consensus Rewards"
        description="Consensus participation rewards earned by validators"
        color="5, 150, 105"
        animationDelay={0.3}
      />

      {/* Total Stake Box - Center */}
      <BoxContainer
        position="left-1/2 transform -translate-x-1/2 top-[120px]"
        icon={<Database className="text-indigo-400 mb-2" size={32} />}
        title="Total Stake"
        subtitle="Validator Collateral"
        description="Determines network participation and rewards distribution"
        color="124, 58, 237"
        animationDelay={0.6}
      />

      {/* Network Usage Costs Box - Right */}
      <BoxContainer
        position="right-[23%] top-[120px]"
        icon={<ServerCrash size={32} className="text-orange-400 mb-2" />}
        title="Network Costs"
        subtitle="Processing Costs"
        description="Transaction processing and operational expenses"
        color="234, 88, 12"
        animationDelay={0.3}
      />

      {/* Deflation box */}
      <BoxContainer
        position="right-[5%] top-[120px]"
        icon={<TrendingDown size={32} className="text-amber-400 mb-2" />}
        title="Deflation"
        subtitle="Token Burns"
        description="Tokens removed from supply via transaction fees"
        color="217, 119, 6"
        animationDelay={0}
      />

      {/* Block Production Box - Left */}
      <BoxContainer
        position="left-[25%] top-[320px]"
        icon={<ShieldCheck size={32} className="text-blue-400 mb-2" />}
        title="Block Production"
        subtitle="Network Participation"
        description="Eligibility determined by stake level and network participation"
        color="37, 99, 235"
        animationDelay={1.2}
      />

      {/* Validator Profitability Box - Right */}
      <BoxContainer
        position="right-[25%] top-[320px]"
        icon={<DollarSign size={32} className="text-green-400 mb-2" />}
        title="Validator Profit"
        subtitle="Economic Returns"
        description="Economic sustainability for network participants"
        color="22, 163, 74"
        animationDelay={1.2}
      />
    </>
  );
};

export default Boxes;
