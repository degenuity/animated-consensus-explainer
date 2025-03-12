
import React from 'react';
import { motion } from "framer-motion";
import { TrendingUp } from "lucide-react";

const InflationBox = () => (
  <motion.div
    initial={{ opacity: 0, y: 30 }}
    animate={{ opacity: 1, y: 0 }}
    transition={{ duration: 0.6 }}
    className="lg:col-span-2 lg:col-start-1"
  >
    <div className="bg-blue-500 text-white p-4 rounded-lg shadow-lg h-[100px] flex flex-col items-center justify-center">
      <TrendingUp className="mb-2 h-6 w-6" />
      <div className="text-xl font-semibold">Inflation</div>
      <div className="text-sm opacity-75">token issuance</div>
    </div>
  </motion.div>
);

export default InflationBox;
