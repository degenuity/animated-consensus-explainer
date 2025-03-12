
import React, { useEffect, useRef } from 'react';
import { motion } from "framer-motion";
import { DollarSign, PercentSquare, Clock, ShieldCheck, Wallet, ArrowRight } from "lucide-react";

interface FinancialStageThreeProps {
  isActive: boolean;
}

const FinancialStageThree: React.FC<FinancialStageThreeProps> = ({ isActive }) => {
  const transitionTimeoutRef = useRef<NodeJS.Timeout | null>(null);
  const mounted = useRef(true);

  useEffect(() => {
    mounted.current = true;
    
    if (isActive) {
      // Set a timeout to transition back to stage one
      transitionTimeoutRef.current = setTimeout(() => {
        if (!mounted.current) return;
        
        // Dispatch event to signal completion of stage three
        const event = new CustomEvent('financial-v4-stage-three-complete');
        document.dispatchEvent(event);
      }, 6000); // 6 second transition before restarting
    }
    
    return () => {
      mounted.current = false;
      
      if (transitionTimeoutRef.current) {
        clearTimeout(transitionTimeoutRef.current);
        transitionTimeoutRef.current = null;
      }
    };
  }, [isActive]);

  if (!isActive) return null;
  
  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      className="absolute inset-0"
    >
      <div className="relative h-full w-full">
        {/* Left side - Block Production Eligibility */}
        <motion.div
          className="absolute left-[5%] top-[80px]"
          initial={{ x: -50, opacity: 0 }}
          animate={{ x: 0, opacity: 1 }}
          transition={{ duration: 0.8, type: "spring" }}
        >
          <motion.div 
            className="w-52 h-44 bg-gradient-to-br from-blue-600 to-blue-400 rounded-xl flex flex-col items-center justify-center p-4 shadow-lg"
            animate={{ 
              boxShadow: ["0 0 0px rgba(37, 99, 235, 0)", "0 0 20px rgba(37, 99, 235, 0.5)", "0 0 0px rgba(37, 99, 235, 0)"]
            }}
            transition={{ duration: 3, repeat: Infinity }}
          >
            <ShieldCheck size={32} className="text-white mb-2" />
            <div className="text-lg font-bold text-white">Block Production</div>
            <div className="text-xs text-white/80 mt-1 text-center">
              Eligibility determined by stake level and network participation
            </div>
          </motion.div>
        </motion.div>
        
        {/* Right side - Validator Profitability */}
        <motion.div
          className="absolute right-[5%] top-[80px]"
          initial={{ x: 50, opacity: 0 }}
          animate={{ x: 0, opacity: 1 }}
          transition={{ duration: 0.8, delay: 0.3, type: "spring" }}
        >
          <motion.div 
            className="w-52 h-44 bg-gradient-to-br from-green-600 to-emerald-400 rounded-xl flex flex-col items-center justify-center p-4 shadow-lg"
            animate={{ 
              boxShadow: ["0 0 0px rgba(22, 163, 74, 0)", "0 0 20px rgba(22, 163, 74, 0.5)", "0 0 0px rgba(22, 163, 74, 0)"]
            }}
            transition={{ duration: 3, repeat: Infinity }}
          >
            <DollarSign size={32} className="text-white mb-2" />
            <div className="text-lg font-bold text-white">Validator Profit</div>
            <div className="text-xs text-white/80 mt-1 text-center">
              Economic sustainability for network participants
            </div>
          </motion.div>
        </motion.div>
        
        {/* Connecting line between left and right */}
        <motion.div
          className="absolute"
          style={{
            top: '102px',
            left: 'calc(5% + 52px)',
            width: 'calc(90% - 104px)',
            height: '20px'
          }}
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.3, delay: 1.0 }}
        >
          <svg width="100%" height="100%" className="overflow-visible">
            {/* Horizontal line */}
            <line 
              x1="0" 
              y1="10" 
              x2="100%" 
              y2="10" 
              stroke="#6366F1" 
              strokeWidth="2" 
              strokeDasharray="4 2"
            />
            
            {/* Animated circles */}
            <motion.circle
              cx="20%"
              cy="10"
              r="4"
              fill="#6366F1"
              animate={{ 
                x: ['0%', '100%'],
                opacity: [0, 1, 0],
              }}
              transition={{ 
                duration: 4,
                repeat: Infinity,
                times: [0, 0.8, 1],
                ease: "easeInOut"
              }}
            />
            
            <motion.circle
              cx="60%"
              cy="10"
              r="4"
              fill="#6366F1"
              animate={{ 
                x: ['0%', '100%'],
                opacity: [0, 1, 0],
              }}
              transition={{ 
                duration: 4,
                repeat: Infinity,
                times: [0, 0.8, 1],
                ease: "easeInOut",
                delay: 2
              }}
            />
          </svg>
          
          {/* Arrow in middle */}
          <motion.div
            className="absolute"
            style={{ left: '50%', top: '0', transform: 'translateX(-50%)' }}
            animate={{ x: ['-5px', '5px', '-5px'] }}
            transition={{ duration: 1.5, repeat: Infinity }}
          >
            <ArrowRight className="text-indigo-400" size={20} />
          </motion.div>
        </motion.div>
        
        {/* Four factors in bottom grid */}
        {[
          { icon: <PercentSquare size={24} />, text: "APR Return", color: "from-blue-600 to-blue-400", left: "10%", top: "250px" },
          { icon: <Clock size={24} />, text: "Uptime", color: "from-indigo-600 to-indigo-400", left: "35%", top: "250px" },
          { icon: <Wallet size={24} />, text: "Operating Costs", color: "from-purple-600 to-purple-400", left: "60%", top: "250px" },
          { icon: <ShieldCheck size={24} />, text: "Security Level", color: "from-rose-600 to-rose-400", left: "85%", top: "250px" }
        ].map((factor, idx) => (
          <motion.div
            key={`factor-${idx}`}
            className="absolute"
            style={{ 
              left: factor.left, 
              top: factor.top,
              transform: 'translateX(-50%)'
            }}
            initial={{ y: 50, opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            transition={{ duration: 0.6, delay: 0.7 + idx * 0.2, type: "spring" }}
          >
            <motion.div 
              className={`w-24 h-24 bg-gradient-to-br ${factor.color} rounded-lg flex flex-col items-center justify-center p-2 shadow-lg`}
              whileHover={{ scale: 1.05 }}
              animate={{ 
                boxShadow: ["0 0 0px rgba(124, 58, 237, 0)", "0 0 15px rgba(124, 58, 237, 0.3)", "0 0 0px rgba(124, 58, 237, 0)"]
              }}
              transition={{ duration: 2, repeat: Infinity }}
            >
              <div className="text-white mb-1">{factor.icon}</div>
              <div className="text-xs font-bold text-white text-center">{factor.text}</div>
            </motion.div>
          </motion.div>
        ))}
        
        {/* Connections from factors to boxes */}
        {[
          { from: { x: "10%", y: "250px" }, to: { x: "calc(5% + 26px)", y: "124px" }, color: "#3B82F6" },
          { from: { x: "35%", y: "250px" }, to: { x: "calc(5% + 26px)", y: "124px" }, color: "#6366F1" },
          { from: { x: "60%", y: "250px" }, to: { x: "calc(95% - 26px)", y: "124px" }, color: "#8B5CF6" },
          { from: { x: "85%", y: "250px" }, to: { x: "calc(95% - 26px)", y: "124px" }, color: "#F43F5E" }
        ].map((line, idx) => (
          <motion.div
            key={`line-${idx}`}
            className="absolute"
            style={{
              top: 0,
              left: 0,
              width: '100%',
              height: '100%',
              zIndex: -1
            }}
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.3, delay: 1.5 + idx * 0.2 }}
          >
            <svg width="100%" height="100%" className="absolute top-0 left-0">
              <motion.path
                d={`M ${line.from.x} ${line.from.y} 
                    C ${line.from.x} ${parseInt(line.from.y) - 50},
                      ${line.to.x} ${parseInt(line.to.y) + 50},
                      ${line.to.x} ${line.to.y}`}
                stroke={line.color}
                strokeWidth="2"
                fill="transparent"
                strokeDasharray="4 2"
              />
              
              <motion.circle
                r="4"
                fill={line.color}
                opacity="0"
              >
                <motion.animateMotion
                  path={`M ${line.from.x} ${line.from.y} 
                        C ${line.from.x} ${parseInt(line.from.y) - 50},
                          ${line.to.x} ${parseInt(line.to.y) + 50},
                          ${line.to.x} ${line.to.y}`}
                  dur="3s"
                  repeatCount="indefinite"
                  rotate="auto"
                >
                  <animate
                    attributeName="opacity"
                    values="0;1;0"
                    dur="3s"
                    repeatCount="indefinite"
                    keyTimes="0;0.5;1"
                  />
                </motion.animateMotion>
              </motion.circle>
            </svg>
          </motion.div>
        ))}
        
        {/* Bottom explanation text */}
        <motion.div
          className="absolute left-1/2 bottom-12 transform -translate-x-1/2 bg-black/30 px-4 py-2 rounded-lg"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 2.5 }}
        >
          <div className="text-sm text-white/90 text-center max-w-lg">
            X1's validator economics balance block production rewards against operational requirements
            <br />
            <span className="text-emerald-400 font-medium">Sustainable profitability</span> ensures long-term network health
          </div>
        </motion.div>
      </div>
    </motion.div>
  );
};

export default FinancialStageThree;
