
export interface ConnectionProps {
  path: string;
  color: string;
  animationIndex: number;
  dotPosition?: { x: string; y: string };
  label?: string;
  labelPosition?: { x: number; y: number };
  animationDirection?: "right" | "left" | "up" | "down";
  animateMotion?: boolean;
  id?: string;
  renderAsDefinition?: boolean;
  renderOrder?: "background" | "foreground";
}
