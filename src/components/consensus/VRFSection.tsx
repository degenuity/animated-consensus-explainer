
import React from 'react';
import { motion } from "framer-motion";
import { Card } from "@/components/ui/card";
import { ParticleBackground } from './vrf/ParticleBackground';
import { FormulaDisplay } from './vrf/FormulaDisplay';
import { NetworkVisualization } from './vrf/NetworkVisualization';
import { ExplanationList } from './vrf/ExplanationList';

interface VRFSectionProps {
  activeSection: number | null;
  isAdjustmentOpen: boolean;
  setIsAdjustmentOpen: (isOpen: boolean) => void;
  isVoteReductionOpen: boolean;
  setIsVoteReductionOpen: (isOpen: boolean) => void;
  selectedNodes: number[];
}

export const VRFSection: React.FC<VRFSectionProps> = ({
  activeSection,
  isAdjustmentOpen,
  setIsAdjustmentOpen,
  isVoteReductionOpen,
  setIsVoteReductionOpen,
  selectedNodes
}) => {
  const isActive = activeSection === 0;

  return (
    <motion.div
      animate={{
        scale: isActive ? 1 : 0.95,
        opacity: isActive ? 1 : 0.5
      }}
      transition={{ duration: 0.5 }}
    >
      <Card className="p-6 bg-slate-800/50 backdrop-blur border-slate-700 overflow-hidden relative hover:border-blue-500/50 transition-colors">
        <ParticleBackground />
        
        <h2 className="text-2xl font-semibold mb-4 text-blue-400 relative z-10">
          VRF-Based Subcommittee Selection
        </h2>
        
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 relative z-10">
          <div className="space-y-4">
            <FormulaDisplay />
            
            <ExplanationList 
              isVoteReductionOpen={isVoteReductionOpen}
              setIsVoteReductionOpen={setIsVoteReductionOpen}
              isAdjustmentOpen={isAdjustmentOpen}
              setIsAdjustmentOpen={setIsAdjustmentOpen}
            />
          </div>
          
          <NetworkVisualization selectedNodes={selectedNodes} />
        </div>
      </Card>
    </motion.div>
  );
};
