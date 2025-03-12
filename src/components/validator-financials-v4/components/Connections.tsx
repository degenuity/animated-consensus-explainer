
import React from 'react';
import ConnectionLine from './ConnectionLine';

const Connections: React.FC = () => {
  return (
    <>
      {/* Inflation to Total Stake */}
      <ConnectionLine 
        from={{ top: '142px', left: 'calc(5% + 52px)' }}
        to={{ top: '142px', left: 'calc(23% - 26px)' }}
        color="#3B82F6"
        delay={1.5}
      />

      {/* Internal Rewards to Total Stake */}
      <ConnectionLine 
        from={{ top: '142px', left: 'calc(23% + 52px)' }}
        to={{ top: '142px', left: 'calc(50% - 52px)' }}
        color="#10B981"
        delay={1.6}
      />

      {/* Network Costs to Total Stake */}
      <ConnectionLine 
        from={{ top: '142px', left: 'calc(77% - 52px)' }}
        to={{ top: '142px', left: 'calc(50% + 52px)' }}
        color="#F97316"
        delay={1.7}
      />

      {/* Deflation to Network Costs */}
      <ConnectionLine 
        from={{ top: '142px', left: 'calc(95% - 52px)' }}
        to={{ top: '142px', left: 'calc(77% + 26px)' }}
        color="#F59E0B"
        delay={1.8}
      />

      {/* Total Stake to Block Production */}
      <ConnectionLine 
        from={{ top: '164px', left: 'calc(50% - 26px)' }}
        to={{ top: '250px', left: 'calc(50% - 26px)' }}
        color="#8B5CF6"
        delay={2.1}
      />
      <ConnectionLine 
        from={{ top: '250px', left: 'calc(50% - 26px)' }}
        to={{ top: '250px', left: 'calc(25% + 26px)' }}
        color="#8B5CF6"
        delay={2.1}
      />
      <ConnectionLine 
        from={{ top: '250px', left: 'calc(25% + 26px)' }}
        to={{ top: '320px', left: 'calc(25% + 26px)' }}
        color="#8B5CF6"
        delay={2.1}
      />

      {/* Total Stake to Validator Profit */}
      <ConnectionLine 
        from={{ top: '164px', left: 'calc(50% + 26px)' }}
        to={{ top: '250px', left: 'calc(50% + 26px)' }}
        color="#8B5CF6"
        delay={2.2}
      />
      <ConnectionLine 
        from={{ top: '250px', left: 'calc(50% + 26px)' }}
        to={{ top: '250px', left: 'calc(75% - 26px)' }}
        color="#8B5CF6"
        delay={2.2}
      />
      <ConnectionLine 
        from={{ top: '250px', left: 'calc(75% - 26px)' }}
        to={{ top: '320px', left: 'calc(75% - 26px)' }}
        color="#8B5CF6"
        delay={2.2}
      />

      {/* Internal Rewards to Block Production */}
      <ConnectionLine 
        from={{ top: '164px', left: 'calc(23% + 26px)' }}
        to={{ top: '240px', left: 'calc(23% + 26px)' }}
        color="#10B981"
        delay={2.4}
      />
      <ConnectionLine 
        from={{ top: '240px', left: 'calc(23% + 26px)' }}
        to={{ top: '240px', left: 'calc(25% - 10px)' }}
        color="#10B981"
        delay={2.4}
      />
      <ConnectionLine 
        from={{ top: '240px', left: 'calc(25% - 10px)' }}
        to={{ top: '320px', left: 'calc(25% - 10px)' }}
        color="#10B981"
        delay={2.4}
      />

      {/* Network Costs to Validator Profit */}
      <ConnectionLine 
        from={{ top: '164px', left: 'calc(77% - 26px)' }}
        to={{ top: '240px', left: 'calc(77% - 26px)' }}
        color="#F97316"
        delay={2.4}
      />
      <ConnectionLine 
        from={{ top: '240px', left: 'calc(77% - 26px)' }}
        to={{ top: '240px', left: 'calc(75% + 10px)' }}
        color="#F97316"
        delay={2.4}
      />
      <ConnectionLine 
        from={{ top: '240px', left: 'calc(75% + 10px)' }}
        to={{ top: '320px', left: 'calc(75% + 10px)' }}
        color="#F97316"
        delay={2.4}
      />

      {/* Block Production to Validator Profit */}
      <ConnectionLine 
        from={{ top: '342px', left: 'calc(25% + 52px)' }}
        to={{ top: '342px', left: 'calc(75% - 52px)' }}
        color="#6366F1"
        delay={2.7}
      />
    </>
  );
};

export default Connections;
