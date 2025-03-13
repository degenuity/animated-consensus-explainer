
import React from 'react';
import { SubItem } from './types';
import OperatorSymbol from './renderer/OperatorSymbol';
import ContentBox from './renderer/ContentBox';

interface SubItemRendererProps {
  item: SubItem;
  index: number;
  x: number;
  y: number;
  yOffset: number;
  width: number;
  height?: number;
  isNested?: boolean;
}

const SubItemRenderer: React.FC<SubItemRendererProps> = ({
  item,
  index,
  x,
  y,
  yOffset,
  width,
  height,
  isNested = false
}) => {
  // Even smaller padding for horizontal items
  const horizontalPadding = item.isHorizontal ? 2 : 12;
  const adjustedWidth = width - (horizontalPadding * 2);
  const adjustedX = x + horizontalPadding;
  const itemHeight = height || (item.desc ? 50 : 40);
  
  // For operator symbols, use minimal space
  if (item.isOperator) {
    return (
      <OperatorSymbol 
        item={item}
        index={index}
        adjustedX={adjustedX}
        y={y}
        yOffset={yOffset}
        adjustedWidth={adjustedWidth}
        itemHeight={itemHeight}
      />
    );
  }
  
  // For content boxes (everything that's not an operator)
  return (
    <ContentBox 
      item={item}
      index={index}
      adjustedX={adjustedX}
      y={y}
      yOffset={yOffset}
      adjustedWidth={adjustedWidth}
      itemHeight={itemHeight}
      isNested={isNested}
      hasPlus={item.hasPlus || false}
    />
  );
};

export default SubItemRenderer;
