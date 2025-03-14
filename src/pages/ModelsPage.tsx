
import React from 'react';
import { motion } from "framer-motion";
import { Link } from "react-router-dom";
import { Button } from "@/components/ui/button";
import { ArrowLeft } from "lucide-react";
import { VRFSection } from '@/components/consensus/VRFSection';
import { BLSSection } from '@/components/consensus/BLSSection';
import { useIsMobile } from '@/hooks/use-mobile';

const ModelsPage = () => {
  const [activeSection, setActiveSection] = React.useState<number | null>(null);
  const [selectedNodes, setSelectedNodes] = React.useState<number[]>([]);
  const [isAdjustmentOpen, setIsAdjustmentOpen] = React.useState(false);
  const [isVoteReductionOpen, setIsVoteReductionOpen] = React.useState(false);
  const isMobile = useIsMobile();
  
  React.useEffect(() => {
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

  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-900 to-slate-800 text-white py-12 px-4 sm:px-6 lg:px-8">
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8 }}
        className="max-w-4xl mx-auto"
      >
        <div className="flex items-center justify-between mb-8">
          <Link to="/">
            <Button variant="ghost" className="text-white hover:bg-slate-700 flex items-center gap-2">
              <ArrowLeft size={16} />
              Back to Home
            </Button>
          </Link>
        </div>

        <h1 className="text-4xl font-bold text-center mb-12">
          <span className="text-purple-400">Consensus Models</span>
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
          className="mb-16"
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

export default ModelsPage;
