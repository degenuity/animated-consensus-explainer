
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
        height: isMobile ? '400px' : '500px',
      }}
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ duration: 1 }}
    >
      <div className="max-w-7xl mx-auto w-full py-1 sm:py-2 md:py-3 relative flex flex-col items-center overflow-visible h-full">
        <ChartTitle />
        
        {/* Chart container */}
        <div className="relative w-full overflow-visible flex items-center justify-center flex-1">
          <div className="w-full h-full relative">
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
