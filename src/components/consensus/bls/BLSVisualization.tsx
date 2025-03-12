
import React, { useState, useEffect, useCallback, memo } from 'react';
import { 
  BLSStageOne, 
  BLSStageTwo, 
  BLSStageThree, 
  BLSIdleAnimation 
} from './stages';
import { Button } from '@/components/ui/button';
import { ChevronLeft, ChevronRight, Circle } from 'lucide-react';

interface BLSVisualizationProps {
  activeSection: number | null;
  activeFormula: number;
  setActiveFormula: (formula: number) => void;
}

// Memoize the component to prevent unnecessary re-renders
export const BLSVisualization = memo(({ 
  activeSection, 
  activeFormula,
  setActiveFormula
}: BLSVisualizationProps) => {
  console.log('BLSVisualization render with activeFormula:', activeFormula);
  
  // Memoize event handlers to prevent unnecessary recreations
  const handleVerificationComplete = useCallback(() => {
    // Ensure we transition to stage 1 (formula 0)
    setActiveFormula(0);
  }, [setActiveFormula]);
  
  const handleStageTwoComplete = useCallback(() => {
    console.log("BLSVisualization: Received stage-two-complete event, moving to stage three");
    // Move to stage three (formula 2)
    setActiveFormula(2);
  }, [setActiveFormula]);
  
  // Listen for verification complete events
  useEffect(() => {
    document.addEventListener('bls-verification-complete', handleVerificationComplete);
    document.addEventListener('bls-stage-two-complete', handleStageTwoComplete);
    
    return () => {
      document.removeEventListener('bls-verification-complete', handleVerificationComplete);
      document.removeEventListener('bls-stage-two-complete', handleStageTwoComplete);
    };
  }, [handleVerificationComplete, handleStageTwoComplete]);

  const handlePrevStage = useCallback(() => {
    const newFormula = (activeFormula - 1 + 3) % 3;
    setActiveFormula(newFormula);
  }, [activeFormula, setActiveFormula]);
  
  const handleNextStage = useCallback(() => {
    const newFormula = (activeFormula + 1) % 3;
    setActiveFormula(newFormula);
  }, [activeFormula, setActiveFormula]);
  
  const handleSelectStage = useCallback((stage: number) => {
    setActiveFormula(stage);
  }, [setActiveFormula]);

  return (
    <div className="relative h-80 sm:h-96 flex items-center justify-center">
      {activeFormula === 0 && (
        <BLSStageOne
          key={`stage-one-${activeFormula === 0 ? 'active' : 'inactive'}`}
          activeSection={activeSection}
          activeFormula={activeFormula}
        />
      )}
      
      {activeFormula === 1 && (
        <BLSStageTwo
          key={`stage-two-${activeFormula === 1 ? 'active' : 'inactive'}`}
          activeSection={activeSection}
          activeFormula={activeFormula}
        />
      )}
      
      {activeFormula === 2 && (
        <BLSStageThree
          key={`stage-three-${activeFormula === 2 ? 'active' : 'inactive'}`}
          activeSection={activeSection}
          activeFormula={activeFormula}
        />
      )}
      
      <BLSIdleAnimation activeSection={activeSection} />
      
      {activeSection === 1 && (
        <div className="absolute bottom-[-20px] left-0 right-0 flex justify-center items-center gap-1 mb-1">
          <Button 
            variant="ghost" 
            size="sm" 
            className="h-4 w-4 p-0 text-indigo-400 hover:text-indigo-300 bg-slate-800/30 border border-indigo-500/10"
            onClick={handlePrevStage}
          >
            <ChevronLeft size={8} />
          </Button>
          
          <div className="flex gap-1">
            {[0, 1, 2].map(stageIndex => (
              <Button
                key={stageIndex}
                variant="ghost"
                size="sm"
                className={`w-3 h-3 p-0 rounded-full ${
                  activeFormula === stageIndex 
                    ? 'bg-indigo-500/70 text-white' 
                    : 'bg-slate-800/30 text-indigo-400 hover:text-indigo-300 border border-indigo-500/10'
                }`}
                onClick={() => handleSelectStage(stageIndex)}
              >
                <Circle size={activeFormula === stageIndex ? 3 : 2} fill={activeFormula === stageIndex ? "white" : "none"} />
              </Button>
            ))}
          </div>
          
          <Button 
            variant="ghost" 
            size="sm" 
            className="h-4 w-4 p-0 text-indigo-400 hover:text-indigo-300 bg-slate-800/30 border border-indigo-500/10"
            onClick={handleNextStage}
          >
            <ChevronRight size={8} />
          </Button>
        </div>
      )}
    </div>
  );
});

BLSVisualization.displayName = 'BLSVisualization';
