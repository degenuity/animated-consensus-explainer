
import React from 'react';
import { motion } from "framer-motion";
import { TrendingDown } from "lucide-react";

const DeflationBoxV2 = () => (
  <div className="w-full h-full">
    <div className="bg-yellow-500 text-white p-6 rounded-lg shadow-lg h-full flex flex-col items-center justify-center">
      <TrendingDown className="mb-2 h-6 w-6" />
      <div className="text-xl font-semibold">deflation</div>
      <div className="text-sm opacity-90">token burns</div>
    </div>
  </div>
);

export default DeflationBoxV2;
