
import React from 'react';
import { Link } from "react-router-dom";
import { Button } from "@/components/ui/button";
import { ArrowRight, FileText } from "lucide-react";

const Home = () => {
  return (
    <div className="min-h-screen bg-slate-900 text-white">
      {/* Header with X1 Logo */}
      <header className="container mx-auto px-4 py-6">
        <div className="flex items-center justify-between mb-8">
          <Link to="/" className="flex items-center">
            <img 
              src="/lovable-uploads/68ffce32-b088-4588-b3b8-c9bd0ce9ec73.png" 
              alt="X1 Logo" 
              className="h-7 w-auto" 
            />
          </Link>
        </div>
      </header>
      
      <main className="container mx-auto px-4 py-8">
        <div className="max-w-3xl mx-auto text-center">
          <h1 className="text-4xl md:text-6xl font-bold mb-4 text-blue-400">
            X1 Research
          </h1>
          
          <p className="text-lg mb-16 text-gray-300">
            Learn how X1 Blockchain's consensus mechanisms improve scalability and efficiency
          </p>
          
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link to="/consensus-explainer">
              <Button 
                variant="default" 
                className="bg-blue-600 hover:bg-blue-700 text-white w-full sm:w-auto"
              >
                <span>Explore Consensus</span>
                <ArrowRight size={16} />
              </Button>
            </Link>
            
            <Link to="/whitepaper">
              <Button 
                variant="default" 
                className="bg-purple-600 hover:bg-purple-700 text-white w-full sm:w-auto"
              >
                <span>X1 Whitepaper</span>
                <FileText size={16} />
              </Button>
            </Link>
          </div>
        </div>
      </main>
    </div>
  );
};

export default Home;
