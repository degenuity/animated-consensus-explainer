
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
  Database,
  CircleDollarSign
} from 'lucide-react';

interface SubItem {
  text: string;
  desc?: string;
  color?: string;
  hasPlus?: boolean;
  isHeader?: boolean;
  isSubHeader?: boolean;
  subItems?: SubItem[];
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
  subitems?: (string | SubItem)[];
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
      case 'block-rewards': return <CircleDollarSign size={22} className="text-blue-400" />;
      case 'profitability': return <Percent size={22} className="text-blue-400" />;
      default: return null;
    }
  };
  
  // Process subitems to uniform format
  const processedSubitems = subitems.map(item => {
    if (typeof item === 'string') {
      return { text: item };
    }
    return item;
  });
  
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

  // Calculate total items including nested subitems
  let totalItemsHeight = 0;
  let yOffset = 60; // Start after header
  
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
      {processedSubitems.map((item, idx) => {
        const { text, desc, color: itemColor, hasPlus, isHeader, isSubHeader, subItems } = item as SubItem;
        const itemHeight = desc ? 45 : 40;
        
        // Handle header and subItems
        const renderItem = (
          <motion.g
            key={`subitem-${idx}`}
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 1.2 + idx * 0.1 }}
          >
            <rect
              x={x + 10}
              y={y + yOffset}
              width={width - 20}
              height={itemHeight}
              rx="4"
              fill={isHeader ? "#1a1f31" : "transparent"}
              stroke={itemColor ? itemColor : (isHeader ? "#F2C44C" : color)}
              strokeWidth="1"
            />
            <foreignObject 
              x={x + 10} 
              y={y + yOffset} 
              width={width - 20} 
              height={itemHeight}
            >
              {desc ? (
                <div className="flex flex-col justify-center h-full px-4">
                  <div className={`text-sm ${itemColor ? '' : 'text-blue-400'}`} style={itemColor ? { color: itemColor } : {}}>
                    {text}
                  </div>
                  <div className="text-gray-400 text-xs">{desc}</div>
                </div>
              ) : (
                <div className={`flex items-center h-full px-4 ${isHeader ? 'text-amber-400 font-medium' : isSubHeader ? 'text-white font-medium' : 'text-white'}`}>
                  {text}
                </div>
              )}
            </foreignObject>
            
            {hasPlus && (
              <foreignObject 
                x={x + width / 2}
                y={y + yOffset + 20}
                width="20" 
                height="20"
              >
                <div className="flex items-center justify-center h-full text-gray-400">+</div>
              </foreignObject>
            )}
          </motion.g>
        );
        
        // Update y offset for next item
        const currentYOffset = yOffset;
        yOffset += itemHeight + 10;
        
        // If this item has subitems, render them too
        if (subItems && subItems.length > 0) {
          return (
            <React.Fragment key={`item-group-${idx}`}>
              {renderItem}
              
              {/* Render subheader and subitems with indent */}
              {subItems.map((subItem, subIdx) => {
                const subItemHeight = subItem.desc ? 45 : 40;
                const isSubHeader = subIdx === 0;
                
                const subItemComponent = (
                  <motion.g
                    key={`subitem-${idx}-${subIdx}`}
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1 }}
                    transition={{ delay: 1.5 + (idx + subIdx) * 0.1 }}
                  >
                    <rect
                      x={x + 20}
                      y={y + yOffset}
                      width={width - 40}
                      height={subItemHeight}
                      rx="4"
                      fill={isSubHeader ? "#1f2937" : "transparent"}
                      stroke={isSubHeader ? "#10B981" : "#2563eb"}
                      strokeWidth="1"
                    />
                    <foreignObject 
                      x={x + 20} 
                      y={y + yOffset} 
                      width={width - 40} 
                      height={subItemHeight}
                    >
                      <div className={`flex items-center h-full px-4 ${isSubHeader ? 'text-white font-medium' : 'text-white'}`}>
                        {subItem.text}
                      </div>
                    </foreignObject>
                  </motion.g>
                );
                
                // Update y offset for next item
                yOffset += subItemHeight + 10;
                
                return subItemComponent;
              })}
            </React.Fragment>
          );
        }
        
        return renderItem;
      })}
    </motion.g>
  );
};

export default BoxComponent;
