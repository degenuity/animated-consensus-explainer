
import React, { useState, useEffect, useRef } from 'react';
import { motion } from "framer-motion";
import { Check } from "lucide-react";
import { LeaderBox } from './components/LeaderBox';

interface BLSStageThreeProps {
  activeSection: number;
  activeFormula: number;
}

export const BLSStageThree: React.FC<BLSStageThreeProps> = ({ activeSection, activeFormula }) => {
  const [verifiedSignatures, setVerifiedSignatures] = useState<number[]>([]);
  const [completionPause, setCompletionPause] = useState(false);
  const [isAnimationComplete, setIsAnimationComplete] = useState(false);
  const verifyIntervalRef = useRef<NodeJS.Timeout | null>(null);
  const restartTimeoutRef = useRef<NodeJS.Timeout | null>(null);
  const eventDispatchedRef = useRef(false);
  
  // Reset state when component becomes inactive
  useEffect(() => {
    if (activeSection !== 1 || activeFormula !== 2) {
      // Clear state
      setVerifiedSignatures([]);
      setCompletionPause(false);
      setIsAnimationComplete(false);
      eventDispatchedRef.current = false;
      
      // Clear any running timers
      if (verifyIntervalRef.current) {
        clearInterval(verifyIntervalRef.current);
        verifyIntervalRef.current = null;
      }
      
      if (restartTimeoutRef.current) {
        clearTimeout(restartTimeoutRef.current);
        restartTimeoutRef.current = null;
      }
      return;
    }
    
    // Reset the verification state when component becomes active
    if (!isAnimationComplete) {
      setVerifiedSignatures([]);
      setCompletionPause(false);
      eventDispatchedRef.current = false;
      startVerificationProcess();
    }
    
    return () => {
      // Cleanup timers on unmount
      if (verifyIntervalRef.current) {
        clearInterval(verifyIntervalRef.current);
        verifyIntervalRef.current = null;
      }
      
      if (restartTimeoutRef.current) {
        clearTimeout(restartTimeoutRef.current);
        restartTimeoutRef.current = null;
      }
    };
  }, [activeSection, activeFormula, isAnimationComplete]);
  
  // Function to start verification process
  const startVerificationProcess = () => {
    // Clear existing interval if any
    if (verifyIntervalRef.current) {
      clearInterval(verifyIntervalRef.current);
      verifyIntervalRef.current = null;
    }
    
    let count = 0;
    
    // Start new interval for signature verification
    verifyIntervalRef.current = setInterval(() => {
      if (count < 10) {
        count++;
        setVerifiedSignatures(prev => [...prev, prev.length]);
      } else {
        // Stop the interval after all 10 are verified
        if (verifyIntervalRef.current) {
          clearInterval(verifyIntervalRef.current);
          verifyIntervalRef.current = null;
        }
        
        // Set completion state
        setCompletionPause(true);
        setIsAnimationComplete(true);
        
        // Only dispatch event after 5 second pause if we haven't already
        if (!eventDispatchedRef.current) {
          console.log("Stage 3 completed, waiting 5 seconds before resetting to Stage 1");
          
          // Set timeout for the restart - INCREASED FROM 3 to 5 SECONDS
          restartTimeoutRef.current = setTimeout(() => {
            console.log("Dispatching bls-verification-complete event");
            // Dispatch event to parent component to restart animation
            const event = new CustomEvent('bls-verification-complete');
            document.dispatchEvent(event);
            eventDispatchedRef.current = true;
          }, 5000); // Increased from 3000 to 5000 ms
        }
      }
    }, 250);
  };
  
  if (activeSection !== 1 || activeFormula !== 2) return null;
  
  // Determine if verification is complete (all 10 signatures verified)
  const allSignaturesVerified = verifiedSignatures.length === 10;
  
  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      className="absolute inset-0 flex items-center justify-center"
    >
      <div className="relative w-full h-full flex justify-center items-center">
        <div className="flex flex-row items-center justify-center gap-8 max-w-3xl">
          {/* Leader Node - Left Side */}
          <motion.div
            initial={{ scale: 0.9, opacity: 0 }}
            animate={{ scale: 1, opacity: 1 }}
            transition={{ delay: 0.2, type: "spring" }}
          >
            <motion.div 
              className={`w-24 h-24 rounded-lg bg-slate-800 border-2 ${allSignaturesVerified ? 'border-green-500' : 'border-red-500'} flex flex-col items-center justify-center shadow-lg ${allSignaturesVerified ? 'green-glow' : 'red-glow'}`}
              animate={{
                boxShadow: completionPause ? 
                  allSignaturesVerified ? 
                    '0 0 15px rgba(74, 222, 128, 0.3)' : 
                    '0 0 15px rgba(239, 68, 68, 0.3)' : 
                  [
                    '0 0 0px rgba(239, 68, 68, 0)',
                    '0 0 15px rgba(239, 68, 68, 0.3)',
                    '0 0 0px rgba(239, 68, 68, 0)'
                  ]
              }}
              transition={{ 
                duration: 3, 
                repeat: completionPause ? 0 : Infinity 
              }}
            >
              <motion.span
                className={`text-lg font-bold ${allSignaturesVerified ? "text-green-400" : "text-red-400"} mb-1`}
              >
                Leader
              </motion.span>
              <motion.div
                className="text-xs text-slate-300 bg-slate-900/50 px-2 py-1 rounded-full mt-1"
                animate={{ opacity: completionPause ? 1 : [0.7, 1, 0.7] }}
                transition={{ duration: 2, repeat: completionPause ? 0 : Infinity }}
              >
                {completionPause ? "Complete!" : "Verifying..."}
              </motion.div>
            </motion.div>
          </motion.div>
          
          {/* Aggregation Box with Signatures - Right Side */}
          <motion.div 
            className="bg-slate-800/90 backdrop-blur rounded-lg p-3 border border-red-500/50 shadow-lg max-w-[330px] mb-6"
            initial={{ opacity: 0, y: 20 }}
            animate={{ 
              opacity: 1, 
              y: 0,
              borderColor: allSignaturesVerified ? "rgba(74, 222, 128, 0.5)" : "rgba(239, 68, 68, 0.5)"
            }}
            transition={{ 
              delay: 0.4,
              borderColor: { duration: 0.5 }
            }}
          >
            <motion.div className="text-sm font-medium mb-2 flex items-center">
              <motion.div 
                className={`w-6 h-6 rounded-md ${allSignaturesVerified ? 'bg-green-500' : 'bg-red-500'} flex items-center justify-center shadow-md mr-2`}
                animate={{ 
                  backgroundColor: allSignaturesVerified ? "rgb(74, 222, 128)" : "rgb(239, 68, 68)"
                }}
                transition={{ duration: 0.5 }}
              >
                <span className="text-white font-bold text-xs">Agg</span>
              </motion.div>
              <motion.span
                animate={{ 
                  color: allSignaturesVerified ? "rgb(74, 222, 128)" : "rgb(248, 113, 113)"
                }}
                transition={{ duration: 0.5 }}
              >
                Aggregated Signatures
              </motion.span>
            </motion.div>
            <div className="h-[210px] overflow-y-auto pr-2 grid grid-cols-2 gap-2">
              {Array.from({ length: 10 }).map((_, index) => (
                <motion.div
                  key={index}
                  className={`p-2 rounded-md text-xs flex items-center justify-between ${
                    verifiedSignatures.includes(index) 
                      ? allSignaturesVerified && index === verifiedSignatures.length - 1
                        ? 'bg-green-900/30 border border-green-500/50' 
                        : 'bg-green-900/30 border border-green-500/50'
                      : 'bg-slate-700/50 border border-slate-600/50'
                  }`}
                  initial={{ opacity: 0 }}
                  animate={{ 
                    opacity: 1,
                    backgroundColor: verifiedSignatures.includes(index) 
                      ? ["rgba(20, 83, 45, 0.3)", "rgba(20, 83, 45, 0.5)", "rgba(20, 83, 45, 0.3)"]
                      : "rgba(51, 65, 85, 0.5)",
                  }}
                  transition={{ 
                    delay: index * 0.1 + 0.5,
                    backgroundColor: {
                      duration: 2,
                      repeat: verifiedSignatures.includes(index) && !completionPause ? Infinity : 0,
                    }
                  }}
                >
                  <span className={verifiedSignatures.includes(index) ? 'text-green-400' : 'text-white'}>
                    σ<sub>{index + 1}</sub>
                  </span>
                  {verifiedSignatures.includes(index) && (
                    <motion.div
                      initial={{ scale: 0 }}
                      animate={{ scale: 1 }}
                      transition={{ type: "spring" }}
                    >
                      <Check size={16} className="text-green-400" />
                    </motion.div>
                  )}
                </motion.div>
              ))}
            </div>
          </motion.div>
        </div>
        
        {/* Add LeaderBox overlay in the correct position */}
        <LeaderBox 
          leaderReceived={true} 
          showSuccessEffect={completionPause} 
          verificationComplete={allSignaturesVerified}
        />
        
        {/* Status Indicator - Bottom */}
        <div className="absolute bottom-4 left-0 right-0 text-center">
          <motion.div 
            className={`text-xs font-medium bg-slate-800/70 mx-auto rounded-full px-3 py-1 inline-block border ${allSignaturesVerified ? 'border-green-500/30 text-green-300' : 'border-red-500/30 text-red-300'}`}
            initial={{ opacity: 0, y: 10 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.5 }}
          >
            <motion.span 
              className={`inline-block w-2 h-2 rounded-full ${allSignaturesVerified ? "bg-green-400" : "bg-red-400"} mr-1.5 align-middle`}
              animate={{ opacity: completionPause ? 1 : [1, 0.4, 1] }}
              transition={{ duration: 1.5, repeat: completionPause ? 0 : Infinity }}
            />
            <span className="mr-1">Verifying signatures:</span>
            <span className={`${allSignaturesVerified ? "text-green-400" : "text-red-400"} font-bold`}>
              {verifiedSignatures.length}
            </span>
            <span className="text-gray-400">/10</span>
            <span className="ml-1">
              {completionPause ? '(Complete!)' : '(In progress...)'}
            </span>
          </motion.div>
        </div>
      </div>
    </motion.div>
  );
};
