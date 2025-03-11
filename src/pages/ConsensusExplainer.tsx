
import React, { useState, useEffect } from 'react';
import { motion } from "framer-motion";
import { VRFSection } from '@/components/consensus/VRFSection';
import { BLSSection } from '@/components/consensus/BLSSection';
import { useIsMobile } from '@/hooks/use-mobile';

const ConsensusExplainer = () => {
  const [activeSection, setActiveSection] = useState<number | null>(null);
  const [selectedNodes, setSelectedNodes] = useState<number[]>([]);
  const [isAdjustmentOpen, setIsAdjustmentOpen] = useState(false);
  const [isVoteReductionOpen, setIsVoteReductionOpen] = useState(false);
  const isMobile = useIsMobile();

  useEffect(() => {
    // Only run node selection logic when VRF section is active or hovered or on mobile
    if (activeSection !== 0 && !isMobile) return;
    
    const selectRandomNodes = () => {
      const allNodes = Array.from({ length: 150 }, (_, i) => i);
      const shuffled = [...allNodes].sort(() => 0.5 - Math.random());
      return shuffled.slice(0, 30);
    };

    setSelectedNodes(selectRandomNodes());
    
    const selectionTimer = setInterval(() => {
      setSelectedNodes(selectRandomNodes());
    }, 4000);
    
    return () => clearInterval(selectionTimer);
  }, [activeSection, isMobile]);

  // On mobile, we'll always display both sections as active
  const getVRFActiveState = () => isMobile ? true : activeSection === 0;
  const getBLSActiveState = () => isMobile ? true : activeSection === 1;

  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-900 to-slate-800 text-white py-12 px-4 sm:px-6 lg:px-8">
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8 }}
        className="max-w-4xl mx-auto"
      >
        <h1 className="text-4xl font-bold text-center mb-12">
          <span className="text-white">Scaling Consensus on </span>
          <span className="text-white">X</span>
          <span className="text-blue-400">1</span>
        </h1>

        {/* First section - VRF-Based Subcommittee Selection */}
        <div 
          className="mb-10"
          onMouseEnter={() => !isMobile && setActiveSection(0)}
          onMouseLeave={() => !isMobile && setActiveSection(null)}
        >
          <VRFSection 
            activeSection={isMobile ? 0 : activeSection} 
            isAdjustmentOpen={isAdjustmentOpen}
            setIsAdjustmentOpen={setIsAdjustmentOpen}
            isVoteReductionOpen={isVoteReductionOpen}
            setIsVoteReductionOpen={setIsVoteReductionOpen}
            selectedNodes={selectedNodes}
          />
        </div>

        {/* Second section - BLS Signature Aggregation */}
        <div
          onMouseEnter={() => !isMobile && setActiveSection(1)}
          onMouseLeave={() => !isMobile && setActiveSection(null)}
        >
          <BLSSection 
            activeSection={isMobile ? 1 : activeSection}
            isVoteReductionOpen={isVoteReductionOpen}
            setIsVoteReductionOpen={setIsVoteReductionOpen}
          />
        </div>
      </motion.div>
    </div>
  );
};

export default ConsensusExplainer;
