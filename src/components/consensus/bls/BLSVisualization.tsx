
import React from 'react';
import { 
  BLSStageOne, 
  BLSStageTwo, 
  BLSStageThree, 
  BLSIdleAnimation 
} from './stages';

interface BLSVisualizationProps {
  activeSection: number | null;
  activeFormula: number;
}

export const BLSVisualization: React.FC<BLSVisualizationProps> = ({ 
  activeSection, 
  activeFormula 
}) => {
  return (
    <div className="relative h-80 sm:h-96 flex items-center justify-center">
      <BLSStageOne activeSection={activeSection} activeFormula={activeFormula} />
      <BLSStageTwo activeSection={activeSection} activeFormula={activeFormula} />
      <BLSStageThree activeSection={activeSection} activeFormula={activeFormula} />
      <BLSIdleAnimation activeSection={activeSection} />
    </div>
  );
};
