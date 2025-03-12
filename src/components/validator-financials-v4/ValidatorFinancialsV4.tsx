
import React, { useState, useEffect } from 'react';
import { motion } from "framer-motion";
import { FinancialStageOne, FinancialStageTwo, FinancialStageThree } from './stages';

interface ValidatorFinancialsV4Props {
  autoAdvance?: boolean;
}

const ValidatorFinancialsV4: React.FC<ValidatorFinancialsV4Props> = ({
  autoAdvance = true
}) => {
  const [activeStage, setActiveStage] = useState(0);
  const [animationKey, setAnimationKey] = useState(0);
  
  useEffect(() => {
    // Reset animation when component mounts
    setAnimationKey(prev => prev + 1);
    
    if (!autoAdvance) return;
    
    // Auto-advance stages
    const stageInterval = setInterval(() => {
      setActiveStage(prev => (prev + 1) % 3);
    }, 8000); // 8 seconds per stage
    
    return () => clearInterval(stageInterval);
  }, [autoAdvance]);
  
  // Listen for stage completion events
  useEffect(() => {
    const handleStageOneComplete = () => {
      console.log("FinancialV4: Stage one complete");
      setActiveStage(1);
    };
    
    const handleStageTwoComplete = () => {
      console.log("FinancialV4: Stage two complete");
      setActiveStage(2);
    };
    
    const handleStageThreeComplete = () => {
      console.log("FinancialV4: Stage three complete");
      // Reset to stage one
      setActiveStage(0);
      // Force re-render with key change
      setAnimationKey(prev => prev + 1);
    };
    
    document.addEventListener('financial-v4-stage-one-complete', handleStageOneComplete);
    document.addEventListener('financial-v4-stage-two-complete', handleStageTwoComplete);
    document.addEventListener('financial-v4-stage-three-complete', handleStageThreeComplete);
    
    return () => {
      document.removeEventListener('financial-v4-stage-one-complete', handleStageOneComplete);
      document.removeEventListener('financial-v4-stage-two-complete', handleStageTwoComplete);
      document.removeEventListener('financial-v4-stage-three-complete', handleStageThreeComplete);
    };
  }, []);

  return (
    <motion.div 
      className="w-full relative overflow-hidden bg-slate-900/50 rounded-xl min-h-[700px] flex items-center justify-center"
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ duration: 1 }}
    >
      <div className="max-w-7xl mx-auto px-4 py-8 relative w-full">
        <motion.h2
          initial={{ opacity: 0, y: -10 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="text-2xl font-bold mb-6 text-white text-center"
        >
          X1 Validator Economics
        </motion.h2>

        <div className="relative h-[600px] w-full">
          <div className="absolute inset-0 flex items-center justify-center">
            <FinancialStageOne 
              key={`stage-one-${activeStage === 0 ? 'active' : 'inactive'}-${animationKey}`} 
              isActive={activeStage === 0} 
            />
            <FinancialStageTwo 
              key={`stage-two-${activeStage === 1 ? 'active' : 'inactive'}-${animationKey}`}
              isActive={activeStage === 1} 
            />
            <FinancialStageThree 
              key={`stage-three-${activeStage === 2 ? 'active' : 'inactive'}-${animationKey}`}
              isActive={activeStage === 2} 
            />
          </div>
        </div>
        
        {/* Stage indicators */}
        <div className="absolute bottom-4 left-0 right-0 flex justify-center gap-2">
          {[0, 1, 2].map((stage) => (
            <motion.div
              key={`indicator-${stage}`}
              className="w-2 h-2 rounded-full bg-slate-500 cursor-pointer"
              animate={{
                backgroundColor: activeStage === stage ? "#8B5CF6" : "#64748B",
                scale: activeStage === stage ? 1.2 : 1
              }}
              onClick={() => setActiveStage(stage)}
            />
          ))}
        </div>
      </div>
    </motion.div>
  );
};

export default ValidatorFinancialsV4;
