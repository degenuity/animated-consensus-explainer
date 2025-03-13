
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
      className="w-full relative overflow-visible bg-[#0d111c] rounded-xl min-h-[400px] sm:min-h-[450px] md:min-h-[500px] lg:min-h-[520px] flex flex-col items-center justify-start"
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ duration: 1 }}
    >
      <div className="max-w-7xl mx-auto px-0 py-1 sm:py-2 md:py-3 relative w-full flex flex-col items-center overflow-visible">
        <Title />
        
        {/* CRITICAL: Make sure the entire diagram container is visible and properly sized */}
        <div className={`
          relative w-full max-w-full mx-auto 
          overflow-visible 
          h-[370px] sm:h-[410px] md:h-[440px] lg:h-[480px] 
          flex items-center justify-center
          ${isMobile ? 'px-10' : 'px-2'}
        `}>
          <DiagramSVG key={animationKey} />
        </div>
      </div>
    </motion.div>
  );
};

export default ValidatorFinancialsV4;
