
import React from 'react';
import { motion } from "framer-motion";
import { TrendingUp, TrendingDown, BarChart3, PieChart, LineChart } from "lucide-react";

const BoxAnimation = () => {
  return (
    <div className="flex flex-col items-center py-12">
      {/* Top row with blue, grey and yellow boxes */}
      <div className="flex justify-center gap-4 items-center mb-12">
        {/* Blue Box */}
        <motion.div
          initial={{ opacity: 0, x: -30 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.6 }}
          className="w-48 h-48"
        >
          <div className="bg-blue-500 text-white p-6 rounded-lg shadow-lg h-full flex flex-col items-center justify-center">
            <TrendingUp className="mb-4 h-8 w-8" />
            <div className="text-xl font-semibold">Blue Box</div>
            <div className="text-sm opacity-90 mt-2">First Element</div>
          </div>
        </motion.div>

        {/* Grey Box 1 */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.2 }}
          className="w-32 h-32"
        >
          <div className="bg-gray-500 text-white p-4 rounded-lg shadow-lg h-full flex flex-col items-center justify-center">
            <BarChart3 className="mb-2 h-6 w-6" />
            <div className="text-sm font-semibold">Grey 1</div>
          </div>
        </motion.div>

        {/* Grey Box 2 */}
        <motion.div
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.3 }}
          className="w-32 h-32"
        >
          <div className="bg-gray-600 text-white p-4 rounded-lg shadow-lg h-full flex flex-col items-center justify-center">
            <PieChart className="mb-2 h-6 w-6" />
            <div className="text-sm font-semibold">Grey 2</div>
          </div>
        </motion.div>

        {/* Grey Box 3 */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.4 }}
          className="w-32 h-32"
        >
          <div className="bg-gray-700 text-white p-4 rounded-lg shadow-lg h-full flex flex-col items-center justify-center">
            <LineChart className="mb-2 h-6 w-6" />
            <div className="text-sm font-semibold">Grey 3</div>
          </div>
        </motion.div>

        {/* Yellow Box */}
        <motion.div
          initial={{ opacity: 0, x: 30 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.6, delay: 0.5 }}
          className="w-48 h-48"
        >
          <div className="bg-yellow-500 text-white p-6 rounded-lg shadow-lg h-full flex flex-col items-center justify-center">
            <TrendingDown className="mb-4 h-8 w-8" />
            <div className="text-xl font-semibold">Yellow Box</div>
            <div className="text-sm opacity-90 mt-2">Second Element</div>
          </div>
        </motion.div>
      </div>

      {/* Bottom row with pink boxes */}
      <div className="flex justify-center gap-12 items-center">
        {/* Pink Box 1 */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.6 }}
          className="w-48 h-40"
        >
          <div className="bg-pink-500 text-white p-6 rounded-lg shadow-lg h-full flex flex-col items-center justify-center">
            <BarChart3 className="mb-4 h-8 w-8" />
            <div className="text-xl font-semibold">Pink Box 1</div>
            <div className="text-sm opacity-90 mt-2">Additional Element</div>
          </div>
        </motion.div>

        {/* Pink Box 2 */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.7 }}
          className="w-48 h-40"
        >
          <div className="bg-fuchsia-500 text-white p-6 rounded-lg shadow-lg h-full flex flex-col items-center justify-center">
            <PieChart className="mb-4 h-8 w-8" />
            <div className="text-xl font-semibold">Pink Box 2</div>
            <div className="text-sm opacity-90 mt-2">Additional Element</div>
          </div>
        </motion.div>
      </div>
    </div>
  );
};

export default BoxAnimation;
