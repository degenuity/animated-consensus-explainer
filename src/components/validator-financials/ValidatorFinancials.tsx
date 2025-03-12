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

const ValidatorFinancials = () => {
  return (
    <motion.div 
      className="w-full relative overflow-hidden bg-[#0f1218] min-h-[1200px] py-16"
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ duration: 1 }}
    >
      <div className="max-w-7xl mx-auto relative">
        <Title />

        <div className="relative mx-auto" style={{ height: '1000px' }}>
          {/* Top Row - Three boxes at same height */}
          <div className="absolute left-[50px] top-[100px]" style={{ width: '280px' }}>
            <InternalRewardsBox />
          </div>
          
          <div className="absolute left-[50%] top-[100px] transform -translate-x-1/2" style={{ width: '280px' }}>
            <TotalStakeBox />
          </div>
          
          <div className="absolute right-[50px] top-[100px]" style={{ width: '280px' }}>
            <NetworkUsageCostsBox />
          </div>

          {/* Bottom Row - Adjusted to prevent overlap */}
          <div className="absolute left-[5%] top-[700px]" style={{ width: '380px' }}>
            <BlockProductionEligibilityBox />
          </div>
          
          <div className="absolute right-[5%] top-[700px]" style={{ width: '380px' }}>
            <ProfitabilityBox />
          </div>

          {/* Connecting Lines */}
          <ConnectingLines />

          {/* X1 Logo */}
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.7, delay: 0.7 }}
            className="absolute bottom-0 right-6 text-6xl font-bold text-gray-500/50"
          >
            X1
          </motion.div>
        </div>
      </div>
    </motion.div>
  );
};

export default ValidatorFinancials;
