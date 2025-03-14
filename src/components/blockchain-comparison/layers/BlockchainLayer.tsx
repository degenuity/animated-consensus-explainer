import React from 'react';
import { motion } from "framer-motion";

interface Blockchain {
  id: string;
  name: string;
  x: number;
  y: number;
  logo: string;
  logoClass?: string;
  animationDelay?: number;
  highlighted?: boolean;
}

interface BlockchainLayerProps {
  blockchains: Blockchain[];
}

const BlockchainLayer: React.FC<BlockchainLayerProps> = ({ blockchains }) => {
  return (
    <g>
      {blockchains.map((blockchain) => (
        <motion.g
          key={blockchain.id}
          initial={{ opacity: 0, scale: 0.8 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ 
            duration: 0.6, 
            delay: blockchain.animationDelay || 0.2,
            type: "spring",
            stiffness: 100
          }}
        >
          {/* Highlight effect for X1 blockchain */}
          {blockchain.highlighted && (
            <motion.circle 
              cx={blockchain.x} 
              cy={blockchain.y} 
              r="40"
              fill="url(#highlight-gradient)"
              initial={{ opacity: 0 }}
              animate={{ opacity: 0.5 }}
              transition={{ duration: 1, delay: blockchain.animationDelay }}
            />
          )}
          
          {/* For X1, keep centered logo */}
          {blockchain.id === 'x1' ? (
            <image 
              href={blockchain.logo} 
              x={blockchain.x - 20} 
              y={blockchain.y - 20} 
              width="40" 
              height="40" 
              className={blockchain.logoClass}
              style={{ 
                transform: `translate(-50%, -50%)`,
                transformOrigin: `${blockchain.x}px ${blockchain.y}px`
              }}
            />
          ) : (
            <>
              {/* Logo image - positioned to the left of name */}
              <image 
                href={blockchain.logo} 
                x={blockchain.x - 50} 
                y={blockchain.y - 10} 
                width="20" 
                height="20" 
                className={blockchain.logoClass}
              />
              
              {/* Name text */}
              <text 
                x={blockchain.x} 
                y={blockchain.y + 5} 
                textAnchor="middle" 
                fill="#E2E8F0" 
                fontSize="12"
                className="font-medium"
              >
                {blockchain.name}
              </text>
            </>
          )}
        </motion.g>
      ))}
      
      {/* Gradient definitions */}
      <defs>
        <radialGradient id="highlight-gradient" cx="50%" cy="50%" r="50%" fx="50%" fy="50%">
          <stop offset="0%" stopColor="#3B82F6" stopOpacity="0.6" />
          <stop offset="100%" stopColor="#3B82F6" stopOpacity="0" />
        </radialGradient>
      </defs>
    </g>
  );
};

export default BlockchainLayer;
