
import React, { useState, useEffect } from 'react';
import { motion } from "framer-motion";
import { 
  Title,
  Boxes,
  Connections,
  FactorBoxes,
  ExplanationText
} from './components';

interface ValidatorFinancialsV4Props {
  autoAdvance?: boolean;
}

const ValidatorFinancialsV4: React.FC<ValidatorFinancialsV4Props> = ({
  autoAdvance = true
}) => {
  const [animationKey, setAnimationKey] = useState(0);
  
  useEffect(() => {
    // Reset animation when component mounts
    setAnimationKey(prev => prev + 1);
  }, []);

  return (
    <motion.div 
      className="w-full relative overflow-hidden bg-[#0d111c] rounded-xl min-h-[700px] flex items-center justify-center"
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ duration: 1 }}
    >
      <div className="max-w-7xl mx-auto px-4 py-8 relative w-full">
        <Title />

        <div className="relative h-[700px] w-full">
          <div className="absolute inset-0">
            {/* Render all main boxes */}
            <Boxes />
            
            {/* Render connecting lines */}
            <Connections />
            
            {/* Render small factor boxes */}
            <FactorBoxes />
            
            {/* Render explanation text */}
            <ExplanationText />
            
            {/* X1 Logo */}
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ duration: 0.7, delay: 1.4 }}
              className="absolute bottom-0 right-8 text-8xl font-bold text-gray-500/20"
            >
              X1
            </motion.div>
          </div>
        </div>
      </div>
    </motion.div>
  );
};

export default ValidatorFinancialsV4;
