
import React from 'react';
import { motion } from "framer-motion";
import { TrendingUp } from "lucide-react";

const InflationBox = () => (
  <motion.div
    initial={{ opacity: 0, y: 30 }}
    animate={{ opacity: 1, y: 0 }}
    transition={{ duration: 0.6 }}
    className="w-full"
  >
    <div className="bg-blue-500 text-white p-4 rounded-lg shadow-lg h-full flex flex-col items-center justify-center">
      <TrendingUp className="mb-2 h-6 w-6" />
      <div className="text-2xl font-semibold">inflation</div>
      <div className="text-sm opacity-90">token issuance</div>
    </div>
  </motion.div>
);

export default InflationBox;
