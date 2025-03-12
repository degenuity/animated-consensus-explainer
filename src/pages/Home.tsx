
import React from 'react';
import { Link } from "react-router-dom";

const Home = () => {
  console.log("Home component rendering - minimal version");
  
  return (
    <div className="min-h-screen bg-slate-900 text-white p-8">
      <div className="max-w-md mx-auto text-center space-y-6">
        <div>
          <img 
            src="/lovable-uploads/68ffce32-b088-4588-b3b8-c9bd0ce9ec73.png" 
            alt="X1 Logo" 
            className="h-7 mx-auto mb-4" 
          />
        </div>
        
        <h1 className="text-2xl font-bold text-blue-400">X1 Research</h1>
        
        <div className="flex flex-col gap-4">
          <Link 
            to="/consensus-explainer"
            className="bg-blue-600 text-white py-2 px-4 rounded hover:bg-blue-700"
          >
            Explore Consensus
          </Link>
          
          <Link 
            to="/whitepaper"
            className="bg-purple-600 text-white py-2 px-4 rounded hover:bg-purple-700"
          >
            X1 Whitepaper
          </Link>
        </div>
      </div>
    </div>
  );
};

export default Home;
