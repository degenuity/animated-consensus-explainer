
import React from 'react';
import BoxContainer from './BoxContainer';

const Boxes: React.FC = () => {
  return (
    <>
      {/* Inflation box */}
      <BoxContainer
        position="left-[5%] top-[80px]"
        iconType="inflation"
        title="Inflation"
        subtitle="Token Issuance"
        color="59, 130, 246"
        simpleStyle={true}
        animationDelay={0}
      />

      {/* Internal Rewards Box - Left */}
      <BoxContainer
        position="left-[33%] top-[80px]"
        iconType="internal-rewards"
        title="Internal Rewards"
        color="52, 211, 153"
        animationDelay={0.2}
        subBoxes={[
          "Commission",
          "Staking Rewards",
          "Voting Rewards"
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
          "Validator Balance",
          "Delegator Stakes",
          "Network Share"
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
          "Transaction Fees",
          "Resource Usage",
          "Operation Costs"
        ]}
      />

      {/* Deflation box */}
      <BoxContainer
        position="right-[5%] top-[80px]"
        iconType="deflation"
        title="Deflation"
        subtitle="Token Burns"
        color="245, 158, 11"
        simpleStyle={true}
        animationDelay={0}
      />

      {/* Block Production Box - Center Bottom */}
      <BoxContainer
        position="left-1/2 transform -translate-x-1/2 top-[350px]"
        iconType="block-production"
        title="Block Production"
        color="59, 130, 246"
        animationDelay={0.8}
        subBoxes={[
          "Eligibility Status",
          "Performance Stats",
          "Network Impact"
        ]}
      />
    </>
  );
};

export default Boxes;
