
import React, { useState, useEffect, useCallback } from 'react';
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

  // Use this to directly trigger leader received state from the animation
  const handleAggregationComplete = useCallback(() => {
    console.log("Aggregation complete callback triggered, setting leaderReceived to true");
    setLeaderReceived(true);
    
    // Add a slight delay before showing success effect
    setTimeout(() => {
      console.log("Setting showSuccessEffect to true");
      setShowSuccessEffect(true);
    }, 200);
  }, []);

  // Reset state when component changes visibility or formula changes
  useEffect(() => {
    console.log("BLSStageTwo effect triggered, activeSection:", activeSection, "activeFormula:", activeFormula);
    
    // Reset states when section or formula changes
    setLeaderReceived(false);
    setShowSuccessEffect(false);
    setAnimationComplete(false);
    
    // Only set additional timeout to complete animation if we're in stage 1 and formula 1
    let completeTimer: NodeJS.Timeout;
    
    if (activeSection === 1 && activeFormula === 1 && leaderReceived) {
      console.log("Setting timer for animation completion");
      completeTimer = setTimeout(() => {
        console.log("Setting animationComplete to true");
        setAnimationComplete(true);
      }, 5000);
    }
    
    return () => {
      console.log("Cleaning up BLSStageTwo timers");
      clearTimeout(completeTimer);
    };
  }, [activeSection, activeFormula, leaderReceived]);

  // If we're not in the right section or formula, don't render
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
