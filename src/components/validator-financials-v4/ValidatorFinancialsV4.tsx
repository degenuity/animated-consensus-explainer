
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
      className="w-full relative overflow-hidden bg-[#0d111c] rounded-xl min-h-[650px] lg:min-h-[750px] flex flex-col items-center justify-start"
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ duration: 1 }}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 md:px-8 py-4 relative w-full flex flex-col items-center">
        <Title />
        
        <div className="relative w-full h-[600px] md:h-[700px] flex items-center justify-center">
          <DiagramSVG key={animationKey} />
        </div>
      </div>
    </motion.div>
  );
};

export default ValidatorFinancialsV4;
