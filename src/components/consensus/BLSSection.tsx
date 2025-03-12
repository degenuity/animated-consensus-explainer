
import React, { useState, useEffect } from 'react';
import { motion } from "framer-motion";
import { Card } from "@/components/ui/card";
import { useIsMobile } from '@/hooks/use-mobile';
import { BLSStageOne } from '@/components/consensus/bls/stages/BLSStageOne';
import { BLSStageTwo } from '@/components/consensus/bls/stages/BLSStageTwo';
import { BLSStageThree } from '@/components/consensus/bls/stages/BLSStageThree';
import { ChevronLeft, ChevronRight } from "lucide-react";

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
  
  const goToPrevFormula = () => {
    setActiveFormula(prev => (prev - 1 + 3) % 3);
  };
  
  const goToNextFormula = () => {
    setActiveFormula(prev => (prev + 1) % 3);
  };

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
            {activeFormula === 0 && (
              <div key="formula-0" className="formula-container">
                <p className="text-sm text-slate-300 mb-4">
                  Each validator in a subcommittee generates a BLS signature
                  σ<sub>i</sub> on the vote message M:
                </p>
                <div className="bg-slate-800 p-3 rounded-md my-3 flex justify-center">
                  <code className="text-violet-400 font-mono">
                    σ<sub>i</sub>= H(M)<sup>sk<sub>i</sub></sup>
                  </code>
                </div>
              </div>
            )}
            
            {activeFormula === 1 && (
              <div key="formula-1" className="formula-container">
                <p className="text-sm text-slate-300 mb-4">
                  The relay node aggregates all signatures within the 
                  subcommittee which is then submitted to the leader:
                </p>
                <div className="bg-slate-800 p-3 rounded-md my-3 flex justify-center">
                  <code className="text-violet-400 font-mono">
                    σ<sub>agg</sub>= ∏ σ<sub>i</sub>
                  </code>
                </div>
              </div>
            )}
            
            {activeFormula === 2 && (
              <div key="formula-2" className="formula-container">
                <p className="text-sm text-slate-300 mb-4">
                  The leader verifies the aggregated signature in constant time
                  using:
                </p>
                <div className="bg-slate-800 p-3 rounded-md my-3 flex justify-center border border-red-500/20">
                  <code className="text-violet-400 font-mono">
                    e(σ<sub>agg</sub>,g)=e(H(M),∑pk<sub>i</sub>)
                  </code>
                </div>
              </div>
            )}
            
            <div className="mt-6 space-y-4">
              <div className="flex items-center">
                <div className={`w-3 h-3 rounded-full ${activeFormula === 0 ? 'bg-purple-500' : 'bg-purple-500/30'} mr-3`} />
                <div>
                  <p className="text-sm font-medium text-white">Individual signatures (σ<sub>i</sub>)</p>
                  <p className="text-xs text-slate-300 mt-0.5">
                    From each validator where H(M) is the hash of the vote message and
                    sk<sub>i</sub> is the validator's secret key
                  </p>
                </div>
              </div>
              
              <div className="flex items-center">
                <div className={`w-3 h-3 rounded-full ${activeFormula === 1 ? 'bg-indigo-500' : 'bg-indigo-500/30'} mr-3`} />
                <div>
                  <p className="text-sm font-medium text-white">Aggregated signature (σ<sub>agg</sub>)</p>
                  <p className="text-xs text-slate-300 mt-0.5">
                    Compressed proof of consensus
                  </p>
                </div>
              </div>
              
              <div className="flex items-center">
                <div className={`w-3 h-3 rounded-full ${activeFormula === 2 ? 'bg-red-500' : 'bg-red-500/30'} mr-3`} />
                <div>
                  <p className="text-sm font-medium text-white">Verification of aggregated signature</p>
                  <p className="text-xs text-slate-300 mt-0.5">
                    Where pk<sub>i</sub> are the public keys of the participating validators
                  </p>
                </div>
              </div>
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
            
            <div className="flex justify-center mt-4 gap-2">
              <button 
                className="text-white/70 hover:text-white bg-slate-800/50 p-1 rounded-full"
                onClick={goToPrevFormula}
                aria-label="Previous formula"
              >
                <ChevronLeft size={20} />
              </button>
              
              {[0, 1, 2].map(idx => (
                <button
                  key={idx}
                  className={`w-3 h-3 rounded-full mx-1 ${
                    activeFormula === idx 
                      ? idx === 0 
                        ? 'bg-purple-500' 
                        : idx === 1 
                          ? 'bg-indigo-500' 
                          : 'bg-red-500'
                      : 'bg-slate-600'
                  }`}
                  onClick={() => setActiveFormula(idx)}
                  aria-label={`Formula ${idx + 1}`}
                ></button>
              ))}
              
              <button 
                className="text-white/70 hover:text-white bg-slate-800/50 p-1 rounded-full"
                onClick={goToNextFormula}
                aria-label="Next formula"
              >
                <ChevronRight size={20} />
              </button>
            </div>
          </div>
        </div>
      </Card>
    </motion.div>
  );
};
