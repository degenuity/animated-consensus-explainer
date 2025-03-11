import React, { useState, useEffect } from 'react';
import { motion } from "framer-motion";
import { Link } from "react-router-dom";
import { Button } from "@/components/ui/button";
import { ArrowLeft } from "lucide-react";
import { VRFSection } from '@/components/consensus/VRFSection';
import { BLSSection } from '@/components/consensus/BLSSection';
import { useIsMobile } from '@/hooks/use-mobile';
import PDFViewer from "@/components/PDFViewer";

const ConsensusExplainer = () => {
  const [activeSection, setActiveSection] = useState<number | null>(null);
  const [selectedNodes, setSelectedNodes] = useState<number[]>([]);
  const [isAdjustmentOpen, setIsAdjustmentOpen] = useState(false);
  const [isVoteReductionOpen, setIsVoteReductionOpen] = useState(false);
  const isMobile = useIsMobile();
  
  // Update PDF URL to use the GitHub raw file URL
  const pdfUrl = "https://raw.githubusercontent.com/degenuity/animated-consensus-explainer/main/Vote_Optimization_with_BLS_in_large_decentralized_networks_5.pdf";

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

  // Scroll to models section when the Models button is clicked
  const scrollToModels = () => {
    const modelsSection = document.getElementById('models-section');
    if (modelsSection) {
      modelsSection.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-900 to-slate-800 text-white py-12 px-4 sm:px-6 lg:px-8">
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8 }}
        className="max-w-4xl mx-auto"
      >
        <div className="flex items-center justify-between mb-8 relative">
          {/* X1 Logo in top left */}
          <Link to="/" className="absolute left-0 top-0">
            <img 
              src="/lovable-uploads/68ffce32-b088-4588-b3b8-c9bd0ce9ec73.png" 
              alt="X1 Logo" 
              className="h-7 w-auto" // Changed from h-5 to h-7 (1/3 bigger)
            />
          </Link>
          
          <div className="flex items-center justify-between w-full ml-20">
            <Link to="/">
              <Button variant="ghost" className="text-white hover:bg-slate-700 flex items-center gap-2">
                <ArrowLeft size={16} />
                Back to Home
              </Button>
            </Link>
            
            <Button 
              className="bg-purple-500 hover:bg-purple-600 text-white"
              onClick={scrollToModels}
            >
              Models
            </Button>
          </div>
        </div>

        <h1 className="text-4xl font-bold text-center mb-12">
          <span className="text-white">X1 Research</span>
        </h1>

        {/* PDF Section - Title removed */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.1 }}
          className="max-w-4xl mx-auto mb-12"
        >
          <PDFViewer pdfUrl={pdfUrl} title="Vote Optimization with BLS in Large Decentralized Networks" />
        </motion.div>

        {/* Models Title with ID for scroll target */}
        <motion.h2
          id="models-section"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.2 }}
          className="text-3xl font-bold mb-8 text-center text-purple-400"
        >
          Models
        </motion.h2>

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

export default ConsensusExplainer;
