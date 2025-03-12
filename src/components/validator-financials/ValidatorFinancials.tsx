
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
      className="w-full py-6 px-4 relative overflow-hidden h-[600px]"
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ duration: 1 }}
    >
      <Title />

      <div className="relative w-full max-w-6xl mx-auto mt-4">
        {/* Absolutely positioned elements for precise control */}
        <div className="relative h-[500px]">
          {/* Top Row */}
          <div className="absolute top-0 left-[50px] w-[200px]">
            <InflationBox />
          </div>
          
          <div className="absolute top-0 left-[350px] w-[200px]">
            <TotalStakeBox />
          </div>
          
          <div className="absolute top-0 right-[50px] w-[200px]">
            <DeflationBox />
          </div>

          {/* Middle Row */}
          <div className="absolute top-[180px] left-[50px] w-[250px]">
            <InternalRewardsBox />
          </div>
          
          <div className="absolute top-[180px] right-[50px] w-[250px]">
            <NetworkUsageCostsBox />
          </div>

          {/* Bottom Row */}
          <div className="absolute top-[380px] left-[50px] w-[300px]">
            <BlockProductionEligibilityBox />
          </div>
          
          <div className="absolute top-[380px] right-[50px] w-[300px]">
            <ProfitabilityBox />
          </div>

          {/* Connecting lines are drawn between the boxes */}
          <ConnectingLines />
          <OperationalCostsNote />
        </div>

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
