
import React, { useState, useEffect } from 'react';
import { Card } from "@/components/ui/card";
import { motion } from "framer-motion";

const ConsensusExplainer = () => {
  const [activeSection, setActiveSection] = useState(0);

  useEffect(() => {
    const timer = setInterval(() => {
      setActiveSection((prev) => (prev + 1) % 2);
    }, 8000);
    return () => clearInterval(timer);
  }, []);

  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-900 to-slate-800 text-white py-12 px-4 sm:px-6 lg:px-8">
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8 }}
        className="max-w-4xl mx-auto"
      >
        <h1 className="text-4xl font-bold text-center mb-12 bg-clip-text text-transparent bg-gradient-to-r from-blue-400 to-violet-400">
          Scaling Consensus
        </h1>

        {/* VRF Section */}
        <motion.div
          animate={{
            scale: activeSection === 0 ? 1 : 0.95,
            opacity: activeSection === 0 ? 1 : 0.5
          }}
          transition={{ duration: 0.5 }}
        >
          <Card className="p-6 mb-8 bg-slate-800/50 backdrop-blur border-slate-700">
            <h2 className="text-2xl font-semibold mb-4 text-blue-400">
              VRF-Based Subcommittee Selection
            </h2>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              <div className="space-y-4">
                <motion.div
                  initial={{ opacity: 0 }}
                  animate={{ opacity: 1 }}
                  transition={{ delay: 0.3 }}
                  className="p-4 bg-slate-700/50 rounded-lg"
                >
                  <motion.p 
                    className="text-sm font-mono bg-slate-800/80 p-2 rounded"
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1 }}
                    transition={{ duration: 0.5 }}
                  >
                    P_i = (S_i / ΣS_j) × F × A_i
                  </motion.p>
                </motion.div>
                <div className="space-y-2">
                  {[
                    { name: 'Stake weight (S_i)', color: 'bg-blue-400' },
                    { name: 'Vote reduction (F)', color: 'bg-green-400' },
                    { name: 'Adjustment (A_i)', color: 'bg-purple-400' }
                  ].map((item, i) => (
                    <motion.div
                      key={i}
                      initial={{ x: -20, opacity: 0 }}
                      animate={{ x: 0, opacity: 1 }}
                      transition={{ delay: 0.5 + i * 0.2 }}
                      className="flex items-center space-x-2"
                    >
                      <motion.div 
                        className={`w-2 h-2 rounded-full ${item.color}`}
                        animate={{ 
                          scale: [1, 1.5, 1],
                          opacity: [0.7, 1, 0.7]
                        }}
                        transition={{ 
                          duration: 2, 
                          repeat: Infinity,
                          delay: i * 0.3
                        }}
                      />
                      <p className="text-sm text-slate-300">{item.name}</p>
                    </motion.div>
                  ))}
                </div>
              </div>
              <div className="relative h-full flex items-center justify-center">
                {/* Orbiting nodes around VRF */}
                <div className="absolute inset-0 flex items-center justify-center">
                  {Array.from({ length: 8 }).map((_, i) => (
                    <motion.div
                      key={i}
                      className="absolute w-3 h-3 rounded-full bg-blue-400/80"
                      animate={{
                        x: Math.cos(i * (Math.PI / 4)) * 80,
                        y: Math.sin(i * (Math.PI / 4)) * 80,
                        opacity: [0.4, 1, 0.4],
                        scale: [0.8, 1.2, 0.8]
                      }}
                      transition={{
                        duration: 4,
                        repeat: Infinity,
                        delay: i * 0.5,
                        ease: "easeInOut"
                      }}
                    />
                  ))}
                </div>
                
                {/* VRF Selection Animation */}
                <motion.div
                  className="relative w-32 h-32 rounded-full flex items-center justify-center bg-gradient-to-br from-blue-500/30 to-purple-500/30 backdrop-blur-sm"
                  animate={{
                    rotate: 360,
                    boxShadow: [
                      "0 0 15px rgba(59, 130, 246, 0.5)",
                      "0 0 25px rgba(59,
                      , 130, 246, 0.8)",
                      "0 0 15px rgba(59, 130, 246, 0.5)"
                    ]
                  }}
                  transition={{
                    duration: 10,
                    repeat: Infinity,
                    ease: "linear"
                  }}
                >
                  <div className="absolute inset-0 rounded-full overflow-hidden">
                    {Array.from({ length: 12 }).map((_, i) => (
                      <motion.div
                        key={i}
                        className="absolute top-0 left-1/2 w-0.5 h-1/2 origin-bottom"
                        style={{ 
                          transform: `rotate(${i * 30}deg)`,
                          background: `rgba(${Math.floor(Math.random() * 100) + 155}, ${Math.floor(Math.random() * 100) + 155}, 255, 0.5)`
                        }}
                        animate={{
                          opacity: [0.3, 0.8, 0.3]
                        }}
                        transition={{
                          duration: 2,
                          repeat: Infinity,
                          delay: i * 0.2
                        }}
                      />
                    ))}
                  </div>
                  
                  <motion.div
                    className="z-10 text-white font-bold text-lg bg-blue-500/30 backdrop-blur-sm px-3 py-1 rounded"
                    animate={{
                      scale: [0.9, 1.1, 0.9]
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
                
                {/* Selected validators */}
                <motion.div 
                  className="absolute bottom-0 right-0 text-xs text-blue-300 bg-blue-500/10 rounded px-2 py-1"
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
                  Selecting validators...
                </motion.div>
              </div>
            </div>
          </Card>
        </motion.div>

        {/* BLS Section */}
        <motion.div
          animate={{
            scale: activeSection === 1 ? 1 : 0.95,
            opacity: activeSection === 1 ? 1 : 0.5
          }}
          transition={{ duration: 0.5 }}
        >
          <Card className="p-6 bg-slate-800/50 backdrop-blur border-slate-700">
            <h2 className="text-2xl font-semibold mb-4 text-violet-400">
              BLS Signature Aggregation
            </h2>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              <div className="space-y-4">
                <motion.div
                  initial={{ opacity: 0 }}
                  animate={{ opacity: 1 }}
                  transition={{ delay: 0.3 }}
                  className="p-4 bg-slate-700/50 rounded-lg"
                >
                  <motion.p 
                    className="text-sm font-mono bg-slate-800/80 p-2 rounded mb-2"
                    animate={{ 
                      backgroundColor: activeSection === 1 ? ["rgba(30, 41, 59, 0.8)", "rgba(91, 33, 182, 0.2)", "rgba(30, 41, 59, 0.8)"] : "rgba(30, 41, 59, 0.8)"
                    }}
                    transition={{ duration: 2, repeat: Infinity }}
                  >
                    σ_i = H(M)^sk_i
                  </motion.p>
                  <motion.p 
                    className="text-sm font-mono bg-slate-800/80 p-2 rounded"
                    animate={{ 
                      backgroundColor: activeSection === 1 ? ["rgba(30, 41, 59, 0.8)", "rgba(139, 92, 246, 0.2)", "rgba(30, 41, 59, 0.8)"] : "rgba(30, 41, 59, 0.8)"
                    }}
                    transition={{ duration: 2, repeat: Infinity, delay: 1 }}
                  >
                    σ_agg = Π σ_i
                  </motion.p>
                </motion.div>
                <div className="space-y-2">
                  {[
                    { name: 'Individual signatures (σ_i)', color: 'bg-violet-400' },
                    { name: 'Message hash H(M)', color: 'bg-pink-400' },
                    { name: 'Aggregated signature (σ_agg)', color: 'bg-indigo-400' }
                  ].map((item, i) => (
                    <motion.div
                      key={i}
                      initial={{ x: -20, opacity: 0 }}
                      animate={{ x: 0, opacity: 1 }}
                      transition={{ delay: 0.5 + i * 0.2 }}
                      className="flex items-center space-x-2"
                    >
                      <motion.div 
                        className={`w-2 h-2 rounded-full ${item.color}`}
                        animate={{ 
                          scale: [1, 1.5, 1],
                          opacity: [0.7, 1, 0.7]
                        }}
                        transition={{ 
                          duration: 2, 
                          repeat: Infinity,
                          delay: i * 0.3
                        }}
                      />
                      <p className="text-sm text-slate-300">{item.name}</p>
                    </motion.div>
                  ))}
                </div>
              </div>
              <div className="relative h-60 flex items-center justify-center">
                {/* Individual signatures flowing toward aggregation */}
                <div className="absolute inset-0">
                  {Array.from({ length: 10 }).map((_, i) => (
                    <motion.div
                      key={i}
                      className="absolute w-2 h-2 rounded-full"
                      style={{
                        backgroundColor: `hsl(${270 + i * 6}, 70%, 60%)`,
                        left: `${10 + Math.random() * 80}%`,
                        top: `${10 + Math.random() * 80}%`
                      }}
                      animate={{
                        x: [0, -100],
                        y: [0, 0],
                        opacity: [0, 1, 0],
                        scale: [0.5, 1.2, 0.5]
                      }}
                      transition={{
                        duration: 3,
                        repeat: Infinity,
                        delay: i * 0.3,
                        ease: "easeInOut"
                      }}
                    />
                  ))}
                </div>
                
                {/* BLS Aggregation visualization */}
                <motion.div 
                  className="absolute w-28 h-28 rounded-md bg-gradient-to-tr from-violet-500/30 to-indigo-500/30 backdrop-blur-sm flex items-center justify-center"
                  animate={{
                    rotate: 180,
                    borderRadius: ["10%", "25%", "10%"],
                    boxShadow: [
                      "0 0 15px rgba(139, 92, 246, 0.3)",
                      "0 0 25px rgba(139, 92, 246, 0.6)",
                      "0 0 15px rgba(139, 92, 246, 0.3)"
                    ]
                  }}
                  transition={{
                    duration: 8,
                    repeat: Infinity,
                    ease: "easeInOut"
                  }}
                >
                  {/* Inner grid pattern */}
                  <div className="absolute inset-0 grid grid-cols-3 grid-rows-3 gap-1 p-1">
                    {Array.from({ length: 9 }).map((_, i) => (
                      <motion.div
                        key={i}
                        className="bg-indigo-400/20 rounded-sm"
                        animate={{
                          opacity: [0.2, 0.5, 0.2],
                          backgroundColor: [
                            "rgba(129, 140, 248, 0.2)",
                            "rgba(167, 139, 250, 0.3)",
                            "rgba(129, 140, 248, 0.2)"
                          ]
                        }}
                        transition={{
                          duration: 3,
                          repeat: Infinity,
                          delay: i * 0.2
                        }}
                      />
                    ))}
                  </div>
                  
                  <motion.div
                    className="z-10 text-white font-bold text-lg px-3 py-1 rounded bg-violet-500/30 backdrop-blur-sm"
                    animate={{
                      scale: [0.9, 1.1, 0.9]
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
                
                {/* Aggregated signature result */}
                <motion.div 
                  className="absolute bottom-0 left-0 text-xs text-violet-300 bg-violet-500/10 rounded px-2 py-1"
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
                  Signature aggregated!
                </motion.div>
                
                {/* Connection lines between validators */}
                <svg className="absolute inset-0 w-full h-full" style={{ pointerEvents: 'none' }}>
                  <motion.path
                    d="M50,50 Q80,80 110,70 T150,90"
                    stroke="rgba(139, 92, 246, 0.3)"
                    strokeWidth="1"
                    fill="transparent"
                    animate={{
                      opacity: [0, 0.8, 0],
                      pathLength: [0, 1, 0]
                    }}
                    transition={{
                      duration: 4,
                      repeat: Infinity,
                      ease: "easeInOut"
                    }}
                  />
                  <motion.path
                    d="M120,40 Q100,70 80,100 T40,120"
                    stroke="rgba(167, 139, 250, 0.3)"
                    strokeWidth="1"
                    fill="transparent"
                    animate={{
                      opacity: [0, 0.8, 0],
                      pathLength: [0, 1, 0]
                    }}
                    transition={{
                      duration: 4,
                      repeat: Infinity,
                      delay: 1,
                      ease: "easeInOut"
                    }}
                  />
                </svg>
              </div>
            </div>
          </Card>
        </motion.div>
      </motion.div>
    </div>
  );
};

export default ConsensusExplainer;
