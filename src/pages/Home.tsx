
import React, { useEffect } from 'react';
import { Link } from 'react-router-dom';
import { motion } from 'framer-motion';

const Home = () => {
  // Debug logging for component lifecycle
  useEffect(() => {
    console.log("Home component mounted");
    document.body.style.backgroundColor = '#000000';
    document.body.style.color = '#ffffff';
    
    // Debug element visibility
    const rootElement = document.getElementById('root');
    console.log("Root element exists:", Boolean(rootElement));
    console.log("Root element children count:", rootElement?.children?.length);
    
    if (rootElement) {
      // Ensure root element is visible
      rootElement.style.display = 'block';
      rootElement.style.visibility = 'visible';
      rootElement.style.backgroundColor = '#000000';
      
      // Create a debug marker
      const marker = document.createElement('div');
      marker.id = 'home-rendered-marker';
      marker.textContent = 'Home component rendered';
      marker.style.display = 'none';
      rootElement.appendChild(marker);
    }

    // Add a static element as a fallback
    const staticElement = document.createElement('div');
    staticElement.innerHTML = `
      <div style="position: fixed; bottom: 10px; right: 10px; padding: 5px; background: blue; color: white; font-size: 10px; z-index: 9999;">
        Home component rendered at ${new Date().toISOString()}
      </div>
    `;
    document.body.appendChild(staticElement);
    
    return () => {
      console.log("Home component unmounting");
      document.body.removeChild(staticElement);
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
