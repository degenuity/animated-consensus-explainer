
import React, { memo, useEffect, useState } from 'react';
import { Button } from "@/components/ui/button";
import { motion } from "framer-motion";
import { Link } from "react-router-dom";
import { ArrowRight, FileText } from "lucide-react";
import { BLSStageOne } from "@/components/consensus/bls/stages";
import BLSTest from '@/components/BLSTest';

// Debug helper component with visual feedback
const DebugVisualWrapper = ({ children, label }) => (
  <div className="relative w-full h-full flex items-center justify-center">
    <div className="absolute inset-0 border-2 border-dashed border-purple-500"></div>
    <div className="absolute top-0 left-0 bg-purple-800 text-white text-xs px-2 py-1">{label}</div>
    {children}
  </div>
);

// Enhanced placeholder with debugging information
const SimplePlaceholder = () => (
  <div className="p-4 bg-slate-800/50 rounded-lg text-blue-300 flex flex-col items-center justify-center h-full w-full">
    <div className="w-10 h-10 border-2 border-blue-300 border-t-transparent rounded-full animate-spin mb-4"></div>
    <div>Loading visualization...</div>
  </div>
);

// Main home component - fully debugged
const Home = () => {
  // State to control which visualization to show
  const [showTest, setShowTest] = useState(true);
  
  // Force visualization to be visible immediately for debugging
  const [isVisible, setIsVisible] = useState(true);
  
  useEffect(() => {
    console.log('✅ Home component mounted');
    setIsVisible(true);
    
    // Add event listeners to catch errors from child components
    const handleError = (event) => {
      console.error('🔴 Error caught:', event.error);
    };
    
    window.addEventListener('error', handleError);
    return () => window.removeEventListener('error', handleError);
  }, []);
  
  // Toggle between test component and original implementation
  const toggleView = () => setShowTest(prev => !prev);
  
  return (
    <div className="min-h-screen bg-gradient-to-b from-slate-900 to-slate-800 text-white">
      {/* Header with X1 Logo */}
      <header className="container mx-auto px-4 py-6">
        <div className="flex items-center justify-between mb-8">
          <Link to="/" className="flex items-center">
            <img 
              src="/lovable-uploads/68ffce32-b088-4588-b3b8-c9bd0ce9ec73.png" 
              alt="X1 Logo" 
              className="h-7 w-auto" 
              loading="eager" 
              fetchPriority="high"
              decoding="async"
            />
          </Link>
          
          {/* Debug toggle button */}
          <Button 
            onClick={toggleView} 
            variant="outline" 
            size="sm" 
            className="bg-slate-800 border-purple-500 text-purple-300"
          >
            Toggle View
          </Button>
        </div>
      </header>
      
      <div className="container mx-auto px-4 py-8">
        <div className="max-w-3xl mx-auto text-center">
          <motion.h1 
            className="text-4xl md:text-6xl font-bold mb-4 bg-clip-text text-transparent bg-gradient-to-r from-[#00C6FF] to-[#0072FF]"
            initial={{ opacity: 0, scale: 0.9 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ delay: 0.1, duration: 0.3 }}
          >
            X1 Research
          </motion.h1>
          
          <motion.p
            className="text-lg mb-8 text-gray-300"
            initial={{ opacity: 0, y: 10 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.2, duration: 0.3 }}
          >
            Learn how X1 Blockchain's consensus mechanisms improve scalability and efficiency
          </motion.p>
          
          <div className="flex flex-col sm:flex-row gap-4 justify-center mb-10">
            <Link to="/consensus-explainer">
              <Button className="bg-blue-600 hover:bg-blue-700 text-white px-6 py-2 rounded-md transition-all duration-200 shadow-md hover:shadow-blue-500/20 flex items-center gap-2 w-full sm:w-auto">
                <span>Explore Consensus</span>
                <ArrowRight size={16} />
              </Button>
            </Link>
            
            <Link to="/whitepaper">
              <Button className="bg-purple-600 hover:bg-purple-700 text-white px-6 py-2 rounded-md transition-all duration-200 shadow-md hover:shadow-purple-500/20 flex items-center gap-2 w-full sm:w-auto">
                <span>X1 Whitepaper</span>
                <FileText size={16} />
              </Button>
            </Link>
          </div>
          
          {/* Visualization container with debug wrapper */}
          <div className="relative h-72 flex items-center justify-center overflow-visible border border-purple-700 rounded-lg bg-slate-900/80">
            {showTest ? (
              <BLSTest />
            ) : (
              <DebugVisualWrapper label="Original Visualization">
                {isVisible ? (
                  <BLSStageOne 
                    activeSection={1} 
                    activeFormula={0} 
                    showX1Label={true} 
                  />
                ) : (
                  <SimplePlaceholder />
                )}
              </DebugVisualWrapper>
            )}
          </div>
        </div>
      </div>
    </div>
  );
};

// Use React.memo to prevent unnecessary re-renders
export default memo(Home);
