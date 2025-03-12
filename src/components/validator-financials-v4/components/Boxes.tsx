import React from 'react';
import BoxContainer from './BoxContainer';
import { Percent } from 'lucide-react';

interface SubBox {
  title: string;
  description?: string;
  fullWidth?: boolean;
  customColor?: 'yellow' | 'green' | 'red' | 'blue';
  hasAddIcon?: boolean;
  subBoxes?: SubBox[];
}

const Boxes: React.FC = () => {
  return (
    <>
      {/* Inflation box - with reduced width */}
      <BoxContainer
        position="left-[2%] top-[80px]"
        iconType="inflation"
        title="inflation"
        subtitle="token issuance"
        color="59, 130, 246"
        simpleStyle={true}
        animationDelay={0}
        className="w-[160px]" // Reduced width further
      />

      {/* Internal Rewards Box - Left */}
      <BoxContainer
        position="left-[26%] top-[80px]"
        iconType="internal-rewards"
        title="internal rewards"
        color="52, 211, 153"
        animationDelay={0.2}
        subBoxes={[
          { title: "commission" },
          { title: "staking rewards" },
          { title: "voting rewards" }
        ]}
      />

      {/* Total Stake Box - Center */}
      <BoxContainer
        position="left-1/2 transform -translate-x-1/2 top-[80px]"
        iconType="total-stake"
        title="total stake"
        color="93, 174, 236"
        animationDelay={0.4}
        subBoxes={[
          { title: "validator balance" },
          { title: "delegator stakes" },
          { title: "network share" }
        ]}
      />

      {/* Network Usage Costs Box - Right */}
      <BoxContainer
        position="right-[26%] top-[80px]"
        iconType="network-costs"
        title="network costs"
        color="249, 115, 22"
        animationDelay={0.2}
        subBoxes={[
          { 
            title: "base fees", 
            fullWidth: true,
            customColor: "yellow"
          },
          { 
            title: "block rewards", 
            fullWidth: true,
            customColor: "green",
            subBoxes: [
              { title: "priority fees", fullWidth: true, customColor: "green" },
              { title: "MEV", fullWidth: true, customColor: "green" }
            ]
          }
        ]}
      />

      {/* Deflation box - with reduced width */}
      <BoxContainer
        position="right-[2%] top-[80px]"
        iconType="deflation"
        title="deflation"
        subtitle="token burns"
        color="245, 158, 11"
        simpleStyle={true}
        animationDelay={0}
        className="w-[160px]" // Reduced width further
      />

      {/* Block Production Box - Left Position */}
      <BoxContainer
        position="left-[15%] top-[370px]"
        iconType="block-production"
        title="block production eligibility"
        color="59, 130, 246"
        animationDelay={0.8}
        subBoxes={[
          {
            title: "stake weight",
            description: "amount of XNT staked",
            fullWidth: true
          },
          {
            title: "randomness",
            description: "ACP anti-collusion protocol",
            fullWidth: false
          },
          {
            title: "performance/reputation",
            description: "from recorded history",
            fullWidth: false
          }
        ]}
        useAlternativeStyle={true}
      />

      {/* Profitability Box - Right Position */}
      <BoxContainer
        position="right-[15%] top-[450px]"
        iconType="profitability"
        title="profitability"
        color="59, 130, 246"
        animationDelay={1.0}
        useAlternativeStyle={true}
        subBoxes={[
          {
            title: "operational costs",
            description: "only cost is server",
            fullWidth: false,
            customColor: "yellow"
          },
          {
            title: "total validator rewards",
            description: "aggregate",
            fullWidth: false,
            customColor: "green",
            hasAddIcon: true
          },
        ]}
      />
    </>
  );
};

export default Boxes;
