
import React, { useState, useEffect } from 'react';

// Simple test component to safely render in place of BLSStageOne
const BLSTest = () => {
  const [isReady, setIsReady] = useState(false);
  
  useEffect(() => {
    // Delay rendering the component slightly to ensure the DOM is fully ready
    const timer = setTimeout(() => {
      setIsReady(true);
    }, 100);
    
    return () => clearTimeout(timer);
  }, []);
  
  return (
    <div className="p-4 border-2 border-blue-500 rounded-md min-h-[300px] relative">
      <div className="absolute top-0 left-0 bg-blue-800 text-white text-xs px-2 py-1">
        BLS Visualization
      </div>
      
      <div className="flex items-center justify-center h-full">
        {isReady ? (
          <div className="text-center p-4">
            <h3 className="text-xl text-blue-300 mb-2">BLS Signature Aggregation</h3>
            <p className="text-blue-100 mb-4">
              A cryptographic technique that allows multiple signatures to be combined into a single signature.
            </p>
            <div className="grid grid-cols-3 gap-2 mt-4">
              {[1, 2, 3].map((i) => (
                <div key={i} className="bg-blue-900/50 p-2 rounded-md text-blue-200 text-sm">
                  Node {i}
                </div>
              ))}
            </div>
          </div>
        ) : (
          <div className="text-yellow-300">Preparing visualization...</div>
        )}
      </div>
    </div>
  );
};

export default BLSTest;
