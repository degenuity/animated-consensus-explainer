
import React from 'react';
import { motion } from "framer-motion";

const Title = () => (
  <motion.h2
    initial={{ opacity: 0, y: -20 }}
    animate={{ opacity: 1, y: 0 }}
    transition={{ duration: 0.8 }}
    className="text-3xl font-bold mb-10 text-center text-white"
  >
    X1 Validator Financials
  </motion.h2>
);

export default Title;
