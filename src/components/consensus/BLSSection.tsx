
import React, { useState, useEffect } from 'react';
import { motion } from "framer-motion";
import { Card } from "@/components/ui/card";
import { useIsMobile } from '@/hooks/use-mobile';
import { BLSStageOne } from '@/components/consensus/bls/stages/BLSStageOne';
import { BLSStageTwo } from '@/components/consensus/bls/stages/BLSStageTwo';
import { BLSStageThree } from '@/components/consensus/bls/stages/BLSStageThree';
import { ExpandableItem } from '@/components/consensus/ExpandableItem';

interface BLSSectionProps {
  activeSection: number | null;
  isVoteReductionOpen: boolean;
  setIsVoteReductionOpen: (isOpen: boolean) => void;
}

export const BLSSection: React.FC<BLSSectionProps> = ({
  activeSection,
  isVoteReductionOpen,
  setIsVoteReductionOpen
}) => {
  const [activeFormula, setActiveFormula] = useState(0);
  const [animationKey, setAnimationKey] = useState(0); // For resetting animations
  const isMobile = useIsMobile();

  useEffect(() => {
    // Reset to initial state when section becomes active
    if (activeSection === 1 || isMobile) {
      setActiveFormula(0);
      setAnimationKey(prev => prev + 1); // Force re-render of visualization
    }
    
    // Auto-rotation is now only active when the section is active
    if (activeSection === 1 && !isMobile) {
      const formulaInterval = setInterval(() => {
        setActiveFormula(prev => (prev + 1) % 3);
      }, 5000);
      
      return () => clearInterval(formulaInterval);
    }
  }, [activeSection, isMobile]);
  
  // Listen for the verification completion event to restart animation
  useEffect(() => {
    const handleVerificationComplete = () => {
      // Reset to Stage 1
      setActiveFormula(0);
      // Force re-render of the visualization by updating the key
      setAnimationKey(prevKey => prevKey + 1);
    };
    
    document.addEventListener('bls-verification-complete', handleVerificationComplete);
    
    return () => {
      document.removeEventListener('bls-verification-complete', handleVerificationComplete);
    };
  }, []);

  // Listen for stage two completion
  useEffect(() => {
    const handleStageTwoComplete = () => {
      // Move to Stage 3
      setActiveFormula(2);
    };
    
    document.addEventListener('bls-stage-two-complete', handleStageTwoComplete);
    
    return () => {
      document.removeEventListener('bls-stage-two-complete', handleStageTwoComplete);
    };
  }, []);

  const isActive = activeSection === 1 || isMobile;

  return (
    <motion.div
      animate={{
        scale: isActive ? 1 : 0.95,
        opacity: isActive ? 1 : 0.5
      }}
      transition={{ duration: 0.5 }}
    >
      <Card className="p-6 bg-slate-800/50 backdrop-blur border-slate-700 overflow-hidden relative hover:border-violet-500/50 transition-colors">
        <div className="absolute inset-0 bg-gradient-to-br from-violet-900/10 to-indigo-900/10" />
        
        <h2 className="text-2xl font-semibold mb-4 text-violet-400 relative z-10">
          BLS Signature Aggregation
        </h2>
        
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 relative z-10">
          <div className="bg-slate-900/50 p-4 rounded-lg text-white">
            <h3 className="text-lg font-medium mb-2">BLS Process</h3>
            <p className="text-sm text-slate-300">
              BLS signatures use bilinear pairings on elliptic curves for efficient verification.
            </p>
            
            <div className="mt-6 space-y-2">
              <ExpandableItem
                name="Individual Signatures"
                color="purple-400"
                description="Each validator signs independently"
                expandable={false}
                index={0}
              />
              
              <ExpandableItem
                name="Aggregated Signatures"
                color="purple-400"
                description="Signatures combined into single proof"
                expandable={false}
                index={1}
              />
              
              <ExpandableItem
                name="Verification of Aggregated Signatures"
                color="purple-400"
                description="Single verification for all signatures"
                expandable={false}
                index={2}
              />
            </div>
          </div>
          <div className="flex flex-col">
            <div className="bg-slate-900/50 p-4 rounded-lg h-full flex items-center justify-center relative overflow-hidden">
              {activeFormula === 0 && (
                <BLSStageOne 
                  key={`stage-one-${animationKey}`}
                  activeSection={isActive ? 1 : 0}
                  activeFormula={activeFormula}
                  showX1Label={false} 
                />
              )}
              
              {activeFormula === 1 && (
                <BLSStageTwo
                  key={`stage-two-${animationKey}`}
                  activeSection={isActive ? 1 : 0}
                  activeFormula={activeFormula}
                />
              )}
              
              {activeFormula === 2 && (
                <BLSStageThree
                  key={`stage-three-${animationKey}`}
                  activeSection={isActive ? 1 : 0}
                  activeFormula={activeFormula}
                />
              )}
            </div>
            <div className="flex justify-center mt-2 gap-2">
              {[0, 1, 2].map(idx => (
                <button
                  key={idx}
                  className={`w-2 h-2 rounded-full ${
                    activeFormula === idx ? 'bg-violet-500' : 'bg-slate-600'
                  }`}
                  onClick={() => setActiveFormula(idx)}
                ></button>
              ))}
            </div>
          </div>
        </div>
      </Card>
    </motion.div>
  );
};
