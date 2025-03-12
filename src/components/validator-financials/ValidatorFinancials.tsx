
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
      className="w-full py-6 px-4 relative overflow-hidden h-[800px]"
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ duration: 1 }}
    >
      <Title />

      <div className="relative w-full max-w-7xl mx-auto mt-8">
        <div className="relative h-[650px]">
          {/* First Row - More space between elements */}
          <div className="absolute top-0 left-[50px] w-[180px]">
            <InflationBox />
          </div>
          
          <div className="absolute top-0 left-[400px] w-[220px]">
            <TotalStakeBox />
          </div>
          
          <div className="absolute top-0 right-[50px] w-[180px]">
            <DeflationBox />
          </div>

          {/* Second Row - Adjusted spacing */}
          <div className="absolute top-[180px] left-[200px] w-[280px]">
            <InternalRewardsBox />
          </div>
          
          <div className="absolute top-[160px] right-[120px] w-[280px]">
            <NetworkUsageCostsBox />
          </div>

          {/* Bottom Row - Larger boxes with more space */}
          <div className="absolute top-[400px] left-[100px] w-[400px]">
            <BlockProductionEligibilityBox />
          </div>
          
          <div className="absolute top-[400px] right-[100px] w-[320px]">
            <ProfitabilityBox />
          </div>

          <ConnectingLines />
          
          {/* Adjusted operational costs note position */}
          <div className="absolute bottom-4 left-1/2 transform -translate-x-1/2 w-[600px]">
            <OperationalCostsNote />
          </div>

          {/* X1 Logo - Bottom right corner */}
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.7, delay: 0.7 }}
            className="absolute bottom-4 right-4 text-3xl font-bold text-white/50"
          >
            X1
          </motion.div>
        </div>
      </div>
    </motion.div>
  );
};

export default ValidatorFinancials;
