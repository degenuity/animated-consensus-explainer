
import React from 'react';
import { motion } from "framer-motion";
import { Link } from "react-router-dom";
import { Button } from "@/components/ui/button";
import { ArrowLeft } from "lucide-react";

const Apples = () => {
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
        className="max-w-4xl mx-auto"
      >
        <div className="flex items-center mb-8">
          <Link to="/">
            <Button variant="ghost" className="text-white hover:text-blue-400 bg-transparent hover:bg-transparent flex items-center gap-2">
              <ArrowLeft size={16} />
              Back to Home
            </Button>
          </Link>
        </div>

        <h1 className="text-4xl font-bold text-center mb-12">
          <span className="bg-clip-text text-transparent bg-gradient-to-r from-blue-400 to-purple-400">Apples</span>
        </h1>

        <div className="bg-slate-800/50 p-8 rounded-lg shadow-lg">
          <p className="text-lg mb-6">
            This is the Apples page. Here you can find information about different types of apples
            and their benefits.
          </p>
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mt-8">
            <div className="bg-slate-700/50 p-6 rounded-lg">
              <h3 className="text-xl font-semibold mb-2 text-red-400">Red Delicious</h3>
              <p>Sweet and crisp with a deep red skin.</p>
            </div>
            
            <div className="bg-slate-700/50 p-6 rounded-lg">
              <h3 className="text-xl font-semibold mb-2 text-green-400">Granny Smith</h3>
              <p>Tart and crisp with a bright green skin.</p>
            </div>
            
            <div className="bg-slate-700/50 p-6 rounded-lg">
              <h3 className="text-xl font-semibold mb-2 text-yellow-400">Golden Delicious</h3>
              <p>Sweet and mellow with a golden yellow skin.</p>
            </div>
          </div>
        </div>
      </motion.div>
    </div>
  );
};

export default Apples;
