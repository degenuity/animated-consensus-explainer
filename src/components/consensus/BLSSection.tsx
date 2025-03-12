
import React, { useState, useEffect } from 'react';
import { motion } from "framer-motion";
import { Card } from "@/components/ui/card";
import { useIsMobile } from '@/hooks/use-mobile';
import { FormulaDisplay } from '@/components/consensus/bls/FormulaDisplay';
import { VisualizationDisplay } from '@/components/consensus/bls/VisualizationDisplay';

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
  const [animationKey, setAnimationKey] = useState(0);
  const isMobile = useIsMobile();

  useEffect(() => {
    if (activeSection === 1 || isMobile) {
      setActiveFormula(0);
      setAnimationKey(prev => prev + 1);
    }
    
    if (activeSection === 1 && !isMobile) {
      const formulaInterval = setInterval(() => {
        setActiveFormula(prev => (prev + 1) % 3);
      }, 5000);
      
      return () => clearInterval(formulaInterval);
    }
  }, [activeSection, isMobile]);
  
  useEffect(() => {
    const handleVerificationComplete = () => {
      setActiveFormula(0);
      setAnimationKey(prevKey => prevKey + 1);
    };
    
    document.addEventListener('bls-verification-complete', handleVerificationComplete);
    
    return () => {
      document.removeEventListener('bls-verification-complete', handleVerificationComplete);
    };
  }, []);

  useEffect(() => {
    const handleStageTwoComplete = () => {
      setActiveFormula(2);
    };
    
    document.addEventListener('bls-stage-two-complete', handleStageTwoComplete);
    
    return () => {
      document.removeEventListener('bls-stage-two-complete', handleStageTwoComplete);
    };
  }, []);

  const isActive = activeSection === 1 || isMobile;

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
          <FormulaDisplay activeFormula={activeFormula} />
          <VisualizationDisplay 
            activeSection={activeSection || 0} 
            activeFormula={activeFormula} 
            animationKey={animationKey}
            onFormulaSelect={setActiveFormula}
          />
        </div>
      </Card>
    </motion.div>
  );
};
