
import React from 'react';

interface ConnectionLabelProps {
  label: string;
  position: { x: number; y: number };
  color: string;
}

export const ConnectionLabel: React.FC<ConnectionLabelProps> = ({
  label,
  position,
  color
}) => {
  return (
    <g>
      <circle
        cx={position.x}
        cy={position.y}
        r="15"
        fill="#1f2937"
        stroke={color}
        strokeWidth="1.5"
        opacity="0.9"
      />
      <text
        x={position.x}
        y={position.y}
        textAnchor="middle"
        dominantBaseline="middle"
        fill="white"
        fontSize="12"
        fontWeight="600"
      >
        {label}
      </text>
    </g>
  );
};
