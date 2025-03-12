
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

        <div className="relative mx-auto" style={{ height: '900px' }}>
          {/* Inflation Box (Left Top) */}
          <motion.div 
            className="absolute left-[50px] top-[80px]" 
            style={{ width: '200px' }}
            initial={{ opacity: 0, x: -50 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6, delay: 0.2 }}
          >
            <InflationBoxV2 />
          </motion.div>
          
          {/* Deflation Box (Right Top) */}
          <motion.div 
            className="absolute right-[50px] top-[80px]" 
            style={{ width: '200px' }}
            initial={{ opacity: 0, x: 50 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6, delay: 0.3 }}
          >
            <DeflationBoxV2 />
          </motion.div>
          
          {/* Network Usage Costs (Right Upper Middle) */}
          <motion.div 
            className="absolute right-[300px] top-[80px]" 
            style={{ width: '240px' }}
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.6 }}
          >
            <NetworkUsageCostsBoxV2 />
          </motion.div>
          
          {/* Total Stake (Center Right) */}
          <motion.div 
            className="absolute right-[270px] top-[180px]" 
            style={{ width: '220px' }}
            initial={{ opacity: 0, scale: 0.9 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.6, delay: 0.5 }}
          >
            <TotalStakeBoxV2 />
          </motion.div>
          
          {/* Internal Rewards (Left Middle) */}
          <motion.div 
            className="absolute left-[300px] top-[180px]" 
            style={{ width: '220px' }}
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.4 }}
          >
            <InternalRewardsBoxV2 />
          </motion.div>
          
          {/* Block Production Eligibility (Bottom Left) */}
          <motion.div 
            className="absolute left-[280px] top-[600px]" 
            style={{ width: '430px' }}
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.7 }}
          >
            <BlockProductionEligibilityBoxV2 />
          </motion.div>
          
          {/* Profitability (Bottom Center) */}
          <motion.div 
            className="absolute left-[50%] top-[600px] -translate-x-1/2" 
            style={{ width: '330px' }}
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.8 }}
          >
            <ProfitabilityBoxV2 />
          </motion.div>
          
          {/* Operational Costs Note (Bottom) */}
          <motion.div 
            className="absolute left-[50%] top-[780px] -translate-x-1/2" 
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
            className="absolute bottom-0 right-6 text-6xl font-bold text-gray-500/50"
          >
            X1
          </motion.div>
        </div>
      </div>
    </motion.div>
  );
};

export default ValidatorFinancialsV2;
