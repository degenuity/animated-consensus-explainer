
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
  
  // Check if this is the block rewards parent or a nested item
  const isBlockRewards = id === "block-rewards";
  const isPriorityFeeOrMEV = id === "priority-fees" || id === "mev";
  
  // Make the block rewards text size match other header sizes - changed from xs to sm
  const textSize = isBlockRewards ? "text-sm" : (isNested ? "text-sm" : "text-sm");
  // Add medium font weight for block rewards to match other headers
  const fontWeight = isBlockRewards ? "font-medium" : "font-medium";
  
  // Always left-align text regardless of whether it's horizontal or not
  const textAlign = "text-left";
  
  // Special styling for block rewards - force it to have white text without overrides
  const textColor = isBlockRewards ? "text-white !important" : `text-${strokeColor}`;
  // Position the block rewards text in the upper left instead of center
  const verticalAlignment = isBlockRewards ? "items-start" : "justify-center";
  // Add padding to align text properly
  const paddingTop = isBlockRewards ? "pt-2" : "";

  console.log(`Rendering ContentBox for: ${id} with color: ${strokeColor}, yOffset: ${yOffset}`);

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
              <div className={`${textSize} ${fontWeight}`} style={{ color: isBlockRewards ? 'white' : strokeColor }}>
                {text}
              </div>
              <div className="text-gray-400 text-xs mt-1">{desc}</div>
            </>
          ) : (
            <div 
              className={`flex items-center ${paddingTop} ${isBlockRewards ? 'h-auto self-start' : 'h-full'} ${textSize} ${fontWeight} justify-start`} 
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
