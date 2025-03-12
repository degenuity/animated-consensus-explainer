
import React from 'react';
import { motion } from "framer-motion";
import { Link } from "react-router-dom";
import { Button } from "@/components/ui/button";
import { BLSStageOne } from '@/components/consensus/bls/stages';
import { ArrowRight } from 'lucide-react';

const Home = () => {
  return (
    <div className="min-h-screen bg-black text-white py-12 px-4 sm:px-6 lg:px-8">
      <div className="max-w-4xl mx-auto relative">
        {/* X1 Logo in top left */}
        <Link to="/" className="absolute left-0 top-0">
          <img 
            src="/lovable-uploads/68ffce32-b088-4588-b3b8-c9bd0ce9ec73.png" 
            alt="X1 Logo" 
            className="h-7 w-auto" 
          />
        </Link>
      </div>

      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8 }}
        className="max-w-4xl mx-auto text-center mb-16"
      >
        <h1 className="text-5xl font-bold mb-6">
          <span className="bg-clip-text text-transparent bg-gradient-to-r from-[#00C6FF] to-[#0072FF]">X1 Research</span>
        </h1>
        
        <p className="text-xl mb-10 text-slate-300">
          Learn how X1 Blockchain's consensus mechanisms improve scalability and efficiency
        </p>
        
        <div className="flex flex-col gap-6 max-w-md mx-auto">
          <Link to="/whitepaper" className="w-full">
            <motion.div
              whileHover={{ scale: 1.03 }}
              whileTap={{ scale: 0.98 }}
              transition={{ type: "spring", stiffness: 400, damping: 17 }}
            >
              <Button className="bg-gradient-to-r from-[#4776E6] to-[#8E54E9] hover:from-[#5985F7] hover:to-[#9D63FA] text-white font-medium rounded-full px-8 py-6 text-lg w-full shadow-lg shadow-indigo-900/30 flex items-center justify-center">
                X1 Whitepaper
                <ArrowRight className="ml-2 h-5 w-5" />
              </Button>
            </motion.div>
          </Link>
          
          <Link to="/consensus" className="w-full">
            <motion.div
              whileHover={{ scale: 1.03 }}
              whileTap={{ scale: 0.98 }}
              transition={{ type: "spring", stiffness: 400, damping: 17 }}
            >
              <Button className="bg-gradient-to-r from-[#6E59A5] to-[#9b87f5] hover:from-[#7E69AB] hover:to-[#A996FF] text-white font-medium rounded-full px-8 py-6 text-lg w-full shadow-lg shadow-indigo-900/30 flex items-center justify-center">
                VRF-based Subcommitees and BLS Aggregation
                <ArrowRight className="ml-2 h-5 w-5" />
              </Button>
            </motion.div>
          </Link>
        </div>
      </motion.div>

      {/* BLS Animation Section */}
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8, delay: 0.3 }}
        className="max-w-4xl mx-auto relative h-80 mb-8"
      >
        <div className="relative h-full w-full">
          <BLSStageOne activeSection={1} activeFormula={0} />
        </div>
      </motion.div>
    </div>
  );
};

export default Home;
