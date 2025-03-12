import React, { useState, useEffect } from 'react';
import { motion } from "framer-motion";
import { Card } from "@/components/ui/card";
import { useIsMobile } from '@/hooks/use-mobile';
import { BLSStageOne } from '@/components/consensus/bls/stages/BLSStageOne';
import { BLSStageTwo } from '@/components/consensus/bls/stages/BLSStageTwo';
import { BLSStageThree } from '@/components/consensus/bls/stages/BLSStageThree';

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
          <div className="bg-slate-900/50 p-4 rounded-lg text-white formulaDisplay">
            {/* Formula 1 - Individual Signatures */}
            <motion.div 
              className="formula-container mb-6"
              animate={{
                scale: activeFormula === 0 ? [1, 1.03, 1] : 1,
                y: activeFormula === 0 ? [0, -3, 0] : 0
              }}
              transition={{ 
                duration: 1.5, 
                repeat: activeFormula === 0 ? Infinity : 0,
                repeatType: "reverse"
              }}
            >
              <div className="flex items-start mb-3">
                <div className="w-3 h-3 rounded-full bg-purple-500 mt-1.5 mr-3 flex-shrink-0" />
                <div>
                  <p className="text-sm font-medium text-white">Individual signatures (σ<sub>i</sub>)</p>
                  <p className="text-xs text-slate-300 mt-0.5">
                    From each validator where H(M) is the hash of the vote message and
                    sk<sub>i</sub> is the validator's secret key
                  </p>
                  <p className="text-sm text-slate-300 mt-2">
                    Each validator in a subcommittee generates a BLS signature
                    σ<sub>i</sub> on the vote message M:
                  </p>
                </div>
              </div>
              <motion.div 
                className="bg-slate-800 p-3 rounded-md my-2 flex justify-center"
                animate={{
                  boxShadow: activeFormula === 0 ? 
                    "0 0 10px rgba(168, 85, 247, 0.5)" : 
                    "none",
                  borderColor: activeFormula === 0 ? 
                    "rgba(168, 85, 247, 0.8)" : 
                    "transparent"
                }}
                style={{ borderWidth: "1px" }}
              >
                <code className="text-violet-400 font-mono">
                  σ<sub>i</sub>= H(M)<sup>sk<sub>i</sub></sup>
                </code>
              </motion.div>
            </motion.div>
            
            {/* Formula 2 - Aggregated Signatures */}
            <motion.div 
              className="formula-container mb-6"
              animate={{
                scale: activeFormula === 1 ? [1, 1.03, 1] : 1,
                y: activeFormula === 1 ? [0, -3, 0] : 0
              }}
              transition={{ 
                duration: 1.5, 
                repeat: activeFormula === 1 ? Infinity : 0,
                repeatType: "reverse"
              }}
            >
              <div className="flex items-start mb-3">
                <div className="w-3 h-3 rounded-full bg-indigo-500 mt-1.5 mr-3 flex-shrink-0" />
                <div>
                  <p className="text-sm font-medium text-white">Aggregated signature (σ<sub>agg</sub>)</p>
                  <p className="text-xs text-slate-300 mt-0.5">
                    Compressed proof of consensus
                  </p>
                  <p className="text-sm text-slate-300 mt-2">
                    The relay node aggregates all signatures within the 
                    subcommittee which is then submitted to the leader:
                  </p>
                </div>
              </div>
              <motion.div 
                className="bg-slate-800 p-3 rounded-md my-2 flex justify-center"
                animate={{
                  boxShadow: activeFormula === 1 ? 
                    "0 0 10px rgba(99, 102, 241, 0.5)" : 
                    "none",
                  borderColor: activeFormula === 1 ? 
                    "rgba(99, 102, 241, 0.8)" : 
                    "transparent"
                }}
                style={{ borderWidth: "1px" }}
              >
                <code className="text-indigo-500 font-mono">
                  σ<sub>agg</sub>= ∏ σ<sub>i</sub>
                </code>
              </motion.div>
            </motion.div>
            
            {/* Formula 3 - Verification */}
            <motion.div 
              className="formula-container"
              animate={{
                scale: activeFormula === 2 ? [1, 1.03, 1] : 1,
                y: activeFormula === 2 ? [0, -3, 0] : 0
              }}
              transition={{ 
                duration: 1.5, 
                repeat: activeFormula === 2 ? Infinity : 0,
                repeatType: "reverse"
              }}
            >
              <div className="flex items-start mb-3">
                <div className="w-3 h-3 rounded-full bg-red-500 mt-1.5 mr-3 flex-shrink-0" />
                <div>
                  <p className="text-sm font-medium text-white">Verification of aggregated signature</p>
                  <p className="text-xs text-slate-300 mt-0.5">
                    Where pk<sub>i</sub> are the public keys of the participating validators
                  </p>
                  <p className="text-sm text-slate-300 mt-2">
                    The leader verifies the aggregated signature in constant time
                    using:
                  </p>
                </div>
              </div>
              <motion.div 
                className="bg-slate-800 p-3 rounded-md my-2 flex justify-center"
                animate={{
                  boxShadow: activeFormula === 2 ? 
                    "0 0 10px rgba(239, 68, 68, 0.5)" : 
                    "none",
                  borderColor: activeFormula === 2 ? 
                    "rgba(239, 68, 68, 0.8)" : 
                    "transparent"
                }}
                style={{ borderWidth: "1px" }}
              >
                <code className="text-red-500 font-mono">
                  e(σ<sub>agg</sub>,g)=e(H(M),∑pk<sub>i</sub>)
                </code>
              </motion.div>
            </motion.div>
          </div>
          
          <div className="flex flex-col">
            <div className="bg-slate-900/50 p-4 rounded-lg h-full flex items-center justify-center relative overflow-hidden">
              {/* Animation Stage One - Only visible when activeFormula is 0 */}
              {activeFormula === 0 && (
                <BLSStageOne 
                  key={`stage-one-${animationKey}`}
                  activeSection={isActive ? 1 : 0}
                  activeFormula={activeFormula}
                  showX1Label={false} 
                />
              )}
              
              {/* Animation Stage Two - Only visible when activeFormula is 1 */}
              {activeFormula === 1 && (
                <BLSStageTwo
                  key={`stage-two-${animationKey}`}
                  activeSection={isActive ? 1 : 0}
                  activeFormula={activeFormula}
                />
              )}
              
              {/* Animation Stage Three - Only visible when activeFormula is 2 */}
              {activeFormula === 2 && (
                <BLSStageThree
                  key={`stage-three-${animationKey}`}
                  activeSection={isActive ? 1 : 0}
                  activeFormula={activeFormula}
                />
              )}
            </div>
            
            <div className="flex justify-center mt-4 gap-2">
              {/* Dots for stage selection */}
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
                  aria-label={`Stage ${idx + 1}`}
                ></button>
              ))}
            </div>
          </div>
        </div>
      </Card>
    </motion.div>
  );
};
