
export interface SubItem {
  text: string;
  id?: string;
  desc?: string;
  color?: string;
  isHeader?: boolean;
  isSubHeader?: boolean;
  isHorizontal?: boolean;
  isOperator?: boolean;
  subItems?: SubItem[];
  position?: {
    x?: number;
    y?: number;
  };
}
