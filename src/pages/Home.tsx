
import React from 'react';
import { Button } from "@/components/ui/button";
import { motion } from "framer-motion";
import { Link } from "react-router-dom";
import { ArrowRight, Github, FileText } from "lucide-react";
import { BLSStageOne } from "@/components/consensus/bls/stages";

const Home = () => {
  return (
    <div className="min-h-screen bg-gradient-to-b from-slate-900 to-slate-800 text-white">
      <div className="container mx-auto px-4 py-16">
        <motion.div 
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          className="max-w-3xl mx-auto text-center"
        >
          <motion.h1 
            className="text-4xl md:text-6xl font-bold mb-6 bg-clip-text text-transparent bg-gradient-to-r from-blue-400 to-purple-400"
            initial={{ opacity: 0, scale: 0.9 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ delay: 0.2, duration: 0.5 }}
          >
            X1 Research
          </motion.h1>
          
          <motion.p 
            className="text-xl text-slate-300 mb-8"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.4, duration: 0.5 }}
          >
            Exploring advanced blockchain consensus mechanisms and distributed systems technology
          </motion.p>

          <motion.div 
            className="mb-12 p-6 bg-slate-800/50 backdrop-blur-sm rounded-xl shadow-lg border border-slate-700"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.6, duration: 0.5 }}
          >
            <h2 className="text-2xl font-semibold mb-4 text-blue-300">Our Mission</h2>
            <p className="text-slate-300">
              We're dedicated to building next-generation consensus protocols that are secure, 
              efficient, and scalable for real-world blockchain applications.
            </p>
          </motion.div>

          <div className="mb-12 relative h-60 flex items-center justify-center overflow-hidden">
            <BLSStageOne activeSection={1} activeFormula={0} showX1Label={true} />
          </div>

          <motion.div 
            className="flex flex-col sm:flex-row gap-4 justify-center"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.8, duration: 0.5 }}
          >
            <Link to="/consensus-explainer">
              <Button className="bg-blue-600 hover:bg-blue-700 text-white px-6 py-2 rounded-md transition-all duration-200 shadow-md hover:shadow-blue-500/20 flex items-center gap-2 w-full sm:w-auto">
                <span>Explore Consensus</span>
                <ArrowRight size={16} />
              </Button>
            </Link>
            
            <Link to="/whitepaper">
              <Button className="bg-purple-600 hover:bg-purple-700 text-white px-6 py-2 rounded-md transition-all duration-200 shadow-md hover:shadow-purple-500/20 flex items-center gap-2 w-full sm:w-auto">
                <span>X1 Whitepaper</span>
                <FileText size={16} />
              </Button>
            </Link>
            
            <a href="https://github.com" target="_blank" rel="noopener noreferrer">
              <Button variant="outline" className="border-slate-600 text-slate-300 hover:text-white hover:border-slate-400 px-6 py-2 rounded-md transition-all duration-200 flex items-center gap-2 w-full sm:w-auto">
                <Github size={16} />
                <span>GitHub</span>
              </Button>
            </a>
          </motion.div>
        </motion.div>

        <motion.div 
          className="mt-16 grid grid-cols-1 md:grid-cols-3 gap-6"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 1, duration: 0.5 }}
        >
          {[
            {
              title: "BLS Signatures",
              description: "Multi-signature aggregation for efficient consensus",
              color: "from-blue-500 to-purple-500"
            },
            {
              title: "Verifiable Random Functions",
              description: "Unpredictable but verifiable leader election",
              color: "from-purple-500 to-pink-500"
            },
            {
              title: "Parallel Execution",
              description: "High-throughput transaction processing",
              color: "from-pink-500 to-red-500"
            }
          ].map((item, index) => (
            <motion.div
              key={index}
              className="bg-slate-800/50 backdrop-blur-sm p-6 rounded-xl shadow-lg border border-slate-700 hover:shadow-xl transition-all duration-300 hover:-translate-y-1"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 1 + (index * 0.2), duration: 0.5 }}
            >
              <div className={`h-2 w-24 rounded-full mb-4 bg-gradient-to-r ${item.color}`}></div>
              <h3 className="text-xl font-semibold mb-2">{item.title}</h3>
              <p className="text-slate-400">{item.description}</p>
            </motion.div>
          ))}
        </motion.div>

        <motion.footer 
          className="mt-20 text-center text-slate-500 text-sm"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 1.8, duration: 0.5 }}
        >
          &copy; {new Date().getFullYear()} X1 Research. All rights reserved.
        </motion.footer>
      </div>
    </div>
  );
};

export default Home;
