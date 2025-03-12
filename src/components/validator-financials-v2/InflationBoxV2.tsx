
import React from 'react';
import { motion } from "framer-motion";
import { TrendingUp } from "lucide-react";

const InflationBoxV2 = () => (
  <div className="w-full h-full">
    <div className="bg-blue-500 text-white p-6 rounded-lg shadow-lg h-full flex flex-col items-center justify-center">
      <TrendingUp className="mb-2 h-6 w-6" />
      <div className="text-xl font-semibold">inflation</div>
      <div className="text-sm opacity-90">token issuance</div>
    </div>
  </div>
);

export default InflationBoxV2;
