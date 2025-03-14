
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

// Grid lines that define the chart structure
export const gridLines: GridLine[] = [
  // Horizontal grid lines (sections)
  { 
    type: 'horizontal', 
    y: 250, 
    x1: CHART_LEFT, 
    x2: CHART_RIGHT, 
    animate: true,
    animationDelay: 0.2,
    className: 'stroke-gray-600 stroke-[1px] stroke-dashed'
  },
  { 
    type: 'horizontal', 
    y: 500, 
    x1: CHART_LEFT, 
    x2: CHART_RIGHT, 
    animate: true,
    animationDelay: 0.3,
    className: 'stroke-gray-600 stroke-[1px] stroke-dashed' 
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
  
  // Vertical grid lines
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
    x: 200, 
    y1: CHART_TOP, 
    y2: CHART_BOTTOM, 
    animate: true,
    animationDelay: 0.3,
    className: 'stroke-gray-600 stroke-[1px] stroke-dashed' 
  },
  { 
    type: 'vertical', 
    x: 350, 
    y1: CHART_TOP, 
    y2: CHART_BOTTOM, 
    animate: true,
    animationDelay: 0.4,
    className: 'stroke-gray-600 stroke-[1px] stroke-dashed' 
  },
  { 
    type: 'vertical', 
    x: 500, 
    y1: CHART_TOP, 
    y2: CHART_BOTTOM, 
    animate: true,
    animationDelay: 0.5,
    className: 'stroke-gray-600 stroke-[1px] stroke-dashed' 
  },
  { 
    type: 'vertical', 
    x: 700, 
    y1: CHART_TOP, 
    y2: CHART_BOTTOM, 
    animate: true,
    animationDelay: 0.6,
    className: 'stroke-gray-600 stroke-[1px] stroke-dashed' 
  },
  { 
    type: 'vertical', 
    x: 900, 
    y1: CHART_TOP, 
    y2: CHART_BOTTOM, 
    animate: true,
    animationDelay: 0.7,
    className: 'stroke-gray-600 stroke-[1px] stroke-dashed' 
  },
  { 
    type: 'vertical', 
    x: 1200, 
    y1: CHART_TOP, 
    y2: CHART_BOTTOM, 
    animate: true,
    animationDelay: 0.8,
    className: 'stroke-gray-600 stroke-[1px] stroke-dashed' 
  }
];
