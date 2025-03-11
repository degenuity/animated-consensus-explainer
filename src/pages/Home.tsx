
import React from 'react';
import { motion } from "framer-motion";
import { Link } from "react-router-dom";
import { Button } from "@/components/ui/button";

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
          <span className="bg-clip-text text-transparent bg-gradient-to-r from-blue-400 to-purple-400">X1 Research</span>
        </h1>
        
        <p className="text-xl mb-10 text-slate-300">
          Learn how X1 Blockchain's consensus mechanisms improve scalability and efficiency
        </p>
        
        <div className="flex flex-col sm:flex-row justify-center gap-4">
          <Link to="/whitepaper">
            <Button className="bg-blue-400 hover:bg-blue-500 text-black font-medium rounded-full px-8 py-6 text-lg">
              X1 Whitepaper
            </Button>
          </Link>
          
          <Link to="/consensus">
            <Button className="bg-blue-400 hover:bg-blue-500 text-black font-medium rounded-full px-8 py-6 text-lg">
              VRF-based Subcommitees and BLS Aggregation
            </Button>
          </Link>
        </div>
      </motion.div>
    </div>
  );
};

export default Home;
