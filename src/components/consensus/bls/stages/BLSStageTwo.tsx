
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
  const [animationComplete, setAnimationComplete] = useState(false);

  useEffect(() => {
    setLeaderReceived(false);
    setShowSuccessEffect(false);
    setAnimationComplete(false);
    
    if (activeSection === 1 && activeFormula === 1) {
      // Animation is triggered by the component lifecycle
    }
  }, [activeSection, activeFormula]);

  const handleAggregationComplete = () => {
    setAnimationComplete(true);
    setLeaderReceived(true);
    
    // Trigger leader box verification animation immediately after Agg box arrives
    const successTimer = setTimeout(() => {
      setShowSuccessEffect(true);
      
      // Reset after 2 seconds to restart the animation
      const resetTimer = setTimeout(() => {
        if (activeSection === 1 && activeFormula === 1) {
          setLeaderReceived(false);
          setShowSuccessEffect(false);
          setAnimationComplete(false);
        }
      }, 2000);
      
      return () => clearTimeout(resetTimer);
    }, 300); // Reduced delay to make verification happen quicker
    
    return () => clearTimeout(successTimer);
  };

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
      {!animationComplete && (
        <AggregationAnimation onComplete={handleAggregationComplete} />
      )}
      <StatusMessage leaderReceived={leaderReceived} showSuccessEffect={showSuccessEffect} />
    </motion.div>
  );
};
