
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
      className="w-full relative overflow-hidden bg-[#0f1218] min-h-[800px] py-12"
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ duration: 1 }}
    >
      <div className="max-w-7xl mx-auto relative">
        <Title />

        <div className="relative mx-auto" style={{ height: '750px' }}>
          {/* First Row */}
          <div className="absolute left-[100px] top-[80px]" style={{ width: '220px' }}>
            <InflationBox />
          </div>
          
          <div className="absolute left-[450px] top-[80px]" style={{ width: '240px' }}>
            <TotalStakeBox />
          </div>
          
          <div className="absolute right-[100px] top-[80px]" style={{ width: '220px' }}>
            <DeflationBox />
          </div>

          {/* Second Row */}
          <div className="absolute left-[180px] top-[280px]" style={{ width: '250px' }}>
            <InternalRewardsBox />
          </div>
          
          <div className="absolute right-[180px] top-[280px]" style={{ width: '250px' }}>
            <NetworkUsageCostsBox />
          </div>

          {/* Bottom Row */}
          <div className="absolute left-[80px] top-[550px]" style={{ width: '400px' }}>
            <BlockProductionEligibilityBox />
          </div>
          
          <div className="absolute right-[80px] top-[550px]" style={{ width: '400px' }}>
            <ProfitabilityBox />
          </div>

          {/* Connecting Lines */}
          <ConnectingLines />
          
          {/* Operational Costs Note - Positioned at the bottom */}
          <OperationalCostsNote />

          {/* X1 Logo - Bottom right corner */}
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.7, delay: 0.7 }}
            className="absolute bottom-0 right-6 text-5xl font-bold text-gray-500/50"
          >
            X1
          </motion.div>
        </div>
      </div>
    </motion.div>
  );
};

export default ValidatorFinancials;
