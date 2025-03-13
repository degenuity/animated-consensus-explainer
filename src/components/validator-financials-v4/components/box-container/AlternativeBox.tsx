
import React from 'react';
import IconSelector from './IconSelector';
import SubBoxRenderer, { SubBoxProps } from './SubBox';

interface AlternativeBoxProps {
  title: string;
  iconType: 'inflation' | 'internal-rewards' | 'total-stake' | 'network-costs' | 'deflation' | 'block-production' | 'profitability';
  subBoxes?: SubBoxProps[];
}

const AlternativeBox: React.FC<AlternativeBoxProps> = ({ title, iconType, subBoxes = [] }) => {
  return (
    <>
      <div className="p-4 flex items-center gap-3">
        <div className="flex justify-center items-center rounded-full p-2">
          <IconSelector iconType={iconType} />
        </div>
        <div className="text-xl font-normal text-white lowercase">{title}</div>
      </div>
      
      <div className="p-4 grid grid-cols-2 gap-4">
        {subBoxes.map((box, index) => (
          <SubBoxRenderer key={`box-${index}`} box={box} index={index} />
        ))}
      </div>
    </>
  );
};

export default AlternativeBox;
