
import React from 'react';
import { Link } from "react-router-dom";

const Home = () => {
  console.log("Home component rendering");
  
  return (
    <div className="min-h-screen bg-slate-900 text-white">
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
            <Link to="/consensus-explainer" className="inline-flex items-center justify-center gap-2 bg-blue-600 hover:bg-blue-700 text-white px-4 py-2 rounded-md w-full sm:w-auto">
              <span>Explore Consensus</span>
              <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M5 12h14"></path><path d="m12 5 7 7-7 7"></path></svg>
            </Link>
            
            <Link to="/whitepaper" className="inline-flex items-center justify-center gap-2 bg-purple-600 hover:bg-purple-700 text-white px-4 py-2 rounded-md w-full sm:w-auto">
              <span>X1 Whitepaper</span>
              <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M14.5 2H6a2 2 0 0 0-2 2v16a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V7.5L14.5 2z"></path><polyline points="14 2 14 8 20 8"></polyline></svg>
            </Link>
          </div>
        </div>
      </main>
    </div>
  );
};

export default Home;
