
import React from 'react';
import { motion } from 'framer-motion';

const ExplanationComponent: React.FC = () => {
  return (
    <motion.g
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ delay: 3 }}
    >
      <foreignObject x="250" y="600" width="700" height="130">
        <div className="text-center text-gray-400 text-sm mt-4">
          <div className="bg-[#0f172a] p-3 rounded-md border border-[#1e293b]">
            <div className="font-medium text-gray-300 mb-1">Minimal operational costs</div>
            <p>Voting transactions on X1 are free, keeping operational expenses at minimum.</p>
          </div>
        </div>
      </foreignObject>
    </motion.g>
  );
};

export default ExplanationComponent;
