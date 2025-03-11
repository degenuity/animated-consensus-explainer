import React, { useState, useEffect } from 'react';
import { motion } from "framer-motion";
import { Link } from "react-router-dom";
import { Button } from "@/components/ui/button";
import { ArrowLeft, ArrowDown } from "lucide-react";
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
  
  const pdfUrl = "https://raw.githubusercontent.com/degenuity/animated-consensus-explainer/main/Vote_Optimization_with_BLS_in_large_decentralized_networks_5.pdf";

  useEffect(() => {
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

  const getVRFActiveState = () => isMobile ? true : activeSection === 0;
  const getBLSActiveState = () => isMobile ? true : activeSection === 1;

  const scrollToPDF = () => {
    const pdfSection = document.getElementById('pdf-section');
    if (pdfSection) {
      pdfSection.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <div className="min-h-screen bg-black text-white py-12 px-4 sm:px-6 lg:px-8">
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8 }}
        className="max-w-4xl mx-auto"
      >
        <div className="flex items-center justify-between mb-8 relative">
          <Link to="/" className="absolute left-0 top-0">
            <img 
              src="/lovable-uploads/68ffce32-b088-4588-b3b8-c9bd0ce9ec73.png" 
              alt="X1 Logo" 
              className="h-7 w-auto" 
            />
          </Link>
          
          <div className="flex items-center justify-end w-full">
            <Link to="/">
              <Button variant="ghost" className="text-white hover:text-blue-400 bg-transparent hover:bg-transparent flex items-center gap-2">
                <ArrowLeft size={16} />
                Back to Home
              </Button>
            </Link>
          </div>
        </div>

        <h1 className="text-4xl font-bold text-center mb-4">
          <span className="bg-clip-text text-transparent bg-gradient-to-r from-blue-400 to-purple-400">VRF-Based Subcommittees and BLS Aggregation</span>
        </h1>
        
        <div className="flex justify-center mb-12">
          <Button 
            variant="ghost" 
            className="text-white hover:text-blue-400 bg-transparent hover:bg-transparent flex items-center gap-2"
            onClick={scrollToPDF}
          >
            View Paper
            <ArrowDown size={16} />
          </Button>
        </div>

        <motion.h2
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.2 }}
          className="text-3xl font-bold mb-8 text-center bg-clip-text text-transparent bg-gradient-to-r from-blue-400 to-purple-400"
        >
          Models in this paper
        </motion.h2>

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

        <motion.div
          id="pdf-section"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.1 }}
          className="max-w-4xl mx-auto mb-12"
        >
          <PDFViewer pdfUrl={pdfUrl} title="Vote Optimization with BLS in Large Decentralized Networks" />
        </motion.div>
      </motion.div>
    </div>
  );
};

export default ConsensusExplainer;
