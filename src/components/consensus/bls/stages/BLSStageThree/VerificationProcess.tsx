
import React from 'react';
import { motion } from "framer-motion";

export const VerificationProcess: React.FC = () => {
  return (
    <div className="absolute top-[30%] left-[50%] transform -translate-x-1/2 -translate-y-1/2">
      <motion.div 
        className="relative flex flex-col items-center"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 0.6 }}
      >
        <motion.div 
          className="flex items-center justify-center space-x-4 mb-4"
          initial={{ y: -20, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          transition={{ delay: 0.8 }}
        >
          <motion.div
            className="w-12 h-12 rounded-lg bg-red-400/10 border border-red-500 flex items-center justify-center"
            animate={{ 
              borderColor: ["rgba(239, 68, 68, 0.5)", "rgba(239, 68, 68, 0.9)", "rgba(239, 68, 68, 0.5)"] 
            }}
            transition={{ duration: 2, repeat: Infinity }}
          >
            <motion.span 
              className="text-red-400 font-bold"
              animate={{ scale: [0.95, 1.05, 0.95] }}
              transition={{ duration: 2, repeat: Infinity }}
            >
              Agg
            </motion.span>
          </motion.div>
          
          <motion.div
            className="flex items-center"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 1 }}
          >
            <motion.div 
              className="w-8 h-0.5 bg-gradient-to-r from-red-500 to-red-500/0"
              animate={{ 
                scaleX: [1, 1.2, 1],
                opacity: [0.5, 1, 0.5]
              }}
              transition={{ duration: 2, repeat: Infinity }}
              style={{ transformOrigin: 'left' }}
            />
          </motion.div>
          
          <motion.div
            className="w-12 h-12 rounded-lg bg-slate-800 border border-red-500 flex items-center justify-center"
            animate={{
              borderColor: ["rgba(239, 68, 68, 0.5)", "rgba(239, 68, 68, 0.9)", "rgba(239, 68, 68, 0.5)"]
            }}
            transition={{ duration: 2, repeat: Infinity, delay: 0.3 }}
          >
            <motion.span 
              className="text-red-400 font-bold"
              animate={{ scale: [0.95, 1.05, 0.95] }}
              transition={{ duration: 2, repeat: Infinity, delay: 0.3 }}
            >
              PKs
            </motion.span>
          </motion.div>
        </motion.div>
        
        <motion.div
          className="w-full h-0.5 bg-slate-600/50 my-2"
          initial={{ scaleX: 0 }}
          animate={{ scaleX: 1 }}
          transition={{ delay: 1.2, duration: 0.5 }}
          style={{ transformOrigin: 'center' }}
        />
        
        <motion.div
          className="text-center p-2 rounded-md bg-slate-800/80 border border-slate-700 mt-1"
          initial={{ y: 20, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          transition={{ delay: 1.4 }}
        >
          <motion.span 
            className="text-slate-300 text-sm"
            animate={{ opacity: [0.7, 1, 0.7] }}
            transition={{ duration: 2, repeat: Infinity, delay: 0.6 }}
          >
            Single verification step
          </motion.span>
        </motion.div>
      </motion.div>
    </div>
  );
};
