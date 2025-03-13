
export interface SubItem {
  text: string;
  id?: string;
  desc?: string;
  color?: string;
  isHeader?: boolean;
  isSubHeader?: boolean;
  isHorizontal?: boolean;
  isOperator?: boolean;
  hasPlus?: boolean; // Adding the missing hasPlus property
  subItems?: SubItem[];
  position?: {
    x?: number;
    y?: number;
  };
}

export interface BoxProps {
  x: number;
  y: number;
  width: number;
  height: number;
  title: string;
  icon: 'inflation' | 'deflation' | 'internal-rewards' | 'total-stake' | 'network-costs' | 'block-production' | 'profitability' | 'block-rewards';
  subtitle?: string;
  color: string;
  animationIndex: number;
  subitems?: SubItem[];
  simpleStyle?: boolean;
  isExplanation?: boolean;
  borderColor?: string;
}

// Animation variants for boxes
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
