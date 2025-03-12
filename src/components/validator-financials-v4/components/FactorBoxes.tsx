
import React from 'react';
import { motion } from 'framer-motion';
import FactorBox from './FactorBox';

const FactorBoxes: React.FC = () => {
  return (
    <>
      {/* Block Production Eligibility Factors */}
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 0.6, delay: 2.2 }}
        className="absolute left-[17%] top-[400px] flex gap-2 items-center"
      >
        <FactorBox
          title="Stake Weight"
          description="Amount of XNT staked"
          color="blue"
        />
        <div className="text-gray-500 mx-1">×</div>
        <FactorBox
          title="Randomness"
          description="ACP anti-collusion protocol"
          color="blue"
        />
        <div className="text-gray-500 mx-1">×</div>
        <FactorBox
          title="Performance"
          description="From recorded history"
          color="blue"
        />
      </motion.div>

      {/* Validator Profitability Factors */}
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 0.6, delay: 2.2 }}
        className="absolute right-[17%] top-[400px] flex gap-2 items-center"
      >
        <FactorBox
          title="Operational Costs"
          description="Only cost is server"
          color="yellow"
        />
        <div className="text-gray-500 mx-1">+</div>
        <FactorBox
          title="Total Rewards"
          description="Aggregate earnings"
          color="green"
        />
      </motion.div>
    </>
  );
};

export default FactorBoxes;
