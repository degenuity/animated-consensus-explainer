
import React, { useState, useEffect } from 'react';
import { Link } from "react-router-dom";
import { Button } from "@/components/ui/button";
import { toast } from "@/hooks/use-toast";
import { motion } from "framer-motion";

const Home = () => {
  const [error, setError] = useState<string | null>(null);
  const [imagesLoaded, setImagesLoaded] = useState(false);

  // Add a simple health check to ensure components can render
  useEffect(() => {
    try {
      // Signal that the component mounted successfully
      console.log("Home component mounted successfully");
      setImagesLoaded(true);
    } catch (err) {
      setError(err instanceof Error ? err.message : "Unknown error");
    }
  }, []);

  if (error) {
    return (
      <div className="min-h-screen bg-black text-white flex items-center justify-center p-4">
        <div className="bg-red-900/20 border border-red-500 p-6 rounded-lg max-w-md">
          <h2 className="text-xl font-bold mb-2">Error Loading Content</h2>
          <p className="mb-4">{error}</p>
          <button 
            onClick={() => window.location.reload()} 
            className="bg-red-500 hover:bg-red-600 text-white px-4 py-2 rounded"
          >
            Reload Page
          </button>
        </div>
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-black text-white py-12 px-4 sm:px-6 lg:px-8">
      <motion.div 
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5 }}
        className="max-w-4xl mx-auto"
      >
        <Link to="/" className="block mb-8">
          <img 
            src="/lovable-uploads/68ffce32-b088-4588-b3b8-c9bd0ce9ec73.png" 
            alt="X1 Logo" 
            className="h-7 w-auto" 
            onLoad={() => console.log("Logo loaded successfully")}
            onError={(e) => {
              console.error("Failed to load logo");
              e.currentTarget.style.display = 'none';
            }}
          />
        </Link>
      </motion.div>

      <motion.div 
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5, delay: 0.2 }}
        className="max-w-4xl mx-auto text-center mb-16"
      >
        <h1 className="text-5xl font-bold mb-6">
          <span className="bg-clip-text text-transparent bg-gradient-to-r from-[#00C6FF] to-[#0072FF]">X1 Research</span>
        </h1>
        
        <p className="text-xl mb-10 text-slate-300">
          Learn how X1 Blockchain's consensus mechanisms improve scalability and efficiency
        </p>
        
        <motion.div 
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.4 }}
          className="flex flex-col gap-4 max-w-md mx-auto"
        >
          <Link to="/whitepaper" className="w-full">
            <Button className="bg-blue-400 hover:bg-blue-500 text-black font-medium rounded-full px-8 py-6 text-lg w-full">
              X1 Whitepaper
            </Button>
          </Link>
          
          <Link to="/consensus" className="w-full">
            <Button className="bg-blue-400 hover:bg-blue-500 text-black font-medium rounded-full px-8 py-6 text-lg w-full">
              VRF-based Subcommitees and BLS Aggregation
            </Button>
          </Link>
        </motion.div>
      </motion.div>

      <motion.div 
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5, delay: 0.6 }}
        className="max-w-4xl mx-auto text-center mb-16"
      >
        <img 
          src="https://images.unsplash.com/photo-1635805737707-575885ab0820?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1074&q=80" 
          alt="Superman" 
          className="w-full max-w-2xl mx-auto rounded-lg shadow-lg shadow-blue-500/20 hover:shadow-blue-500/40 transition-shadow"
          onLoad={() => console.log("Superman image loaded successfully")}
          onError={(e) => {
            console.error("Failed to load superman image");
            e.currentTarget.style.display = 'none';
          }}
        />
        <p className="text-blue-400 mt-4 font-medium">X1: The Superman of Blockchains</p>
      </motion.div>
    </div>
  );
};

export default Home;
