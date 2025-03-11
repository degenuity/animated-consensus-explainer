
import React from 'react';
import { motion } from "framer-motion";
import { Link } from "react-router-dom";
import { Button } from "@/components/ui/button";
import { ArrowLeft } from "lucide-react";
import PDFViewer from "@/components/PDFViewer";

const Whitepaper = () => {
  // Using the GitHub raw content URL for reliability on the live site
  const pdfUrl = "https://raw.githubusercontent.com/degenuity/animated-consensus-explainer/main/X1-WHITEPAPER-02032025.pdf";
  
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

        <h1 className="text-4xl font-bold text-center mb-12">
          <span className="bg-clip-text text-transparent bg-gradient-to-r from-blue-400 to-purple-400">X1 Whitepaper</span>
        </h1>

        <PDFViewer 
          pdfUrl={pdfUrl} 
          title="X1 Blockchain Technical Whitepaper"
        />
      </motion.div>
    </div>
  );
};

export default Whitepaper;
