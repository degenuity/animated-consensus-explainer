
import React from 'react';
import { motion } from "framer-motion";
import TitleV2 from './TitleV2';
import InflationBoxV2 from './InflationBoxV2';
import DeflationBoxV2 from './DeflationBoxV2';
import TotalStakeBoxV2 from './TotalStakeBoxV2';
import InternalRewardsBoxV2 from './InternalRewardsBoxV2';
import NetworkUsageCostsBoxV2 from './NetworkUsageCostsBoxV2';
import BlockProductionEligibilityBoxV2 from './BlockProductionEligibilityBoxV2';
import ProfitabilityBoxV2 from './ProfitabilityBoxV2';
import ConnectingLinesV2 from './ConnectingLinesV2';
import OperationalCostsNoteV2 from './OperationalCostsNoteV2';

const ValidatorFinancialsV2 = () => {
  return (
    <motion.div 
      className="w-full relative overflow-hidden bg-[#0f1218] min-h-[1200px] py-16"
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ duration: 1 }}
    >
      <div className="max-w-7xl mx-auto relative">
        <TitleV2 />

        <div className="relative mx-auto" style={{ height: '1000px' }}>
          {/* Inflation Box (Left Top) */}
          <motion.div 
            className="absolute left-[40px] top-[80px]" 
            style={{ width: '220px' }}
            initial={{ opacity: 0, x: -50 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6, delay: 0.2 }}
          >
            <InflationBoxV2 />
          </motion.div>
          
          {/* Deflation Box (Right Top) */}
          <motion.div 
            className="absolute right-[40px] top-[80px]" 
            style={{ width: '220px' }}
            initial={{ opacity: 0, x: 50 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6, delay: 0.3 }}
          >
            <DeflationBoxV2 />
          </motion.div>
          
          {/* Network Usage Costs (Center Top) */}
          <motion.div 
            className="absolute left-[50%] top-[80px] -translate-x-1/2" 
            style={{ width: '260px' }}
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.6 }}
          >
            <NetworkUsageCostsBoxV2 />
          </motion.div>
          
          {/* Total Stake (Right Middle) */}
          <motion.div 
            className="absolute right-[90px] top-[310px]" 
            style={{ width: '220px' }}
            initial={{ opacity: 0, scale: 0.9 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.6, delay: 0.5 }}
          >
            <TotalStakeBoxV2 />
          </motion.div>
          
          {/* Internal Rewards (Left Middle) */}
          <motion.div 
            className="absolute left-[120px] top-[220px]" 
            style={{ width: '260px' }}
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.4 }}
          >
            <InternalRewardsBoxV2 />
          </motion.div>
          
          {/* Bottom Combined Box for Block Production Eligibility and Profitability */}
          <motion.div 
            className="absolute left-[50%] top-[600px] -translate-x-1/2" 
            style={{ width: '750px' }}
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.7 }}
          >
            <div className="flex justify-between items-start gap-8">
              <div style={{ width: '350px' }}>
                <BlockProductionEligibilityBoxV2 />
              </div>
              <div style={{ width: '350px' }}>
                <ProfitabilityBoxV2 />
              </div>
            </div>
          </motion.div>
          
          {/* Operational Costs Note (Bottom) */}
          <motion.div 
            className="absolute right-[40px] top-[820px]" 
            style={{ width: '540px' }}
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 1.2 }}
          >
            <OperationalCostsNoteV2 />
          </motion.div>

          {/* Connecting Lines with animations */}
          <ConnectingLinesV2 />

          {/* X1 Logo */}
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.7, delay: 1.4 }}
            className="absolute bottom-8 right-16 text-8xl font-bold text-gray-500/30"
          >
            X1
          </motion.div>
        </div>
      </div>
    </motion.div>
  );
};

export default ValidatorFinancialsV2;
