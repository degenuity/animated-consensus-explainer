
import React from 'react';
import { motion } from "framer-motion";
import { useIsMobile } from '@/hooks/use-mobile';
import { viewBoxWidth, viewBoxHeight, blockchains, gridLines } from './data';
import ChartTitle from './ChartTitle';
import GridLayer from './layers/GridLayer';
import BlockchainLayer from './layers/BlockchainLayer';
import AxisLabels from './AxisLabels';

const BlockchainComparisonChart: React.FC = () => {
  const isMobile = useIsMobile();
  
  return (
    <motion.div 
      className="w-full relative overflow-visible bg-[#0d111c] rounded-xl flex flex-col items-center justify-start"
      style={{
        height: isMobile ? '500px' : '650px',
      }}
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ duration: 1 }}
    >
      <div className="max-w-7xl mx-auto w-full py-1 sm:py-2 md:py-3 relative flex flex-col items-center overflow-visible h-full">
        <ChartTitle />
        
        {/* Chart container with 10% margin on each side */}
        <div className="relative w-[80%] overflow-visible flex items-center justify-center flex-1 mx-auto">
          <div className="w-full h-full relative">
            {/* Gradient background */}
            <svg
              width="100%"
              height="100%"
              viewBox={`0 0 ${viewBoxWidth} ${viewBoxHeight}`}
              preserveAspectRatio="xMidYMid meet"
              className="absolute top-0 left-0"
            >
              <defs>
                <linearGradient id="bg-gradient" x1="0%" y1="0%" x2="100%" y2="100%">
                  <stop offset="0%" stopColor="#0c1d32" />
                  <stop offset="40%" stopColor="#13294b" />
                  <stop offset="100%" stopColor="#1e3c6b" />
                </linearGradient>
                <radialGradient id="accent-glow" cx="30%" cy="20%" r="70%" fx="30%" fy="20%">
                  <stop offset="0%" stopColor="#3B82F6" stopOpacity="0.2" />
                  <stop offset="100%" stopColor="#3B82F6" stopOpacity="0" />
                </radialGradient>
                <radialGradient id="accent-glow-2" cx="70%" cy="70%" r="50%" fx="70%" fy="70%">
                  <stop offset="0%" stopColor="#8B5CF6" stopOpacity="0.15" />
                  <stop offset="100%" stopColor="#8B5CF6" stopOpacity="0" />
                </radialGradient>
              </defs>
              
              {/* Background rectangle with gradient */}
              <rect x="0" y="0" width={viewBoxWidth} height={viewBoxHeight} fill="url(#bg-gradient)" />
              
              {/* Accent glows */}
              <rect x="0" y="0" width={viewBoxWidth} height={viewBoxHeight} fill="url(#accent-glow)" />
              <rect x="0" y="0" width={viewBoxWidth} height={viewBoxHeight} fill="url(#accent-glow-2)" />
              
              {/* Subtle grid pattern */}
              <pattern id="smallGrid" width="40" height="40" patternUnits="userSpaceOnUse">
                <path d="M 40 0 L 0 0 0 40" fill="none" stroke="rgba(255,255,255,0.03)" strokeWidth="0.5" />
              </pattern>
              <rect x="0" y="0" width={viewBoxWidth} height={viewBoxHeight} fill="url(#smallGrid)" />
            </svg>
            
            {/* Main SVG with viewBox */}
            <svg
              width="100%"
              height="100%"
              viewBox={`0 0 ${viewBoxWidth} ${viewBoxHeight}`}
              preserveAspectRatio="xMidYMid meet"
              className="absolute top-0 left-0"
            >
              {/* 1. Grid lines layer */}
              <GridLayer gridLines={gridLines} />
              
              {/* 2. Blockchain logos layer */}
              <BlockchainLayer blockchains={blockchains} />
              
              {/* 3. Axis labels */}
              <AxisLabels />
            </svg>
          </div>
        </div>
      </div>
    </motion.div>
  );
};

export default BlockchainComparisonChart;
