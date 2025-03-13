
import React from 'react';
import BoxIcon from './BoxIcon';

interface TitleBarProps {
  x: number;
  y: number;
  width: number;
  title: string;
  icon: string;
}

const TitleBar: React.FC<TitleBarProps> = ({ x, y, width, title, icon }) => {
  return (
    <foreignObject x={x} y={y} width={width} height="50">
      <div className="flex items-center gap-2 p-3 border-b border-[#1e293b]">
        <BoxIcon icon={icon as any} />
        <div className="text-white font-medium">{title}</div>
      </div>
    </foreignObject>
  );
};

export default TitleBar;
