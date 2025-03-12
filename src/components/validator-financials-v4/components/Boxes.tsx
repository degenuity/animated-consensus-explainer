
import React from 'react';
import BoxContainer from './BoxContainer';
import { Percent } from 'lucide-react';

const Boxes: React.FC = () => {
  return (
    <>
      {/* Inflation box - with reduced width */}
      <BoxContainer
        position="left-[5%] top-[130px]"
        iconType="inflation"
        title="inflation"
        subtitle="token issuance"
        color="59, 130, 246"
        simpleStyle={true}
        animationDelay={0}
        className="w-[180px]" // Reduced width by ~30%
      />

      {/* Internal Rewards Box - Left */}
      <BoxContainer
        position="left-[25%] top-[130px]"
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
        position="left-1/2 transform -translate-x-1/2 top-[130px]"
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
        position="right-[25%] top-[130px]"
        iconType="network-costs"
        title="network costs"
        color="249, 115, 22"
        animationDelay={0.2}
        subBoxes={[
          { title: "transaction fees" },
          { title: "resource usage" },
          { title: "operation costs" }
        ]}
      />

      {/* Deflation box - with reduced width */}
      <BoxContainer
        position="right-[5%] top-[130px]"
        iconType="deflation"
        title="deflation"
        subtitle="token burns"
        color="245, 158, 11"
        simpleStyle={true}
        animationDelay={0}
        className="w-[180px]" // Reduced width by ~30%
      />

      {/* Block Production Box - Left Position */}
      <BoxContainer
        position="left-[30%] top-[420px]"
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
        position="right-[30%] top-[420px]"
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
