
import React from 'react';
import { motion } from "framer-motion";

interface FormulaCardProps {
  title: string;
  description: string;
  explanation: string;
  formula: string;
  isActive: boolean;
  color: 'purple' | 'indigo' | 'red';
  index: number;
  activeFormula: number;
}

export const FormulaCard: React.FC<FormulaCardProps> = ({
  title,
  description,
  explanation,
  formula,
  isActive,
  color,
  index,
  activeFormula,
}) => {
  const getColorClasses = () => {
    switch (color) {
      case 'purple':
        return {
          dot: 'bg-purple-500',
          text: 'text-purple-400',
          code: 'text-violet-400',
          shadow: 'rgba(168, 85, 247, 0.5)',
          border: 'rgba(168, 85, 247, 0.8)',
        };
      case 'indigo':
        return {
          dot: 'bg-indigo-500',
          text: 'text-indigo-500',
          code: 'text-indigo-500',
          shadow: 'rgba(99, 102, 241, 0.5)',
          border: 'rgba(99, 102, 241, 0.8)',
        };
      case 'red':
        return {
          dot: 'bg-red-500',
          text: 'text-red-500', 
          code: 'text-red-500',
          shadow: 'rgba(239, 68, 68, 0.5)',
          border: 'rgba(239, 68, 68, 0.8)',
        };
      default:
        return {
          dot: 'bg-purple-500',
          text: 'text-purple-400',
          code: 'text-violet-400',
          shadow: 'rgba(168, 85, 247, 0.5)',
          border: 'rgba(168, 85, 247, 0.8)',
        };
    }
  };
  
  const colors = getColorClasses();

  return (
    <motion.div 
      className="formula-container mb-6"
      animate={{
        scale: activeFormula === index ? [1, 1.03, 1] : 1,
        y: activeFormula === index ? [0, -3, 0] : 0
      }}
      transition={{ 
        duration: 1.5, 
        repeat: activeFormula === index ? Infinity : 0,
        repeatType: "reverse"
      }}
    >
      <div className="flex items-start mb-3">
        <div className={`w-3 h-3 rounded-full ${colors.dot} mt-1.5 mr-3 flex-shrink-0`} />
        <div className="text-left">
          <p className="text-sm font-medium text-white" dangerouslySetInnerHTML={{ __html: title }} />
          <p className="text-xs text-slate-400 mt-0.5" dangerouslySetInnerHTML={{ __html: description }} />
          <p className="text-xs text-slate-300 mt-2" dangerouslySetInnerHTML={{ __html: explanation }} />
        </div>
      </div>
      <motion.div 
        className="bg-slate-800 p-3 rounded-md my-2 flex justify-center"
        animate={{
          boxShadow: activeFormula === index ? 
            `0 0 10px ${colors.shadow}` : 
            "none",
          borderColor: activeFormula === index ? 
            colors.border : 
            "transparent"
        }}
        style={{ borderWidth: "1px" }}
      >
        <code className={colors.code + " font-mono"} dangerouslySetInnerHTML={{ __html: formula }} />
      </motion.div>
    </motion.div>
  );
};
