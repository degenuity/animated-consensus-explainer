
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
  
  // Use the item's color directly
  const strokeColor = item.color || "#3B82F6";
  
  // Determine if this is the block rewards parent or a nested item
  const isBlockRewards = id === "block-rewards";
  const isPriorityFeeOrMEV = id === "priority-fees" || id === "mev";
  
  // Adjust text styles based on the element role
  const fontSize = isNested ? "text-sm" : (isBlockRewards ? "text-lg" : "text-sm");
  const fontWeight = "font-medium";
  
  // Always left-align text regardless of whether it's horizontal or not
  const textAlign = "text-left";
  
  // Special styling for block rewards
  const textColor = isBlockRewards ? "text-white" : `text-${strokeColor}`;
  // Position the block rewards text in the upper left instead of center
  const verticalAlignment = isBlockRewards ? "items-start" : "justify-center";
  // Adjust the padding for block rewards to align it with "network usage costs"
  const paddingTop = isBlockRewards ? "pt-2" : "";

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
        <div className={`flex flex-col ${verticalAlignment} h-full px-3 ${textAlign}`}>
          {desc ? (
            <>
              <div className={`${fontSize} ${fontWeight}`} style={{ color: isBlockRewards ? 'white' : strokeColor }}>
                {text}
              </div>
              <div className="text-gray-400 text-xs mt-1">{desc}</div>
            </>
          ) : (
            <div 
              className={`flex items-center ${paddingTop} ${isBlockRewards ? 'h-auto self-start' : 'h-full'} ${fontWeight} ${fontSize} justify-start`} 
              style={{ color: isBlockRewards ? 'white' : strokeColor }}
            >
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
