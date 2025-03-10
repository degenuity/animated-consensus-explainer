
import React, { useState, useEffect } from 'react';
import { motion } from "framer-motion";
import { Card } from "@/components/ui/card";
import { ChevronDown, ChevronUp, User, Server, Check, ArrowRight } from "lucide-react";
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
  // State to track which formula is currently being highlighted
  const [activeFormula, setActiveFormula] = useState(0);

  // Cycle through formulas when this section is active
  useEffect(() => {
    if (activeSection !== 1) {
      setActiveFormula(0);
      return;
    }
    
    const formulaInterval = setInterval(() => {
      setActiveFormula(prev => (prev + 1) % 3);
    }, 5000);
    
    return () => clearInterval(formulaInterval);
  }, [activeSection]);

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
                  boxShadow: activeSection === 1 && activeFormula === 0 ? 
                    ["0 0 0px rgba(139, 92, 246, 0)", "0 0 20px rgba(139, 92, 246, 0.3)", "0 0 0px rgba(139, 92, 246, 0)"] : 
                    "none",
                  borderColor: activeFormula === 0 ? "rgba(139, 92, 246, 0.5)" : "transparent"
                }}
                transition={{ duration: 2, repeat: activeFormula === 0 ? Infinity : 0 }}
                style={{ borderWidth: activeFormula === 0 ? "1px" : "0px" }}
              >
                <motion.span
                  className="absolute inset-0 bg-violet-400/10"
                  initial={{ width: "0%" }}
                  animate={{ 
                    width: activeSection === 1 && activeFormula === 0 ? ["0%", "100%", "0%"] : "0%",
                    left: ["0%", "0%", "100%"] 
                  }}
                  transition={{ 
                    duration: 3,
                    repeat: activeFormula === 0 ? Infinity : 0,
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
                  boxShadow: activeSection === 1 && activeFormula === 1 ? 
                    ["0 0 0px rgba(99, 102, 241, 0)", "0 0 20px rgba(99, 102, 241, 0.3)", "0 0 0px rgba(99, 102, 241, 0)"] : 
                    "none",
                  borderColor: activeFormula === 1 ? "rgba(99, 102, 241, 0.5)" : "transparent" 
                }}
                transition={{ duration: 2, repeat: activeFormula === 1 ? Infinity : 0 }}
                style={{ borderWidth: activeFormula === 1 ? "1px" : "0px" }}
              >
                <motion.span
                  className="absolute inset-0 bg-indigo-400/10"
                  initial={{ width: "0%" }}
                  animate={{ 
                    width: activeSection === 1 && activeFormula === 1 ? ["0%", "100%", "0%"] : "0%", 
                    left: ["0%", "0%", "100%"] 
                  }}
                  transition={{ 
                    duration: 3,
                    repeat: activeFormula === 1 ? Infinity : 0,
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
                  boxShadow: activeSection === 1 && activeFormula === 2 ? 
                    ["0 0 0px rgba(234, 56, 76, 0)", "0 0 20px rgba(234, 56, 76, 0.3)", "0 0 0px rgba(234, 56, 76, 0)"] : 
                    "none",
                  borderColor: activeFormula === 2 ? "rgba(234, 56, 76, 0.5)" : "transparent"
                }}
                transition={{ duration: 2, repeat: activeFormula === 2 ? Infinity : 0 }}
                style={{ borderWidth: activeFormula === 2 ? "1px" : "0px" }}
              >
                <motion.span
                  className="absolute inset-0 bg-red-400/10"
                  initial={{ width: "0%" }}
                  animate={{ 
                    width: activeSection === 1 && activeFormula === 2 ? ["0%", "100%", "0%"] : "0%", 
                    left: ["0%", "0%", "100%"] 
                  }}
                  transition={{ 
                    duration: 3,
                    repeat: activeFormula === 2 ? Infinity : 0,
                    ease: "easeInOut"
                  }}
                />
                <span className="relative z-10 text-red-400 font-bold tracking-wide text-lg flex justify-center">
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
                color="red-400" 
                description="Where pkᵢ are the public keys of the participating validators" 
                expandable={false}
                index={2}
              />
            </div>
          </div>
          
          <BLSVisualization activeSection={activeSection} activeFormula={activeFormula} />
        </div>
      </Card>
    </motion.div>
  );
};

interface BLSVisualizationProps {
  activeSection: number;
  activeFormula: number;
}

const BLSVisualization: React.FC<BLSVisualizationProps> = ({ activeSection, activeFormula }) => {
  return (
    <div className="relative h-72 flex items-center justify-center">
      {/* Step 1: Individual Validators Generate Signatures (Purple) */}
      {activeSection === 1 && activeFormula === 0 && (
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          className="absolute inset-0"
        >
          {/* Validators (small circles representing validators) */}
          {Array.from({ length: 12 }).map((_, i) => {
            const angle = (i * 30) % 360;
            const radius = 100;
            const x = 50 + Math.cos(angle * Math.PI / 180) * radius / 200;
            const y = 50 + Math.sin(angle * Math.PI / 180) * radius / 200;
            
            return (
              <motion.div
                key={`validator-${i}`}
                className="absolute rounded-full bg-slate-800 border border-purple-500 flex items-center justify-center"
                style={{
                  width: 24,
                  height: 24,
                  left: `${x * 100}%`,
                  top: `${y * 100}%`,
                  transform: 'translate(-50%, -50%)',
                }}
                initial={{ scale: 0.5, opacity: 0 }}
                animate={{ scale: 1, opacity: 1 }}
                transition={{ delay: i * 0.1, duration: 0.3 }}
              >
                <User size={12} className="text-purple-400" />
                
                {/* Signature animation */}
                <motion.div
                  className="absolute w-4 h-4 rounded-full bg-purple-400"
                  initial={{ scale: 0, opacity: 0 }}
                  animate={{
                    scale: [0, 1, 0],
                    opacity: [0, 0.8, 0]
                  }}
                  transition={{
                    duration: 1.5,
                    repeat: Infinity,
                    delay: i * 0.2 % 1,
                    repeatDelay: 0.5
                  }}
                />
              </motion.div>
            );
          })}
          
          {/* Message being signed (M) */}
          <motion.div
            className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-16 h-16 rounded-xl bg-slate-800 border border-purple-500 flex items-center justify-center"
            animate={{
              boxShadow: ['0 0 0px rgba(139, 92, 246, 0)', '0 0 15px rgba(139, 92, 246, 0.3)', '0 0 0px rgba(139, 92, 246, 0)']
            }}
            transition={{ duration: 2, repeat: Infinity }}
          >
            <motion.div
              className="text-2xl font-bold text-purple-400"
              animate={{
                opacity: [0.7, 1, 0.7]
              }}
              transition={{ duration: 2, repeat: Infinity }}
            >
              M
            </motion.div>
          </motion.div>
          
          {/* Signature lines connecting validators to message */}
          {Array.from({ length: 12 }).map((_, i) => {
            const angle = (i * 30) % 360;
            const startRadius = 100;
            const startX = 50 + Math.cos(angle * Math.PI / 180) * startRadius / 200;
            const startY = 50 + Math.sin(angle * Math.PI / 180) * startRadius / 200;
            
            return (
              <motion.div
                key={`sig-line-${i}`}
                className="absolute bg-purple-400 origin-left"
                style={{
                  height: 2,
                  left: `${startX * 100}%`,
                  top: `${startY * 100}%`,
                  width: 0,
                  transform: `rotate(${angle + 180}deg)`,
                  transformOrigin: 'left center',
                  opacity: 0
                }}
                animate={{
                  width: ['0%', '15%', '0%'],
                  opacity: [0, 0.7, 0]
                }}
                transition={{
                  duration: 2,
                  repeat: Infinity,
                  delay: i * 0.2 % 1.5,
                  repeatDelay: 0.5
                }}
              />
            );
          })}
          
          <div className="absolute bottom-2 left-0 right-0 text-center">
            <motion.p 
              className="text-xs text-purple-300 font-medium bg-slate-800/70 mx-auto rounded-full px-3 py-1 inline-block"
              initial={{ opacity: 0, y: 5 }}
              animate={{ opacity: 1, y: 0 }}
            >
              <motion.span 
                className="inline-block w-2 h-2 rounded-full bg-purple-400 mr-1.5 align-middle"
                animate={{ opacity: [1, 0.5, 1] }}
                transition={{ duration: 0.8, repeat: Infinity }}
              />
              Each validator creates a signature on message M
            </motion.p>
          </div>
        </motion.div>
      )}
      
      {/* Step 2: Aggregation of Signatures (Indigo) */}
      {activeSection === 1 && activeFormula === 1 && (
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          className="absolute inset-0"
        >
          {/* Validators in a circle */}
          {Array.from({ length: 12 }).map((_, i) => {
            const angle = (i * 30) % 360;
            const radius = 100;
            const x = 50 + Math.cos(angle * Math.PI / 180) * radius / 200;
            const y = 50 + Math.sin(angle * Math.PI / 180) * radius / 200;
            
            return (
              <motion.div
                key={`validator-${i}`}
                className="absolute rounded-full bg-slate-800 border border-indigo-500/30 flex items-center justify-center"
                style={{
                  width: 20,
                  height: 20,
                  left: `${x * 100}%`,
                  top: `${y * 100}%`,
                  transform: 'translate(-50%, -50%)',
                }}
              >
                <User size={10} className="text-indigo-400/80" />
              </motion.div>
            );
          })}
          
          {/* Signatures flowing to the relay node */}
          {Array.from({ length: 12 }).map((_, i) => {
            const angle = (i * 30) % 360;
            const startRadius = 100;
            const startX = 50 + Math.cos(angle * Math.PI / 180) * startRadius / 200;
            const startY = 50 + Math.sin(angle * Math.PI / 180) * startRadius / 200;
            
            return (
              <motion.div
                key={`sig-flow-${i}`}
                className="absolute w-4 h-4 rounded-full bg-indigo-400"
                style={{
                  left: `${startX * 100}%`,
                  top: `${startY * 100}%`,
                  transform: 'translate(-50%, -50%)',
                }}
                animate={{
                  left: ['', '50%'],
                  top: ['', '50%'],
                  scale: [0.7, 0.4, 0],
                  opacity: [0.8, 0.6, 0]
                }}
                transition={{
                  duration: 1.5,
                  repeat: Infinity,
                  delay: i * 0.2 % 1,
                  repeatDelay: 0.5
                }}
              />
            );
          })}
          
          {/* Relay node aggregating signatures */}
          <motion.div
            className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-20 h-20 rounded-full flex items-center justify-center"
            style={{
              background: 'radial-gradient(circle, rgba(99, 102, 241, 0.3) 0%, rgba(99, 102, 241, 0) 70%)'
            }}
          >
            <motion.div
              className="w-12 h-12 rounded-md bg-slate-800 border-2 border-indigo-500 flex items-center justify-center"
              animate={{
                boxShadow: ['0 0 0px rgba(99, 102, 241, 0)', '0 0 20px rgba(99, 102, 241, 0.4)', '0 0 0px rgba(99, 102, 241, 0)']
              }}
              transition={{ duration: 2, repeat: Infinity }}
            >
              <Server className="text-indigo-400" size={24} />
            </motion.div>
          </motion.div>
          
          {/* Aggregated signature growing in the relay node */}
          <motion.div
            className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2"
          >
            <motion.div
              className="text-indigo-400 font-mono text-lg"
              initial={{ opacity: 0, scale: 0.5 }}
              animate={{
                opacity: [0, 1, 1],
                scale: [0.5, 1.2, 1]
              }}
              transition={{
                duration: 3,
                repeat: Infinity,
                repeatDelay: 1
              }}
            >
              σ<sub>agg</sub>
            </motion.div>
          </motion.div>
          
          {/* Leader arrow pointing right */}
          <motion.div
            className="absolute top-1/2 left-[70%] transform -translate-y-1/2"
            initial={{ opacity: 0 }}
            animate={{ opacity: [0, 1, 0] }}
            transition={{ 
              duration: 2,
              repeat: Infinity,
              repeatDelay: 2,
              delay: 2
            }}
          >
            <ArrowRight className="text-indigo-400" size={24} />
          </motion.div>
          
          <div className="absolute bottom-2 left-0 right-0 text-center">
            <motion.p 
              className="text-xs text-indigo-300 font-medium bg-slate-800/70 mx-auto rounded-full px-3 py-1 inline-block"
              initial={{ opacity: 0, y: 5 }}
              animate={{ opacity: 1, y: 0 }}
            >
              <motion.span 
                className="inline-block w-2 h-2 rounded-full bg-indigo-400 mr-1.5 align-middle"
                animate={{ opacity: [1, 0.5, 1] }}
                transition={{ duration: 0.8, repeat: Infinity }}
              />
              Relay node aggregates all signatures into one
            </motion.p>
          </div>
        </motion.div>
      )}
      
      {/* Step 3: Verification of Aggregated Signature (Red) */}
      {activeSection === 1 && activeFormula === 2 && (
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          className="absolute inset-0"
        >
          {/* Leader node on the left */}
          <motion.div
            className="absolute top-1/2 left-[25%] transform -translate-x-1/2 -translate-y-1/2 w-16 h-16 rounded-md bg-slate-800 border-2 border-red-500 flex items-center justify-center"
            animate={{
              boxShadow: ['0 0 0px rgba(234, 56, 76, 0)', '0 0 15px rgba(234, 56, 76, 0.3)', '0 0 0px rgba(234, 56, 76, 0)']
            }}
            transition={{ duration: 2, repeat: Infinity }}
          >
            <motion.div
              className="font-bold text-red-400"
              animate={{ scale: [0.95, 1.05, 0.95] }}
              transition={{ duration: 2, repeat: Infinity }}
            >
              Leader
            </motion.div>
          </motion.div>
          
          {/* Aggregated signature */}
          <motion.div
            className="absolute top-[30%] left-[50%] transform -translate-x-1/2 -translate-y-1/2 bg-slate-800 border border-red-500 p-2 rounded-lg"
          >
            <motion.p
              className="text-red-400 font-mono text-sm"
              animate={{ y: [0, -5, 0] }}
              transition={{ duration: 3, repeat: Infinity, ease: "easeInOut" }}
            >
              σ<sub>agg</sub>
            </motion.p>
          </motion.div>
          
          {/* Public keys sum */}
          <motion.div
            className="absolute bottom-[30%] left-[50%] transform -translate-x-1/2 translate-y-1/2 bg-slate-800 border border-red-500 p-2 rounded-lg"
          >
            <motion.p
              className="text-red-400 font-mono text-sm"
              animate={{ y: [0, 5, 0] }}
              transition={{ duration: 3, repeat: Infinity, ease: "easeInOut" }}
            >
              ∑pk<sub>i</sub>
            </motion.p>
          </motion.div>
          
          {/* Verification process beams */}
          <motion.div
            className="absolute top-1/2 left-[30%] right-[50%] h-0.5 bg-red-500/70"
            initial={{ scaleX: 0, opacity: 0 }}
            animate={{ 
              scaleX: [0, 1],
              opacity: [0, 1]
            }}
            transition={{ 
              duration: 1.5,
              repeat: Infinity,
              repeatDelay: 2
            }}
          />
          
          <motion.div
            className="absolute top-[75%] left-1/4 w-1/4 h-0.5 bg-green-500/70 origin-left"
            style={{ transform: "rotate(45deg)" }}
            initial={{ scaleX: 0, opacity: 0 }}
            animate={{ 
              scaleX: [0, 1],
              opacity: [0, 1]
            }}
            transition={{ 
              duration: 1.5,
              delay: 1.5,
              repeat: Infinity,
              repeatDelay: 2
            }}
          />
          
          <motion.div
            className="absolute top-[25%] left-1/4 w-1/4 h-0.5 bg-green-500/70 origin-left"
            style={{ transform: "rotate(-45deg)" }}
            initial={{ scaleX: 0, opacity: 0 }}
            animate={{ 
              scaleX: [0, 1],
              opacity: [0, 1]
            }}
            transition={{ 
              duration: 1.5,
              delay: 1.5,
              repeat: Infinity,
              repeatDelay: 2
            }}
          />
          
          {/* Verified checkmark */}
          <motion.div
            className="absolute top-1/2 right-[25%] transform -translate-x-1/2 -translate-y-1/2 w-16 h-16 rounded-full bg-slate-800 border-2 border-green-500 flex items-center justify-center"
            animate={{
              opacity: [0, 0, 1],
              boxShadow: [
                '0 0 0px rgba(34, 197, 94, 0)',
                '0 0 0px rgba(34, 197, 94, 0)',
                '0 0 15px rgba(34, 197, 94, 0.3)',
                '0 0 15px rgba(34, 197, 94, 0.3)',
                '0 0 0px rgba(34, 197, 94, 0)'
              ]
            }}
            transition={{ 
              duration: 4,
              repeat: Infinity,
              times: [0, 0.5, 0.6, 0.9, 1],
              repeatDelay: 0.5
            }}
          >
            <Check className="text-green-500" size={28} />
          </motion.div>
          
          {/* O(1) time indicator */}
          <motion.div 
            className="absolute right-[15%] top-[30%] bg-slate-800/80 border border-green-500/30 rounded-lg px-2 py-1"
            animate={{
              opacity: [0, 0, 1, 1, 0],
              y: [5, 5, 0, 0, -5]
            }}
            transition={{ 
              duration: 4,
              repeat: Infinity,
              times: [0, 0.5, 0.6, 0.9, 1],
              repeatDelay: 0.5
            }}
          >
            <motion.p className="text-xs text-green-400 font-mono">O(1) time</motion.p>
          </motion.div>
          
          <div className="absolute bottom-2 left-0 right-0 text-center">
            <motion.p 
              className="text-xs text-red-300 font-medium bg-slate-800/70 mx-auto rounded-full px-3 py-1 inline-block"
              initial={{ opacity: 0, y: 5 }}
              animate={{ opacity: 1, y: 0 }}
            >
              <motion.span 
                className="inline-block w-2 h-2 rounded-full bg-red-400 mr-1.5 align-middle"
                animate={{ opacity: [1, 0.5, 1] }}
                transition={{ duration: 0.8, repeat: Infinity }}
              />
              Leader verifies the signature in constant time
            </motion.p>
          </div>
        </motion.div>
      )}
      
      {/* Static BLS logo shown when section is inactive */}
      {activeSection !== 1 && (
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
      )}
    </div>
  );
};

