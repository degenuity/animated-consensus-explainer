import React, { useState, useEffect } from 'react';
import { Card, CardContent } from "@/components/ui/card";
import { motion } from "framer-motion";
import { ChevronDown, ChevronUp } from "lucide-react";
import { Collapsible, CollapsibleContent, CollapsibleTrigger } from "@/components/ui/collapsible";

const ConsensusExplainer = () => {
  const [activeSection, setActiveSection] = useState(0);
  const [selectedNodes, setSelectedNodes] = useState<number[]>([]);
  const [isAdjustmentOpen, setIsAdjustmentOpen] = useState(false);
  const [isVoteReductionOpen, setIsVoteReductionOpen] = useState(false);

  useEffect(() => {
    const timer = setInterval(() => {
      setActiveSection((prev) => (prev + 1) % 2);
    }, 8000);
    return () => clearInterval(timer);
  }, []);

  useEffect(() => {
    if (activeSection !== 0) return;
    
    const selectRandomNodes = () => {
      const allNodes = Array.from({ length: 150 }, (_, i) => i);
      const shuffled = [...allNodes].sort(() => 0.5 - Math.random());
      return shuffled.slice(0, 30);
    };

    setSelectedNodes(selectRandomNodes());
    
    const selectionTimer = setInterval(() => {
      setSelectedNodes(selectRandomNodes());
    }, 4000);
    
    return () => clearInterval(selectionTimer);
  }, [activeSection]);

  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-900 to-slate-800 text-white py-12 px-4 sm:px-6 lg:px-8">
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8 }}
        className="max-w-4xl mx-auto"
      >
        <h1 className="text-4xl font-bold text-center mb-12 bg-clip-text text-transparent bg-gradient-to-r from-blue-400 to-violet-400">
          Scaling Consensus on X1
        </h1>

        {/* First section - VRF-Based Subcommittee Selection */}
        <motion.div
          animate={{
            scale: activeSection === 0 ? 1 : 0.95,
            opacity: activeSection === 0 ? 1 : 0.5
          }}
          transition={{ duration: 0.5 }}
          className="mb-10"
        >
          <Card className="p-6 mb-8 bg-slate-800/50 backdrop-blur border-slate-700 overflow-hidden relative">
            <div className="absolute inset-0 overflow-hidden">
              {Array.from({ length: 20 }).map((_, i) => (
                <motion.div
                  key={`particle-${i}`}
                  className="absolute w-1 h-1 rounded-full bg-blue-400/30"
                  style={{
                    left: `${Math.random() * 100}%`,
                    top: `${Math.random() * 100}%`,
                  }}
                  animate={{
                    x: [
                      Math.random() * 100 - 50,
                      Math.random() * 100 - 50,
                      Math.random() * 100 - 50
                    ],
                    y: [
                      Math.random() * 100 - 50,
                      Math.random() * 100 - 50,
                      Math.random() * 100 - 50
                    ],
                    opacity: [0.1, 0.5, 0.1],
                    scale: [0.8, 1.2, 0.8]
                  }}
                  transition={{
                    duration: Math.random() * 5 + 10,
                    repeat: Infinity,
                    ease: "linear"
                  }}
                />
              ))}
            </div>
            
            <h2 className="text-2xl font-semibold mb-4 text-blue-400 relative z-10">
              VRF-Based Subcommittee Selection
            </h2>
            
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6 relative z-10">
              <div className="space-y-4">
                <motion.div
                  initial={{ opacity: 0 }}
                  animate={{ opacity: 1 }}
                  transition={{ delay: 0.3 }}
                  className="p-4 bg-slate-700/50 rounded-lg border border-blue-500/20"
                >
                  <p className="text-sm text-slate-300 mb-2">The selection probability 𝑃ᵢ for the validator ᵢ is computed as:</p>
                  <motion.div 
                    className="text-sm font-mono bg-slate-800/80 p-3 rounded overflow-hidden relative"
                    initial={{ opacity: 0 }}
                    animate={{ 
                      opacity: 1,
                      boxShadow: activeSection === 0 ? 
                        ["0 0 0px rgba(59, 130, 246, 0)", "0 0 20px rgba(59, 130, 246, 0.3)", "0 0 0px rgba(59, 130, 246, 0)"] : 
                        "none"
                    }}
                    transition={{ 
                      duration: 2,
                      repeat: Infinity
                    }}
                  >
                    <motion.span
                      className="absolute inset-0 bg-blue-400/10"
                      initial={{ width: "0%" }}
                      animate={{ 
                        width: ["0%", "100%", "0%"],
                        left: ["0%", "0%", "100%"] 
                      }}
                      transition={{ 
                        duration: 3,
                        repeat: Infinity,
                        ease: "easeInOut"
                      }}
                    />
                    <span className="relative z-10 text-cyan-300 font-bold tracking-wide text-lg flex justify-center">
                      <span className="inline-flex items-baseline">
                        P<sub className="text-sm">i</sub> = (S<sub className="text-sm">i</sub> / ∑S<sub className="text-sm">j</sub>) × F × A<sub className="text-sm">i</sub>
                      </span>
                    </span>
                  </motion.div>
                </motion.div>
                
                <div className="space-y-3">
                  {[
                    { name: 'Stake weight (Sᵢ)', color: 'blue-400', description: 'Validator importance based on staked tokens' },
                    { name: 'Vote reduction (F)', color: 'green-400', description: 'Global factor reducing committee size', expandable: true },
                    { 
                      name: 'Adjustment (Aᵢ)', 
                      color: 'purple-400', 
                      description: 'Performance-based multiplier',
                      expandable: true
                    }
                  ].map((item, i) => (
                    <motion.div
                      key={i}
                      initial={{ x: -20, opacity: 0 }}
                      whileHover={{ x: 5 }}
                      animate={{ x: 0, opacity: 1 }}
                      transition={{ 
                        delay: 0.5 + i * 0.2,
                        type: "spring",
                        stiffness: 100
                      }}
                      className="flex items-center p-2 rounded-lg hover:bg-slate-700/30"
                    >
                      <motion.div 
                        className={`w-3 h-3 rounded-full bg-${item.color} mr-3`}
                        animate={{ 
                          scale: [1, 1.5, 1],
                          boxShadow: [
                            `0 0 0px rgb(var(--${item.color.split('-')[0]}-rgb)/0)`,
                            `0 0 10px rgb(var(--${item.color.split('-')[0]}-rgb)/0.5)`,
                            `0 0 0px rgb(var(--${item.color.split('-')[0]}-rgb)/0)`
                          ]
                        }}
                        transition={{ 
                          duration: 2, 
                          repeat: Infinity,
                          delay: i * 0.3
                        }}
                      />
                      {item.name === 'Adjustment (Aᵢ)' && item.expandable ? (
                        <Collapsible
                          open={isAdjustmentOpen}
                          onOpenChange={setIsAdjustmentOpen}
                          className="w-full"
                        >
                          <div className="flex items-center justify-between w-full">
                            <div>
                              <p className="text-sm font-medium text-white">{item.name}</p>
                              <p className="text-xs text-slate-300 mt-0.5">{item.description}</p>
                            </div>
                            <CollapsibleTrigger asChild>
                              <button className="p-1 rounded-full bg-slate-700/50 hover:bg-slate-700/80 transition-colors">
                                {isAdjustmentOpen ? (
                                  <ChevronUp className="h-4 w-4 text-purple-300" />
                                ) : (
                                  <ChevronDown className="h-4 w-4 text-purple-300" />
                                )}
                              </button>
                            </CollapsibleTrigger>
                          </div>
                          <CollapsibleContent className="mt-3 ml-6 space-y-2 text-sm border-l-2 border-purple-500/30 pl-4">
                            <div className="p-3 bg-slate-800/50 rounded-lg">
                              <div className="text-center mb-3 text-purple-300 font-mono">
                                Aᵢ = (Lᵢ + Rᵢ)/2 × (1 - Kᵢ) × (1 + Dᵢ)
                              </div>
                              <ul className="space-y-2">
                                <li className="flex items-start">
                                  <span className="text-purple-400 font-mono mr-2">Lᵢ</span>
                                  <span className="text-slate-300">Liveness score (uptime, missed votes, block proposal success rate)</span>
                                </li>
                                <li className="flex items-start">
                                  <span className="text-purple-400 font-mono mr-2">Rᵢ</span>
                                  <span className="text-slate-300">Performance score (latency, compute efficiency)</span>
                                </li>
                                <li className="flex items-start">
                                  <span className="text-purple-400 font-mono mr-2">Kᵢ</span>
                                  <span className="text-slate-300">Block skip penalty</span>
                                </li>
                                <li className="flex items-start">
                                  <span className="text-purple-400 font-mono mr-2">Dᵢ</span>
                                  <span className="text-slate-300">Delegation bonus favoring well-reputed validators</span>
                                </li>
                              </ul>
                            </div>
                          </CollapsibleContent>
                        </Collapsible>
                      ) : item.name === 'Vote reduction (F)' && item.expandable ? (
                        <Collapsible
                          open={isVoteReductionOpen}
                          onOpenChange={setIsVoteReductionOpen}
                          className="w-full"
                        >
                          <div className="flex items-center justify-between w-full">
                            <div>
                              <p className="text-sm font-medium text-white">{item.name}</p>
                              <p className="text-xs text-slate-300 mt-0.5">{item.description}</p>
                            </div>
                            <CollapsibleTrigger asChild>
                              <button className="p-1 rounded-full bg-slate-700/50 hover:bg-slate-700/80 transition-colors">
                                {isVoteReductionOpen ? (
                                  <ChevronUp className="h-4 w-4 text-green-300" />
                                ) : (
                                  <ChevronDown className="h-4 w-4 text-green-300" />
                                )}
                              </button>
                            </CollapsibleTrigger>
                          </div>
                          <CollapsibleContent className="mt-3 ml-6 space-y-2 text-sm border-l-2 border-green-500/30 pl-4">
                            <div className="p-3 bg-slate-800/50 rounded-lg">
                              <p className="text-slate-300">
                                The global vote reduction factor, denoted as F in the document, serves a critical function in the proposed VRF-based subcommittee selection mechanism for vote reduction. Its primary purpose is to decrease the frequency with which validators need to transmit votes during the consensus process. This reduction in voting frequency directly contributes to minimizing network congestion and reducing the computational overhead involved in signature verification.
                              </p>
                              <p className="mt-2 text-slate-300">
                                In practical terms, F acts as a scaling factor. For instance, if F is set to 1/100 or 1/1000, it means that the frequency of votes transmitted by each validator is reduced to 1% or 0.1% of what it would normally be. This significant reduction ensures that the blockchain's consensus remains efficient and can operate smoothly even as the number of validators increases, without compromising on decentralization or security. Thus, F plays a key role in enhancing the scalability of the consensus mechanism.
                              </p>
                            </div>
                          </CollapsibleContent>
                        </Collapsible>
                      ) : (
                        <div>
                          <p className="text-sm font-medium text-white">{item.name}</p>
                          <p className="text-xs text-slate-300 mt-0.5">{item.description}</p>
                        </div>
                      )}
                    </motion.div>
                  ))}
                </div>
              </div>
              
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
            </div>
          </Card>
        </motion.div>

        {/* Second section - BLS Signature Aggregation */}
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
                    <span className="relative z-10 text-pink-300 font-bold tracking-wide text-lg flex justify-center">
                      <span className="inline-flex items-baseline">
                        σ<sub className="text-sm">i</sub> = H(M)<sup>ski</sup>
                      </span>
                    </span>
                  </motion.div>
                  
                  <motion.div 
                    className="text-sm font-mono bg-slate-800/80 p-3 rounded overflow-hidden relative"
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
                    <span className="relative z-10 text-pink-300 font-bold tracking-wide text-lg flex justify-center">
                      <span className="inline-flex items-baseline">
                        σ<sub className="text-sm">agg</sub> = ∏ σ<sub className="text-sm">i</sub>
                      </span>
                    </span>
                  </motion.div>
                </motion.div>
                
                <div className="space-y-3">
                  {[
                    { name: 'Individual signatures (σᵢ)', color: 'violet-400', description: 'From each validator' },
                    { 
                      name: 'Vote reduction (F)', 
                      color: 'pink-400', 
                      description: 'Global factor reducing vote frequency',
                      expandable: true 
                    },
                    { name: 'Aggregated signature (σₐgg)', color: 'indigo-400', description: 'Compressed proof of consensus' }
                  ].map((item, i) => (
                    <motion.div
                      key={i}
                      initial={{ x: -20, opacity: 0 }}
                      whileHover={{ x: 5 }}
                      animate={{ x: 0, opacity: 1 }}
                      transition={{ 
                        delay: 0.5 + i * 0.2,
                        type: "spring",
                        stiffness: 100
                      }}
                      className="flex items-center p-2 rounded-lg hover:bg-slate-700/30"
                    >
                      <motion.div 
                        className={`w-3 h-3 rounded-full bg-${item.color} mr-3`}
                        animate={{ 
                          scale: [1, 1.5, 1],
                          boxShadow: [
                            `0 0 0px rgb(var(--${item.color.split('-')[0]}-rgb)/0)`,
                            `0 0 10px rgb(var(--${item.color.split('-')[0]}-rgb)/0.5)`,
                            `0 0 0px rgb(var(--${item.color.split('-')[0]}-rgb)/0)`
                          ]
                        }}
                        transition={{ 
                          duration: 2, 
                          repeat: Infinity,
                          delay: i * 0.3
                        }}
                      />
                      {item.name === 'Vote reduction (F)' && item.expandable ? (
                        <Collapsible
                          open={isVoteReductionOpen}
                          onOpenChange={setIsVoteReductionOpen}
                          className="w-full"
                        >
                          <div className="flex items-center justify-between w-full">
                            <div>
                              <p className="text-sm font-medium text-white">{item.name}</p>
                              <p className="text-xs text-slate-300 mt-0.5">{item.description}</p>
                            </div>
                            <CollapsibleTrigger asChild>
                              <button className="p-1 rounded-full bg-slate-700/50 hover:bg-slate-700/80 transition-colors">
                                {isVoteReductionOpen ? (
                                  <ChevronUp className="h-4 w-4 text-pink-300" />
                                ) : (
                                  <ChevronDown className="h-4 w-4 text-pink-300" />
                                )}
                              </button>
                            </CollapsibleTrigger>
                          </div>
                          <CollapsibleContent className="mt-3 ml-6 space-y-2 text-sm border-l-2 border-pink-500/30 pl-4">
                            <div className="p-3 bg-slate-800/50 rounded-lg">
                              <p className="text-slate-300">
                                The global vote reduction factor, denoted as F in the document, serves a critical function in the proposed VRF-based subcommittee selection mechanism for vote reduction. Its primary purpose is to decrease the frequency with which validators need to transmit votes during the consensus process. This reduction in voting frequency directly contributes to minimizing network congestion and reducing the computational overhead involved in signature verification.
                              </p>
                              <p className="mt-2 text-slate-300">
                                In practical terms, F acts as a scaling factor. For instance, if F is set to 1/100 or 1/1000, it means that the frequency of votes transmitted by each validator is reduced to 1% or 0.1% of what it would normally be. This significant reduction ensures that the blockchain's consensus remains efficient and can operate smoothly even as the number of validators increases, without compromising on decentralization or security. Thus, F plays a key role in enhancing the scalability of the consensus mechanism.
                              </p>
                            </div>
                          </CollapsibleContent>
                        </Collapsible>
                      ) : (
                        <div>
                          <p className="text-sm font-medium text-white">{item.name}</p>
                          <p className="text-xs text-slate-300 mt-0.5">{item.description}</p>
                        </div>
                      )}
                    </motion.div>
                  ))}
                </div>
              </div>
              
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
            </div>
          </Card>
        </motion.div>
      </motion.div>
    </div>
  );
};

export default ConsensusExplainer;
