
import React from 'react';
import { motion } from "framer-motion";
import { viewBoxWidth } from './data';

const AxisLabels: React.FC = () => {
  return (
    <>
      {/* Y-Axis Labels (Left Side) - Moved even further left */}
      <motion.g
        initial={{ opacity: 0, x: -10 }}
        animate={{ opacity: 1, x: 0 }}
        transition={{ duration: 0.5, delay: 0.3 }}
      >
        {/* Top section label */}
        <text x="-30" y="130" fill="#F8FAFC" className="text-sm font-semibold">
          Parallelism +
        </text>
        <text x="-35" y="150" fill="#F8FAFC" className="text-sm font-semibold">
          Smart Contracts
        </text>
        
        {/* Middle section label */}
        <text x="-30" y="380" fill="#F8FAFC" className="text-sm font-semibold">
          Sequential +
        </text>
        <text x="-35" y="400" fill="#F8FAFC" className="text-sm font-semibold">
          Smart Contracts
        </text>
        
        {/* Bottom section label */}
        <text x="-20" y="580" fill="#F8FAFC" className="text-sm font-semibold">
          No Smart
        </text>
        <text x="-25" y="600" fill="#F8FAFC" className="text-sm font-semibold">
          Contracts
        </text>
      </motion.g>
      
      {/* X-Axis Labels (Bottom) */}
      <motion.g
        initial={{ opacity: 0, y: 10 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5, delay: 0.3 }}
      >
        {/* Nakamoto Coefficient Label */}
        <text x={viewBoxWidth / 2} y="680" fill="#F8FAFC" textAnchor="middle" className="text-lg font-bold">
          Nakamoto Coefficient
        </text>
        <text x={viewBoxWidth / 2} y="705" fill="#CBD5E1" textAnchor="middle" className="text-xs">
          (Censorship Resistance)
        </text>
        
        {/* X-Axis values */}
        <text x="100" y="650" fill="#CBD5E1" textAnchor="middle" className="text-xs">1-4</text>
        <text x="300" y="650" fill="#CBD5E1" textAnchor="middle" className="text-xs">17</text>
        <text x="400" y="650" fill="#CBD5E1" textAnchor="middle" className="text-xs">19</text>
        <text x="600" y="650" fill="#CBD5E1" textAnchor="middle" className="text-xs">27</text>
        <text x="800" y="650" fill="#CBD5E1" textAnchor="middle" className="text-xs">59</text>
        <text x="1100" y="650" fill="#CBD5E1" textAnchor="middle" className="text-xs">132</text>
        <text x="1350" y="650" fill="#CBD5E1" textAnchor="middle" className="text-xs">200+</text>
      </motion.g>
    </>
  );
};

export default AxisLabels;
