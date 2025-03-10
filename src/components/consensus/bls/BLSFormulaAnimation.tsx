
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
  // Determine if this formula is currently active
  const isActive = activeSection === 1 && activeFormula === formulaIndex;
  
  return (
    <motion.div 
      className={`text-sm font-mono bg-slate-800/80 p-3 rounded mb-3 overflow-hidden relative`}
      animate={{ 
        boxShadow: isActive ? 
          ["0 0 0px rgba(139, 92, 246, 0)", `0 0 20px rgba(${shadowColor[0]}, ${shadowColor[1]}, ${shadowColor[2]}, 0.3)`, "0 0 0px rgba(139, 92, 246, 0)"] : 
          "none"
      }}
      transition={{ duration: 2, repeat: isActive ? Infinity : 0 }}
      style={{ 
        borderWidth: "1px",
        borderColor: isActive ? `rgba(${shadowColor[0]}, ${shadowColor[1]}, ${shadowColor[2]}, 0.5)` : "transparent"
      }}
    >
      {/* The sliding background effect - modified to ensure it works in all boxes */}
      <motion.span
        className={`absolute inset-0 bg-${color}/10`}
        initial={{ width: "0%", left: "0%" }}
        animate={{ 
          width: ["0%", "100%", "0%"],
          left: ["0%", "0%", "100%"] 
        }}
        transition={{ 
          duration: 3,
          repeat: Infinity,
          ease: "easeInOut",
          // No pausing condition - always animate regardless of active status
          // but reduce opacity when not active
        }}
        style={{
          opacity: isActive ? 1 : 0.3
        }}
      />
      <span className={`relative z-10 text-${color} font-bold tracking-wide text-lg flex justify-center`}>
        {formula}
      </span>
    </motion.div>
  );
};
