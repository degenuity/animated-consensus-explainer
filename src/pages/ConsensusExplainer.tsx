
import React, { useState, useEffect } from 'react';
import { motion } from "framer-motion";
import { VRFSection } from '@/components/consensus/VRFSection';
import { BLSSection } from '@/components/consensus/BLSSection';

const ConsensusExplainer = () => {
  const [activeSection, setActiveSection] = useState(0);
  const [selectedNodes, setSelectedNodes] = useState<number[]>([]);
  const [isAdjustmentOpen, setIsAdjustmentOpen] = useState(false);
  const [isVoteReductionOpen, setIsVoteReductionOpen] = useState(false);

  useEffect(() => {
    const timer = setInterval(() => {
      setActiveSection((prev) => (prev + 1) % 2);
    }, 8000);
    return () => clearInterval(timer);
  }, []);

  useEffect(() => {
    if (activeSection !== 0) return;
    
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
  }, [activeSection]);

  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-900 to-slate-800 text-white py-12 px-4 sm:px-6 lg:px-8">
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8 }}
        className="max-w-4xl mx-auto"
      >
        <h1 className="text-4xl font-bold text-center mb-12 bg-clip-text text-transparent bg-gradient-to-r from-blue-400 to-violet-400">
          Scaling Consensus on X1
        </h1>

        {/* First section - VRF-Based Subcommittee Selection */}
        <VRFSection 
          activeSection={activeSection} 
          isAdjustmentOpen={isAdjustmentOpen}
          setIsAdjustmentOpen={setIsAdjustmentOpen}
          isVoteReductionOpen={isVoteReductionOpen}
          setIsVoteReductionOpen={setIsVoteReductionOpen}
          selectedNodes={selectedNodes}
        />

        {/* Second section - BLS Signature Aggregation */}
        <BLSSection 
          activeSection={activeSection}
          isVoteReductionOpen={isVoteReductionOpen}
          setIsVoteReductionOpen={setIsVoteReductionOpen}
        />
      </motion.div>
    </div>
  );
};

export default ConsensusExplainer;
