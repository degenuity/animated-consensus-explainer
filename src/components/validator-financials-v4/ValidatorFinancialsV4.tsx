
import React, { useState, useEffect } from 'react';
import { motion } from "framer-motion";
import { 
  TrendingUp, TrendingDown, Coins, CircleDollarSign, ServerCrash,
  Database, BarChart3, DollarSign, PercentSquare, Clock, ShieldCheck, Wallet
} from "lucide-react";

interface ValidatorFinancialsV4Props {
  autoAdvance?: boolean;
}

const ValidatorFinancialsV4: React.FC<ValidatorFinancialsV4Props> = ({
  autoAdvance = true
}) => {
  const [animationKey, setAnimationKey] = useState(0);
  
  useEffect(() => {
    // Reset animation when component mounts
    setAnimationKey(prev => prev + 1);
  }, []);

  return (
    <motion.div 
      className="w-full relative overflow-hidden bg-slate-900/50 rounded-xl min-h-[700px] flex items-center justify-center"
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ duration: 1 }}
    >
      <div className="max-w-7xl mx-auto px-4 py-8 relative w-full">
        <motion.h2
          initial={{ opacity: 0, y: -10 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="text-2xl font-bold mb-6 text-white text-center"
        >
          X1 Validator Economics
        </motion.h2>

        <div className="relative h-[600px] w-full">
          <div className="absolute inset-0">
            {/* Top Row - Inflation and Deflation */}
            {/* Inflation box */}
            <motion.div
              className="absolute left-[5%] top-[80px]"
              initial={{ y: -50, opacity: 0 }}
              animate={{ y: 0, opacity: 1 }}
              transition={{ duration: 0.8, type: "spring" }}
            >
              <motion.div 
                className="w-52 h-44 bg-gradient-to-br from-blue-600 to-blue-400 rounded-xl flex flex-col items-center justify-center p-4 shadow-lg"
                animate={{ 
                  boxShadow: ["0 0 0px rgba(37, 99, 235, 0)", "0 0 20px rgba(37, 99, 235, 0.5)", "0 0 0px rgba(37, 99, 235, 0)"]
                }}
                transition={{ duration: 3, repeat: Infinity }}
              >
                <TrendingUp size={32} className="text-white mb-2" />
                <motion.div 
                  className="text-lg font-bold text-white"
                  animate={{ scale: [1, 1.05, 1] }}
                  transition={{ duration: 2, repeat: Infinity }}
                >
                  Inflation
                </motion.div>
                <div className="text-sm text-white/80 mt-1">Token Issuance</div>
                <div className="text-xs text-white/70 mt-2 text-center">New tokens created through consensus rewards</div>
              </motion.div>
            </motion.div>

            {/* Deflation box */}
            <motion.div
              className="absolute right-[5%] top-[80px]"
              initial={{ y: -50, opacity: 0 }}
              animate={{ y: 0, opacity: 1 }}
              transition={{ duration: 0.8, delay: 0.3, type: "spring" }}
            >
              <motion.div 
                className="w-52 h-44 bg-gradient-to-br from-amber-600 to-amber-400 rounded-xl flex flex-col items-center justify-center p-4 shadow-lg"
                animate={{ 
                  boxShadow: ["0 0 0px rgba(217, 119, 6, 0)", "0 0 20px rgba(217, 119, 6, 0.5)", "0 0 0px rgba(217, 119, 6, 0)"]
                }}
                transition={{ duration: 3, repeat: Infinity }}
              >
                <TrendingDown size={32} className="text-white mb-2" />
                <motion.div 
                  className="text-lg font-bold text-white"
                  animate={{ scale: [1, 1.05, 1] }}
                  transition={{ duration: 2, repeat: Infinity }}
                >
                  Deflation
                </motion.div>
                <div className="text-sm text-white/80 mt-1">Token Burns</div>
                <div className="text-xs text-white/70 mt-2 text-center">Tokens removed from supply via transaction fees</div>
              </motion.div>
            </motion.div>

            {/* Middle Row - Total Stake, Internal Rewards, Network Costs */}
            {/* Total Stake Box - Center */}
            <motion.div
              className="absolute left-1/2 transform -translate-x-1/2 top-[220px]"
              initial={{ scale: 0 }}
              animate={{ scale: 1 }}
              transition={{ duration: 0.5, delay: 0.6, type: "spring" }}
            >
              <motion.div 
                className="w-52 h-48 bg-gradient-to-br from-violet-600 to-indigo-600 rounded-xl flex flex-col items-center justify-center p-4 shadow-lg"
                animate={{ 
                  boxShadow: ["0 0 0px rgba(124, 58, 237, 0)", "0 0 20px rgba(124, 58, 237, 0.5)", "0 0 0px rgba(124, 58, 237, 0)"]
                }}
                transition={{ duration: 2.5, repeat: Infinity }}
              >
                <Database className="text-white mb-2" size={32} />
                <div className="text-lg font-bold text-white">Total Stake</div>
                <div className="text-sm text-white/80 mt-1">Validator Collateral</div>
                <div className="text-xs text-white/70 mt-2 text-center">
                  Determines network participation and rewards distribution
                </div>
              </motion.div>
            </motion.div>

            {/* Internal Rewards Box - Left */}
            <motion.div
              className="absolute left-[5%] top-[350px]"
              initial={{ x: -50, opacity: 0 }}
              animate={{ x: 0, opacity: 1 }}
              transition={{ duration: 0.8, delay: 0.9, type: "spring" }}
            >
              <motion.div 
                className="w-52 h-44 bg-gradient-to-br from-emerald-600 to-emerald-400 rounded-xl flex flex-col items-center justify-center p-4 shadow-lg"
                animate={{ 
                  boxShadow: ["0 0 0px rgba(5, 150, 105, 0)", "0 0 20px rgba(5, 150, 105, 0.5)", "0 0 0px rgba(5, 150, 105, 0)"]
                }}
                transition={{ duration: 3, repeat: Infinity }}
              >
                <CircleDollarSign size={32} className="text-white mb-2" />
                <div className="text-lg font-bold text-white">Internal Rewards</div>
                <div className="text-xs text-white/80 mt-1 text-center">
                  Consensus participation rewards earned by validators
                </div>
              </motion.div>
            </motion.div>

            {/* Network Usage Costs Box - Right */}
            <motion.div
              className="absolute right-[5%] top-[350px]"
              initial={{ x: 50, opacity: 0 }}
              animate={{ x: 0, opacity: 1 }}
              transition={{ duration: 0.8, delay: 0.9, type: "spring" }}
            >
              <motion.div 
                className="w-52 h-44 bg-gradient-to-br from-orange-600 to-orange-400 rounded-xl flex flex-col items-center justify-center p-4 shadow-lg"
                animate={{ 
                  boxShadow: ["0 0 0px rgba(234, 88, 12, 0)", "0 0 20px rgba(234, 88, 12, 0.5)", "0 0 0px rgba(234, 88, 12, 0)"]
                }}
                transition={{ duration: 3, repeat: Infinity }}
              >
                <ServerCrash size={32} className="text-white mb-2" />
                <div className="text-lg font-bold text-white">Network Costs</div>
                <div className="text-xs text-white/80 mt-1 text-center">
                  Transaction processing and operational expenses
                </div>
              </motion.div>
            </motion.div>

            {/* Bottom Row - Block Production and Validator Profitability */}
            {/* Block Production Box - Left */}
            <motion.div
              className="absolute left-[10%] top-[480px]"
              initial={{ y: 50, opacity: 0 }}
              animate={{ y: 0, opacity: 1 }}
              transition={{ duration: 0.8, delay: 1.2, type: "spring" }}
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

            {/* Validator Profitability Box - Right */}
            <motion.div
              className="absolute right-[10%] top-[480px]"
              initial={{ y: 50, opacity: 0 }}
              animate={{ y: 0, opacity: 1 }}
              transition={{ duration: 0.8, delay: 1.2, type: "spring" }}
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

            {/* Connecting lines with animations */}
            {/* Top row connections to center */}
            {/* Inflation to Total Stake */}
            <motion.div
              className="absolute"
              style={{
                top: '102px',
                left: 'calc(5% + 52px)',
                width: 'calc(50% - 5% - 52px - 26px)',
                height: '118px'
              }}
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ duration: 0.3, delay: 1.5 }}
            >
              <svg width="100%" height="100%" className="overflow-visible">
                {/* Horizontal part */}
                <line 
                  x1="0" 
                  y1="0" 
                  x2="100%" 
                  y2="0" 
                  stroke="#3B82F6" 
                  strokeWidth="2" 
                  strokeDasharray="4 2"
                />
                
                {/* Vertical part */}
                <line 
                  x1="100%" 
                  y1="0" 
                  x2="100%" 
                  y2="118" 
                  stroke="#3B82F6" 
                  strokeWidth="2" 
                  strokeDasharray="4 2"
                />
                
                {/* Animated circle */}
                <motion.circle
                  cx="50%"
                  cy="0"
                  r="4"
                  fill="#3B82F6"
                  animate={{ 
                    x: ['-50%', '50%', '50%'],
                    y: [0, 0, '118px']
                  }}
                  transition={{ 
                    duration: 4,
                    repeat: Infinity,
                    repeatType: "loop",
                    times: [0, 0.5, 1],
                    ease: "easeInOut"
                  }}
                />
              </svg>
            </motion.div>

            {/* Deflation to Total Stake */}
            <motion.div
              className="absolute"
              style={{
                top: '102px',
                right: 'calc(5% + 52px)',
                width: 'calc(50% - 5% - 52px - 26px)',
                height: '118px'
              }}
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ duration: 0.3, delay: 1.8 }}
            >
              <svg width="100%" height="100%" className="overflow-visible">
                {/* Horizontal part */}
                <line 
                  x1="100%" 
                  y1="0" 
                  x2="0" 
                  y2="0" 
                  stroke="#F59E0B" 
                  strokeWidth="2" 
                  strokeDasharray="4 2"
                />
                
                {/* Vertical part */}
                <line 
                  x1="0" 
                  y1="0" 
                  x2="0" 
                  y2="118" 
                  stroke="#F59E0B" 
                  strokeWidth="2" 
                  strokeDasharray="4 2"
                />
                
                {/* Animated circle */}
                <motion.circle
                  cx="50%"
                  cy="0"
                  r="4"
                  fill="#F59E0B"
                  animate={{ 
                    x: ['50%', '-50%', '-50%'],
                    y: [0, 0, '118px']
                  }}
                  transition={{ 
                    duration: 4,
                    repeat: Infinity,
                    repeatType: "loop",
                    times: [0, 0.5, 1],
                    ease: "easeInOut"
                  }}
                />
              </svg>
            </motion.div>

            {/* Total Stake to Internal Rewards */}
            <motion.div
              className="absolute"
              style={{
                top: '244px',
                left: 'calc(50% - 26px)',
                width: 'calc(45% - 26px)',
                height: '106px'
              }}
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ duration: 0.3, delay: 2.1 }}
            >
              <svg width="100%" height="100%" className="overflow-visible">
                {/* Vertical part */}
                <line 
                  x1="0" 
                  y1="0" 
                  x2="0" 
                  y2="50" 
                  stroke="#8B5CF6" 
                  strokeWidth="2" 
                  strokeDasharray="4 2"
                />
                
                {/* Horizontal part */}
                <line 
                  x1="0" 
                  y1="50" 
                  x2="-100%" 
                  y2="50" 
                  stroke="#8B5CF6" 
                  strokeWidth="2" 
                  strokeDasharray="4 2"
                />
                
                {/* Connection to left box */}
                <line 
                  x1="-100%" 
                  y1="50" 
                  x2="-100%" 
                  y2="106" 
                  stroke="#8B5CF6" 
                  strokeWidth="2" 
                  strokeDasharray="4 2"
                />
                
                {/* Animated circle */}
                <motion.circle
                  cx="0"
                  cy="25"
                  r="4"
                  fill="#8B5CF6"
                  animate={{ 
                    y: [0, 50, 50, 106],
                    x: [0, 0, '-100%', '-100%']
                  }}
                  transition={{ 
                    duration: 4,
                    repeat: Infinity,
                    repeatType: "loop",
                    times: [0, 0.25, 0.75, 1],
                    ease: "easeInOut"
                  }}
                />
              </svg>
            </motion.div>

            {/* Total Stake to Network Costs */}
            <motion.div
              className="absolute"
              style={{
                top: '244px',
                right: 'calc(50% - 26px)',
                width: 'calc(45% - 26px)',
                height: '106px'
              }}
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ duration: 0.3, delay: 2.1 }}
            >
              <svg width="100%" height="100%" className="overflow-visible">
                {/* Vertical part */}
                <line 
                  x1="0" 
                  y1="0" 
                  x2="0" 
                  y2="50" 
                  stroke="#8B5CF6" 
                  strokeWidth="2" 
                  strokeDasharray="4 2"
                />
                
                {/* Horizontal part */}
                <line 
                  x1="0" 
                  y1="50" 
                  x2="100%" 
                  y2="50" 
                  stroke="#8B5CF6" 
                  strokeWidth="2" 
                  strokeDasharray="4 2"
                />
                
                {/* Connection to right box */}
                <line 
                  x1="100%" 
                  y1="50" 
                  x2="100%" 
                  y2="106" 
                  stroke="#8B5CF6" 
                  strokeWidth="2" 
                  strokeDasharray="4 2"
                />
                
                {/* Animated circle */}
                <motion.circle
                  cx="0"
                  cy="25"
                  r="4"
                  fill="#8B5CF6"
                  animate={{ 
                    y: [0, 50, 50, 106],
                    x: [0, 0, '100%', '100%']
                  }}
                  transition={{ 
                    duration: 4,
                    repeat: Infinity,
                    repeatType: "loop",
                    times: [0, 0.25, 0.75, 1],
                    ease: "easeInOut",
                    delay: 0.5
                  }}
                />
              </svg>
            </motion.div>

            {/* Internal Rewards to Block Production */}
            <motion.div
              className="absolute"
              style={{
                top: '394px',
                left: 'calc(5% + 26px)',
                width: 'calc(5% + 26px)',
                height: '86px'
              }}
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ duration: 0.3, delay: 2.4 }}
            >
              <svg width="100%" height="100%" className="overflow-visible">
                {/* Bezier curve path */}
                <path
                  d={`M 0,0 C 20,30 40,50 ${parseInt('5%') + 26},${86}`}
                  fill="none"
                  stroke="#10B981"
                  strokeWidth="2"
                  strokeDasharray="4 2"
                />
                
                {/* Animated circle */}
                <motion.circle
                  r="4"
                  fill="#10B981"
                >
                  <motion.animateMotion
                    path={`M 0,0 C 20,30 40,50 ${parseInt('5%') + 26},${86}`}
                    dur="3s"
                    repeatCount="indefinite"
                  />
                </motion.circle>
              </svg>
            </motion.div>

            {/* Network Costs to Validator Profit */}
            <motion.div
              className="absolute"
              style={{
                top: '394px',
                right: 'calc(5% + 26px)',
                width: 'calc(5% + 26px)',
                height: '86px'
              }}
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ duration: 0.3, delay: 2.4 }}
            >
              <svg width="100%" height="100%" className="overflow-visible">
                {/* Bezier curve path */}
                <path
                  d={`M 0,0 C -20,30 -40,50 -${parseInt('5%') + 26},${86}`}
                  fill="none"
                  stroke="#F97316"
                  strokeWidth="2"
                  strokeDasharray="4 2"
                />
                
                {/* Animated circle */}
                <motion.circle
                  r="4"
                  fill="#F97316"
                >
                  <motion.animateMotion
                    path={`M 0,0 C -20,30 -40,50 -${parseInt('5%') + 26},${86}`}
                    dur="3s"
                    repeatCount="indefinite"
                  />
                </motion.circle>
              </svg>
            </motion.div>

            {/* Block Production to Validator Profit */}
            <motion.div
              className="absolute"
              style={{
                top: '502px',
                left: 'calc(10% + 52px)',
                width: 'calc(80% - 104px)',
                height: '20px'
              }}
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ duration: 0.3, delay: 2.7 }}
            >
              <svg width="100%" height="100%" className="overflow-visible">
                {/* Horizontal line */}
                <line 
                  x1="0" 
                  y1="0" 
                  x2="100%" 
                  y2="0" 
                  stroke="#6366F1" 
                  strokeWidth="2" 
                  strokeDasharray="4 2"
                />
                
                {/* Animated circles */}
                <motion.circle
                  cx="20%"
                  cy="0"
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
                  cy="0"
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
            </motion.div>

            {/* Four small factor boxes at the bottom */}
            {[
              { icon: <PercentSquare size={20} />, text: "APR Return", color: "from-blue-600 to-blue-400", left: "4%", top: "540px" },
              { icon: <Clock size={20} />, text: "Uptime", color: "from-indigo-600 to-indigo-400", left: "30%", top: "540px" },
              { icon: <Wallet size={20} />, text: "Costs", color: "from-purple-600 to-purple-400", left: "70%", top: "540px" },
              { icon: <ShieldCheck size={20} />, text: "Security", color: "from-rose-600 to-rose-400", left: "95%", top: "540px" }
            ].map((factor, idx) => (
              <motion.div
                key={`factor-${idx}`}
                className="absolute"
                style={{ 
                  left: factor.left, 
                  top: factor.top,
                  transform: 'translateX(-50%)'
                }}
                initial={{ y: 20, opacity: 0 }}
                animate={{ y: 0, opacity: 1 }}
                transition={{ duration: 0.6, delay: 1.5 + idx * 0.2, type: "spring" }}
              >
                <motion.div 
                  className={`w-16 h-16 bg-gradient-to-br ${factor.color} rounded-lg flex flex-col items-center justify-center p-1 shadow-lg`}
                  whileHover={{ scale: 1.05 }}
                  animate={{ 
                    boxShadow: ["0 0 0px rgba(124, 58, 237, 0)", "0 0 15px rgba(124, 58, 237, 0.3)", "0 0 0px rgba(124, 58, 237, 0)"]
                  }}
                  transition={{ duration: 2, repeat: Infinity }}
                >
                  <div className="text-white mb-1">{factor.icon}</div>
                  <div className="text-[10px] font-medium text-white text-center">{factor.text}</div>
                </motion.div>
              </motion.div>
            ))}

            {/* Explanation text */}
            <motion.div
              className="absolute left-1/2 bottom-4 transform -translate-x-1/2 bg-black/30 px-4 py-2 rounded-lg"
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
        </div>
      </div>
    </motion.div>
  );
};

export default ValidatorFinancialsV4;
