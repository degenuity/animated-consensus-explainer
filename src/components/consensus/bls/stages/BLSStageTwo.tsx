import React, { useState, useEffect, useCallback, useRef } from 'react';
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
  const mounted = useRef(true);

  // Reset state when formula changes
  useEffect(() => {
    console.log("BLSStageTwo stage/formula changed - resetting states");
    
    // Reset all states when we're not in the right stage/formula
    if (activeSection !== 1 || activeFormula !== 1) {
      setLeaderReceived(false);
      setShowSuccessEffect(false);
      setAnimationComplete(false);
      return;
    }
    
    // Keep track of component mount state to prevent updates after unmount
    mounted.current = true;
    
    // Reset animation-related states when we first enter this formula
    setLeaderReceived(false);
    setShowSuccessEffect(false);
    setAnimationComplete(false);
    
    return () => {
      mounted.current = false;
    };
  }, [activeSection, activeFormula]);

  // Use this to directly trigger leader received state from the animation
  const handleAggregationComplete = useCallback(() => {
    console.log("Aggregation complete callback triggered");
    
    if (!mounted.current) return;
    
    // Set leader received immediately after the animation completes
    setLeaderReceived(true);
    
    // Add a slight delay before showing success effect
    setTimeout(() => {
      if (!mounted.current) return;
      console.log("Setting showSuccessEffect to true");
      setShowSuccessEffect(true);
    }, 100);
  }, []);

  // If we're not in the right section or formula, don't render
  if (activeSection !== 1 || activeFormula !== 1) return null;
  
  console.log("BLSStageTwo rendering with states:", { leaderReceived, showSuccessEffect, animationComplete });
  
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
