
import React from 'react';
import { motion } from 'framer-motion';

interface ConnectionLineProps {
  from: {
    top: string;
    left: string;
  };
  to: {
    top: string;
    left: string;
  };
  color: string;
  delay?: number;
  isCurved?: boolean;
  curveDirection?: 'left' | 'right';
}

const ConnectionLine: React.FC<ConnectionLineProps> = ({ 
  from, 
  to, 
  color, 
  delay = 0,
  isCurved = false,
  curveDirection = 'right'
}) => {
  // For straight lines
  if (!isCurved) {
    const isHorizontal = from.top === to.top;
    const isVertical = from.left === to.left;
    
    // Calculate dimensions
    const width = isHorizontal ? `calc(${to.left} - ${from.left})` : '2px';
    const height = isVertical ? `calc(${to.top} - ${from.top})` : '2px';
    
    return (
      <motion.div
        className="absolute"
        style={{
          top: from.top,
          left: from.left,
          width: width,
          height: height,
          background: 'transparent'
        }}
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 0.3, delay }}
      >
        <svg width="100%" height="100%" className="overflow-visible">
          <line 
            x1={isHorizontal ? "0" : "50%"} 
            y1={isVertical ? "0" : "50%"} 
            x2={isHorizontal ? "100%" : "50%"} 
            y2={isVertical ? "100%" : "50%"} 
            stroke={color} 
            strokeWidth="2" 
            strokeDasharray="4 2"
          />
          
          <motion.circle
            cx={isHorizontal ? "50%" : "50%"}
            cy={isVertical ? "50%" : "50%"}
            r="4"
            fill={color}
            animate={{ 
              x: isHorizontal ? ['-50%', '50%'] : 0,
              y: isVertical ? ['-50%', '50%'] : 0,
              opacity: [0, 1, 0]
            }}
            transition={{ 
              duration: 3,
              repeat: Infinity,
              ease: "linear",
              delay
            }}
          />
        </svg>
      </motion.div>
    );
  }
  
  // For curved lines
  return (
    <motion.div
      className="absolute"
      style={{
        top: from.top,
        left: from.left,
        width: '100px',
        height: '100px',
      }}
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ duration: 0.3, delay }}
    >
      <svg width="100%" height="100%" className="overflow-visible" style={{ position: 'absolute', top: 0, left: 0 }}>
        <path
          d={`M 0,0 C ${curveDirection === 'right' ? '20,30 40,50' : '-20,30 -40,50'} ${curveDirection === 'right' ? `calc(${to.left} - ${from.left}),calc(${to.top} - ${from.top})` : `calc(${from.left} - ${to.left}),calc(${to.top} - ${from.top})`}`}
          fill="none"
          stroke={color}
          strokeWidth="2"
          strokeDasharray="4 2"
        />
        
        <motion.circle
          cx="0"
          cy="0"
          r="4"
          fill={color}
          animate={{
            offsetDistance: ["0%", "100%"]
          }}
          transition={{ 
            duration: 3,
            repeat: Infinity,
            ease: "linear",
            delay
          }}
          style={{
            offsetPath: `path('M 0,0 C ${curveDirection === 'right' ? '20,30 40,50' : '-20,30 -40,50'} ${curveDirection === 'right' ? `calc(${to.left} - ${from.left}),calc(${to.top} - ${from.top})` : `calc(${from.left} - ${to.left}),calc(${to.top} - ${from.top})`}')`
          }}
        />
      </svg>
    </motion.div>
  );
};

export default ConnectionLine;
