
import React, { useEffect } from 'react';
import { Link } from 'react-router-dom';
import { motion } from 'framer-motion';

const Home = () => {
  // Debug logging for component lifecycle
  useEffect(() => {
    console.log("Home component mounted");
    
    // Add a static indicator that the component rendered
    const indicator = document.createElement('div');
    indicator.id = 'home-component-rendered';
    indicator.style.display = 'none';
    document.body.appendChild(indicator);
    
    // Force the emergency content to hide if Home component mounts
    const emergencyContent = document.getElementById('emergency-content');
    if (emergencyContent) {
      emergencyContent.style.display = 'none';
    }
    
    return () => {
      console.log("Home component unmounting");
      const indicator = document.getElementById('home-component-rendered');
      if (indicator) {
        document.body.removeChild(indicator);
      }
    };
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
        
        <div className="flex flex-wrap gap-6 justify-center">
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
