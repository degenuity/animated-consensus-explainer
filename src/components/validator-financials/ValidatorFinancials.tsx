
import React from 'react';
import { motion } from "framer-motion";
import Title from './Title';
import InflationBox from './InflationBox';
import DeflationBox from './DeflationBox';
import TotalStakeBox from './TotalStakeBox';
import InternalRewardsBox from './InternalRewardsBox';
import NetworkUsageCostsBox from './NetworkUsageCostsBox';
import BlockProductionEligibilityBox from './BlockProductionEligibilityBox';
import ProfitabilityBox from './ProfitabilityBox';
import ConnectingLines from './ConnectingLines';
import OperationalCostsNote from './OperationalCostsNote';

const ValidatorFinancials = () => {
  return (
    <motion.div 
      className="w-full py-10 px-4 relative overflow-hidden"
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ duration: 1 }}
    >
      <Title />

      <div className="relative w-full max-w-6xl mx-auto">
        {/* Main Flow Chart Layout */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-6">
          {/* Top Row */}
          <div className="lg:col-span-12 grid grid-cols-1 lg:grid-cols-12 gap-6">
            <InflationBox />
            <TotalStakeBox />
            <DeflationBox />
          </div>

          {/* Middle Row */}
          <div className="lg:col-span-12 grid grid-cols-1 lg:grid-cols-12 gap-6 mt-6">
            <InternalRewardsBox />
            <NetworkUsageCostsBox />
          </div>

          {/* Bottom Row */}
          <div className="lg:col-span-12 grid grid-cols-1 lg:grid-cols-12 gap-6 mt-6">
            <BlockProductionEligibilityBox />
            <ProfitabilityBox />
          </div>
        </div>

        <ConnectingLines />
        <OperationalCostsNote />

        {/* X1 Logo */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.7, delay: 0.7 }}
          className="absolute bottom-2 right-2 text-3xl font-bold text-white/50"
        >
          X1
        </motion.div>
      </div>
    </motion.div>
  );
};

export default ValidatorFinancials;
