
import React, { useState, useEffect } from 'react';
import { Server, User } from 'lucide-react';
import { motion } from 'framer-motion';

// Simple test component for BLS visualization
const BLSTest = () => {
  const [isReady, setIsReady] = useState(false);
  
  useEffect(() => {
    // Delay rendering the component to ensure the DOM is fully ready
    const timer = setTimeout(() => {
      setIsReady(true);
      console.log('BLSTest component is ready');
    }, 100);
    
    return () => clearTimeout(timer);
  }, []);

  if (!isReady) {
    return (
      <div className="w-full h-full flex items-center justify-center">
        <div className="text-blue-300 animate-pulse">Loading visualization...</div>
      </div>
    );
  }
  
  return (
    <div className="w-full h-full relative flex items-center justify-center">
      {/* Central server node */}
      <motion.div
        className="z-10"
        initial={{ scale: 0.9, opacity: 0 }}
        animate={{ scale: 1, opacity: 1 }}
        transition={{ duration: 0.5 }}
      >
        <div className="w-16 h-16 rounded-xl bg-slate-800 border-2 border-purple-500 flex items-center justify-center shadow-lg shadow-purple-500/20">
          <div className="flex flex-col items-center justify-center">
            <Server className="text-purple-400 mb-1" size={18} />
            <span className="text-xs font-bold text-purple-300">Relay node</span>
          </div>
        </div>
      </motion.div>
      
      {/* Validator nodes in a circle */}
      {Array.from({ length: 10 }).map((_, i) => {
        const angle = (i * 36) * (Math.PI / 180);
        const radius = 100;
        const x = Math.cos(angle) * radius;
        const y = Math.sin(angle) * radius;
        
        return (
          <motion.div
            key={`validator-${i}`}
            initial={{ opacity: 0, scale: 0.7 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ delay: 0.1 + i * 0.05, duration: 0.3 }}
            className="absolute"
            style={{
              transform: `translate(${x}px, ${y}px)`,
            }}
          >
            <div className="flex flex-col items-center">
              <div className="w-8 h-8 rounded-full bg-slate-800 border border-purple-500 flex items-center justify-center">
                <User size={12} className="text-purple-400" />
              </div>
              <p className="text-xs mt-1 text-purple-300">σ{i+1}</p>
            </div>
          </motion.div>
        );
      })}
    </div>
  );
};

export default BLSTest;
