
import React from 'react';
import { motion } from 'framer-motion';
import { SubItem } from './types';

interface SubItemRendererProps {
  item: SubItem & { 
    isHeader?: boolean; 
    isSubHeader?: boolean;
    smallerText?: boolean; // Added property for smaller text size
  };
  index: number;
  x: number;
  y: number;
  yOffset: number;
  width: number;
  height: number;
  isNested?: boolean;
}

const SubItemRenderer: React.FC<SubItemRendererProps> = ({
  item,
  index,
  x,
  y,
  yOffset,
  width,
  height,
  isNested = false
}) => {
  // Instead of using name and fill which don't exist, use text and other properties that do exist in SubItem
  const { text, desc, color, isHeader, isSubHeader, smallerText } = item;
  
  // Font size classes based on header type and smallerText flag
  let titleClass = "text-white font-medium";
  if (isHeader) {
    // Use smaller text size if smallerText flag is true
    titleClass = smallerText ? "text-white text-sm font-medium" : "text-white font-medium";
  } else if (isSubHeader) {
    titleClass = "text-white text-sm";
  } else {
    titleClass = "text-white text-xs";
  }
  
  // Calculate final y position with offset
  const finalY = y + yOffset;
  
  // Determine border and background styling
  const borderStyle = isHeader 
    ? { border: `1px solid ${color || '#374151'}` }
    : { border: `1px solid ${color || '#374151'}60` };
  
  // Use a consistent background without the 'fill' property
  const bgStyle = { background: 'rgba(17, 24, 39, 0.7)' };
  
  // Animation delay based on index
  const animDelay = index * 0.1 + 0.3;
  
  return (
    <motion.foreignObject
      x={x}
      y={finalY}
      width={width}
      height={height}
      initial={{ opacity: 0, y: -5 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.3, delay: animDelay }}
    >
      <div 
        className="h-full p-2 rounded"
        style={{ ...borderStyle, ...bgStyle }}
      >
        <div className={titleClass}>{text}</div>
        {desc && <div className="text-gray-300 text-xs mt-1">{desc}</div>}
      </div>
    </motion.foreignObject>
  );
};

export default SubItemRenderer;
