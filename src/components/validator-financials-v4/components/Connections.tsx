
import React from 'react';
import ConnectionLine from './ConnectionLine';

const Connections: React.FC = () => {
  return (
    <>
      {/* Inflation to Internal Rewards - kept at 115px which is the relative center */}
      <ConnectionLine 
        from={{ top: '115px', left: 'calc(2% + 160px)' }}
        to={{ top: '115px', left: 'calc(26% - 20px)' }}
        color="#3B82F6"
        delay={1.5}
      />

      {/* Internal Rewards to Total Stake - kept at 115px which is the relative center */}
      <ConnectionLine 
        from={{ top: '115px', left: 'calc(26% + 128px)' }}
        to={{ top: '115px', left: 'calc(50% - 128px)' }}
        color="#10B981"
        delay={1.6}
      />

      {/* Network Costs to Total Stake - kept at 115px which is the relative center */}
      <ConnectionLine 
        from={{ top: '115px', left: 'calc(74% - 128px)' }}
        to={{ top: '115px', left: 'calc(50% + 128px)' }}
        color="#F97316"
        delay={1.7}
      />

      {/* Deflation to Network Costs - kept at 115px which is the relative center */}
      <ConnectionLine 
        from={{ top: '115px', left: 'calc(98% - 160px)' }}
        to={{ top: '115px', left: 'calc(74% + 20px)' }}
        color="#F59E0B"
        delay={1.8}
      />

      {/* Total Stake to Block Production - Updated to start from the new Total Stake box position */}
      <ConnectionLine 
        from={{ top: '185px', left: 'calc(45% - 30px)' }} // Adjusted from 170px to 185px
        to={{ top: '370px', left: 'calc(15% + 100px)' }}
        color="#8B5CF6"
        delay={2.1}
      />

      {/* Total Stake to Profitability - Updated to start from the new Total Stake box position */}
      <ConnectionLine 
        from={{ top: '185px', left: 'calc(55% + 30px)' }} // Adjusted from 170px to 185px
        to={{ top: '370px', left: 'calc(85% - 100px)' }}
        color="#8B5CF6"
        delay={2.2}
      />

      {/* Block Production to Profitability */}
      <ConnectionLine 
        from={{ top: '430px', left: 'calc(15% + 300px)' }}
        to={{ top: '430px', left: 'calc(85% - 300px)' }}
        color="#6366F1"
        delay={2.7}
      />
    </>
  );
};

export default Connections;
