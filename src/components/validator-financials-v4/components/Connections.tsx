
import React from 'react';
import ConnectionLine from './ConnectionLine';

const Connections: React.FC = () => {
  return (
    <>
      {/* Inflation to Total Stake */}
      <ConnectionLine 
        from={{ top: '102px', left: 'calc(5% + 52px)' }}
        to={{ top: '102px', left: 'calc(50% - 26px)' }}
        color="#3B82F6"
        delay={1.5}
      />
      <ConnectionLine 
        from={{ top: '102px', left: 'calc(50% - 26px)' }}
        to={{ top: '220px', left: 'calc(50% - 26px)' }}
        color="#3B82F6"
        delay={1.5}
      />

      {/* Deflation to Total Stake */}
      <ConnectionLine 
        from={{ top: '102px', left: 'calc(95% - 52px)' }}
        to={{ top: '102px', left: 'calc(50% + 26px)' }}
        color="#F59E0B"
        delay={1.8}
      />
      <ConnectionLine 
        from={{ top: '102px', left: 'calc(50% + 26px)' }}
        to={{ top: '220px', left: 'calc(50% + 26px)' }}
        color="#F59E0B"
        delay={1.8}
      />

      {/* Total Stake to Internal Rewards */}
      <ConnectionLine 
        from={{ top: '244px', left: 'calc(50% - 26px)' }}
        to={{ top: '294px', left: 'calc(50% - 26px)' }}
        color="#8B5CF6"
        delay={2.1}
      />
      <ConnectionLine 
        from={{ top: '294px', left: 'calc(50% - 26px)' }}
        to={{ top: '294px', left: 'calc(5% + 26px)' }}
        color="#8B5CF6"
        delay={2.1}
      />
      <ConnectionLine 
        from={{ top: '294px', left: 'calc(5% + 26px)' }}
        to={{ top: '350px', left: 'calc(5% + 26px)' }}
        color="#8B5CF6"
        delay={2.1}
      />

      {/* Total Stake to Network Costs */}
      <ConnectionLine 
        from={{ top: '244px', left: 'calc(50% + 26px)' }}
        to={{ top: '294px', left: 'calc(50% + 26px)' }}
        color="#8B5CF6"
        delay={2.1}
      />
      <ConnectionLine 
        from={{ top: '294px', left: 'calc(50% + 26px)' }}
        to={{ top: '294px', left: 'calc(95% - 26px)' }}
        color="#8B5CF6"
        delay={2.1}
      />
      <ConnectionLine 
        from={{ top: '294px', left: 'calc(95% - 26px)' }}
        to={{ top: '350px', left: 'calc(95% - 26px)' }}
        color="#8B5CF6"
        delay={2.1}
      />

      {/* Internal Rewards to Block Production */}
      <ConnectionLine 
        from={{ top: '394px', left: 'calc(5% + 26px)' }}
        to={{ top: '480px', left: 'calc(10% + 26px)' }}
        color="#10B981"
        delay={2.4}
        isCurved={true}
        curveDirection="right"
      />

      {/* Network Costs to Validator Profit */}
      <ConnectionLine 
        from={{ top: '394px', left: 'calc(95% - 26px)' }}
        to={{ top: '480px', left: 'calc(90% - 26px)' }}
        color="#F97316"
        delay={2.4}
        isCurved={true}
        curveDirection="left"
      />

      {/* Block Production to Validator Profit */}
      <ConnectionLine 
        from={{ top: '502px', left: 'calc(10% + 52px)' }}
        to={{ top: '502px', left: 'calc(90% - 52px)' }}
        color="#6366F1"
        delay={2.7}
      />
    </>
  );
};

export default Connections;
