import { CHART_TOP, CHART_BOTTOM, CHART_LEFT, CHART_RIGHT } from './constants';

export interface GridLine {
  type: 'horizontal' | 'vertical';
  x?: number;
  y?: number;
  x1?: number;
  y1?: number;
  x2?: number;
  y2?: number;
  animate?: boolean;
  animationDelay?: number;
  className?: string;
}

// Grid lines that define the chart structure - keeping only essential dividers
export const gridLines: GridLine[] = [
  // Horizontal grid lines for section divisions only
  { 
    type: 'horizontal', 
    y: 250, 
    x1: CHART_LEFT, 
    x2: CHART_RIGHT, 
    animate: true,
    animationDelay: 0.2,
    className: 'stroke-gray-600/30 stroke-[1px]'
  },
  { 
    type: 'horizontal', 
    y: 500, 
    x1: CHART_LEFT, 
    x2: CHART_RIGHT, 
    animate: true,
    animationDelay: 0.3,
    className: 'stroke-gray-600/30 stroke-[1px]' 
  },
  { 
    type: 'horizontal', 
    y: CHART_BOTTOM, 
    x1: CHART_LEFT, 
    x2: CHART_RIGHT, 
    animate: true,
    animationDelay: 0.4,
    className: 'stroke-gray-500 stroke-[1.5px]' 
  },
  
  // Only keeping left and right boundary lines
  { 
    type: 'vertical', 
    x: CHART_LEFT, 
    y1: CHART_TOP, 
    y2: CHART_BOTTOM, 
    animate: true,
    animationDelay: 0.1,
    className: 'stroke-gray-500 stroke-[1.5px]' 
  },
  { 
    type: 'vertical', 
    x: CHART_RIGHT, 
    y1: CHART_TOP, 
    y2: CHART_BOTTOM, 
    animate: true,
    animationDelay: 0.1,
    className: 'stroke-gray-500 stroke-[1.5px]' 
  }
];
