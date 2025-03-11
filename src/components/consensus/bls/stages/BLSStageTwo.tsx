
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
    // Immediate leader box color change when Agg touches it
    setLeaderReceived(true);
    
    // Trigger success effect shortly after
    const successTimer = setTimeout(() => {
      setShowSuccessEffect(true);
      
      // Don't set animationComplete immediately so the Agg box stays visible
      setTimeout(() => {
        setAnimationComplete(true);
      }, 5000);
      
      // Reset after 12 seconds to restart the animation
      const resetTimer = setTimeout(() => {
        if (activeSection === 1 && activeFormula === 1) {
          setLeaderReceived(false);
          setShowSuccessEffect(false);
          setAnimationComplete(false);
        }
      }, 12000); // Increased to allow for full animation cycle with the slower Agg animation
      
      return () => clearTimeout(resetTimer);
    }, 200); // Short delay to make verification happen quickly
    
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
