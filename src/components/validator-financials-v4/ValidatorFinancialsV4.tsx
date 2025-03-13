
import React, { useState, useEffect } from 'react';
import { motion } from "framer-motion";
import { Title, DiagramSVG } from './components';
import { useIsMobile } from '@/hooks/use-mobile';

interface ValidatorFinancialsV4Props {
  autoAdvance?: boolean;
}

const ValidatorFinancialsV4: React.FC<ValidatorFinancialsV4Props> = ({
  autoAdvance = true
}) => {
  const [animationKey, setAnimationKey] = useState(0);
  const isMobile = useIsMobile();
  
  useEffect(() => {
    // Reset animation when component mounts
    setAnimationKey(prev => prev + 1);
  }, []);

  return (
    <motion.div 
      className="w-full relative overflow-visible bg-[#0d111c] rounded-xl flex flex-col items-center justify-start"
      style={{
        minHeight: 'min(650px, 90vh)', // Dynamic scaling with viewport height
        maxHeight: 'max(450px, 90vh)'  // Ensures minimum height on small screens
      }}
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ duration: 1 }}
    >
      <div className="max-w-7xl mx-auto w-full py-1 sm:py-2 md:py-3 relative flex flex-col items-center overflow-visible">
        <Title />
        
        {/* Diagram container with responsive height */}
        <div 
          className="relative w-full overflow-visible flex items-center justify-center"
          style={{
            height: isMobile ? 'min(450px, 80vh)' : 'min(600px, 85vh)'
          }}
        >
          <DiagramSVG key={animationKey} />
        </div>
      </div>
    </motion.div>
  );
};

export default ValidatorFinancialsV4;
