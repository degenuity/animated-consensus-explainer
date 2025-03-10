
import React from 'react';
import { motion } from "framer-motion";
import { Card } from "@/components/ui/card";
import { ChevronDown, ChevronUp } from "lucide-react";
import { Collapsible, CollapsibleContent, CollapsibleTrigger } from "@/components/ui/collapsible";
import { ExpandableItem } from './ExpandableItem';

interface BLSSectionProps {
  activeSection: number;
  isVoteReductionOpen: boolean;
  setIsVoteReductionOpen: (isOpen: boolean) => void;
}

export const BLSSection: React.FC<BLSSectionProps> = ({
  activeSection,
  isVoteReductionOpen,
  setIsVoteReductionOpen
}) => {
  return (
    <motion.div
      animate={{
        scale: activeSection === 1 ? 1 : 0.95,
        opacity: activeSection === 1 ? 1 : 0.5
      }}
      transition={{ duration: 0.5 }}
    >
      <Card className="p-6 bg-slate-800/50 backdrop-blur border-slate-700 overflow-hidden relative">
        <div className="absolute inset-0 bg-gradient-to-br from-violet-900/10 to-indigo-900/10" />
        
        <h2 className="text-2xl font-semibold mb-4 text-violet-400 relative z-10">
          BLS Signature Aggregation
        </h2>
        
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 relative z-10">
          <div className="space-y-4">
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 0.3 }}
              className="p-4 bg-slate-700/50 rounded-lg border border-violet-500/20"
            >
              <p className="text-sm text-slate-300 mb-3">
                Each validator in a subcommittee generates a BLS signature 
                <span className="inline-flex items-baseline mx-1">σ<sub className="text-xs">i</sub></span>
                on the vote message 
                <span className="mx-1">M</span>:
              </p>
              
              <motion.div 
                className="text-sm font-mono bg-slate-800/80 p-3 rounded mb-3 overflow-hidden relative"
                animate={{ 
                  boxShadow: activeSection === 1 ? 
                    ["0 0 0px rgba(139, 92, 246, 0)", "0 0 20px rgba(139, 92, 246, 0.3)", "0 0 0px rgba(139, 92, 246, 0)"] : 
                    "none"
                }}
                transition={{ duration: 2, repeat: Infinity }}
              >
                <motion.span
                  className="absolute inset-0 bg-violet-400/10"
                  initial={{ width: "0%" }}
                  animate={{ 
                    width: activeSection === 1 ? ["0%", "100%", "0%"] : "0%",
                    left: ["0%", "0%", "100%"] 
                  }}
                  transition={{ 
                    duration: 3,
                    repeat: Infinity,
                    ease: "easeInOut"
                  }}
                />
                <span className="relative z-10 text-purple-400 font-bold tracking-wide text-lg flex justify-center">
                  <span className="inline-flex items-baseline">
                    σ<sub className="text-sm">i</sub> = H(M)<sup>sk<sub>i</sub></sup>
                  </span>
                </span>
              </motion.div>
              
              <p className="text-sm text-slate-300 mb-3">
                The relay node aggregates all signatures within the subcommittee which is then submitted to the leader:
              </p>
              
              <motion.div 
                className="text-sm font-mono bg-slate-800/80 p-3 rounded mb-3 overflow-hidden relative"
                animate={{ 
                  boxShadow: activeSection === 1 ? 
                    ["0 0 0px rgba(139, 92, 246, 0)", "0 0 20px rgba(139, 92, 246, 0.3)", "0 0 0px rgba(139, 92, 246, 0)"] : 
                    "none"
                }}
                transition={{ duration: 2, repeat: Infinity, delay: 1 }}
              >
                <motion.span
                  className="absolute inset-0 bg-violet-400/10"
                  initial={{ width: "0%" }}
                  animate={{ 
                    width: activeSection === 1 ? ["0%", "100%", "0%"] : "0%", 
                    left: ["0%", "0%", "100%"] 
                  }}
                  transition={{ 
                    duration: 3,
                    repeat: Infinity,
                    delay: 1.5,
                    ease: "easeInOut"
                  }}
                />
                <span className="relative z-10 text-indigo-400 font-bold tracking-wide text-lg flex justify-center">
                  <span className="inline-flex items-baseline">
                    σ<sub className="text-sm">agg</sub> = ∏ σ<sub className="text-sm">i</sub>
                  </span>
                </span>
              </motion.div>
              
              <p className="text-sm text-slate-300 mb-3">
                The leader verifies the aggregated signature in constant time using:
              </p>
              
              <motion.div 
                className="text-sm font-mono bg-slate-800/80 p-3 rounded overflow-hidden relative"
                animate={{ 
                  boxShadow: activeSection === 1 ? 
                    ["0 0 0px rgba(139, 92, 246, 0)", "0 0 20px rgba(139, 92, 246, 0.3)", "0 0 0px rgba(139, 92, 246, 0)"] : 
                    "none"
                }}
                transition={{ duration: 2, repeat: Infinity, delay: 2 }}
              >
                <motion.span
                  className="absolute inset-0 bg-violet-400/10"
                  initial={{ width: "0%" }}
                  animate={{ 
                    width: activeSection === 1 ? ["0%", "100%", "0%"] : "0%", 
                    left: ["0%", "0%", "100%"] 
                  }}
                  transition={{ 
                    duration: 3,
                    repeat: Infinity,
                    delay: 3,
                    ease: "easeInOut"
                  }}
                />
                <span className="relative z-10 text-pink-400 font-bold tracking-wide text-lg flex justify-center">
                  <span className="inline-flex items-baseline">
                    𝑒(σ<sub className="text-sm">agg</sub>,g)=𝑒(H(M),∑pk<sub className="text-sm">i</sub>)
                  </span>
                </span>
              </motion.div>
            </motion.div>
            
            <div className="space-y-3">
              <ExpandableItem 
                name="Individual signatures (σᵢ)" 
                color="purple-400" 
                description="From each validator where H(M) is the hash of the vote message and skᵢ is the validator's secret key" 
                expandable={false}
                index={0}
              />
              
              <ExpandableItem 
                name="Aggregated signature (σₐgg)" 
                color="indigo-400" 
                description="Compressed proof of consensus" 
                expandable={false}
                index={1}
              />

              <ExpandableItem 
                name="Verification of aggregated signature" 
                color="pink-400" 
                description="Where pkᵢ are the public keys of the participating validators" 
                expandable={false}
                index={2}
              />
            </div>
          </div>
          
          <BLSVisualization activeSection={activeSection} />
        </div>
      </Card>
    </motion.div>
  );
};

interface BLSVisualizationProps {
  activeSection: number;
}

const BLSVisualization: React.FC<BLSVisualizationProps> = ({ activeSection }) => {
  return (
    <div className="relative h-72 flex items-center justify-center">
      {activeSection === 1 && (
        <div className="absolute inset-0">
          {Array.from({ length: 15 }).map((_, i) => {
            const startX = 20 + Math.random() * 60;
            const startY = 20 + Math.random() * 60;
            const size = Math.random() * 2 + 2;
            
            return (
              <motion.div
                key={`signature-${i}`}
                className="absolute rounded-full"
                style={{
                  width: size,
                  height: size,
                  left: `${startX}%`,
                  top: `${startY}%`,
                  backgroundColor: `hsl(${270 + i * 4}, ${70 + Math.random() * 20}%, ${60 + Math.random() * 10}%)`,
                  zIndex: 20
                }}
                animate={{
                  left: [`${startX}%`, "50%"],
                  top: [`${startY}%`, "50%"],
                  scale: [1, 0.5],
                  opacity: [0, 1, 0]
                }}
                transition={{
                  duration: 2 + Math.random() * 2,
                  repeat: Infinity,
                  delay: i * 0.3,
                  ease: "easeInOut"
                }}
              />
            );
          })}
        </div>
      )}
      
      <motion.div 
        className="absolute w-28 h-28 bg-gradient-to-tr from-violet-500/20 to-indigo-500/20 backdrop-blur-sm flex items-center justify-center z-10"
        style={{
          borderRadius: "24% 76% 35% 65% / 65% 35% 65% 35%"
        }}
        animate={{
          borderRadius: [
            "24% 76% 35% 65% / 65% 35% 65% 35%",
            "76% 24% 65% 35% / 35% 65% 35% 65%",
            "24% 76% 35% 65% / 65% 35% 65% 35%"
          ],
          rotate: 360,
          boxShadow: [
            "0 0 15px rgba(139, 92, 246, 0.2)",
            "0 0 25px rgba(139, 92, 246, 0.4)",
            "0 0 15px rgba(139, 92, 246, 0.2)"
          ]
        }}
        transition={{
          duration: 20,
          repeat: Infinity,
          ease: "easeInOut"
        }}
      >
        <motion.div 
          className="absolute inset-2 rounded-full overflow-hidden opacity-40"
          animate={{
            rotate: [0, -360]
          }}
          transition={{
            duration: 40,
            repeat: Infinity,
            ease: "linear"
          }}
        >
          <svg viewBox="0 0 100 100" className="w-full h-full">
            <defs>
              <linearGradient id="bls-gradient" x1="0%" y1="0%" x2="100%" y2="100%">
                <stop offset="0%" stopColor="rgba(139, 92, 246, 0.6)" />
                <stop offset="100%" stopColor="rgba(99, 102, 241, 0.6)" />
              </linearGradient>
            </defs>
            <motion.path
              d="M50,20 L80,50 L50,80 L20,50 Z"
              fill="none"
              stroke="url(#bls-gradient)"
              strokeWidth="1"
              animate={{
                strokeDasharray: ["10,10", "1,10", "10,10"]
              }}
              transition={{
                duration: 3,
                repeat: Infinity,
                ease: "linear"
              }}
            />
            <motion.circle
              cx="50"
              cy="50"
              r="25"
              fill="none"
              stroke="rgba(167, 139, 250, 0.6)"
              strokeWidth="0.5"
              animate={{
                r: [25, 30, 25],
                strokeWidth: [0.5, 1.5, 0.5]
              }}
              transition={{
                duration: 3,
                repeat: Infinity,
                ease: "easeInOut"
              }}
            />
          </svg>
        </motion.div>
        
        <motion.div
          className="z-10 text-white font-bold text-lg px-4 py-2 rounded-full bg-violet-500/20 backdrop-blur-sm border border-violet-400/30"
          animate={{
            scale: [0.95, 1.05, 0.95],
            textShadow: [
              "0 0 5px rgba(139, 92, 246, 0.3)",
              "0 0 10px rgba(139, 92, 246, 0.6)",
              "0 0 5px rgba(139, 92, 246, 0.3)"
            ]
          }}
          transition={{
            duration: 3,
            repeat: Infinity,
            ease: "easeInOut"
          }}
        >
          BLS
        </motion.div>
      </motion.div>
      
      {activeSection === 1 && (
        <motion.div
          className="absolute inset-0 pointer-events-none"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.5 }}
        >
          {Array.from({ length: 3 }).map((_, i) => (
            <motion.div
              key={`bls-pulse-${i}`}
              className="absolute left-1/2 top-1/2 rounded-full border border-violet-400/30"
              style={{
                width: 20 + i * 20,
                height: 20 + i * 20,
                marginLeft: -10 - i * 10,
                marginTop: -10 - i * 10,
                zIndex: 5
              }}
              animate={{
                scale: [1, 1.5, 1],
                opacity: [0, 0.3, 0]
              }}
              transition={{
                duration: 2,
                repeat: Infinity,
                delay: i * 0.5,
                ease: "easeOut"
              }}
            />
          ))}
        </motion.div>
      )}
      
      {activeSection === 1 && (
        <motion.div
          className="absolute top-1/2 right-0 h-1 bg-gradient-to-r from-violet-500/0 via-violet-500/50 to-violet-500/0"
          style={{
            width: "40%",
            marginTop: -0.5,
            transformOrigin: "100% 50%"
          }}
          animate={{
            opacity: [0, 1, 0],
            scaleX: [0.3, 1, 0.3]
          }}
          transition={{
            duration: 3,
            repeat: Infinity,
            ease: "easeInOut"
          }}
        />
      )}
      
      {activeSection === 1 && (
        <motion.div 
          className="absolute bottom-0 left-0 text-xs text-violet-300 bg-violet-500/10 rounded-lg px-3 py-1 border border-violet-500/20"
          animate={{ 
            opacity: [0, 1, 1, 0],
            y: [10, 0, 0, -10]
          }}
          transition={{ 
            duration: 3, 
            repeat: Infinity,
            times: [0, 0.1, 0.9, 1]
          }}
        >
          <motion.span 
            className="inline-block w-2 h-2 rounded-full bg-violet-400 mr-1.5"
            animate={{ opacity: [1, 0.5, 1] }}
            transition={{ duration: 0.8, repeat: Infinity }}
          />
          {activeSection === 1 ? "Aggregating signatures..." : "Ready for aggregation"}
        </motion.div>
      )}
      
      <svg className="absolute" />
    </div>
  );
};
