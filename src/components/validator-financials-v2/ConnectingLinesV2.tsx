
import React from 'react';
import { 
  HorizontalLine, 
  VerticalLine, 
  Indicator, 
  MathOperator 
} from './connecting-lines';

const ConnectingLinesV2 = () => {
  return (
    <>
      {/* Inflation to Internal Rewards (blue line) */}
      <HorizontalLine 
        top="160px"
        left="154px"
        width="110"
        color="#3B82F6"
        animationDirection="x"
        animationValues={[-30, 30, -30]}
        duration={2}
      />

      {/* Network Usage Costs to Deflation (yellow line) */}
      <HorizontalLine 
        top="160px"
        left="auto"
        width="110"
        color="#EAB308"
        animationDirection="x"
        animationValues={[30, -30, 30]}
        duration={2.5}
        // @ts-ignore - style prop override for right positioning
        style={{ right: '154px' }}
      />
      
      {/* 50% indicator for Network Usage to Deflation */}
      <Indicator
        top="140px"
        left="auto"
        text="50%"
        style={{ right: '210px' }}
      />

      {/* Delegated Stake to Commission (left to right blue line) */}
      <HorizontalLine 
        top="213px"
        left="382px"
        width="150"
        color="#3B82F6"
        animationDirection="x"
        animationValues={[-40, 40, -40]}
        duration={2}
      />

      {/* Own Stake to Staking Rewards (left to right blue line) */}
      <HorizontalLine 
        top="257px"
        left="382px"
        width="150"
        color="#3B82F6"
        animationDirection="x"
        animationValues={[-40, 40, -40]}
        duration={2.3}
      />

      {/* Network Usage Costs to Block Rewards (vertical yellow line with 50% indicator) */}
      <VerticalLine 
        top="212px"
        left="640px"
        height="55"
        color="#EAB308"
        animationDirection="y"
        animationValues={[-15, 15, -15]}
        duration={1.5}
      />
      
      {/* 50% indicator for Network Usage to Block Rewards */}
      <Indicator
        top="230px"
        left="655px"
        text="50%"
      />

      {/* Block Rewards to Priority Fees (vertical yellow line) */}
      <VerticalLine 
        top="267px"
        left="640px"
        height="35"
        color="#10B981"
        animationDirection="y"
        animationValues={[-10, 10, -10]}
        duration={1.5}
      />

      {/* Voting Rewards to Block Production Eligibility (vertical green line) */}
      <VerticalLine 
        top="300px"
        left="383px"
        height="245"
        color="#10B981"
        animationDirection="y"
        animationValues={[-100, 100, -100]}
        duration={3}
      />

      {/* Block Rewards to Profitability (vertical green line) */}
      <VerticalLine 
        top="267px"
        left="750px"
        height="314"
        color="#10B981"
        animationDirection="y"
        animationValues={[-100, 100, -100]}
        duration={3}
      />

      {/* Total Stake to Block Production (blue vertical line) */}
      <VerticalLine 
        top="360px"
        left="640px"
        height="185"
        color="#3B82F6"
        animationDirection="y"
        animationValues={[-80, 80, -80]}
        duration={2.5}
      />

      {/* Network Usage Costs to Operational Costs (yellow vertical line) */}
      <VerticalLine 
        top="267px"
        left="900px"
        height="364"
        color="#EAB308"
        animationDirection="y"
        animationValues={[-160, 160, -160]}
        duration={3.5}
      />

      {/* Multiplication sign between Stake Weight and Randomness */}
      <MathOperator top="593px" left="420px" operator="×" />

      {/* Multiplication sign between Randomness and Performance */}
      <MathOperator top="593px" left="580px" operator="×" />

      {/* Plus sign for Profitability */}
      <MathOperator top="630px" left="830px" operator="+" />
    </>
  );
};

export default ConnectingLinesV2;
