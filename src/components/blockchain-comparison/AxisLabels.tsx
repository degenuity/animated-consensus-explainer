
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
        <text x="50" y="380" fill="#FFFFFF" textAnchor="middle" className="text-sm font-semibold">
          Sequential +
        </text>
        <text x="50" y="400" fill="#FFFFFF" textAnchor="middle" className="text-sm font-semibold">
          Smart Contracts
        </text>
        
        {/* Bottom section label */}
        <text x="50" y="580" fill="#FFFFFF" textAnchor="middle" className="text-sm font-semibold">
          No Smart
        </text>
        <text x="50" y="600" fill="#FFFFFF" textAnchor="middle" className="text-sm font-semibold">
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
        <text x={viewBoxWidth / 2} y="680" fill="#FFFFFF" textAnchor="middle" className="text-lg font-bold">
          Nakamoto Coefficient
        </text>
        <text x={viewBoxWidth / 2} y="705" fill="#F1F1F1" textAnchor="middle" className="text-xs">
          (Censorship Resistance)
        </text>
        
        {/* Updated X-Axis values to match the correct order */}
        <text x="170" y="650" fill="#F1F1F1" textAnchor="middle" className="text-xs font-medium">1</text>
        <text x="250" y="650" fill="#F1F1F1" textAnchor="middle" className="text-xs font-medium">2</text>
        <text x="250" y="650" fill="#F1F1F1" textAnchor="middle" className="text-xs font-medium">3</text>
        <text x="300" y="650" fill="#F1F1F1" textAnchor="middle" className="text-xs font-medium">4</text>
        <text x="400" y="650" fill="#F1F1F1" textAnchor="middle" className="text-xs font-medium">17</text>
        <text x="500" y="650" fill="#F1F1F1" textAnchor="middle" className="text-xs font-medium">19</text>
        <text x="650" y="650" fill="#F1F1F1" textAnchor="middle" className="text-xs font-medium">27</text>
        <text x="800" y="650" fill="#F1F1F1" textAnchor="middle" className="text-xs font-medium">59</text>
        <text x="1000" y="650" fill="#F1F1F1" textAnchor="middle" className="text-xs font-medium">132</text>
        <text x="1200" y="650" fill="#F1F1F1" textAnchor="middle" className="text-xs font-medium">200+</text>
        
        {/* Connection lines from X-axis values to blockchain logos */}
        <g className="connection-lines">
          {/* Line from 1 to Tron */}
          <line x1="170" y1="640" x2="170" y2="175" stroke="#667085" strokeDasharray="3,3" strokeWidth="1" />
          
          {/* Line from 2 to Ethereum */}
          <line x1="250" y1="640" x2="250" y2="175" stroke="#667085" strokeDasharray="3,3" strokeWidth="1" />
          
          {/* Line from 3 to Bitcoin */}
          <line x1="250" y1="640" x2="250" y2="565" stroke="#667085" strokeDasharray="3,3" strokeWidth="1" />
          
          {/* Line from 4 to XRP */}
          <line x1="300" y1="640" x2="300" y2="565" stroke="#667085" strokeDasharray="3,3" strokeWidth="1" />
          
          {/* Line from 17 to Sui */}
          <line x1="400" y1="640" x2="400" y2="215" stroke="#667085" strokeDasharray="3,3" strokeWidth="1" />
          
          {/* Line from 19 to Solana */}
          <line x1="500" y1="640" x2="500" y2="145" stroke="#667085" strokeDasharray="3,3" strokeWidth="1" />
          
          {/* Line from 27 to Avalanche */}
          <line x1="650" y1="640" x2="650" y2="395" stroke="#667085" strokeDasharray="3,3" strokeWidth="1" />
          
          {/* Line from 59 to Cardano */}
          <line x1="800" y1="640" x2="800" y2="395" stroke="#667085" strokeDasharray="3,3" strokeWidth="1" />
          
          {/* Line from 132 to Polkadot */}
          <line x1="1000" y1="640" x2="1000" y2="395" stroke="#667085" strokeDasharray="3,3" strokeWidth="1" />
          
          {/* Line from 200+ to X1 */}
          <line x1="1200" y1="640" x2="1200" y2="175" stroke="#3B82F6" strokeDasharray="3,3" strokeWidth="1.5" />
        </g>
      </motion.g>
    </>
  );
};

export default AxisLabels;
