
import { CSSProperties } from 'react';

export interface AnimatedLineProps {
  top: string;
  left: string;
  width?: string;
  height?: string;
  color: string;
  animationDirection: 'x' | 'y';
  animationValues: [number, number, number];
  duration: number;
}

export interface IndicatorProps {
  top: string;
  left: string;
  text: string;
  style?: CSSProperties;
}

export interface OperatorProps {
  top: string;
  left: string;
  operator: string;
}
