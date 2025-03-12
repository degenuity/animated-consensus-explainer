
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
      className="w-full relative overflow-hidden bg-[#0f1218] min-h-[1000px] py-12"
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ duration: 1 }}
    >
      <div className="max-w-7xl mx-auto relative">
        <Title />

        <div className="relative mx-auto" style={{ height: '900px' }}>
          {/* First Row - Main Boxes with wider spacing */}
          <div className="absolute left-[70px] top-[100px]" style={{ width: '200px' }}>
            <InflationBox />
          </div>
          
          <div className="absolute left-[50%] top-[100px] transform -translate-x-1/2" style={{ width: '280px' }}>
            <TotalStakeBox />
          </div>
          
          <div className="absolute right-[70px] top-[100px]" style={{ width: '200px' }}>
            <DeflationBox />
          </div>

          {/* Second Row - Move down and space better */}
          <div className="absolute left-[150px] top-[350px]" style={{ width: '280px' }}>
            <InternalRewardsBox />
          </div>
          
          <div className="absolute right-[150px] top-[350px]" style={{ width: '280px' }}>
            <NetworkUsageCostsBox />
          </div>

          {/* Bottom Row - Increase vertical space and adjust width */}
          <div className="absolute left-[75px] top-[600px]" style={{ width: '380px' }}>
            <BlockProductionEligibilityBox />
          </div>
          
          <div className="absolute right-[75px] top-[600px]" style={{ width: '380px' }}>
            <ProfitabilityBox />
          </div>

          {/* Connecting Lines */}
          <ConnectingLines />
          
          {/* Operational Costs Note - Positioned near the bottom right */}
          <div className="absolute right-[75px] bottom-[50px]" style={{ width: '380px' }}>
            <OperationalCostsNote />
          </div>

          {/* X1 Logo - Bottom right corner */}
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
