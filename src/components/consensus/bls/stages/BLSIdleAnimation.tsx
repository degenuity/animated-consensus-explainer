
import React from 'react';
import { motion } from "framer-motion";

interface BLSIdleAnimationProps {
  activeSection: number;
}

export const BLSIdleAnimation: React.FC<BLSIdleAnimationProps> = ({ activeSection }) => {
  if (activeSection === 1) return null;
  
  return (
    <motion.div 
      className="absolute inset-0 flex items-center justify-center"
      animate={{ opacity: 0.7 }}
      transition={{ duration: 0.5 }}
    >
      <motion.div 
        className="relative w-36 h-36 flex items-center justify-center"
        animate={{ rotate: 360 }}
        transition={{ duration: 20, repeat: Infinity, ease: "linear" }}
      >
        <motion.div
          className="absolute inset-0 rounded-full border-4 border-violet-500/30"
          style={{ 
            borderRadius: "42% 58% 65% 35% / 40% 45% 55% 60%",
          }}
          animate={{
            borderRadius: [
              "42% 58% 65% 35% / 40% 45% 55% 60%",
              "58% 42% 35% 65% / 45% 40% 60% 55%",
              "42% 58% 65% 35% / 40% 45% 55% 60%",
            ],
            rotate: 360
          }}
          transition={{ duration: 8, repeat: Infinity, ease: "easeInOut" }}
        />
        
        <motion.div
          className="absolute inset-4 rounded-full border-2 border-indigo-500/40"
          style={{ 
            borderRadius: "65% 35% 42% 58% / 55% 60% 40% 45%",
          }}
          animate={{
            borderRadius: [
              "65% 35% 42% 58% / 55% 60% 40% 45%",
              "35% 65% 58% 42% / 60% 55% 45% 40%",
              "65% 35% 42% 58% / 55% 60% 40% 45%",
            ],
            rotate: -360
          }}
          transition={{ duration: 12, repeat: Infinity, ease: "easeInOut" }}
        />
        
        <motion.div
          className="z-10 h-16 w-16 rounded-full bg-gradient-to-tr from-violet-500/20 to-indigo-500/20 backdrop-blur-sm border border-violet-400/30 flex items-center justify-center"
          animate={{
            boxShadow: [
              "0 0 5px rgba(139, 92, 246, 0.2)",
              "0 0 20px rgba(139, 92, 246, 0.4)",
              "0 0 5px rgba(139, 92, 246, 0.2)"
            ],
            scale: [0.95, 1.05, 0.95]
          }}
          transition={{ duration: 3, repeat: Infinity, ease: "easeInOut" }}
        >
          <motion.span
            className="text-2xl font-bold text-violet-400"
            animate={{
              textShadow: [
                "0 0 3px rgba(139, 92, 246, 0.3)",
                "0 0 8px rgba(139, 92, 246, 0.6)",
                "0 0 3px rgba(139, 92, 246, 0.3)"
              ]
            }}
            transition={{ duration: 3, repeat: Infinity }}
          >
            BLS
          </motion.span>
        </motion.div>
        
        {[0, 1, 2].map((i) => {
          const delay = i * 1.5;
          const angle = i * (360 / 3);
          
          return (
            <motion.div
              key={`orbit-${i}`}
              className="absolute w-3 h-3 rounded-full bg-violet-500"
              initial={{
                x: 0,
                y: 0,
              }}
              animate={{
                x: [
                  Math.cos((angle + 0) * (Math.PI / 180)) * 60,
                  Math.cos((angle + 120) * (Math.PI / 180)) * 60,
                  Math.cos((angle + 240) * (Math.PI / 180)) * 60,
                  Math.cos((angle + 360) * (Math.PI / 180)) * 60
                ],
                y: [
                  Math.sin((angle + 0) * (Math.PI / 180)) * 60,
                  Math.sin((angle + 120) * (Math.PI / 180)) * 60,
                  Math.sin((angle + 240) * (Math.PI / 180)) * 60,
                  Math.sin((angle + 360) * (Math.PI / 180)) * 60
                ],
                scale: [1, 1.3, 1],
                opacity: [0.7, 1, 0.7]
              }}
              transition={{
                duration: 10,
                repeat: Infinity,
                delay: delay,
                ease: "linear"
              }}
            />
          );
        })}
      </motion.div>
    </motion.div>
  );
};
