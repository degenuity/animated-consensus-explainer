
import React from 'react';
import { motion } from "framer-motion";
import { Link } from "react-router-dom";
import { Button } from "@/components/ui/button";

const Home = () => {
  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-900 to-slate-800 text-white py-12 px-4 sm:px-6 lg:px-8">
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8 }}
        className="max-w-4xl mx-auto text-center mb-16"
      >
        <h1 className="text-5xl font-bold mb-6">
          <span className="text-white">Scaling Consensus on </span>
          <span className="text-white">X</span>
          <span className="text-blue-400">1</span>
        </h1>
        
        <p className="text-xl mb-10 text-slate-300">
          Learn how modern blockchain consensus mechanisms improve scalability and efficiency
        </p>
        
        <Link to="/consensus">
          <Button className="bg-blue-500 hover:bg-blue-600 text-white text-lg px-8 py-6 rounded-lg font-medium">
            Explore Consensus Mechanisms
          </Button>
        </Link>
      </motion.div>
    </div>
  );
};

export default Home;
