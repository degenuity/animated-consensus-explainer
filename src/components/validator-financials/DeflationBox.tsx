
import React from 'react';
import { motion } from "framer-motion";
import { TrendingDown } from "lucide-react";

const DeflationBox = () => (
  <motion.div
    initial={{ opacity: 0, y: 30 }}
    animate={{ opacity: 1, y: 0 }}
    transition={{ duration: 0.6, delay: 0.2 }}
    className="w-full"
  >
    <div className="bg-yellow-500 text-white p-4 rounded-lg shadow-lg h-full flex flex-col items-center justify-center">
      <TrendingDown className="mb-2 h-6 w-6" />
      <div className="text-2xl font-semibold">Deflation</div>
      <div className="text-sm opacity-90">token burns</div>
    </div>
  </motion.div>
);

export default DeflationBox;
