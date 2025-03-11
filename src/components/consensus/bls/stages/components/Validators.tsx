
import React from 'react';
import { motion } from "framer-motion";
import { User } from "lucide-react";

interface ValidatorsProps {
  count: number;
}

export const Validators: React.FC<ValidatorsProps> = ({ count }) => {
  return (
    <div className="absolute inset-0 flex items-center justify-center">
      {Array.from({ length: count }).map((_, i) => {
        const angle = (i * (360 / count)) * (Math.PI / 180);
        const radius = 120;
        const x = Math.cos(angle) * radius;
        const y = Math.sin(angle) * radius;
        
        return (
          <motion.div
            key={`agg-validator-${i}`}
            className="absolute"
            style={{
              transform: `translate(${x}px, ${y}px)`,
            }}
          >
            <div className="w-8 h-8 rounded-full bg-slate-800 border border-indigo-500/30 flex items-center justify-center opacity-70">
              <User size={12} className="text-indigo-400/70" />
            </div>
          </motion.div>
        );
      })}
    </div>
  );
};
