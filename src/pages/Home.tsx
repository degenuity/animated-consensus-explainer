
import React from 'react';
import { Button } from "@/components/ui/button";
import { motion } from "framer-motion";
import { Link } from "react-router-dom";
import { ArrowRight, Github, FileText } from "lucide-react";
import { BLSStageOne } from "@/components/consensus/bls/stages";

const Home = () => {
  return (
    <div className="min-h-screen bg-gradient-to-b from-slate-900 to-slate-800 text-white">
      <div className="container mx-auto px-4 py-16">
        <div className="max-w-3xl mx-auto text-center">
          <motion.h1 
            className="text-4xl md:text-6xl font-bold mb-6 bg-clip-text text-transparent bg-gradient-to-r from-blue-400 to-purple-400"
            initial={{ opacity: 0, scale: 0.9 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ delay: 0.2, duration: 0.5 }}
          >
            X1 Research
          </motion.h1>
          
          <div className="mb-12 relative h-60 flex items-center justify-center overflow-hidden">
            <BLSStageOne activeSection={1} activeFormula={0} showX1Label={true} />
          </div>

          <div className="flex flex-col sm:flex-row gap-4 justify-center">
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
        </div>
      </div>
    </div>
  );
};

export default Home;
