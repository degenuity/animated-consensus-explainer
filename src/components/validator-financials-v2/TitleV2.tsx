
import React from 'react';
import { motion } from "framer-motion";

const TitleV2 = () => (
  <motion.h2
    initial={{ opacity: 0, y: -20 }}
    animate={{ opacity: 1, y: 0 }}
    transition={{ duration: 0.8 }}
    className="text-4xl font-bold mb-6 text-white"
  >
    X1 Validator Financials V2
  </motion.h2>
);

export default TitleV2;
