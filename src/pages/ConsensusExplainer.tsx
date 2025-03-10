
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
                  <p className="text-sm font-mono bg-slate-800/80 p-2 rounded">
                    P_i = (S_i / ΣS_j) × F × A_i
                  </p>
                </motion.div>
                <div className="space-y-2">
                  {['Stake weight (S_i)', 'Vote reduction (F)', 'Adjustment (A_i)'].map((item, i) => (
                    <motion.div
                      key={i}
                      initial={{ x: -20, opacity: 0 }}
                      animate={{ x: 0, opacity: 1 }}
                      transition={{ delay: 0.5 + i * 0.2 }}
                      className="flex items-center space-x-2"
                    >
                      <div className="w-2 h-2 rounded-full bg-blue-400" />
                      <p className="text-sm text-slate-300">{item}</p>
                    </motion.div>
                  ))}
                </div>
              </div>
              <motion.div
                animate={{
                  y: [0, 5, 0],
                }}
                transition={{
                  duration: 4,
                  repeat: Infinity,
                  ease: "easeInOut"
                }}
                className="relative"
              >
                <div className="aspect-square rounded-full border-2 border-blue-400/30 flex items-center justify-center">
                  <div className="absolute inset-0 flex items-center justify-center">
                    <div className="w-3/4 h-3/4 rounded-full border-2 border-blue-400/20 animate-spin" style={{ animationDuration: '8s' }} />
                  </div>
                  <div className="w-1/2 h-1/2 rounded-full bg-blue-400/10 backdrop-blur flex items-center justify-center">
                    <p className="text-xl font-bold">VRF</p>
                  </div>
                </div>
              </motion.div>
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
                  <p className="text-sm font-mono bg-slate-800/80 p-2 rounded mb-2">
                    σ_i = H(M)^sk_i
                  </p>
                  <p className="text-sm font-mono bg-slate-800/80 p-2 rounded">
                    σ_agg = Π σ_i
                  </p>
                </motion.div>
                <div className="space-y-2">
                  {[
                    'Individual signatures (σ_i)',
                    'Message hash H(M)',
                    'Aggregated signature (σ_agg)'
                  ].map((item, i) => (
                    <motion.div
                      key={i}
                      initial={{ x: -20, opacity: 0 }}
                      animate={{ x: 0, opacity: 1 }}
                      transition={{ delay: 0.5 + i * 0.2 }}
                      className="flex items-center space-x-2"
                    >
                      <div className="w-2 h-2 rounded-full bg-violet-400" />
                      <p className="text-sm text-slate-300">{item}</p>
                    </motion.div>
                  ))}
                </div>
              </div>
              <motion.div
                animate={{
                  scale: [1, 1.05, 1],
                }}
                transition={{
                  duration: 4,
                  repeat: Infinity,
                  ease: "easeInOut"
                }}
                className="relative"
              >
                <div className="aspect-square rounded-lg border-2 border-violet-400/30 flex items-center justify-center overflow-hidden">
                  <motion.div
                    animate={{
                      rotate: 360,
                    }}
                    transition={{
                      duration: 20,
                      repeat: Infinity,
                      ease: "linear"
                    }}
                    className="absolute inset-0 flex items-center justify-center"
                  >
                    <div className="w-full h-1 bg-gradient-to-r from-transparent via-violet-400/20 to-transparent" />
                    <div className="h-full w-1 bg-gradient-to-b from-transparent via-violet-400/20 to-transparent" />
                  </motion.div>
                  <div className="w-1/2 h-1/2 rounded bg-violet-400/10 backdrop-blur flex items-center justify-center">
                    <p className="text-xl font-bold">BLS</p>
                  </div>
                </div>
              </motion.div>
            </div>
          </Card>
        </motion.div>
      </motion.div>
    </div>
  );
};

export default ConsensusExplainer;
