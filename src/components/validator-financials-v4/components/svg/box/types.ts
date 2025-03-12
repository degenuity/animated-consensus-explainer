
import React from 'react';

export interface SubItem {
  text: string;
  desc?: string;
  color?: string;
  hasPlus?: boolean;
  isHeader?: boolean;
  isSubHeader?: boolean;
  id?: string;
  subItems?: SubItem[];
  isHorizontal?: boolean;
  isOperator?: boolean;
}

export interface BoxProps {
  x: number;
  y: number;
  width: number;
  height: number;
  title: string;
  icon: 'inflation' | 'deflation' | 'internal-rewards' | 'total-stake' | 'network-costs' | 'block-production' | 'block-rewards' | 'profitability' | 'info';
  subtitle?: string;
  color: string;
  animationIndex: number;
  subitems?: (string | SubItem)[];
  simpleStyle?: boolean;
  borderColor?: string;
  isExplanation?: boolean;
}

export const boxVariants = {
  hidden: { opacity: 0 },
  visible: (i: number) => ({
    opacity: 1,
    transition: {
      delay: i * 0.2,
      duration: 0.5
    }
  })
};

