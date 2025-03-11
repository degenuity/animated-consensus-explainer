
import React, { useState, useEffect } from 'react';
import { motion } from "framer-motion";
import { Validators } from './components/Validators';
import { RelayNode } from './components/RelayNode';
import { LeaderBox } from './components/LeaderBox';
import { AggregationAnimation } from './components/AggregationAnimation';
import { StatusMessage } from './components/StatusMessage';

interface BLSStageTwoProps {
  activeSection: number;
  activeFormula: number;
}

export const BLSStageTwo: React.FC<BLSStageTwoProps> = ({ activeSection, activeFormula }) => {
  const [leaderReceived, setLeaderReceived] = useState(false);
  const [showSuccessEffect, setShowSuccessEffect] = useState(false);

  useEffect(() => {
    setLeaderReceived(false);
    setShowSuccessEffect(false);
    
    if (activeSection === 1 && activeFormula === 1) {
      const receiveTimer = setTimeout(() => {
        setLeaderReceived(true);
        
        const successTimer = setTimeout(() => {
          setShowSuccessEffect(true);
        }, 800);
        
        return () => clearTimeout(successTimer);
      }, 2000);
      
      return () => clearTimeout(receiveTimer);
    }
  }, [activeSection, activeFormula]);

  if (activeSection !== 1 || activeFormula !== 1) return null;
  
  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      className="absolute inset-0"
    >
      <Validators count={10} />
      <RelayNode showSuccessEffect={showSuccessEffect} />
      <LeaderBox leaderReceived={leaderReceived} showSuccessEffect={showSuccessEffect} />
      <AggregationAnimation />
      <StatusMessage leaderReceived={leaderReceived} showSuccessEffect={showSuccessEffect} />
    </motion.div>
  );
};
