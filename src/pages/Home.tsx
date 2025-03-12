
import React, { lazy, Suspense, memo, useEffect, useState } from 'react';
import { Button } from "@/components/ui/button";
import { motion } from "framer-motion";
import { Link } from "react-router-dom";
import { ArrowRight, FileText } from "lucide-react";

// Simplified and improved fallback component for faster initial rendering
const SimpleBLSFallback = () => (
  <div className="p-4 text-blue-300 flex flex-col items-center">
    <div className="animate-pulse flex space-x-4">
      <div className="flex-1 space-y-4 py-1">
        <div className="h-4 bg-blue-400/20 rounded w-3/4 mx-auto"></div>
        <div className="h-4 bg-blue-400/20 rounded w-1/2 mx-auto"></div>
        <div className="h-4 bg-blue-400/20 rounded w-5/6 mx-auto"></div>
      </div>
    </div>
    <div className="mt-2">Preparing visualization...</div>
  </div>
);

// Fixed the type issue by properly handling the lazy loading
const BLSStageOne = lazy(() => {
  console.log('Starting to load BLSStageOne');
  
  return import("@/components/consensus/bls/stages")
    .then(module => {
      console.log('BLSStageOne module loaded successfully');
      return { default: module.BLSStageOne };
    })
    .catch(err => {
      console.error('Failed to load BLSStageOne:', err);
      // Return a fallback component instead of throwing
      return { 
        default: () => <div className="text-red-500 p-4">Failed to load visualization. Please refresh.</div> 
      };
    });
});

// Use React.memo to prevent unnecessary re-renders
const Home = memo(() => {
  const [isAnimationVisible, setIsAnimationVisible] = useState(false);
  
  // Show animation only when in viewport and after initial content is loaded
  useEffect(() => {
    // After initial render, check if page is visible
    if (document.visibilityState === 'visible') {
      console.log('Page is visible, preparing to show animation');
      // Load main content first, then animation later
      const timer = setTimeout(() => {
        setIsAnimationVisible(true);
        console.log('Animation visibility set to true');
      }, 100);
      
      return () => clearTimeout(timer);
    } else {
      // If page is hidden (tab not active), delay animation more
      const visibilityHandler = () => {
        if (document.visibilityState === 'visible' && !isAnimationVisible) {
          setIsAnimationVisible(true);
          console.log('Animation visibility set to true after tab became active');
          document.removeEventListener('visibilitychange', visibilityHandler);
        }
      };
      
      document.addEventListener('visibilitychange', visibilityHandler);
      return () => document.removeEventListener('visibilitychange', visibilityHandler);
    }
  }, [isAnimationVisible]);

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
          
          {/* Only load visualization when ready */}
          <div className="relative h-72 flex items-center justify-center overflow-visible">
            {isAnimationVisible ? (
              <Suspense fallback={<SimpleBLSFallback />}>
                <BLSStageOne activeSection={1} activeFormula={0} showX1Label={true} />
              </Suspense>
            ) : (
              <SimpleBLSFallback />
            )}
          </div>
        </div>
      </div>
    </div>
  );
});

export default Home;
