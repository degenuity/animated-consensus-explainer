
import React from 'react';
import { motion } from "framer-motion";
import {
  LeaderNode,
  VerificationProcess,
  LeaderVerification,
  VerificationTimeInfo,
  AggregatedSignatureFlow,
  StatusIndicator
} from './BLSStageThree/index';

interface BLSStageThreeProps {
  activeSection: number;
  activeFormula: number;
}

export const BLSStageThree: React.FC<BLSStageThreeProps> = ({ activeSection, activeFormula }) => {
  if (activeSection !== 1 || activeFormula !== 2) return null;
  
  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      className="absolute inset-0"
    >
      <LeaderNode />
      <VerificationProcess />
      <AggregatedSignatureFlow />
      <LeaderVerification />
      <VerificationTimeInfo />
      <StatusIndicator />
    </motion.div>
  );
};
