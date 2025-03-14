
export interface ConnectionProps {
  id: string;
  path: string;
  color: string;
  animationIndex: number;
  dotPosition?: {
    x: string;
    y: string;
  };
  animationDirection?: 'right' | 'left' | 'up' | 'down';
  animateMotion?: boolean;
  animationDuration?: number;
  renderOrder: 'background' | 'foreground';
  renderAsDefinition?: boolean;
  label?: string;
  labelPosition?: {
    x: number;
    y: number;
  };
}
