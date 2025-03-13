
import { useCallback, useRef } from 'react';

export const useDiagramDebug = () => {
  const svgRef = useRef<SVGSVGElement>(null);
  
  const findPositionById = useCallback((id: string) => {
    if (!svgRef.current) return null;
    
    const element = svgRef.current.querySelector(`[data-id="${id}"]`);
    if (!element) return null;
    
    const boundingBox = element.getBoundingClientRect();
    const svgBoundingBox = svgRef.current.getBoundingClientRect();
    
    // Calculate relative position
    return {
      id,
      element,
      position: {
        top: boundingBox.top - svgBoundingBox.top,
        left: boundingBox.left - svgBoundingBox.left,
        width: boundingBox.width,
        height: boundingBox.height,
        bottom: boundingBox.bottom - svgBoundingBox.top,
        right: boundingBox.right - svgBoundingBox.left
      }
    };
  }, []);
  
  return svgRef;
};
