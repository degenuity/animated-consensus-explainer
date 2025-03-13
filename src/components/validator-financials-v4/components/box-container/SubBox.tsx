
import React from 'react';
import { PlusIcon } from 'lucide-react';

export interface SubBoxProps {
  title: string;
  description?: string;
  fullWidth?: boolean;
  customColor?: 'yellow' | 'green' | 'red' | 'blue';
  hasAddIcon?: boolean;
  subBoxes?: SubBoxProps[];
}

interface SubBoxRendererProps {
  box: SubBoxProps;
  index: number;
}

const SubBoxRenderer: React.FC<SubBoxRendererProps> = ({ box, index }) => {
  // Special case for block rewards in network costs
  const isBlockRewards = box.title === "block rewards";
  
  console.log(`SubBoxRenderer for: ${box.title}, isBlockRewards: ${isBlockRewards}`);
  
  const getColorClass = (customColor?: string) => {
    if (!customColor) return 'border-blue-500/20 bg-[#1a1f31]';
    
    switch (customColor) {
      case 'yellow':
        return 'border-yellow-500/30 bg-[#1d1a12]';
      case 'green':
        return 'border-green-500/30 bg-[#101d10]';
      case 'red':
        return 'border-red-500/30 bg-[#1d1212]';
      case 'blue':
        return 'border-blue-500/20 bg-[#1a1f31]';
      default:
        return 'border-blue-500/20 bg-[#1a1f31]';
    }
  };

  const getTextColorClass = (customColor?: string) => {
    if (!customColor) return 'text-blue-400';
    
    switch (customColor) {
      case 'yellow':
        return 'text-yellow-400';
      case 'green':
        return 'text-green-400';
      case 'red':
        return 'text-red-400';
      case 'blue':
        return 'text-blue-400';
      default:
        return 'text-blue-400';
    }
  };
  
  if (isBlockRewards && box.subBoxes && box.subBoxes.length > 0) {
    return (
      <div 
        key={index}
        className={`col-span-2 p-4 rounded border border-blue-500/20 bg-[#1a1f31]`}
      >
        <div className="text-white text-xs mb-3">{box.title}</div>
        <div className="space-y-3 pl-3">
          {box.subBoxes.map((subBox, subIndex) => (
            <div 
              key={`subbox-${subIndex}`}
              className="p-3 rounded border border-blue-500/20 bg-[#1a1f31]"
            >
              <div className="text-blue-400 text-sm">{subBox.title}</div>
            </div>
          ))}
        </div>
      </div>
    );
  }
  
  return (
    <div 
      key={index}
      className={`p-4 rounded border ${getColorClass(box.customColor)} 
        ${box.fullWidth ? 'col-span-2' : 'col-span-1'}`}
    >
      <div className={`${getTextColorClass(box.customColor)} ${isBlockRewards ? 'text-xs' : 'text-lg'} mb-2 flex items-center`}>
        {box.title}
        {box.hasAddIcon && <PlusIcon size={16} className="ml-2 text-gray-400" />}
      </div>
      {box.description && <div className="text-gray-400 text-sm">{box.description}</div>}
    </div>
  );
};

export default SubBoxRenderer;
