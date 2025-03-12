
import React from 'react';
import BoxContainer from './BoxContainer';
import { Percent } from 'lucide-react';

const Boxes: React.FC = () => {
  return (
    <>
      {/* Inflation box - with reduced width */}
      <BoxContainer
        position="left-[8%] top-[80px]"
        iconType="inflation"
        title="Inflation"
        subtitle="Token Issuance"
        color="59, 130, 246"
        simpleStyle={true}
        animationDelay={0}
        className="w-[180px]" // Reduced width by ~30%
      />

      {/* Internal Rewards Box - Left */}
      <BoxContainer
        position="left-[33%] top-[80px]"
        iconType="internal-rewards"
        title="Internal Rewards"
        color="52, 211, 153"
        animationDelay={0.2}
        subBoxes={[
          { title: "Commission" },
          { title: "Staking Rewards" },
          { title: "Voting Rewards" }
        ]}
      />

      {/* Total Stake Box - Center */}
      <BoxContainer
        position="left-1/2 transform -translate-x-1/2 top-[80px]"
        iconType="total-stake"
        title="Total Stake"
        color="93, 174, 236"
        animationDelay={0.4}
        subBoxes={[
          { title: "Validator Balance" },
          { title: "Delegator Stakes" },
          { title: "Network Share" }
        ]}
      />

      {/* Network Usage Costs Box - Right */}
      <BoxContainer
        position="right-[33%] top-[80px]"
        iconType="network-costs"
        title="Network Costs"
        color="249, 115, 22"
        animationDelay={0.2}
        subBoxes={[
          { title: "Transaction Fees" },
          { title: "Resource Usage" },
          { title: "Operation Costs" }
        ]}
      />

      {/* Deflation box - with reduced width */}
      <BoxContainer
        position="right-[8%] top-[80px]"
        iconType="deflation"
        title="Deflation"
        subtitle="Token Burns"
        color="245, 158, 11"
        simpleStyle={true}
        animationDelay={0}
        className="w-[180px]" // Reduced width by ~30%
      />

      {/* Block Production Box - Center */}
      <BoxContainer
        position="left-1/2 transform -translate-x-1/2 top-[350px]"
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

      {/* New Profitability Box */}
      <BoxContainer
        position="left-1/2 transform -translate-x-1/2 top-[570px]"
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
