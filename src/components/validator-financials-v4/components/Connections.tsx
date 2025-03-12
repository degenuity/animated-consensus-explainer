
import React from 'react';
import ConnectionLine from './ConnectionLine';

const Connections: React.FC = () => {
  return (
    <>
      {/* Inflation to Internal Rewards */}
      <ConnectionLine 
        from={{ top: '165px', left: 'calc(5% + 180px)' }}
        to={{ top: '165px', left: 'calc(25% - 20px)' }}
        color="#3B82F6"
        delay={1.5}
      />

      {/* Internal Rewards to Total Stake */}
      <ConnectionLine 
        from={{ top: '165px', left: 'calc(25% + 128px)' }}
        to={{ top: '165px', left: 'calc(50% - 128px)' }}
        color="#10B981"
        delay={1.6}
      />

      {/* Network Costs to Total Stake */}
      <ConnectionLine 
        from={{ top: '165px', left: 'calc(75% - 128px)' }}
        to={{ top: '165px', left: 'calc(50% + 128px)' }}
        color="#F97316"
        delay={1.7}
      />

      {/* Deflation to Network Costs */}
      <ConnectionLine 
        from={{ top: '165px', left: 'calc(95% - 180px)' }}
        to={{ top: '165px', left: 'calc(75% + 20px)' }}
        color="#F59E0B"
        delay={1.8}
      />

      {/* Total Stake to Block Production */}
      <ConnectionLine 
        from={{ top: '220px', left: 'calc(50% - 30px)' }}
        to={{ top: '350px', left: 'calc(30% + 150px)' }}
        color="#8B5CF6"
        delay={2.1}
      />

      {/* Total Stake to Profitability */}
      <ConnectionLine 
        from={{ top: '220px', left: 'calc(50% + 30px)' }}
        to={{ top: '350px', left: 'calc(70% - 150px)' }}
        color="#8B5CF6"
        delay={2.2}
      />

      {/* Block Production to Profitability */}
      <ConnectionLine 
        from={{ top: '480px', left: 'calc(30% + 300px)' }}
        to={{ top: '480px', left: 'calc(70% - 300px)' }}
        color="#6366F1"
        delay={2.7}
      />
    </>
  );
};

export default Connections;
