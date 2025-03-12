
import React from 'react';
import BoxContainer from './BoxContainer';
import { 
  TrendingUp, TrendingDown, Database, CircleDollarSign,
  ServerCrash, ShieldCheck, DollarSign, Shuffle, Activity
} from 'lucide-react';

const Boxes: React.FC = () => {
  return (
    <>
      {/* Inflation box */}
      <BoxContainer
        position="left-[5%] top-[80px]"
        icon={<TrendingUp size={36} className="text-blue-400" />}
        title="Inflation"
        subtitle="Token Issuance"
        description="New tokens created through consensus rewards"
        color="59, 130, 246"
        animationDelay={0}
      />

      {/* Internal Rewards Box - Left */}
      <BoxContainer
        position="left-[33%] top-[80px]"
        icon={<CircleDollarSign size={36} className="text-emerald-400" />}
        title="Internal Rewards"
        subtitle="Consensus Rewards"
        description="Consensus participation rewards earned by validators"
        color="52, 211, 153"
        animationDelay={0.2}
      />

      {/* Total Stake Box - Center */}
      <BoxContainer
        position="left-1/2 transform -translate-x-1/2 top-[80px]"
        icon={<Database size={36} className="text-blue-300" />}
        title="Total Stake"
        subtitle="Validator Collateral"
        description="Determines network participation and rewards distribution"
        color="93, 174, 236"
        animationDelay={0.4}
      />

      {/* Network Usage Costs Box - Right */}
      <BoxContainer
        position="right-[33%] top-[80px]"
        icon={<ServerCrash size={36} className="text-orange-400" />}
        title="Network Costs"
        subtitle="Processing Costs"
        description="Transaction processing and operational expenses"
        color="249, 115, 22"
        animationDelay={0.2}
      />

      {/* Deflation box */}
      <BoxContainer
        position="right-[5%] top-[80px]"
        icon={<TrendingDown size={36} className="text-amber-400" />}
        title="Deflation"
        subtitle="Token Burns"
        description="Tokens removed from supply via transaction fees"
        color="245, 158, 11"
        animationDelay={0}
      />

      {/* Block Production Box - Center Bottom */}
      <BoxContainer
        position="left-1/2 transform -translate-x-1/2 top-[300px]"
        icon={<ShieldCheck size={36} className="text-blue-400" />}
        title="Block Production"
        subtitle="Network Participation"
        description="Eligibility determined by stake level and network parameters"
        color="59, 130, 246"
        animationDelay={0.8}
        className="w-80"
      />
    </>
  );
};

export default Boxes;
