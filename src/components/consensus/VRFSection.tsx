
import React from 'react';
import { motion } from "framer-motion";
import { Card } from "@/components/ui/card";
import { ChevronDown, ChevronUp } from "lucide-react";
import { Collapsible, CollapsibleContent, CollapsibleTrigger } from "@/components/ui/collapsible";
import { ExpandableItem } from './ExpandableItem';

interface VRFSectionProps {
  activeSection: number;
  isAdjustmentOpen: boolean;
  setIsAdjustmentOpen: (isOpen: boolean) => void;
  isVoteReductionOpen: boolean;
  setIsVoteReductionOpen: (isOpen: boolean) => void;
  selectedNodes: number[];
}

export const VRFSection: React.FC<VRFSectionProps> = ({
  activeSection,
  isAdjustmentOpen,
  setIsAdjustmentOpen,
  isVoteReductionOpen,
  setIsVoteReductionOpen,
  selectedNodes
}) => {
  return (
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
              <ExpandableItem 
                name="Stake weight (Sᵢ)" 
                color="blue-400" 
                description="Validator importance based on staked tokens" 
                expandable={false}
                index={0}
              />
              
              <ExpandableItem 
                name="Vote reduction (F)" 
                color="green-400" 
                description="Global factor reducing committee size" 
                expandable={true}
                isOpen={isVoteReductionOpen}
                setIsOpen={setIsVoteReductionOpen}
                content={
                  <div className="p-3 bg-slate-800/50 rounded-lg">
                    <p className="text-slate-300">
                      The global vote reduction factor, denoted as F in the document, serves a critical function in the proposed VRF-based subcommittee selection mechanism for vote reduction. Its primary purpose is to decrease the frequency with which validators need to transmit votes during the consensus process. This reduction in voting frequency directly contributes to minimizing network congestion and reducing the computational overhead involved in signature verification.
                    </p>
                    <p className="mt-2 text-slate-300">
                      In practical terms, F acts as a scaling factor. For instance, if F is set to 1/100 or 1/1000, it means that the frequency of votes transmitted by each validator is reduced to 1% or 0.1% of what it would normally be. This significant reduction ensures that the blockchain's consensus remains efficient and can operate smoothly even as the number of validators increases, without compromising on decentralization or security. Thus, F plays a key role in enhancing the scalability of the consensus mechanism.
                    </p>
                  </div>
                }
                index={1}
              />
              
              <ExpandableItem 
                name="Adjustment (Aᵢ)" 
                color="purple-400" 
                description="Performance-based multiplier" 
                expandable={true}
                isOpen={isAdjustmentOpen}
                setIsOpen={setIsAdjustmentOpen}
                content={
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
                }
                index={2}
              />
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
  );
};
