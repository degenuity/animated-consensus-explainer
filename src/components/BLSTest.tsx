
import React, { useState, useEffect } from 'react';
import { BLSStageOne } from '@/components/consensus/bls/stages';

// Simple test component to verify BLSStageOne loads correctly
const BLSTest = () => {
  const [isReady, setIsReady] = useState(false);
  
  useEffect(() => {
    // Delay rendering the component slightly to ensure the DOM is fully ready
    const timer = setTimeout(() => {
      setIsReady(true);
    }, 100);
    
    return () => clearTimeout(timer);
  }, []);
  
  if (!isReady) {
    return (
      <div className="p-4 border-2 border-yellow-500 rounded-md min-h-[300px] flex items-center justify-center">
        <div className="text-yellow-300">Preparing BLS visualization...</div>
      </div>
    );
  }
  
  try {
    return (
      <div className="p-4 border-2 border-blue-500 rounded-md min-h-[300px] relative">
        <div className="absolute top-0 left-0 bg-blue-800 text-white text-xs px-2 py-1">
          BLSStageOne Test
        </div>
        
        <div className="flex items-center justify-center h-full">
          <BLSStageOne
            activeSection={1}
            activeFormula={0}
            showX1Label={true}
          />
        </div>
      </div>
    );
  } catch (error) {
    console.error('Error rendering BLSStageOne:', error);
    return (
      <div className="p-4 border-2 border-red-500 rounded-md min-h-[300px] flex flex-col items-center justify-center">
        <div className="text-red-300 mb-2">Error loading BLS visualization</div>
        <div className="text-xs text-red-400">{error.message}</div>
      </div>
    );
  }
};

export default BLSTest;
