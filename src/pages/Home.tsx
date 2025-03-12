
import React from 'react';
import { Link } from 'react-router-dom';
import { Button } from '@/components/ui/button';

const Home = () => {
  return (
    <div className="min-h-screen bg-[#1a3a5f] text-white">
      {/* Logo in top left corner */}
      <div className="absolute top-4 left-4 z-10">
        <Link to="/">
          <img 
            src="/lovable-uploads/bb1906db-aeaf-4ee3-9840-6bc142086f04.png" 
            alt="X1 Logo" 
            className="h-10 w-auto"
          />
        </Link>
      </div>
      
      {/* Grid overlay - using a separate div with lower z-index */}
      <div 
        className="absolute inset-0 pointer-events-none"
        style={{
          backgroundImage: `
            linear-gradient(rgba(255, 255, 255, 0.1) 1px, transparent 1px),
            linear-gradient(90deg, rgba(255, 255, 255, 0.1) 1px, transparent 1px),
            linear-gradient(rgba(255, 255, 255, 0.05) 2px, transparent 2px),
            linear-gradient(90deg, rgba(255, 255, 255, 0.05) 2px, transparent 2px)
          `,
          backgroundSize: '20px 20px, 20px 20px, 100px 100px, 100px 100px',
          backgroundPosition: '0 0, 0 0, -1px -1px, -1px -1px',
          zIndex: 0
        }}
      />
      
      {/* Main content */}
      <div className="flex justify-center items-center min-h-screen relative z-10">
        <div className="text-center">
          <h1 className="text-blue-400 text-2xl font-bold mb-5">
            X1 Research
          </h1>
          <p className="mb-8">Welcome to X1 Research</p>
          
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
