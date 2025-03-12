
import React, { useState, useEffect } from 'react';
import { 
  BLSStageOne, 
  BLSStageTwo, 
  BLSStageThree, 
  BLSIdleAnimation 
} from './stages';

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
  useEffect(() => {
    const handleVerificationComplete = () => {
      setActiveFormula(0);
    };
    
    const handleStageTwoComplete = () => {
      console.log("BLSVisualization: Received stage-two-complete event, moving to stage three");
      setActiveFormula(2);
    };
    
    document.addEventListener('bls-verification-complete', handleVerificationComplete);
    document.addEventListener('bls-stage-two-complete', handleStageTwoComplete);
    
    return () => {
      document.removeEventListener('bls-verification-complete', handleVerificationComplete);
      document.removeEventListener('bls-stage-two-complete', handleStageTwoComplete);
    };
  }, [setActiveFormula]);

  return (
    <div className="relative h-[400px] flex items-center justify-center">
      <div className="relative w-full h-full">
        <div className="absolute inset-0 flex items-center justify-center">
          <BLSStageOne 
            key={`stage-one-${activeFormula === 0 ? 'active' : 'inactive'}`} 
            activeSection={activeSection} 
            activeFormula={activeFormula} 
          />
          <BLSStageTwo 
            key={`stage-two-${activeFormula === 1 ? 'active' : 'inactive'}`}
            activeSection={activeSection} 
            activeFormula={activeFormula} 
          />
          <BLSStageThree 
            key={`stage-three-${activeFormula === 2 ? 'active' : 'inactive'}`}
            activeSection={activeSection} 
            activeFormula={activeFormula} 
          />
          <BLSIdleAnimation activeSection={activeSection} />
        </div>
      </div>
    </div>
  );
}
