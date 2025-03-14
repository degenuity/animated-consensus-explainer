
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
  
  // Constants for chart area (from data.ts)
  const CHART_LEFT = 100;
  const CHART_RIGHT = 1380;
  const CHART_TOP = 80;
  const CHART_BOTTOM = 630;
  
  const chartWidth = CHART_RIGHT - CHART_LEFT;
  const chartHeight = CHART_BOTTOM - CHART_TOP;
  
  return (
    <motion.div 
      className="w-full relative overflow-visible bg-[#0d111c] rounded-xl flex flex-col items-center justify-start"
      style={{
        height: isMobile ? '600px' : '750px', // Increased height for better visibility
      }}
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ duration: 1 }}
    >
      <div className="max-w-7xl mx-auto w-full py-1 sm:py-2 md:py-3 relative flex flex-col items-center overflow-visible h-full">
        <ChartTitle />
        
        {/* Chart container optimized for visibility */}
        <div className="relative w-[96%] md:w-[94%] lg:w-[90%] overflow-visible flex items-center justify-center flex-1 mx-auto">
          <div className="w-full h-full relative">
            {/* Background segments */}
            <svg
              width="100%"
              height="100%"
              viewBox={`0 0 ${viewBoxWidth} ${viewBoxHeight}`}
              preserveAspectRatio="xMidYMid meet"
              className="absolute top-0 left-0"
            >
              {/* Top section - Parallelism + Smart Contracts */}
              <rect 
                x={CHART_LEFT} 
                y={CHART_TOP} 
                width={chartWidth} 
                height="170" 
                fill="#1a3050" 
                opacity="0.85"
              />
              
              {/* Middle section - Sequential + Smart Contracts */}
              <rect 
                x={CHART_LEFT} 
                y={CHART_TOP + 170} 
                width={chartWidth} 
                height="250" 
                fill="#1e4060" 
                opacity="0.85"
              />
              
              {/* Bottom section - No Smart Contracts */}
              <rect 
                x={CHART_LEFT} 
                y={CHART_TOP + 420} 
                width={chartWidth} 
                height={CHART_BOTTOM - (CHART_TOP + 420)} 
                fill="#27548a" 
                opacity="0.85"
              />
              
              {/* Subtle grid pattern */}
              <pattern id="smallGrid" width="40" height="40" patternUnits="userSpaceOnUse">
                <path d="M 40 0 L 0 0 0 40" fill="none" stroke="rgba(255,255,255,0.03)" strokeWidth="0.5" />
              </pattern>
              <rect x={CHART_LEFT} y={CHART_TOP} width={chartWidth} height={chartHeight} fill="url(#smallGrid)" />
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
