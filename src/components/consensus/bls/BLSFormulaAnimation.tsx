
import React from 'react';
import { motion } from "framer-motion";

interface BLSFormulaAnimationProps {
  activeSection: number;
  activeFormula: number;
  formulaIndex: number;
  color: string;
  shadowColor: string[];
  formula: React.ReactNode;
}

export const BLSFormulaAnimation: React.FC<BLSFormulaAnimationProps> = ({
  activeSection,
  activeFormula,
  formulaIndex,
  color,
  shadowColor,
  formula
}) => {
  return (
    <motion.div 
      className={`text-sm font-mono bg-slate-800/80 p-3 rounded mb-3 overflow-hidden relative`}
      animate={{ 
        boxShadow: activeSection === 1 && activeFormula === formulaIndex ? 
          ["0 0 0px rgba(139, 92, 246, 0)", `0 0 20px rgba(${shadowColor[0]}, ${shadowColor[1]}, ${shadowColor[2]}, 0.3)`, "0 0 0px rgba(139, 92, 246, 0)"] : 
          "none"
      }}
      transition={{ duration: 2, repeat: activeFormula === formulaIndex ? Infinity : 0 }}
      style={{ 
        borderWidth: "1px",
        borderColor: activeFormula === formulaIndex ? `rgba(${shadowColor[0]}, ${shadowColor[1]}, ${shadowColor[2]}, 0.5)` : "transparent"
      }}
    >
      {/* The key animation issue is here - we need to make this animation consistent regardless of activeSection */}
      <motion.span
        className={`absolute inset-0 bg-${color}/10`}
        animate={{ 
          width: ["0%", "100%", "0%"],
          left: ["0%", "0%", "100%"] 
        }}
        transition={{ 
          duration: 3,
          repeat: Infinity,
          ease: "easeInOut"
        }}
      />
      <span className={`relative z-10 text-${color} font-bold tracking-wide text-lg flex justify-center`}>
        {formula}
      </span>
    </motion.div>
  );
};
