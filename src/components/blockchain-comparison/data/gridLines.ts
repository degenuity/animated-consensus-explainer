
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
  // Horizontal grid lines for section divisions
  { 
    type: 'horizontal', 
    y: 240, 
    x1: CHART_LEFT, 
    x2: CHART_RIGHT, 
    animate: true,
    animationDelay: 0.2,
    className: 'stroke-gray-500/30 stroke-[1px] stroke-dasharray-2'
  },
  { 
    type: 'horizontal', 
    y: 480, 
    x1: CHART_LEFT, 
    x2: CHART_RIGHT, 
    animate: true,
    animationDelay: 0.3,
    className: 'stroke-gray-500/30 stroke-[1px] stroke-dasharray-2' 
  },
  
  // Vertical grid lines at each x-value position
  { 
    type: 'vertical', 
    x: 260, 
    y1: CHART_TOP, 
    y2: CHART_BOTTOM, 
    animate: true,
    animationDelay: 0.1,
    className: 'stroke-gray-500/30 stroke-[1px] stroke-dasharray-2' 
  },
  { 
    type: 'vertical', 
    x: 330, 
    y1: CHART_TOP, 
    y2: CHART_BOTTOM, 
    animate: true,
    animationDelay: 0.1,
    className: 'stroke-gray-500/30 stroke-[1px] stroke-dasharray-2' 
  },
  { 
    type: 'vertical', 
    x: 280, 
    y1: CHART_TOP, 
    y2: CHART_BOTTOM, 
    animate: true,
    animationDelay: 0.1,
    className: 'stroke-gray-500/30 stroke-[1px] stroke-dasharray-2' 
  },
  { 
    type: 'vertical', 
    x: 350, 
    y1: CHART_TOP, 
    y2: CHART_BOTTOM, 
    animate: true,
    animationDelay: 0.1,
    className: 'stroke-gray-500/30 stroke-[1px] stroke-dasharray-2' 
  },
  { 
    type: 'vertical', 
    x: 450, 
    y1: CHART_TOP, 
    y2: CHART_BOTTOM, 
    animate: true,
    animationDelay: 0.1,
    className: 'stroke-gray-500/30 stroke-[1px] stroke-dasharray-2' 
  },
  { 
    type: 'vertical', 
    x: 550, 
    y1: CHART_TOP, 
    y2: CHART_BOTTOM, 
    animate: true,
    animationDelay: 0.1,
    className: 'stroke-gray-500/30 stroke-[1px] stroke-dasharray-2' 
  },
  { 
    type: 'vertical', 
    x: 650, 
    y1: CHART_TOP, 
    y2: CHART_BOTTOM, 
    animate: true,
    animationDelay: 0.1,
    className: 'stroke-gray-500/30 stroke-[1px] stroke-dasharray-2' 
  },
  { 
    type: 'vertical', 
    x: 900, 
    y1: CHART_TOP, 
    y2: CHART_BOTTOM, 
    animate: true,
    animationDelay: 0.1,
    className: 'stroke-gray-500/30 stroke-[1px] stroke-dasharray-2' 
  },
  { 
    type: 'vertical', 
    x: 1150, 
    y1: CHART_TOP, 
    y2: CHART_BOTTOM, 
    animate: true,
    animationDelay: 0.1,
    className: 'stroke-gray-500/30 stroke-[1px] stroke-dasharray-2' 
  },
  { 
    type: 'vertical', 
    x: 1300, 
    y1: CHART_TOP, 
    y2: CHART_BOTTOM, 
    animate: true,
    animationDelay: 0.1,
    className: 'stroke-gray-500/30 stroke-[1px] stroke-dasharray-2' 
  },
  
  // Chart border
  { 
    type: 'vertical', 
    x: CHART_LEFT, 
    y1: CHART_TOP, 
    y2: CHART_BOTTOM, 
    animate: true,
    animationDelay: 0.1,
    className: 'stroke-gray-500 stroke-[1.5px]' 
  }
];
