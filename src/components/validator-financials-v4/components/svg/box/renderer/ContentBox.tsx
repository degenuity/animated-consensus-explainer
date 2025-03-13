
import React from 'react';
import { SubItem } from '../types';
import { PlusIcon } from 'lucide-react';

interface ContentBoxProps {
  item: SubItem & { 
    isHeader?: boolean; 
    isSubHeader?: boolean;
    smallerText?: boolean;
  };
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
  // Determine text size based on properties
  const getTextSize = () => {
    if (item.smallerText) return 'text-sm';
    if (item.isHeader) return 'text-lg';
    return 'text-sm';
  };

  const textColor = item.color ? `text-[${item.color}]` : `text-white`;
  const borderColor = item.color ? `border-[${item.color}]` : 'border-blue-500/20';
  
  return (
    <foreignObject 
      key={`content-${index}`}
      x={adjustedX}
      y={y + yOffset}
      width={adjustedWidth}
      height={itemHeight}
    >
      <div 
        className={`h-full w-full flex flex-col justify-center px-3 py-2 
          border ${borderColor} bg-[#141824] rounded 
          ${isNested ? 'bg-opacity-70' : ''}`}
      >
        <div className={`flex items-center ${item.isHeader ? 'mb-0.5' : ''}`}>
          <div className={`${getTextSize()} ${textColor} font-medium`}>
            {item.text}
          </div>
          {hasPlus && (
            <PlusIcon className="ml-1 h-4 w-4 text-gray-400" />
          )}
        </div>
        {item.desc && (
          <div className="text-xs text-gray-400 mt-1">
            {item.desc}
          </div>
        )}
      </div>
    </foreignObject>
  );
};

export default ContentBox;
