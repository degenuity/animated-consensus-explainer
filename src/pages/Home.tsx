
import React, { useEffect } from 'react';
import { Link } from 'react-router-dom';
import { motion } from 'framer-motion';

const Home = () => {
  // Add debug logging
  useEffect(() => {
    console.log("Home component mounted");
    
    // Debug DOM visibility
    const root = document.getElementById('root');
    console.log("Root element:", root);
    console.log("Root children:", root?.children);
    
    // Force visibility
    if (root) {
      root.style.visibility = 'visible';
      root.style.display = 'block';
    }
    
    document.body.style.backgroundColor = '#000000';
    document.body.style.color = '#ffffff';
  }, []);

  return (
    <div className="min-h-screen bg-black text-white flex justify-center items-center flex-col p-4">
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8 }}
        className="text-center"
      >
        <h1 className="text-5xl font-bold mb-8 text-white">
          X1 Research
        </h1>
        
        <div className="flex gap-6 justify-center">
          <Link 
            to="/whitepaper" 
            className="px-8 py-3 bg-blue-600 hover:bg-blue-700 rounded-md transition-colors text-white font-medium"
          >
            Whitepaper
          </Link>
          <Link 
            to="/consensus" 
            className="px-8 py-3 bg-blue-600 hover:bg-blue-700 rounded-md transition-colors text-white font-medium"
          >
            Consensus
          </Link>
        </div>
      </motion.div>
    </div>
  );
};

export default Home;
