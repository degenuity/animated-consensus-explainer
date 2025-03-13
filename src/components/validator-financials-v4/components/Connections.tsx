
import React from 'react';
import ConnectionLine from './ConnectionLine';

const Connections: React.FC = () => {
  return (
    <>
      {/* Inflation to Internal Rewards - kept at center Y which is 290px */}
      <ConnectionLine 
        from={{ top: '290px', left: 'calc(2% + 160px)' }}
        to={{ top: '290px', left: 'calc(26% - 20px)' }}
        color="#3B82F6"
        delay={1.5}
      />

      {/* Internal Rewards to Total Stake - kept at center Y which is 290px */}
      <ConnectionLine 
        from={{ top: '290px', left: 'calc(26% + 128px)' }}
        to={{ top: '290px', left: 'calc(50% - 128px)' }}
        color="#10B981"
        delay={1.6}
      />

      {/* Network Costs to Total Stake - kept at center Y which is 290px */}
      <ConnectionLine 
        from={{ top: '290px', left: 'calc(74% - 128px)' }}
        to={{ top: '290px', left: 'calc(50% + 128px)' }}
        color="#F97316"
        delay={1.7}
      />

      {/* Deflation to Network Costs - kept at center Y which is 290px */}
      <ConnectionLine 
        from={{ top: '290px', left: 'calc(98% - 160px)' }}
        to={{ top: '290px', left: 'calc(74% + 20px)' }}
        color="#F59E0B"
        delay={1.8}
      />

      {/* Total Stake to Block Production */}
      <ConnectionLine 
        from={{ top: '290px', left: 'calc(45% - 30px)' }} 
        to={{ top: '370px', left: 'calc(15% + 100px)' }}
        color="#8B5CF6"
        delay={2.1}
      />

      {/* Total Stake to Profitability */}
      <ConnectionLine 
        from={{ top: '290px', left: 'calc(55% + 30px)' }} 
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
