import React, { useState, useEffect, useCallback, useRef } from 'react';
import { motion } from "framer-motion";
import { Validators } from './components/Validators';
import { RelayNode } from './components/RelayNode';
import { LeaderBox } from './components/LeaderBox';
import { AggregationAnimation } from './components/AggregationAnimation';
import { StatusMessage } from './components/StatusMessage';
import { useToast } from '@/hooks/use-toast';

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
  const toast = useToast();

  useEffect(() => {
    console.log("BLSStageTwo stage/formula changed - resetting states");
    
    if (activeSection !== 1 || activeFormula !== 1) {
      setLeaderReceived(false);
      setShowSuccessEffect(false);
      setAnimationComplete(false);
      setStageComplete(false);
      
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
    
    mounted.current = true;
    
    setLeaderReceived(false);
    setShowSuccessEffect(false);
    setAnimationComplete(false);
    setStageComplete(false);
    
    return () => {
      mounted.current = false;
      
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

  const handleAggregationComplete = useCallback(() => {
    console.log("Aggregation complete callback triggered");
    
    if (!mounted.current) return;
    
    setAnimationComplete(true);
    setLeaderReceived(true);
    
    successTimeoutRef.current = setTimeout(() => {
      if (!mounted.current) return;
      setShowSuccessEffect(true);
      
      transitionTimeoutRef.current = setTimeout(() => {
        if (!mounted.current) return;
        setStageComplete(true);
        
        const event = new CustomEvent('bls-stage-two-complete');
        document.dispatchEvent(event);
      }, 4000);
    }, 100);
  }, []);

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
      <StatusMessage leaderReceived={leaderReceived} showSuccessEffect={showSuccessEffect}>
        Relay node sends aggregated "Agg" signature to leader
      </StatusMessage>
    </motion.div>
  );
};
