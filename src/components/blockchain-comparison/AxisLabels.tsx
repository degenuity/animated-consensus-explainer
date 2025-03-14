
import React from 'react';
import { motion } from "framer-motion";
import { viewBoxWidth, CHART_LEFT, CHART_RIGHT, CHART_BOTTOM } from './data';

const AxisLabels: React.FC = () => {
  return (
    <>
      {/* Y-Axis Labels (Left Side) - Positioning fixed to be more visible */}
      <motion.g
        initial={{ opacity: 0, x: -10 }}
        animate={{ opacity: 1, x: 0 }}
        transition={{ duration: 0.5, delay: 0.3 }}
      >
        {/* Top section label */}
        <text x="75" y="140" fill="#FFFFFF" textAnchor="middle" className="text-sm font-semibold">
          Parallelism +
        </text>
        <text x="75" y="160" fill="#FFFFFF" textAnchor="middle" className="text-sm font-semibold">
          Smart Contracts
        </text>
        
        {/* Middle section label */}
        <text x="75" y="380" fill="#FFFFFF" textAnchor="middle" className="text-sm font-semibold">
          Sequential +
        </text>
        <text x="75" y="400" fill="#FFFFFF" textAnchor="middle" className="text-sm font-semibold">
          Smart Contracts
        </text>
        
        {/* Bottom section label */}
        <text x="75" y="560" fill="#FFFFFF" textAnchor="middle" className="text-sm font-semibold">
          No Smart
        </text>
        <text x="75" y="580" fill="#FFFFFF" textAnchor="middle" className="text-sm font-semibold">
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
        <text x={viewBoxWidth / 2} y={CHART_BOTTOM + 70} fill="#FFFFFF" textAnchor="middle" className="text-lg font-bold">
          Nakamoto Coefficient
        </text>
        <text x={viewBoxWidth / 2} y={CHART_BOTTOM + 95} fill="#F1F1F1" textAnchor="middle" className="text-xs">
          (Censorship Resistance)
        </text>
        
        {/* X-Axis values with correct ordering and spacing */}
        <text x="260" y={CHART_BOTTOM + 15} fill="#F1F1F1" textAnchor="middle" className="text-xs font-medium">1</text>
        <text x="330" y={CHART_BOTTOM + 15} fill="#F1F1F1" textAnchor="middle" className="text-xs font-medium">2</text>
        <text x="280" y={CHART_BOTTOM + 15} fill="#F1F1F1" textAnchor="middle" className="text-xs font-medium">3</text>
        <text x="350" y={CHART_BOTTOM + 15} fill="#F1F1F1" textAnchor="middle" className="text-xs font-medium">4</text>
        <text x="450" y={CHART_BOTTOM + 15} fill="#F1F1F1" textAnchor="middle" className="text-xs font-medium">17</text>
        <text x="550" y={CHART_BOTTOM + 15} fill="#F1F1F1" textAnchor="middle" className="text-xs font-medium">19</text>
        <text x="650" y={CHART_BOTTOM + 15} fill="#F1F1F1" textAnchor="middle" className="text-xs font-medium">27</text>
        <text x="900" y={CHART_BOTTOM + 15} fill="#F1F1F1" textAnchor="middle" className="text-xs font-medium">59</text>
        <text x="1150" y={CHART_BOTTOM + 15} fill="#F1F1F1" textAnchor="middle" className="text-xs font-medium">132</text>
        <text x="1300" y={CHART_BOTTOM + 15} fill="#F1F1F1" textAnchor="middle" className="text-xs font-medium">200+</text>
        
        {/* Connection lines from X-axis values to blockchain logos */}
        <g className="connection-lines" stroke="#667085" strokeDasharray="3,3" strokeWidth="1">
          {/* Lines for each blockchain */}
          <line x1="260" y1={CHART_BOTTOM} x2="260" y2="410" />  {/* Tron */}
          <line x1="330" y1={CHART_BOTTOM} x2="330" y2="470" />  {/* Ethereum */}
          <line x1="280" y1={CHART_BOTTOM} x2="280" y2="610" />  {/* Bitcoin */}
          <line x1="350" y1={CHART_BOTTOM} x2="350" y2="530" />  {/* XRP */}
          <line x1="450" y1={CHART_BOTTOM} x2="450" y2="210" />  {/* Sui */}
          <line x1="550" y1={CHART_BOTTOM} x2="550" y2="150" />  {/* Solana */}
          <line x1="650" y1={CHART_BOTTOM} x2="650" y2="330" />  {/* Avalanche */}
          <line x1="900" y1={CHART_BOTTOM} x2="900" y2="330" />  {/* Cardano */}
          <line x1="1150" y1={CHART_BOTTOM} x2="1150" y2="330" /> {/* Polkadot */}
          <line x1="1300" y1={CHART_BOTTOM} x2="1300" y2="150" /> {/* X1 */}
        </g>

        {/* Horizontal X-axis line */}
        <line x1={CHART_LEFT} y1={CHART_BOTTOM} x2={CHART_RIGHT} y2={CHART_BOTTOM} stroke="#667085" strokeWidth="2" />
      </motion.g>
    </>
  );
};

export default AxisLabels;
