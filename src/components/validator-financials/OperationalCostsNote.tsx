
import React from 'react';
import { motion } from "framer-motion";

const OperationalCostsNote = () => (
  <motion.div
    initial={{ opacity: 0, y: 20 }}
    animate={{ opacity: 1, y: 0 }}
    transition={{ duration: 0.7, delay: 0.6 }}
    className="text-center"
  >
    <div className="bg-gray-900/70 border border-gray-700 p-4 rounded-lg inline-block">
      <div className="text-white font-medium mb-1">Minimal operational costs</div>
      <div className="text-sm text-gray-300">
        Voting transactions on X1 are free, keeping operational expenses at minimum.
      </div>
    </div>
  </motion.div>
);

export default OperationalCostsNote;
