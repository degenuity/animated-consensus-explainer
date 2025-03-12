
import React, { useEffect, useState } from 'react';
import { motion } from "framer-motion";
import { BLSStageOne } from '@/components/consensus/bls/stages/BLSStageOne';
import { BLSStageTwo } from '@/components/consensus/bls/stages/BLSStageTwo';
import { BLSStageThree } from '@/components/consensus/bls/stages/BLSStageThree';

interface VisualizationDisplayProps {
  activeSection: number;
  activeFormula: number;
  animationKey: number;
  onFormulaSelect: (index: number) => void;
}

export const VisualizationDisplay: React.FC<VisualizationDisplayProps> = ({
  activeSection,
  activeFormula,
  animationKey,
  onFormulaSelect
}) => {
  const isActive = activeSection === 1;
  
  return (
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
            onClick={() => onFormulaSelect(idx)}
            aria-label={`Stage ${idx + 1}`}
          />
        ))}
      </div>
    </div>
  );
};
