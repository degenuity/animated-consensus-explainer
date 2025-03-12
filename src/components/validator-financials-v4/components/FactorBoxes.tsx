
import React from 'react';
import FactorBox from './FactorBox';

const FactorBoxes: React.FC = () => {
  return (
    <>
      {/* Factor 1: Commission Rate */}
      <FactorBox
        title="Commission Rate"
        description="Percentage of rewards claimed by validators"
        color="3366ff"
        position="left-[10%] top-[260px]"
        index={0}
      />
      
      {/* Factor 2: Token Price */}
      <FactorBox
        title="Token Price"
        description="Market value of network token"
        color="3366ff"
        position="left-[25%] top-[260px]"
        index={1}
      />
      
      {/* Factor 3: Network Usage */}
      <FactorBox
        title="Network Usage"
        description="Transaction volume and demand"
        color="3366ff"
        position="right-[25%] top-[260px]"
        index={2}
      />
      
      {/* Factor 4: Transaction Fees */}
      <FactorBox
        title="Transaction Fees"
        description="Cost to process transactions"
        color="3366ff"
        position="right-[10%] top-[260px]"
        index={3}
      />
      
      {/* Factor 5: Validator Count */}
      <FactorBox
        title="Validator Count"
        description="Number of active validators"
        color="3366ff"
        position="left-[35%] bottom-[60px]"
        index={4}
      />
    </>
  );
};

export default FactorBoxes;
