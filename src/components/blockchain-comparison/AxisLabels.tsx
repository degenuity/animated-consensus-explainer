
import React from 'react';
import { motion } from "framer-motion";
import { viewBoxWidth } from './data';

const AxisLabels: React.FC = () => {
  return (
    <>
      {/* Y-Axis Labels (Left Side) - Positioning fixed to be more visible */}
      <motion.g
        initial={{ opacity: 0, x: -10 }}
        animate={{ opacity: 1, x: 0 }}
        transition={{ duration: 0.5, delay: 0.3 }}
      >
        {/* Top section label - moved further to the left and increased visibility */}
        <text x="50" y="165" fill="#FFFFFF" textAnchor="middle" className="text-sm font-semibold">
          Parallelism +
        </text>
        <text x="50" y="185" fill="#FFFFFF" textAnchor="middle" className="text-sm font-semibold">
          Smart Contracts
        </text>
        
        {/* Middle section label */}
        <text x="50" y="540" fill="#FFFFFF" textAnchor="middle" className="text-sm font-semibold">
          Sequential +
        </text>
        <text x="50" y="560" fill="#FFFFFF" textAnchor="middle" className="text-sm font-semibold">
          Smart Contracts
        </text>
        
        {/* Bottom section label */}
        <text x="50" y="800" fill="#FFFFFF" textAnchor="middle" className="text-sm font-semibold">
          No Smart
        </text>
        <text x="50" y="820" fill="#FFFFFF" textAnchor="middle" className="text-sm font-semibold">
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
        <text x={viewBoxWidth / 2} y="920" fill="#FFFFFF" textAnchor="middle" className="text-lg font-bold">
          Nakamoto Coefficient
        </text>
        <text x={viewBoxWidth / 2} y="945" fill="#F1F1F1" textAnchor="middle" className="text-xs">
          (Censorship Resistance)
        </text>
        
        {/* X-Axis values with correct ordering and spacing */}
        <text x="360" y="890" fill="#F1F1F1" textAnchor="middle" className="text-xs font-medium">1</text>
        <text x="450" y="890" fill="#F1F1F1" textAnchor="middle" className="text-xs font-medium">2</text>
        <text x="540" y="890" fill="#F1F1F1" textAnchor="middle" className="text-xs font-medium">3</text>
        <text x="630" y="890" fill="#F1F1F1" textAnchor="middle" className="text-xs font-medium">4</text>
        
        {/* Connection lines from X-axis values to blockchain logos */}
        <g className="connection-lines">
          {/* Line from 1 to Tron */}
          <line x1="360" y1="880" x2="360" y2="550" stroke="#667085" strokeDasharray="3,3" strokeWidth="1" />
          
          {/* Line from 2 to Ethereum */}
          <line x1="450" y1="880" x2="450" y2="550" stroke="#667085" strokeDasharray="3,3" strokeWidth="1" />
          
          {/* Line from 3 to Bitcoin */}
          <line x1="540" y1="880" x2="540" y2="860" stroke="#667085" strokeDasharray="3,3" strokeWidth="1" />
          
          {/* Line from 4 to XRP */}
          <line x1="630" y1="880" x2="630" y2="780" stroke="#667085" strokeDasharray="3,3" strokeWidth="1" />
        </g>
      </motion.g>
    </>
  );
};

export default AxisLabels;
