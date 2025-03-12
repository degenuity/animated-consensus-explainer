
import React from 'react';
import { Link } from 'react-router-dom';

const Home = () => {
  return (
    <div className="min-h-screen bg-[#1a3a5f] text-white flex justify-center items-center flex-col">
      <h1 className="text-4xl font-bold mb-8">X1 Research</h1>
      <div className="flex gap-6">
        <Link 
          to="/whitepaper" 
          className="px-6 py-2 bg-blue-600 hover:bg-blue-700 rounded-md transition-colors"
        >
          Whitepaper
        </Link>
        <Link 
          to="/consensus" 
          className="px-6 py-2 bg-blue-600 hover:bg-blue-700 rounded-md transition-colors"
        >
          Consensus
        </Link>
      </div>
    </div>
  );
};

export default Home;
