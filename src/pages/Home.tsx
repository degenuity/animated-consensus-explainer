
import React from 'react';
import { Link } from 'react-router-dom';
import { Button } from '@/components/ui/button';

const Home = () => {
  return (
    <div className="min-h-screen bg-slate-900 text-white relative blueprint-bg blueprint-grid">
      {/* Logo in top left corner */}
      <div className="absolute top-4 left-4 z-20">
        <Link to="/">
          <img 
            src="/lovable-uploads/bb1906db-aeaf-4ee3-9840-6bc142086f04.png" 
            alt="X1 Logo" 
            className="h-10 w-auto"
          />
        </Link>
      </div>
      
      {/* Main content */}
      <div className="flex justify-center items-center min-h-screen relative z-10">
        <div className="text-center">
          <h1 className="text-blue-400 text-2xl font-bold mb-5">
            X1 Research
          </h1>
          <p className="font-blueprint mb-8">Welcome to X1 Research</p>
          
          {/* Navigation buttons */}
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link to="/whitepaper">
              <Button 
                variant="outline" 
                className="bg-transparent border border-blue-500 text-blue-400 hover:bg-blue-800 hover:text-white hover:border-transparent transition-all"
              >
                X1 Whitepaper
              </Button>
            </Link>
            <Link to="/consensus">
              <Button 
                variant="outline" 
                className="bg-transparent border border-blue-500 text-blue-400 hover:bg-blue-800 hover:text-white hover:border-transparent transition-all"
              >
                Consensus Explainer
              </Button>
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Home;
