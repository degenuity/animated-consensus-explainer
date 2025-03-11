
import React, { useState } from 'react';
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
}

export const BLSVisualization: React.FC<BLSVisualizationProps> = ({ 
  activeSection, 
  activeFormula: externalActiveFormula 
}) => {
  // When component is active (hovered), use local state for the formula/stage
  const [localActiveFormula, setLocalActiveFormula] = useState(0);
  
  // Use external formula state when not active, use local state when active
  const activeFormula = activeSection === 1 ? localActiveFormula : externalActiveFormula;
  
  const handlePrevStage = () => {
    setLocalActiveFormula(prev => (prev - 1 + 3) % 3);  // Ensure we wrap around from 0 to 2
  };
  
  const handleNextStage = () => {
    setLocalActiveFormula(prev => (prev + 1) % 3);
  };
  
  const handleSelectStage = (stage: number) => {
    setLocalActiveFormula(stage);
  };
  
  // Force update local formula when external one changes
  React.useEffect(() => {
    if (activeSection === 1) {
      setLocalActiveFormula(externalActiveFormula);
    }
  }, [externalActiveFormula, activeSection]);

  return (
    <div className="relative h-80 sm:h-96 flex items-center justify-center">
      <BLSStageOne activeSection={activeSection} activeFormula={activeFormula} />
      <BLSStageTwo activeSection={activeSection} activeFormula={activeFormula} />
      <BLSStageThree activeSection={activeSection} activeFormula={activeFormula} />
      <BLSIdleAnimation activeSection={activeSection} />
      
      {activeSection === 1 && (
        <div className="absolute bottom-0 left-0 right-0 flex justify-center items-center gap-2 mb-1">
          <Button 
            variant="ghost" 
            size="sm" 
            className="text-indigo-400 hover:text-indigo-300 bg-slate-800/80 border border-indigo-500/20"
            onClick={handlePrevStage}
          >
            <ChevronLeft size={16} />
          </Button>
          
          <div className="flex gap-2">
            {[0, 1, 2].map(stageIndex => (
              <Button
                key={stageIndex}
                variant="ghost"
                size="sm"
                className={`w-8 h-8 p-0 rounded-full ${
                  activeFormula === stageIndex 
                    ? 'bg-indigo-500 text-white' 
                    : 'bg-slate-800/80 text-indigo-400 hover:text-indigo-300 border border-indigo-500/20'
                }`}
                onClick={() => handleSelectStage(stageIndex)}
              >
                <Circle size={activeFormula === stageIndex ? 10 : 8} fill={activeFormula === stageIndex ? "white" : "none"} />
              </Button>
            ))}
          </div>
          
          <Button 
            variant="ghost" 
            size="sm" 
            className="text-indigo-400 hover:text-indigo-300 bg-slate-800/80 border border-indigo-500/20"
            onClick={handleNextStage}
          >
            <ChevronRight size={16} />
          </Button>
        </div>
      )}
    </div>
  );
};
