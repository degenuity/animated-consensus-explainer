
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

      {/* Internal Rewards Box - Left - Adjusted top position to align center with Inflation */}
      <BoxContainer
        position="left-[26%] top-[50px]" // Adjusted from top-[80px] to top-[50px]
        iconType="internal-rewards"
        title="internal rewards"
        color="52, 211, 153"
        animationDelay={0.2}
        className="h-[160px]" // Reduced height from 220px to 160px
        subBoxes={[
          { title: "commission" },
          { title: "staking rewards" }
        ]}
      />

      {/* Total Stake Box - Center - Adjusted top position to align center with Inflation */}
      <BoxContainer
        position="left-1/2 transform -translate-x-1/2 top-[50px]" // Adjusted from top-[80px] to top-[50px]
        iconType="total-stake"
        title="total stake"
        color="93, 174, 236"
        animationDelay={0.4}
        className="h-[160px]" // Reduced height from 180px to 160px to match the SVG version
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
        className="h-[300px]" // Further reduced height from 350px to 300px to match SVG version
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
            title: "performance", // Swapped position with stake weight
            description: "from recorded history",
            fullWidth: true
          },
          {
            title: "randomness",
            description: "ACP anti-collusion protocol",
            fullWidth: false
          },
          {
            title: "stake weight", // Swapped position with performance
            description: "amount of XNT staked",
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
            title: "total validator rewards",
            description: "aggregate",
            fullWidth: false,
            customColor: "green"
          },
          {
            title: "operational costs",
            description: "only cost is server",
            fullWidth: false,
            customColor: "yellow"
          },
        ]}
      />
    </>
  );
};

export default Boxes;
