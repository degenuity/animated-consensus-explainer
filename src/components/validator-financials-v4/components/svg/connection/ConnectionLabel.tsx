
import React from 'react';

interface ConnectionLabelProps {
  x: string | number;
  y: string | number;
  text: string;
  variant?: "default" | "highlighted" | "subdued";
}

export const ConnectionLabel: React.FC<ConnectionLabelProps> = ({
  x,
  y,
  text,
  variant = "default"
}) => {
  // Set styles based on variant
  const getStyles = () => {
    switch (variant) {
      case "highlighted":
        return {
          circleFill: "#2563eb",
          circleStroke: "#1e40af",
          textColor: "white"
        };
      case "subdued":
        return {
          circleFill: "#6b7280",
          circleStroke: "#4b5563",
          textColor: "#f3f4f6"
        };
      default:
        return {
          circleFill: "#1f2937", 
          circleStroke: "#111827",
          textColor: "white"
        };
    }
  };

  const styles = getStyles();

  return (
    <g>
      <circle
        cx={x}
        cy={y}
        r="15"
        fill={styles.circleFill}
        stroke={styles.circleStroke}
        strokeWidth="1.5"
        opacity="0.9"
      />
      <text
        x={x}
        y={y}
        textAnchor="middle"
        dominantBaseline="middle"
        fill={styles.textColor}
        fontSize="12"
        fontWeight="600"
      >
        {text}
      </text>
    </g>
  );
};

export type { ConnectionLabelProps };
