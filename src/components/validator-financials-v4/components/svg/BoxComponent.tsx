
import React from 'react';
import { motion } from 'framer-motion';
import { 
  TrendingUp, 
  TrendingDown, 
  BarChart3, 
  Lock, 
  ServerCrash, 
  Box, 
  Percent, 
  Database 
} from 'lucide-react';

interface SubItem {
  text: string;
  desc?: string;
  color?: string;
  hasPlus?: boolean;
}

interface BoxProps {
  x: number;
  y: number;
  width: number;
  height: number;
  title: string;
  icon: 'inflation' | 'deflation' | 'internal-rewards' | 'total-stake' | 'network-costs' | 'block-production' | 'block-rewards' | 'profitability';
  subtitle?: string;
  color: string;
  animationIndex: number;
  subitems?: string[] | SubItem[];
  simpleStyle?: boolean;
}

const BoxComponent: React.FC<BoxProps> = ({ 
  x, 
  y, 
  width, 
  height, 
  title, 
  icon, 
  subtitle, 
  color, 
  animationIndex, 
  subitems = [],
  simpleStyle = false
}) => {
  // Animation variants for boxes
  const boxVariants = {
    hidden: { opacity: 0 },
    visible: (i: number) => ({
      opacity: 1,
      transition: {
        delay: i * 0.2,
        duration: 0.5
      }
    })
  };
  
  const getIcon = () => {
    switch (icon) {
      case 'inflation': return <TrendingUp size={24} />;
      case 'deflation': return <TrendingDown size={24} />;
      case 'internal-rewards': return <BarChart3 size={22} className="text-blue-400" />;
      case 'total-stake': return <Lock size={22} className="text-blue-400" />;
      case 'network-costs': return <ServerCrash size={22} className="text-orange-400" />;
      case 'block-production': return <Box size={22} className="text-blue-400" />;
      case 'block-rewards': return <Database size={22} className="text-blue-400" />;
      case 'profitability': return <Percent size={22} className="text-blue-400" />;
      default: return null;
    }
  };
  
  // Simple box style (like Inflation and Deflation boxes)
  if (simpleStyle) {
    return (
      <motion.g
        custom={animationIndex}
        variants={boxVariants}
        initial="hidden"
        animate="visible"
      >
        <rect
          x={x}
          y={y}
          width={width}
          height={height}
          rx="4"
          fill={`rgb(${color})`}
        />
        <foreignObject x={x} y={y} width={width} height={height}>
          <div className="flex flex-col items-center justify-center text-white h-full p-4">
            {getIcon()}
            <div className="text-lg font-semibold">{title}</div>
            {subtitle && <div className="text-sm opacity-70">{subtitle}</div>}
          </div>
        </foreignObject>
      </motion.g>
    );
  }
  
  // Complex box with subitems
  return (
    <motion.g
      custom={animationIndex}
      variants={boxVariants}
      initial="hidden"
      animate="visible"
    >
      <rect
        x={x}
        y={y}
        width={width}
        height={height}
        rx="4"
        fill="#0f172a"
        stroke="#1e293b"
        strokeWidth="1"
      />
      <foreignObject x={x} y={y} width={width} height="50">
        <div className="flex items-center gap-2 p-3 border-b border-[#1e293b]">
          {getIcon()}
          <div className="text-white font-medium">{title}</div>
        </div>
      </foreignObject>
      
      {/* Render subitems */}
      {subitems.map((item, idx) => {
        // Handle both string items and object items
        const isObjectItem = typeof item !== 'string';
        const itemText = isObjectItem ? (item as SubItem).text : item;
        const itemDesc = isObjectItem ? (item as SubItem).desc : undefined;
        const itemColor = isObjectItem ? (item as SubItem).color : undefined;
        const hasPlus = isObjectItem ? (item as SubItem).hasPlus : false;
        
        return (
          <motion.g
            key={`subitem-${idx}`}
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 1.2 + idx * 0.1 }}
          >
            <rect
              x={x + 10}
              y={y + 60 + idx * (itemDesc ? 55 : 50)}
              width={width - 20}
              height={itemDesc ? 45 : 40}
              rx="4"
              fill="transparent"
              stroke={itemColor ? itemColor : color}
              strokeWidth="1"
            />
            <foreignObject 
              x={x + 10} 
              y={y + 60 + idx * (itemDesc ? 55 : 50)} 
              width={width - 20} 
              height={itemDesc ? 45 : 40}
            >
              {itemDesc ? (
                <div className="flex flex-col justify-center h-full px-4">
                  <div className={`text-sm ${itemColor ? '' : 'text-blue-400'}`} style={itemColor ? { color: itemColor } : {}}>
                    {itemText}
                  </div>
                  <div className="text-gray-400 text-xs">{itemDesc}</div>
                </div>
              ) : (
                <div className="flex items-center h-full px-4 text-white">
                  {itemText}
                </div>
              )}
            </foreignObject>
            
            {hasPlus && (
              <foreignObject 
                x={x + width / 2}
                y={y + 60 + idx * 55 + 20}
                width="20" 
                height="20"
              >
                <div className="flex items-center justify-center h-full text-gray-400">+</div>
              </foreignObject>
            )}
          </motion.g>
        );
      })}
    </motion.g>
  );
};

export default BoxComponent;
