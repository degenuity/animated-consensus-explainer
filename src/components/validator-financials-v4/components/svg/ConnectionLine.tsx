
import React from 'react';
import { motion } from 'framer-motion';
import { useConnectionAnimation } from './hooks/useConnectionAnimation';

interface ConnectionSVGProps {
  path: string;
  color: string;
  animationIndex: number;
  dotPosition?: { x: string; y: string };
  label?: string;
  labelPosition?: { x: number; y: number };
  animationDirection?: "right" | "left" | "up" | "down";
  animateMotion?: boolean;
  id?: string;
  renderAsDefinition?: boolean;
  renderOrder?: "background" | "foreground";
}

const ConnectionLine: React.FC<ConnectionSVGProps> = ({ 
  path, 
  color, 
  animationIndex,
  dotPosition,
  label,
  labelPosition,
  animationDirection,
  animateMotion,
  id,
  renderAsDefinition = false,
  renderOrder = "background"
}) => {
  const { lineVariants, dotVariants } = useConnectionAnimation({
    animationIndex
  });
  
  // If we're rendering as a definition for later use with <use>, return a <defs> element
  if (renderAsDefinition) {
    return (
      <defs>
        <g id={`connection-${id}`}>
          <path
            d={path}
            stroke={color}
            strokeWidth="2"
            fill="none"
          />
          
          {dotPosition && !animateMotion && (
            <circle
              cx={dotPosition.x}
              cy={dotPosition.y}
              r="5"
              fill={color}
            />
          )}
          
          {animateMotion && (
            <circle
              r="5"
              fill={color}
            >
              <animateMotion
                path={path}
                dur="1.5s"
                repeatCount="indefinite"
                rotate="auto"
              />
              <animate
                attributeName="r"
                values="3;5;3"
                dur="0.8s"
                repeatCount="indefinite"
              />
              <animate
                attributeName="opacity"
                values="0.7;1;0.7"
                dur="0.8s"
                repeatCount="indefinite"
              />
            </circle>
          )}
          
          {label && labelPosition && (
            <g>
              <circle
                cx={labelPosition.x}
                cy={labelPosition.y}
                r="15"
                fill="#1f2937"
                stroke={color}
                strokeWidth="1.5"
                opacity="0.9"
              />
              <text
                x={labelPosition.x}
                y={labelPosition.y}
                textAnchor="middle"
                dominantBaseline="middle"
                fill="white"
                fontSize="12"
                fontWeight="600"
              >
                {label}
              </text>
            </g>
          )}
        </g>
      </defs>
    );
  }
  
  // Regular rendering with animations
  return (
    <g data-id={id}>
      <motion.path
        d={path}
        stroke={color}
        strokeWidth="2"
        fill="none"
        custom={animationIndex}
        variants={lineVariants}
        initial="hidden"
        animate="visible"
      />
      
      {dotPosition && !animateMotion && (
        <motion.circle
          cx={dotPosition.x}
          cy={dotPosition.y}
          r="5"
          fill={color}
          custom={animationIndex}
          variants={dotVariants}
          initial="hidden"
          animate="visible"
          style={animationDirection ? {
            animation: `moveDot${animationDirection.charAt(0).toUpperCase() + animationDirection.slice(1)} 3s linear infinite`
          } : undefined}
        />
      )}
      
      {animateMotion && (
        <motion.circle
          r="5"
          fill={color}
          custom={animationIndex}
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ 
            delay: animationIndex * 0.3 + 0.5,
            duration: 0.3
          }}
        >
          <animateMotion
            path={path}
            dur="1.5s"
            repeatCount="indefinite"
            rotate="auto"
          />
          <animate
            attributeName="r"
            values="3;5;3"
            dur="0.8s"
            repeatCount="indefinite"
          />
          <animate
            attributeName="opacity"
            values="0.7;1;0.7"
            dur="0.8s"
            repeatCount="indefinite"
          />
        </motion.circle>
      )}
      
      {label && labelPosition && (
        <g>
          <circle
            cx={labelPosition.x}
            cy={labelPosition.y}
            r="15"
            fill="#1f2937"
            stroke={color}
            strokeWidth="1.5"
            opacity="0.9"
          />
          <text
            x={labelPosition.x}
            y={labelPosition.y}
            textAnchor="middle"
            dominantBaseline="middle"
            fill="white"
            fontSize="12"
            fontWeight="600"
          >
            {label}
          </text>
        </g>
      )}
    </g>
  );
};

export default ConnectionLine;
