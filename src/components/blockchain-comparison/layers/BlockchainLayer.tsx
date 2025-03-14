
import React from 'react';
import { motion } from "framer-motion";
import { Blockchain } from '../data/blockchains';

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
          
          {/* X1 logo centered */}
          {blockchain.id === 'x1' ? (
            <image 
              href={blockchain.logo} 
              x={blockchain.x - 40} 
              y={blockchain.y - 10} 
              width="80" 
              height="20" 
              className={blockchain.logoClass}
            />
          ) : (
            <>
              {/* Logo image */}
              <image 
                href={blockchain.logo} 
                x={blockchain.x - 20} 
                y={blockchain.y - 20} 
                width="40" 
                height="40" 
                className={blockchain.logoClass}
              />
              
              {/* Special positioning for specific blockchains to match the reference image */}
              {blockchain.id === 'tron' || blockchain.id === 'ethereum' ? (
                <text 
                  x={blockchain.x + 25} 
                  y={blockchain.y + 5} 
                  textAnchor="start" 
                  fill="#E2E8F0" 
                  fontSize="16"
                  className="font-medium"
                >
                  {blockchain.name}
                </text>
              ) : blockchain.id === 'xrp' ? (
                <text 
                  x={blockchain.x} 
                  y={blockchain.y - 25} 
                  textAnchor="middle" 
                  fill="#E2E8F0" 
                  fontSize="16"
                  className="font-medium"
                >
                  {blockchain.name}
                </text>
              ) : (
                <text 
                  x={blockchain.x} 
                  y={blockchain.y + 35} 
                  textAnchor="middle" 
                  fill="#E2E8F0" 
                  fontSize="16"
                  className="font-medium"
                >
                  {blockchain.name}
                </text>
              )}
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
