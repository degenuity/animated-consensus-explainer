
import React, { lazy, Suspense, memo, useEffect } from 'react';
import { Button } from "@/components/ui/button";
import { motion } from "framer-motion";
import { Link } from "react-router-dom";
import { ArrowRight, FileText } from "lucide-react";

// Prefetch BLS animation component
const BLSStageOne = lazy(() => 
  import("@/components/consensus/bls/stages").then(module => ({
    default: module.BLSStageOne
  }))
);

// Simple loading spinner for the BLS animation
const BLSFallback = () => (
  <div className="p-4 text-blue-300 flex flex-col items-center">
    <div className="w-8 h-8 border-2 border-blue-300 border-t-transparent rounded-full animate-spin mb-2"></div>
    <div>Loading visualization...</div>
  </div>
);

// Use React.memo to prevent unnecessary re-renders
const Home = memo(() => {
  // Prefetch the BLS module on component mount
  useEffect(() => {
    // Prefetch the BLS module after the page loads
    const prefetchTimeout = setTimeout(() => {
      import("@/components/consensus/bls/stages")
        .then(() => console.log("BLS module prefetched"))
        .catch(err => console.error("Failed to prefetch BLS module:", err));
    }, 500); // Wait for 500ms after mount before prefetching
    
    return () => clearTimeout(prefetchTimeout);
  }, []);

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
            transition={{ delay: 0.2, duration: 0.5 }}
          >
            X1 Research
          </motion.h1>
          
          <motion.p
            className="text-lg mb-8 text-gray-300"
            initial={{ opacity: 0, y: 10 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.3, duration: 0.5 }}
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
          
          <div className="relative h-72 flex items-center justify-center overflow-visible">
            <Suspense fallback={<BLSFallback />}>
              <BLSStageOne activeSection={1} activeFormula={0} showX1Label={true} />
            </Suspense>
          </div>
        </div>
      </div>
    </div>
  );
});

export default Home;
