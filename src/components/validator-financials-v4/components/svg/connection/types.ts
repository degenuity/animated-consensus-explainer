
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
  renderOrder?: 'background' | 'foreground';
  renderAsDefinition?: boolean;
  label?: {
    text: string;
    x: string | number;
    y: string | number;
    variant?: "default" | "highlighted" | "subdued";
  };
  labelPosition?: {
    x: number;
    y: number;
  };
}
