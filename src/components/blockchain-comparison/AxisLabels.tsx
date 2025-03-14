
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
        
        {/* Connection lines from X-axis values to blockchain logos with animation */}
        <g className="connection-lines">
          {/* Animated lines for each blockchain */}
          {[
            { x: 260, y: 380, id: "tron" },      // Tron
            { x: 330, y: 440, id: "ethereum" },  // Ethereum
            { x: 280, y: 580, id: "bitcoin" },   // Bitcoin
            { x: 350, y: 500, id: "xrp" },       // XRP
            { x: 450, y: 180, id: "sui" },       // Sui
            { x: 550, y: 120, id: "solana" },    // Solana
            { x: 650, y: 300, id: "avalanche" }, // Avalanche
            { x: 900, y: 300, id: "cardano" },   // Cardano
            { x: 1150, y: 300, id: "polkadot" }, // Polkadot
            { x: 1300, y: 120, id: "x1" }        // X1
          ].map((item, index) => (
            <motion.line
              key={`line-${item.id}`}
              x1={item.x}
              y1={CHART_BOTTOM}
              x2={item.x}
              y2={CHART_BOTTOM}
              stroke={item.id === "x1" ? "#3B82F6" : "#667085"}
              strokeWidth={item.id === "x1" ? "2" : "1"}
              strokeDasharray="3,3"
              initial={{ y2: CHART_BOTTOM }}
              animate={{ y2: item.y }}
              transition={{ 
                duration: 1.2, 
                delay: 0.5 + (index * 0.1),
                ease: "easeOut"
              }}
            />
          ))}
        </g>

        {/* Horizontal X-axis line */}
        <line x1={CHART_LEFT} y1={CHART_BOTTOM} x2={CHART_RIGHT} y2={CHART_BOTTOM} stroke="#667085" strokeWidth="2" />
      </motion.g>
    </>
  );
};

export default AxisLabels;
