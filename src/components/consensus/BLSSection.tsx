
import React, { useState, useEffect } from 'react';
import { motion } from "framer-motion";
import { Card } from "@/components/ui/card";
import { BLSFormulas } from './bls/BLSFormulas';
import { BLSVisualization } from './bls/BLSVisualization';

interface BLSSectionProps {
  activeSection: number;
  isVoteReductionOpen: boolean;
  setIsVoteReductionOpen: (isOpen: boolean) => void;
}

export const BLSSection: React.FC<BLSSectionProps> = ({
  activeSection,
  isVoteReductionOpen,
  setIsVoteReductionOpen
}) => {
  const [activeFormula, setActiveFormula] = useState(0);

  useEffect(() => {
    if (activeSection !== 1) {
      setActiveFormula(0);
      return;
    }
    
    const formulaInterval = setInterval(() => {
      setActiveFormula(prev => (prev + 1) % 3);
    }, 5000);
    
    return () => clearInterval(formulaInterval);
  }, [activeSection]);

  return (
    <motion.div
      animate={{
        scale: activeSection === 1 ? 1 : 0.95,
        opacity: activeSection === 1 ? 1 : 0.5
      }}
      transition={{ duration: 0.5 }}
    >
      <Card className="p-6 bg-slate-800/50 backdrop-blur border-slate-700 overflow-hidden relative">
        <div className="absolute inset-0 bg-gradient-to-br from-violet-900/10 to-indigo-900/10" />
        
        <h2 className="text-2xl font-semibold mb-4 text-violet-400 relative z-10">
          BLS Signature Aggregation
        </h2>
        
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 relative z-10">
          <BLSFormulas activeSection={activeSection} activeFormula={activeFormula} />
          <BLSVisualization activeSection={activeSection} activeFormula={activeFormula} />
        </div>
      </Card>
    </motion.div>
  );
};
