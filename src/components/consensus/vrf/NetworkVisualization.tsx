
import React from 'react';
import { motion } from "framer-motion";

interface NetworkVisualizationProps {
  selectedNodes: number[];
}

export const NetworkVisualization: React.FC<NetworkVisualizationProps> = ({ selectedNodes }) => {
  return (
    <div className="relative h-80 flex items-center justify-center perspective">
      {Array.from({ length: 150 }).map((_, i) => {
        const radius = 140 + Math.random() * 40;
        const angle = (i / 150) * Math.PI * 2;
        const x = Math.cos(angle) * radius;
        const y = Math.sin(angle) * radius;
        const isSelected = selectedNodes.includes(i);
        
        return (
          <motion.div
            key={`vrf-node-${i}`}
            className={`absolute rounded-full ${
              isSelected ? 'bg-blue-400' : 'bg-slate-300/60'
            }`}
            style={{ 
              width: isSelected ? 4 + Math.random() * 2 : 3 + Math.random() * 2,
              height: isSelected ? 4 + Math.random() * 2 : 3 + Math.random() * 2,
            }}
            animate={{
              x: isSelected ? 
                [x, 0, x] : 
                x,
              y: isSelected ? 
                [y, 0, y] : 
                y,
              scale: isSelected ? [1, 1.8, 1] : [1, 1.2, 1],
              opacity: isSelected ? [0.7, 1, 0.7] : [0.4, 0.6, 0.4],
              boxShadow: isSelected ? 
                ['0 0 0px rgba(59, 130, 246, 0)', 
                  '0 0 10px rgba(59, 130, 246, 0.8)', 
                  '0 0 0px rgba(59, 130, 246, 0)'] : 
                'none'
            }}
            transition={{
              duration: isSelected ? 4 : 3,
              repeat: Infinity,
              delay: i * 0.01,
              times: isSelected ? [0, 0.5, 1] : undefined,
              ease: isSelected ? "easeInOut" : "linear"
            }}
          />
        );
      })}
      
      <motion.div
        className="relative w-40 h-40 rounded-full flex items-center justify-center bg-gradient-to-br from-blue-500/20 to-purple-500/20 backdrop-blur z-20"
        animate={{
          boxShadow: [
            "0 0 15px rgba(59, 130, 246, 0.3)",
            "0 0 25px rgba(59, 130, 246, 0.6)",
            "0 0 15px rgba(59, 130, 246, 0.3)"
          ]
        }}
        transition={{
          duration: 3,
          repeat: Infinity,
          ease: "easeInOut"
        }}
      >
        <motion.div
          className="z-10 text-white font-bold text-2xl bg-blue-500/20 backdrop-blur-sm px-6 py-3 rounded-full border border-blue-400/30"
          animate={{
            scale: [0.95, 1.05, 0.95],
            textShadow: [
              "0 0 5px rgba(59, 130, 246, 0.3)",
              "0 0 10px rgba(59, 130, 246, 0.6)",
              "0 0 5px rgba(59, 130, 246, 0.3)"
            ]
          }}
          transition={{
            duration: 3,
            repeat: Infinity,
            ease: "easeInOut"
          }}
        >
          VRF
        </motion.div>
      </motion.div>
      
      <motion.div 
        className="absolute bottom-5 right-5 text-sm text-blue-300 bg-blue-500/10 rounded-lg px-3 py-1 border border-blue-500/20"
        animate={{ 
          opacity: [0, 1, 1, 0],
          y: [10, 0, 0, -10]
        }}
        transition={{ 
          duration: 4,
          repeat: Infinity, 
          times: [0, 0.1, 0.9, 1]
        }}
      >
        <motion.span 
          className="inline-block w-2 h-2 rounded-full bg-blue-400 mr-1.5"
          animate={{ opacity: [1, 0.5, 1] }}
          transition={{ duration: 0.8, repeat: Infinity }}
        />
        Selected {selectedNodes.length} validators from network of 150
      </motion.div>
    </div>
  );
};
