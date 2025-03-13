
import React from 'react';
import { motion } from 'framer-motion';
import { SubItem } from '../types';

interface ContentBoxProps {
  item: SubItem;
  index: number;
  adjustedX: number;
  y: number;
  yOffset: number;
  adjustedWidth: number;
  itemHeight: number;
  isNested: boolean;
  hasPlus: boolean;
}

const ContentBox: React.FC<ContentBoxProps> = ({
  item,
  index,
  adjustedX,
  y,
  yOffset,
  adjustedWidth,
  itemHeight,
  isNested,
  hasPlus
}) => {
  const { text, desc, id, isHorizontal } = item;
  
  // Adjust stroke color for nested items to match parent's color when in network costs box
  const strokeColor = isNested && id && (id === "priority-fees" || id === "mev") 
    ? "#10B981" 
    : item.color || "#3B82F6";
  
  // For block rewards title, use a different style
  const isBlockRewards = id === "block-rewards";
  
  // Adjust text styles based on the element role
  const fontSize = isNested ? "text-sm" : (isBlockRewards ? "text-lg" : "text-sm");
  const fontWeight = isBlockRewards ? "font-medium" : "font-medium";
  
  // Set text alignment - left align block rewards and nested items, center align horizontal items
  const textAlign = isHorizontal ? "text-center" : "text-left";

  return (
    <motion.g
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ delay: 1.2 + index * 0.1 }}
    >
      <rect
        x={adjustedX}
        y={y + yOffset}
        width={adjustedWidth}
        height={itemHeight}
        rx="4"
        fill="transparent"
        stroke={strokeColor}
        strokeWidth="1.5"
      />
      <foreignObject 
        x={adjustedX} 
        y={y + yOffset} 
        width={adjustedWidth} 
        height={itemHeight}
      >
        <div className={`flex flex-col justify-center h-full px-3 ${textAlign}`}>
          {desc ? (
            <>
              <div className={`${fontSize} ${fontWeight}`} style={{ color: strokeColor }}>
                {text}
              </div>
              <div className="text-gray-400 text-xs mt-1">{desc}</div>
            </>
          ) : (
            <div className={`flex items-center h-full ${fontWeight} ${fontSize} ${isHorizontal ? 'justify-center' : ''}`} style={{ color: strokeColor }}>
              {text}
            </div>
          )}
        </div>
      </foreignObject>
      
      {hasPlus && (
        <foreignObject 
          x={adjustedX + adjustedWidth - 40}
          y={y + yOffset + (itemHeight/2) - 10}
          width="20" 
          height="20"
        >
          <div className="flex items-center justify-center h-full text-gray-400 text-lg">+</div>
        </foreignObject>
      )}
    </motion.g>
  );
};

export default ContentBox;
