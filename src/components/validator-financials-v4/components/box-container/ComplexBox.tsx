
import React from 'react';
import IconSelector from './IconSelector';
import SubBoxRenderer, { SubBoxProps } from './SubBox';

interface ComplexBoxProps {
  title: string;
  iconType: 'inflation' | 'internal-rewards' | 'total-stake' | 'network-costs' | 'deflation' | 'block-production' | 'profitability';
  subBoxes?: SubBoxProps[];
}

const ComplexBox: React.FC<ComplexBoxProps> = ({ title, iconType, subBoxes = [] }) => {
  return (
    <>
      <div className="p-4 flex items-center gap-3 border-b border-[#2a3349]">
        <div className="flex justify-center items-center rounded-full p-2 bg-[#1a1f31]">
          <IconSelector iconType={iconType} />
        </div>
        <div className="text-xl font-semibold text-white">{title}</div>
      </div>
      
      <div className="p-4 grid grid-cols-2 gap-4">
        {subBoxes.map((box, index) => (
          <SubBoxRenderer key={`box-${index}`} box={box} index={index} />
        ))}
      </div>
    </>
  );
};

export default ComplexBox;
