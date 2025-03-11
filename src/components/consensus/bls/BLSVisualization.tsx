
import React, { useState, useEffect } from 'react';
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

export const BLSVisualization: React.FC<BLSVisualizationProps> = ({ 
  activeSection, 
  activeFormula,
  setActiveFormula
}) => {
  // Listen for verification complete events
  useEffect(() => {
    const handleVerificationComplete = () => {
      // Ensure we transition to stage 1 (formula 0)
      setActiveFormula(0);
    };
    
    document.addEventListener('bls-verification-complete', handleVerificationComplete);
    
    return () => {
      document.removeEventListener('bls-verification-complete', handleVerificationComplete);
    };
  }, [setActiveFormula]);

  const handlePrevStage = () => {
    const newFormula = (activeFormula - 1 + 3) % 3;
    setActiveFormula(newFormula);
  };
  
  const handleNextStage = () => {
    const newFormula = (activeFormula + 1) % 3;
    setActiveFormula(newFormula);
  };
  
  const handleSelectStage = (stage: number) => {
    setActiveFormula(stage);
  };

  return (
    <div className="relative h-80 sm:h-96 flex items-center justify-center">
      <BLSStageOne 
        key={`stage-one-${activeFormula === 0 ? 'active' : 'inactive'}`} 
        activeSection={activeSection} 
        activeFormula={activeFormula} 
      />
      <BLSStageTwo activeSection={activeSection} activeFormula={activeFormula} />
      <BLSStageThree activeSection={activeSection} activeFormula={activeFormula} />
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
}
