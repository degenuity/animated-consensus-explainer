
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

  // Reset state when component changes visibility
  useEffect(() => {
    console.log("BLSStageTwo effect triggered, activeSection:", activeSection, "activeFormula:", activeFormula);
    
    // Reset everything when section or formula changes
    setLeaderReceived(false);
    setShowSuccessEffect(false);
    setAnimationComplete(false);
    
    // Start a timer to set leaderReceived to true after a specific delay
    // This simulates the "touching" effect but uses time instead
    let leaderTimer: NodeJS.Timeout;
    let successTimer: NodeJS.Timeout;
    let completeTimer: NodeJS.Timeout;
    
    if (activeSection === 1 && activeFormula === 1) {
      console.log("Setting up timers for stage 1");
      
      // Set the leader to receive after 6.5 seconds (5s animation + 1.5s delay)
      leaderTimer = setTimeout(() => {
        console.log("Setting leaderReceived to true");
        setLeaderReceived(true);
        
        // Success effect shortly after
        successTimer = setTimeout(() => {
          console.log("Setting showSuccessEffect to true");
          setShowSuccessEffect(true);
          
          // Don't set animationComplete immediately
          completeTimer = setTimeout(() => {
            console.log("Setting animationComplete to true");
            setAnimationComplete(true);
          }, 5000);
        }, 200);
      }, 6500);
    }
    
    const cleanup = () => {
      console.log("Cleaning up BLSStageTwo timers");
      clearTimeout(leaderTimer);
      clearTimeout(successTimer);
      clearTimeout(completeTimer);
      setLeaderReceived(false);
      setShowSuccessEffect(false);
      setAnimationComplete(false);
    };
    
    return cleanup;
  }, [activeSection, activeFormula]);

  // This function is now just for completeness but won't actually control the state changes
  const handleAggregationComplete = useCallback(() => {
    console.log("Aggregation complete triggered");
    // We're not setting leaderReceived here anymore since we're using the timer approach
  }, []);

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
