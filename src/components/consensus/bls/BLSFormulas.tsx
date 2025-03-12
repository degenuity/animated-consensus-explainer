
import React from 'react';
import { motion } from "framer-motion";
import { BLSFormulaAnimation } from './BLSFormulaAnimation';
import { ExpandableItem } from '../ExpandableItem';

interface BLSFormulasProps {
  activeSection: number | null;
  activeFormula: number;
}

export const BLSFormulas: React.FC<BLSFormulasProps> = ({ activeSection, activeFormula }) => {
  return (
    <div className="space-y-4">
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 0.3 }}
        className="p-4 bg-slate-700/50 rounded-lg border border-violet-500/20"
      >
        <div className="mb-4">
          <ExpandableItem 
            name="Individual signatures (σᵢ)" 
            color="purple-400" 
            description="From each validator where H(M) is the hash of the vote message and skᵢ is the validator's secret key. Each validator in a subcommittee generates a BLS signature σᵢ on the vote message M." 
            expandable={false}
            index={0}
            isActive={activeSection === 1 && activeFormula === 0}
          />
        </div>
        
        <BLSFormulaAnimation 
          activeSection={activeSection}
          activeFormula={activeFormula}
          formulaIndex={0}
          color="purple-400"
          shadowColor={["139", "92", "246"]}
          formula={
            <motion.span 
              className="inline-flex items-baseline"
              animate={{ 
                scale: activeSection === 1 && activeFormula === 0 ? [1, 1.05, 1] : 1
              }}
              transition={{ 
                duration: 1.5, 
                repeat: activeFormula === 0 ? Infinity : 0,
                ease: "easeInOut"
              }}
            >
              σ<sub className="text-sm">i</sub> = H(M)<sup>sk<sub>i</sub></sup>
            </motion.span>
          }
        />
        
        <div className="mt-6 mb-4">
          <ExpandableItem 
            name="Aggregated signature (σₐgg)" 
            color="indigo-400" 
            description="Compressed proof of consensus. The relay node aggregates all signatures within the subcommittee which is then submitted to the leader." 
            expandable={false}
            index={1}
            isActive={activeSection === 1 && activeFormula === 1}
          />
        </div>
        
        <BLSFormulaAnimation 
          activeSection={activeSection}
          activeFormula={activeFormula}
          formulaIndex={1}
          color="indigo-400"
          shadowColor={["99", "102", "241"]}
          formula={
            <motion.span 
              className="inline-flex items-baseline"
              animate={{ 
                scale: activeSection === 1 && activeFormula === 1 ? [1, 1.05, 1] : 1
              }}
              transition={{ 
                duration: 1.5, 
                repeat: activeFormula === 1 ? Infinity : 0,
                ease: "easeInOut"
              }}
            >
              σ<sub className="text-sm">agg</sub> = ∏ σ<sub className="text-sm">i</sub>
            </motion.span>
          }
        />
        
        <div className="mt-6 mb-4">
          <ExpandableItem 
            name="Verification of aggregated signature" 
            color="red-400" 
            description="Where pkᵢ are the public keys of the participating validators. The leader verifies the aggregated signature in constant time using a pairing-based verification." 
            expandable={false}
            index={2}
            isActive={activeSection === 1 && activeFormula === 2}
          />
        </div>
        
        <BLSFormulaAnimation 
          activeSection={activeSection}
          activeFormula={activeFormula}
          formulaIndex={2}
          color="red-400"
          shadowColor={["234", "56", "76"]}
          formula={
            <motion.span 
              className="inline-flex items-baseline"
              animate={{ 
                scale: activeSection === 1 && activeFormula === 2 ? [1, 1.05, 1] : 1,
                textShadow: activeSection === 1 && activeFormula === 2 ? 
                  ["0 0 0px rgba(248, 113, 113, 0)", "0 0 5px rgba(248, 113, 113, 0.5)", "0 0 0px rgba(248, 113, 113, 0)"] : 
                  "none"
              }}
              transition={{ 
                duration: 2, 
                repeat: activeFormula === 2 ? Infinity : 0,
                ease: "easeInOut"
              }}
            >
              𝑒(σ<sub className="text-sm">agg</sub>,g)=𝑒(H(M),∑pk<sub className="text-sm">i</sub>)
            </motion.span>
          }
        />
      </motion.div>
    </div>
  );
};
