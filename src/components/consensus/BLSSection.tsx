
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
    <div className="relative h-80 sm:h-96 flex items-center justify-center">
      {/* STEP 1: Individual Validators Generate Signatures */}
      {activeSection === 1 && activeFormula === 0 && (
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          className="absolute inset-0"
        >
          {/* Central message being signed */}
          <motion.div
            className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 z-20"
            animate={{ scale: [0.9, 1.05, 0.9] }}
            transition={{ duration: 3, repeat: Infinity, ease: "easeInOut" }}
          >
            <motion.div className="w-16 h-16 rounded-xl bg-slate-800 border-2 border-purple-500 flex items-center justify-center shadow-lg shadow-purple-500/20">
              <motion.span
                className="text-2xl font-bold text-purple-400"
                animate={{ opacity: [0.7, 1, 0.7] }}
                transition={{ duration: 2, repeat: Infinity }}
              >
                M
              </motion.span>
            </motion.div>
            <motion.p className="text-xs text-center mt-2 text-purple-300 font-semibold">
              Vote Message
            </motion.p>
          </motion.div>

          {/* Validators circle */}
          <div className="absolute inset-0">
            {Array.from({ length: 10 }).map((_, i) => {
              const angle = (i * 36) * (Math.PI / 180);
              const radius = 120;
              const x = Math.cos(angle) * radius;
              const y = Math.sin(angle) * radius;
              
              return (
                <motion.div
                  key={`validator-${i}`}
                  initial={{ opacity: 0, x: 0, y: 0 }}
                  animate={{ 
                    opacity: 1,
                    x, 
                    y,
                  }}
                  transition={{ 
                    delay: i * 0.1,
                    duration: 0.5,
                    type: "spring",
                  }}
                  className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2"
                >
                  <motion.div
                    className="flex flex-col items-center"
                    whileHover={{ scale: 1.1 }}
                  >
                    <div className="w-10 h-10 rounded-full bg-slate-800 border-2 border-purple-500 flex items-center justify-center shadow-md">
                      <User size={15} className="text-purple-400" />
                    </div>
                    
                    {/* Pulsing signature generation effect */}
                    <motion.div
                      className="w-6 h-6 absolute rounded-full bg-purple-500"
                      initial={{ scale: 0, opacity: 0 }}
                      animate={{ 
                        scale: [0, 1, 0],
                        opacity: [0, 0.7, 0],
                      }}
                      transition={{
                        duration: 2,
                        repeat: Infinity,
                        delay: i * 0.2 % 1.5,
                        repeatDelay: 0.5
                      }}
                    />
                    
                    <motion.p 
                      className="text-xs mt-2 text-purple-300 font-medium"
                      initial={{ opacity: 0 }}
                      animate={{ opacity: 1 }}
                      transition={{ delay: 0.5 + i * 0.05 }}
                    >
                      σ<sub>{i+1}</sub>
                    </motion.p>
                  </motion.div>
                  
                  {/* Signature line to message */}
                  <motion.div
                    className="absolute top-1/2 left-1/2 h-0.5 bg-purple-500 origin-left z-10"
                    initial={{ width: 0, opacity: 0 }}
                    animate={{ 
                      width: Math.sqrt(x*x + y*y) - 70, 
                      opacity: [0, 0.6, 0.2],
                      rotate: Math.atan2(y, x) * (180 / Math.PI)
                    }}
                    transition={{
                      width: { 
                        duration: 0.8,
                        delay: i * 0.1 + 0.2
                      },
                      opacity: {
                        duration: 2,
                        repeat: Infinity,
                        repeatType: "reverse" 
                      }
                    }}
                    style={{
                      transformOrigin: '0% 50%',
                    }}
                  />
                </motion.div>
              );
            })}
          </div>
          
          {/* Visual explanation */}
          <div className="absolute bottom-2 left-0 right-0 text-center">
            <motion.div 
              className="text-xs text-purple-300 font-medium bg-slate-800/70 mx-auto rounded-full px-3 py-1 inline-block border border-purple-500/30"
              initial={{ opacity: 0, y: 10 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 1 }}
            >
              <motion.span 
                className="inline-block w-2 h-2 rounded-full bg-purple-400 mr-1.5 align-middle"
                animate={{ opacity: [1, 0.4, 1] }}
                transition={{ duration: 1.5, repeat: Infinity }}
              />
              Each validator creates a BLS signature on message M
            </motion.div>
          </div>
        </motion.div>
      )}
      
      {/* STEP 2: Aggregation of Signatures */}
      {activeSection === 1 && activeFormula === 1 && (
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          className="absolute inset-0"
        >
          {/* Validators sending signatures */}
          <div className="absolute inset-0">
            {Array.from({ length: 10 }).map((_, i) => {
              const angle = (i * 36) * (Math.PI / 180);
              const radius = 120;
              const x = Math.cos(angle) * radius;
              const y = Math.sin(angle) * radius;
              
              return (
                <motion.div
                  key={`agg-validator-${i}`}
                  className="absolute top-1/2 left-1/2"
                  style={{
                    x, 
                    y,
                    translateX: "-50%",
                    translateY: "-50%",
                  }}
                >
                  {/* Validator node */}
                  <div className="w-8 h-8 rounded-full bg-slate-800 border border-indigo-500/30 flex items-center justify-center opacity-70">
                    <User size={12} className="text-indigo-400/70" />
                  </div>
                  
                  {/* Signature particles moving to relay */}
                  {Array.from({ length: 3 }).map((_, j) => (
                    <motion.div
                      key={`sig-particle-${i}-${j}`}
                      className="absolute w-3 h-3 rounded-full bg-indigo-500 shadow-lg shadow-indigo-500/50"
                      initial={{ 
                        x: 0, 
                        y: 0,
                        opacity: 0,
                        scale: 0.7
                      }}
                      animate={{ 
                        x: [0, -x * 0.9],
                        y: [0, -y * 0.9],
                        opacity: [0, 0.9, 0],
                        scale: [0.7, 0.9, 0.5]
                      }}
                      transition={{
                        duration: 2,
                        repeat: Infinity,
                        delay: i * 0.15 + j * 0.4,
                        repeatDelay: 0.5
                      }}
                    />
                  ))}
                </motion.div>
              );
            })}
          </div>
          
          {/* Relay node aggregating signatures */}
          <motion.div
            className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 z-20"
            initial={{ scale: 0.8 }}
            animate={{ scale: 1 }}
            transition={{ type: "spring", stiffness: 100 }}
          >
            {/* Pulsing aggregation effect */}
            <motion.div
              className="absolute inset-0 rounded-xl"
              style={{
                background: 'radial-gradient(circle, rgba(99, 102, 241, 0.4) 0%, rgba(99, 102, 241, 0) 70%)',
              }}
              animate={{
                scale: [1, 1.2, 1],
                opacity: [0.5, 0.8, 0.5]
              }}
              transition={{
                duration: 4,
                repeat: Infinity,
                ease: "easeInOut"
              }}
            />
            
            <motion.div className="w-20 h-20 rounded-xl bg-slate-800 border-2 border-indigo-500 flex flex-col items-center justify-center shadow-lg shadow-indigo-500/20 relative">
              <Server className="text-indigo-400" size={22} />
              <motion.span
                className="text-indigo-400 font-bold text-xs mt-1"
              >
                Relay Node
              </motion.span>
              
              {/* Growing aggregated signature */}
              <motion.div
                className="absolute -bottom-10 bg-slate-800/80 px-3 py-1 rounded-full border border-indigo-500"
                animate={{
                  scale: [0.9, 1.05, 0.9],
                  boxShadow: [
                    '0 0 0px rgba(99, 102, 241, 0.1)',
                    '0 0 10px rgba(99, 102, 241, 0.5)',
                    '0 0 0px rgba(99, 102, 241, 0.1)'
                  ]
                }}
                transition={{ duration: 3, repeat: Infinity }}
              >
                <motion.span
                  className="text-sm font-mono text-indigo-400 font-bold"
                >
                  σ<sub>agg</sub>
                </motion.span>
              </motion.div>
            </motion.div>
          </motion.div>
          
          {/* Leader node receiving aggregated signature */}
          <motion.div
            className="absolute top-1/2 right-4 transform -translate-y-1/2"
            initial={{ x: 50, opacity: 0 }}
            animate={{ x: 0, opacity: 1 }}
            transition={{ delay: 0.8, type: "spring" }}
          >
            <div className="w-16 h-16 rounded-xl bg-slate-800 border border-red-500/20 flex items-center justify-center shadow-md">
              <motion.span
                className="text-sm font-bold text-red-400/70"
              >
                Leader
              </motion.span>
            </div>
          </motion.div>
          
          {/* Aggregated signature moving to leader */}
          <motion.div
            className="absolute top-1/2 left-1/2 transform -translate-y-1/2 z-30"
            initial={{ opacity: 0, x: 0 }}
            animate={{
              opacity: [0, 1, 0],
              x: [0, 100],
              scale: [0.8, 1.2, 0.8]
            }}
            transition={{
              duration: 3,
              repeat: Infinity,
              repeatDelay: 1.5,
              delay: 2
            }}
          >
            <div className="h-8 px-3 py-1 rounded-full bg-indigo-500 flex items-center justify-center shadow-lg shadow-indigo-500/30">
              <span className="text-white font-bold font-mono text-sm">σ<sub>agg</sub></span>
            </div>
          </motion.div>
          
          {/* Flow indicator arrow */}
          <motion.div
            className="absolute top-1/2 right-[43%] transform -translate-y-1/2"
            animate={{
              x: [0, 10, 0],
              opacity: [0.5, 1, 0.5]
            }}
            transition={{ 
              duration: 2,
              repeat: Infinity 
            }}
          >
            <ArrowRight className="text-indigo-400" size={20} />
          </motion.div>
          
          {/* Visual explanation */}
          <div className="absolute bottom-2 left-0 right-0 text-center">
            <motion.div 
              className="text-xs text-indigo-300 font-medium bg-slate-800/70 mx-auto rounded-full px-3 py-1 inline-block border border-indigo-500/30"
              initial={{ opacity: 0, y: 10 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.5 }}
            >
              <motion.span 
                className="inline-block w-2 h-2 rounded-full bg-indigo-400 mr-1.5 align-middle"
                animate={{ opacity: [1, 0.4, 1] }}
                transition={{ duration: 1.5, repeat: Infinity }}
              />
              Relay node aggregates all signatures into one compact proof
            </motion.div>
          </div>
        </motion.div>
      )}
      
      {/* STEP 3: Verification of Aggregated Signature */}
      {activeSection === 1 && activeFormula === 2 && (
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          className="absolute inset-0"
        >
          {/* Leader node - larger and prominent */}
          <motion.div
            className="absolute top-1/2 left-1/3 transform -translate-x-1/2 -translate-y-1/2 z-20"
            initial={{ scale: 0.9, opacity: 0 }}
            animate={{ scale: 1, opacity: 1 }}
            transition={{ delay: 0.2, type: "spring" }}
          >
            <motion.div 
              className="w-24 h-24 rounded-lg bg-slate-800 border-2 border-red-500 flex flex-col items-center justify-center shadow-lg"
              animate={{
                boxShadow: [
                  '0 0 0px rgba(234, 56, 76, 0)',
                  '0 0 15px rgba(234, 56, 76, 0.3)',
                  '0 0 0px rgba(234, 56, 76, 0)'
                ]
              }}
              transition={{ duration: 3, repeat: Infinity }}
            >
              <motion.span
                className="text-lg font-bold text-red-400 mb-1"
              >
                Leader
              </motion.span>
              <motion.div
                className="text-xs text-slate-300 bg-slate-900/50 px-2 py-1 rounded-full mt-1"
                animate={{ opacity: [0.7, 1, 0.7] }}
                transition={{ duration: 2, repeat: Infinity }}
              >
                Verifying...
              </motion.div>
            </motion.div>
          </motion.div>
          
          {/* Verification equation components */}
          <div className="absolute top-[40%] left-2/3 transform -translate-x-1/2 -translate-y-1/2">
            <motion.div
              className="bg-slate-800 border border-red-500 p-2 rounded-lg shadow-md flex items-center justify-center"
              initial={{ y: -20, opacity: 0 }}
              animate={{ y: 0, opacity: 1 }}
              transition={{ delay: 0.4 }}
            >
              <motion.p
                className="text-red-400 font-mono text-sm font-bold"
                animate={{ scale: [0.95, 1.05, 0.95] }}
                transition={{ duration: 2, repeat: Infinity }}
              >
                𝑒(σ<sub>agg</sub>,g)
              </motion.p>
            </motion.div>
            
            {/* Equals sign */}
            <motion.div
              className="my-2 flex justify-center"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 0.6 }}
            >
              <span className="text-xl text-red-400">=</span>
            </motion.div>
            
            <motion.div
              className="bg-slate-800 border border-red-500 p-2 rounded-lg shadow-md flex items-center justify-center"
              initial={{ y: 20, opacity: 0 }}
              animate={{ y: 0, opacity: 1 }}
              transition={{ delay: 0.8 }}
            >
              <motion.p
                className="text-red-400 font-mono text-sm font-bold"
                animate={{ scale: [0.95, 1.05, 0.95] }}
                transition={{ duration: 2, repeat: Infinity }}
              >
                𝑒(H(M),∑pk<sub>i</sub>)
              </motion.p>
            </motion.div>
          </div>
          
          {/* Verification rays */}
          <motion.div
            className="absolute top-1/2 left-[43%] w-[15%] h-0.5 bg-gradient-to-r from-red-500 to-red-500/0"
            initial={{ scaleX: 0, opacity: 0 }}
            animate={{ 
              scaleX: 1,
              opacity: [0, 1, 0.5]
            }}
            transition={{ 
              duration: 1,
              repeat: Infinity,
              repeatDelay: 2
            }}
            style={{ transformOrigin: 'left' }}
          />
          
          {/* Resulting verification checkmark */}
          <motion.div
            className="absolute top-1/2 right-1/6 transform -translate-y-1/2 z-10"
            animate={{
              opacity: [0, 0, 1],
              scale: [0.5, 0.5, 1]
            }}
            transition={{ 
              duration: 3,
              repeat: Infinity,
              repeatDelay: 0.5,
              times: [0, 0.7, 1]
            }}
          >
            <div className="w-16 h-16 rounded-full bg-slate-800 border-2 border-green-500 flex items-center justify-center shadow-lg shadow-green-500/20">
              <Check className="text-green-500" size={28} />
            </div>
          </motion.div>
          
          {/* O(1) time indicator */}
          <motion.div 
            className="absolute right-10 top-[65%] bg-slate-800 border border-green-500 rounded-lg px-3 py-1.5 shadow-md shadow-green-500/10"
            initial={{ opacity: 0, y: 10 }}
            animate={{
              opacity: [0, 1, 1, 0],
              y: [10, 0, 0, -10]
            }}
            transition={{ 
              duration: 3,
              repeat: Infinity,
              repeatDelay: 0.5,
              times: [0, 0.1, 0.9, 1]
            }}
          >
            <motion.p 
              className="text-xs font-bold text-green-400"
              animate={{ scale: [0.95, 1.05, 0.95] }}
              transition={{ duration: 1.5, repeat: Infinity }}
            >
              O(1) Constant Time
            </motion.p>
          </motion.div>
          
          {/* Visual explanation */}
          <div className="absolute bottom-2 left-0 right-0 text-center">
            <motion.div 
              className="text-xs text-red-300 font-medium bg-slate-800/70 mx-auto rounded-full px-3 py-1 inline-block border border-red-500/30"
              initial={{ opacity: 0, y: 10 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.5 }}
            >
              <motion.span 
                className="inline-block w-2 h-2 rounded-full bg-red-400 mr-1.5 align-middle"
                animate={{ opacity: [1, 0.4, 1] }}
                transition={{ duration: 1.5, repeat: Infinity }}
              />
              Leader verifies the aggregated signature in constant time
            </motion.div>
          </div>
        </motion.div>
      )}
      
      {/* BLS logo when section is inactive */}
      {activeSection !== 1 && (
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
            {/* Outer spinning ring */}
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
            
            {/* Middle spinning ring */}
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
            
            {/* Central BLS logo */}
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
            
            {/* Orbiting elements */}
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
      )}
    </div>
  );
};
