
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
  const [stageComplete, setStageComplete] = useState(false);
  const mounted = useRef(true);
  const transitionTimeoutRef = useRef<NodeJS.Timeout | null>(null);
  const successTimeoutRef = useRef<NodeJS.Timeout | null>(null);

  // Reset state when formula changes
  useEffect(() => {
    console.log("BLSStageTwo stage/formula changed - resetting states");
    
    // Reset all states when we're not in the right stage/formula
    if (activeSection !== 1 || activeFormula !== 1) {
      setLeaderReceived(false);
      setShowSuccessEffect(false);
      setAnimationComplete(false);
      setStageComplete(false);
      
      // Clear any pending timeouts
      if (transitionTimeoutRef.current) {
        clearTimeout(transitionTimeoutRef.current);
        transitionTimeoutRef.current = null;
      }
      
      if (successTimeoutRef.current) {
        clearTimeout(successTimeoutRef.current);
        successTimeoutRef.current = null;
      }
      return;
    }
    
    // Keep track of component mount state to prevent updates after unmount
    mounted.current = true;
    
    // Reset animation-related states when we first enter this formula
    setLeaderReceived(false);
    setShowSuccessEffect(false);
    setAnimationComplete(false);
    setStageComplete(false);
    
    return () => {
      mounted.current = false;
      
      // Clean up any timeouts
      if (transitionTimeoutRef.current) {
        clearTimeout(transitionTimeoutRef.current);
        transitionTimeoutRef.current = null;
      }
      
      if (successTimeoutRef.current) {
        clearTimeout(successTimeoutRef.current);
        successTimeoutRef.current = null;
      }
    };
  }, [activeSection, activeFormula]);

  // Use this to directly trigger leader received state from the animation
  const handleAggregationComplete = useCallback(() => {
    console.log("Aggregation complete callback triggered");
    
    if (!mounted.current) return;
    
    // Set animation complete to prevent re-rendering the animation
    setAnimationComplete(true);
    
    // Set leader received immediately after the animation completes
    setLeaderReceived(true);
    
    // Add a slight delay before showing success effect
    successTimeoutRef.current = setTimeout(() => {
      if (!mounted.current) return;
      console.log("Setting showSuccessEffect to true");
      setShowSuccessEffect(true);
      
      // Set a timeout for the stage to complete (4 seconds instead of 2)
      transitionTimeoutRef.current = setTimeout(() => {
        if (!mounted.current) return;
        console.log("Stage Two complete, preparing for transition to Stage Three (after 4 seconds)");
        setStageComplete(true);
        
        // Make sure stage-two-complete event is dispatched even if the component is unmounted
        // This ensures stage three will be shown
        const event = new CustomEvent('bls-stage-two-complete');
        document.dispatchEvent(event);
      }, 4000); // Adding a 4-second wait before transition
    }, 100);
  }, []);

  // If we're not in the right section or formula, don't render
  if (activeSection !== 1 || activeFormula !== 1) return null;
  
  console.log("BLSStageTwo rendering with states:", { leaderReceived, showSuccessEffect, animationComplete, stageComplete });
  
  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      className="absolute inset-0"
    >
      <Validators count={10} />
      <RelayNode showSuccessEffect={showSuccessEffect} />
      <LeaderBox 
        leaderReceived={leaderReceived} 
        showSuccessEffect={showSuccessEffect} 
        verificationComplete={stageComplete} 
      />
      {!animationComplete && (
        <AggregationAnimation onComplete={handleAggregationComplete} />
      )}
      <StatusMessage leaderReceived={leaderReceived} showSuccessEffect={showSuccessEffect} />
    </motion.div>
  );
};
