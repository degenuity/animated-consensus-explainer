
import React, { useState, useEffect } from 'react';
import { motion } from "framer-motion";
import { Card } from "@/components/ui/card";
import { BLSFormulas } from './bls/BLSFormulas';
import { BLSVisualization } from './bls/BLSVisualization';
import { useIsMobile } from '@/hooks/use-mobile';
import { Button } from "@/components/ui/button";
import { ChevronLeft, ChevronRight, Circle } from 'lucide-react';

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
    if (activeSection !== 1 && !isMobile) {
      setActiveFormula(0);
      return;
    }
    
    // Auto-rotation is now only active when the section is not being interacted with
    if (!isMobile) {
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

  const isActive = activeSection === 1 || isMobile;

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
          <BLSFormulas activeSection={activeSection} activeFormula={activeFormula} />
          <div className="flex flex-col">
            <BLSVisualization 
              key={animationKey} 
              activeSection={isMobile ? 1 : activeSection} 
              activeFormula={activeFormula} 
              setActiveFormula={setActiveFormula}
            />
          </div>
        </div>
        
        {(activeSection === 1 || isMobile) && (
          <div className="flex justify-center items-center gap-1 mt-6 mb-2">
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
      </Card>
    </motion.div>
  );
};
