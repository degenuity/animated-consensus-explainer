
export interface ConnectionLabel {
  x: string;
  y: string;
  text: string;
  variant?: "default" | "highlighted" | "subdued";
}

export interface ConnectionProps {
  id: string;
  path: string;
  color: string;
  dotPosition?: {
    x: string;
    y: string;
  };
  animationIndex?: number;
  animateMotion?: boolean;
  animationDuration?: number;
  animationDirection?: "left" | "right" | "up" | "down";
  label?: ConnectionLabel;
  renderAsDefinition?: boolean;
  renderOrder?: 'foreground' | 'background';
}
