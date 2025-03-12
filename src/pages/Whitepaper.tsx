
import React from 'react';
import { motion } from "framer-motion";
import { Link } from "react-router-dom";
import { Button } from "@/components/ui/button";
import { ArrowLeft, ArrowDown } from "lucide-react";
import { Card } from "@/components/ui/card";
import PDFViewer from "@/components/PDFViewer";
import ValidatorFinancials from "@/components/validator-financials";
import ValidatorFinancialsV2 from "@/components/validator-financials-v2";
import { ValidatorFinancialsV3 } from "@/components/validator-financials-v3";

const Whitepaper = () => {
  // Using the GitHub raw content URL for reliability on the live site
  const pdfUrl = "https://raw.githubusercontent.com/degenuity/animated-consensus-explainer/main/X1-WHITEPAPER-02032025.pdf";
  
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
          <span className="bg-clip-text text-transparent bg-gradient-to-r from-blue-400 to-purple-400">X1 Whitepaper</span>
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

        {/* New V3 Simple Animation */}
        <motion.div
          initial={{ opacity: 0, scale: 0.95 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.5 }}
          className="mb-12"
        >
          <Card className="p-6 bg-slate-800/50 backdrop-blur border-slate-700 overflow-hidden relative hover:border-blue-500/50 transition-colors">
            <div className="relative z-10">
              <ValidatorFinancialsV3 />
            </div>
          </Card>
        </motion.div>

        {/* X1 Validator Financials V2 Model */}
        <motion.div
          initial={{ opacity: 0, scale: 0.95 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.5 }}
          className="mb-12"
        >
          <Card className="p-6 bg-slate-800/50 backdrop-blur border-slate-700 overflow-hidden relative hover:border-blue-500/50 transition-colors">
            <div className="relative z-10">
              <ValidatorFinancialsV2 />
            </div>
          </Card>
        </motion.div>

        {/* X1 Validator Financials Model */}
        <motion.div
          initial={{ opacity: 0, scale: 0.95 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.5 }}
          className="mb-12"
        >
          <Card className="p-6 bg-slate-800/50 backdrop-blur border-slate-700 overflow-hidden relative hover:border-blue-500/50 transition-colors">
            <div className="relative z-10">
              <ValidatorFinancials />
            </div>
          </Card>
        </motion.div>

        <motion.div
          id="pdf-section"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.1 }}
          className="max-w-4xl mx-auto"
        >
          <PDFViewer 
            pdfUrl={pdfUrl} 
            title="X1 Blockchain Technical Whitepaper"
          />
        </motion.div>
      </motion.div>
    </div>
  );
};

export default Whitepaper;
