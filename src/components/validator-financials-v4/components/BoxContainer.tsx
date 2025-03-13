
import React from 'react';
import { motion } from 'framer-motion';
import { SimpleBox, ComplexBox, AlternativeBox, SubBoxProps } from './box-container';

interface BoxContainerProps {
  position: string;
  iconType: 'inflation' | 'internal-rewards' | 'total-stake' | 'network-costs' | 'deflation' | 'block-production' | 'profitability';
  title: string;
  subtitle?: string;
  color: string;
  animationDelay?: number;
  className?: string;
  simpleStyle?: boolean;
  subBoxes?: SubBoxProps[];
  useAlternativeStyle?: boolean;
}

const BoxContainer: React.FC<BoxContainerProps> = ({
  position,
  iconType,
  title,
  subtitle,
  color,
  animationDelay = 0,
  className = "",
  simpleStyle = false,
  subBoxes = [],
  useAlternativeStyle = false
}) => {
  return (
    <motion.div
      className={`absolute ${position} ${className}`}
      initial={{ y: -50, opacity: 0 }}
      animate={{ y: 0, opacity: 1 }}
      transition={{ duration: 0.8, delay: animationDelay, type: useAlternativeStyle ? "default" : "spring" }}
    >
      <motion.div 
        className={`${useAlternativeStyle ? 'w-[600px]' : 'w-64'} bg-[#141824] rounded-lg flex flex-col shadow-lg overflow-hidden
          ${simpleStyle ? 'bg-opacity-0' : ''}`}
        animate={{ 
          boxShadow: simpleStyle ? 'none' : [`0 0 0px rgba(${color}, 0)`, `0 0 15px rgba(${color}, 0.25)`, `0 0 0px rgba(${color}, 0)`]
        }}
        transition={{ duration: 3, repeat: Infinity }}
      >
        {simpleStyle ? (
          <SimpleBox 
            title={title}
            subtitle={subtitle}
            iconType={iconType}
            color={color}
          />
        ) : useAlternativeStyle ? (
          <AlternativeBox
            title={title}
            iconType={iconType}
            subBoxes={subBoxes}
          />
        ) : (
          <ComplexBox
            title={title}
            iconType={iconType}
            subBoxes={subBoxes}
          />
        )}
      </motion.div>
    </motion.div>
  );
};

export default BoxContainer;
