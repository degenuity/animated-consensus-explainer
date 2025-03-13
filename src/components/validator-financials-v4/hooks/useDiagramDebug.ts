
import { useRef, useEffect } from 'react';
import { viewBoxWidth, viewBoxHeight } from '../components/svg/data/constants';

// Hook for debugging diagram SVG elements
export const useDiagramDebug = () => {
  const svgRef = useRef<SVGSVGElement>(null);
  
  useEffect(() => {
    if (svgRef.current) {
      console.log("DiagramSVG mounted - debugging enabled");
      
      // Get SVG dimensions
      const svgRect = svgRef.current.getBoundingClientRect();
      console.log("SVG dimensions:", {
        width: svgRect.width,
        height: svgRect.height,
        viewBox: `0 0 ${viewBoxWidth} ${viewBoxHeight}`
      });
    }
  }, []);
  
  return svgRef;
};

export default useDiagramDebug;
