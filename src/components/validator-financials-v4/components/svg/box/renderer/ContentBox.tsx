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
  const isBaseFees = id === "base-fees";
  const isTotalValidatorRewards = id === "total-validator-rewards";
  const isOperationalCosts = id === "operational-costs";
  const isDelegatedStake = id === "delegated-stake";
  const isCommission = id === "commission";
  const isStakingRewards = id === "staking-rewards";
  const isOwnStake = id === "own-stake";
  
  // Boxes that need centered text
  const needsCenteredText = 
    isCommission || 
    isStakingRewards || 
    isDelegatedStake || 
    isOwnStake || 
    isPriorityFeeOrMEV || 
    isBaseFees;
  
  // ENHANCED logging for delegated stake box with EXACT coordinates
  if (isDelegatedStake) {
    console.log(`DELEGATED STAKE BOX EXACT COORDINATES: 
      id: ${id}
      x: ${adjustedX}
      y: ${y + yOffset}
      width: ${adjustedWidth}
      height: ${itemHeight}
      left-edge: ${adjustedX}
      left-center: (${adjustedX}, ${y + yOffset + itemHeight/2})
      center: (${adjustedX + adjustedWidth/2}, ${y + yOffset + itemHeight/2})
      absolute-left-center: "${adjustedX} ${y + yOffset + itemHeight/2}"
    `);
  }
  
  // Special logging for commission box
  if (isCommission) {
    console.log(`COMMISSION BOX EXACT COORDINATES: 
      id: ${id}
      x: ${adjustedX}
      y: ${y + yOffset}
      width: ${adjustedWidth}
      height: ${itemHeight}
      right-edge: ${adjustedX + adjustedWidth}
      right-center: (${adjustedX + adjustedWidth}, ${y + yOffset + itemHeight/2})
      center: (${adjustedX + adjustedWidth/2}, ${y + yOffset + itemHeight/2})
    `);
  }
  
  // Special logging for own stake
  if (isOwnStake) {
    console.log(`OWN STAKE BOX EXACT COORDINATES: 
      id: ${id}
      x: ${adjustedX}
      y: ${y + yOffset}
      width: ${adjustedWidth}
      height: ${itemHeight}
      left-center: (${adjustedX}, ${y + yOffset + itemHeight/2})
      center: (${adjustedX + adjustedWidth/2}, ${y + yOffset + itemHeight/2})
    `);
  }
  
  // SUPER DETAILED Enhanced logging for base fees - with exact right edge coordinates
  if (isBaseFees) {
    console.log(`BASE FEES BOX EXACT COORDINATES: 
      id: ${id}
      x: ${adjustedX}
      y: ${y + yOffset}
      width: ${adjustedWidth}
      height: ${itemHeight}
      right-edge: ${adjustedX + adjustedWidth}
      visual-right-edge-exact: ${adjustedX + adjustedWidth + 1.5} // Adding stroke width compensation
      right-center-exact: (${adjustedX + adjustedWidth}, ${y + yOffset + itemHeight/2})
      right-center-with-stroke: (${adjustedX + adjustedWidth + 1.5}, ${y + yOffset + itemHeight/2})
      center: (${adjustedX + adjustedWidth/2}, ${y + yOffset + itemHeight/2})
      bottom: ${y + yOffset + itemHeight}
      visual-bottom: ${y + yOffset + itemHeight + 1.5} // Adding stroke width compensation
      full-details: {x: ${adjustedX}, y: ${y + yOffset}, width: ${adjustedWidth}, height: ${itemHeight}, right: ${adjustedX + adjustedWidth}}
    `);
  }
  
  // Detailed logging for the boxes we're interested in
  if (isTotalValidatorRewards) {
    console.log(`TOTAL VALIDATOR REWARDS BOX: 
      id: ${id}
      x: ${adjustedX}
      y: ${y + yOffset}
      width: ${adjustedWidth}
      height: ${itemHeight}
      top-center: (${adjustedX + adjustedWidth/2}, ${y + yOffset})
      center: (${adjustedX + adjustedWidth/2}, ${y + yOffset + itemHeight/2})
    `);
  }
  
  if (isOperationalCosts) {
    console.log(`OPERATIONAL COSTS BOX: 
      id: ${id}
      x: ${adjustedX}
      y: ${y + yOffset}
      width: ${adjustedWidth}
      height: ${itemHeight}
      top-center: (${adjustedX + adjustedWidth/2}, ${y + yOffset})
      center: (${adjustedX + adjustedWidth/2}, ${y + yOffset + itemHeight/2})
    `);
  }
  
  // Log base fees box coordinates for debugging
  if (isBaseFees) {
    console.log(`Base fees box: x=${adjustedX}, y=${y + yOffset}, width=${adjustedWidth}, height=${itemHeight}, bottom=${y + yOffset + itemHeight}, right-edge=${adjustedX + adjustedWidth}, visual-right-edge=${adjustedX + adjustedWidth + 1.5}`);
  }
  
  // Log block rewards box coordinates for debugging
  if (isBlockRewards) {
    console.log(`Block rewards box: x=${adjustedX}, y=${y + yOffset}, height=${itemHeight}, top=${y + yOffset}, bottom=${y + yOffset + itemHeight}`);
  }
  
  // Make the block rewards text size match other header sizes - changed from xs to sm
  const textSize = isBlockRewards ? "text-sm" : (isNested ? "text-sm" : "text-sm");
  // Add medium font weight for block rewards to match other headers
  const fontWeight = isBlockRewards ? "font-medium" : "font-medium";
  
  // Set text alignment based on whether the box needs centered text
  const textAlign = needsCenteredText ? "text-center" : "text-left";
  
  // Special styling for block rewards - force it to have white text without overrides
  const textColor = isBlockRewards ? "text-white !important" : `text-${strokeColor}`;
  // Position the block rewards text in the upper left instead of center
  const verticalAlignment = isBlockRewards ? "items-start" : "justify-center";
  // Add padding to align text properly
  const paddingTop = isBlockRewards ? "pt-2" : "";

  // Display "MEV" in uppercase for the MEV box
  const displayText = id === "mev" ? "MEV" : text;

  console.log(`Rendering ContentBox for: ${id} with color: ${strokeColor}, yOffset: ${yOffset}`);

  return (
    <motion.g
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ delay: 1.2 + index * 0.1 }}
      data-item-id={id}
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
        data-item-rect={id}
      />
      <foreignObject 
        x={adjustedX} 
        y={y + yOffset} 
        width={adjustedWidth} 
        height={itemHeight}
        data-item-content={id}
      >
        <div className={`flex flex-col ${verticalAlignment} h-full px-3 ${textAlign}`}>
          {desc ? (
            <>
              <div className={`${textSize} ${fontWeight}`} style={{ color: isBlockRewards ? 'white' : strokeColor }}>
                {id === "mev" ? "MEV" : text}
              </div>
              <div className="text-gray-400 text-xs mt-1">{desc}</div>
            </>
          ) : (
            <div 
              className={`flex items-center ${paddingTop} ${isBlockRewards ? 'h-auto self-start' : 'h-full'} ${textSize} ${fontWeight} ${needsCenteredText ? 'justify-center w-full' : 'justify-start'}`} 
              style={{ color: isBlockRewards ? 'white' : strokeColor }}
            >
              {displayText}
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
