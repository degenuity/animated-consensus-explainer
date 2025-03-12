
import React from 'react';
import { BLSStageOne } from '@/components/consensus/bls/stages';

// Simple test component to verify BLSStageOne loads correctly
const BLSTest = () => {
  console.log('🔍 BLSTest rendering');
  
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
};

export default BLSTest;
