
import React from 'react';
import { motion } from "framer-motion";
import { viewBoxWidth, CHART_LEFT, CHART_RIGHT, CHART_BOTTOM } from './data';
import { blockchains } from './data/blockchains';

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
        
        {/* Connection lines from X-axis values to blockchain logos with enhanced animation */}
        <g className="connection-lines">
          {blockchains.map((blockchain, index) => (
            <React.Fragment key={`line-container-${blockchain.id}`}>
              {/* Pulsating effect for the line */}
              <motion.line
                key={`line-bg-${blockchain.id}`}
                x1={blockchain.x}
                y1={CHART_BOTTOM}
                x2={blockchain.x}
                y2={CHART_BOTTOM}
                stroke={blockchain.id === "x1" ? "#3B82F6" : "#667085"}
                strokeWidth={blockchain.id === "x1" ? "3" : "2"}
                strokeDasharray="3,3"
                initial={{ y2: CHART_BOTTOM }}
                animate={{ 
                  y2: blockchain.y + 15, // Stop at the logo (adding 15 to account for logo height)
                  opacity: [0.3, 0.8, 0.3]
                }}
                transition={{ 
                  y2: {
                    duration: 1.2, 
                    delay: 0.3 + (index * 0.1),
                    ease: "easeOut"
                  },
                  opacity: {
                    duration: 2,
                    repeat: Infinity,
                    ease: "easeInOut"
                  }
                }}
              />
              
              {/* Line highlight effect */}
              <motion.line
                key={`line-highlight-${blockchain.id}`}
                x1={blockchain.x}
                y1={CHART_BOTTOM}
                x2={blockchain.x}
                y2={CHART_BOTTOM}
                stroke={blockchain.id === "x1" ? "#60A5FA" : "#94A3B8"}
                strokeWidth={blockchain.id === "x1" ? "1" : "1"}
                initial={{ y2: CHART_BOTTOM }}
                animate={{ 
                  y2: blockchain.y + 15 // Stop at the logo (adding 15 to account for logo height)
                }}
                transition={{ 
                  duration: 1.5, 
                  delay: 0.5 + (index * 0.1),
                  ease: "easeOut"
                }}
              />
            </React.Fragment>
          ))}
        </g>

        {/* Horizontal X-axis line */}
        <line x1={CHART_LEFT} y1={CHART_BOTTOM} x2={CHART_RIGHT} y2={CHART_BOTTOM} stroke="#667085" strokeWidth="2" />
      </motion.g>
    </>
  );
};

export default AxisLabels;
