
import React from 'react';
import { motion } from 'framer-motion';
import { useIsMobile } from '@/hooks/use-mobile';
import {
  TrendingUp,
  TrendingDown,
  CircleDollarSign,
  Database,
  ServerCrash,
  Box,
  Percent,
  PlusIcon
} from 'lucide-react';

const DiagramSVG = () => {
  const isMobile = useIsMobile();
  
  // Define a responsive viewBox and dimensions
  const viewBoxWidth = 1200;
  const viewBoxHeight = 800;
  
  // Animation variants for boxes
  const boxVariants = {
    hidden: { opacity: 0, y: -20 },
    visible: (i: number) => ({
      opacity: 1,
      y: 0,
      transition: {
        delay: i * 0.2,
        duration: 0.5,
        type: "spring",
        stiffness: 100
      }
    })
  };
  
  // Animation variants for connecting lines
  const lineVariants = {
    hidden: { pathLength: 0, opacity: 0 },
    visible: (i: number) => ({
      pathLength: 1,
      opacity: 1,
      transition: {
        pathLength: { delay: i * 0.3 + 1, duration: 0.7, ease: "easeInOut" },
        opacity: { delay: i * 0.3 + 1, duration: 0.3 }
      }
    })
  };
  
  // Animation variants for moving dots on lines
  const dotVariants = {
    hidden: { opacity: 0 },
    visible: (i: number) => ({
      opacity: [0, 1, 0],
      transition: {
        delay: i * 0.3 + 1.7,
        duration: 2,
        repeat: Infinity,
        repeatDelay: 1
      }
    })
  };
  
  // Text for subboxes
  const internalRewardsSubitems = [
    "commission", "staking rewards", "voting rewards"
  ];
  
  const networkCostsSubitems = [
    "transaction fees", "resource usage", "operation costs"
  ];
  
  const blockProductionSubitems = [
    { text: "stake weight", desc: "amount of XNT staked" },
    { text: "randomness", desc: "ACP anti-collusion protocol" },
    { text: "performance/reputation", desc: "from recorded history" }
  ];
  
  const profitabilitySubitems = [
    { text: "operational costs", desc: "only cost is server", color: "#F59E0B" },
    { text: "total validator rewards", desc: "aggregate", color: "#10B981", hasPlus: true }
  ];
  
  // Build the SVG diagram
  return (
    <div className="w-full h-full relative">
      <svg
        width="100%"
        height="100%"
        viewBox={`0 0 ${viewBoxWidth} ${viewBoxHeight}`}
        preserveAspectRatio="xMidYMid meet"
      >
        {/* Connection Lines - render them first so they appear behind boxes */}
        {/* Inflation to Internal Rewards */}
        <motion.path
          d="M 200 140 L 350 140"
          stroke="#3B82F6"
          strokeWidth="2"
          strokeDasharray="5,5"
          fill="none"
          custom={0}
          variants={lineVariants}
          initial="hidden"
          animate="visible"
        />
        <motion.circle
          cx="275"
          cy="140"
          r="4"
          fill="#3B82F6"
          custom={0}
          variants={dotVariants}
          initial="hidden"
          animate="visible"
        />
        
        {/* Internal Rewards to Center */}
        <motion.path
          d="M 470 140 L 600 140"
          stroke="#10B981"
          strokeWidth="2"
          strokeDasharray="5,5"
          fill="none"
          custom={1}
          variants={lineVariants}
          initial="hidden"
          animate="visible"
        />
        <motion.circle
          cx="535"
          cy="140"
          r="4"
          fill="#10B981"
          custom={1}
          variants={dotVariants}
          initial="hidden"
          animate="visible"
        />
        
        {/* Network Costs to Center */}
        <motion.path
          d="M 730 140 L 600 140"
          stroke="#F97316"
          strokeWidth="2"
          strokeDasharray="5,5"
          fill="none"
          custom={2}
          variants={lineVariants}
          initial="hidden"
          animate="visible"
        />
        <motion.circle
          cx="665"
          cy="140"
          r="4"
          fill="#F97316"
          custom={2}
          variants={dotVariants}
          initial="hidden"
          animate="visible"
        />
        
        {/* Deflation to Network Costs */}
        <motion.path
          d="M 1000 140 L 850 140"
          stroke="#F59E0B"
          strokeWidth="2"
          strokeDasharray="5,5"
          fill="none"
          custom={3}
          variants={lineVariants}
          initial="hidden"
          animate="visible"
        />
        <motion.circle
          cx="925"
          cy="140"
          r="4"
          fill="#F59E0B"
          custom={3}
          variants={dotVariants}
          initial="hidden"
          animate="visible"
        />
        
        {/* Center to Block Production */}
        <motion.path
          d="M 600 180 L 350 350"
          stroke="#8B5CF6"
          strokeWidth="2"
          strokeDasharray="5,5"
          fill="none"
          custom={4}
          variants={lineVariants}
          initial="hidden"
          animate="visible"
        />
        <motion.circle
          cx="475"
          cy="265"
          r="4"
          fill="#8B5CF6"
          custom={4}
          variants={dotVariants}
          initial="hidden"
          animate="visible"
        />
        
        {/* Center to Profitability */}
        <motion.path
          d="M 600 180 L 850 350"
          stroke="#8B5CF6"
          strokeWidth="2"
          strokeDasharray="5,5"
          fill="none"
          custom={5}
          variants={lineVariants}
          initial="hidden"
          animate="visible"
        />
        <motion.circle
          cx="725"
          cy="265"
          r="4"
          fill="#8B5CF6"
          custom={5}
          variants={dotVariants}
          initial="hidden"
          animate="visible"
        />
        
        {/* Block Production to Profitability */}
        <motion.path
          d="M 450 400 L 750 400"
          stroke="#6366F1"
          strokeWidth="2"
          strokeDasharray="5,5"
          fill="none"
          custom={6}
          variants={lineVariants}
          initial="hidden"
          animate="visible"
        />
        <motion.circle
          cx="600"
          cy="400"
          r="4"
          fill="#6366F1"
          custom={6}
          variants={dotVariants}
          initial="hidden"
          animate="visible"
        />
        
        {/* Inflation Box */}
        <motion.g
          custom={0}
          variants={boxVariants}
          initial="hidden"
          animate="visible"
        >
          <rect
            x="50"
            y="100"
            width="150"
            height="80"
            rx="10"
            fill="#3B82F6"
          />
          <foreignObject x="60" y="105" width="130" height="70">
            <div className="flex flex-col items-center justify-center text-white h-full">
              <TrendingUp size={24} />
              <div className="text-lg font-semibold mt-1">inflation</div>
              <div className="text-sm">token issuance</div>
            </div>
          </foreignObject>
        </motion.g>
        
        {/* Internal Rewards Box */}
        <motion.g
          custom={1}
          variants={boxVariants}
          initial="hidden"
          animate="visible"
        >
          <rect
            x="350"
            y="100"
            width="120"
            height="230"
            rx="10"
            fill="#141824"
            stroke="#2a3349"
            strokeWidth="1"
          />
          <foreignObject x="350" y="100" width="120" height="50">
            <div className="flex items-center gap-2 p-2 border-b border-[#2a3349]">
              <div className="p-1 rounded bg-[#1a1f31]">
                <CircleDollarSign size={20} className="text-emerald-400" />
              </div>
              <div className="text-white text-sm">internal rewards</div>
            </div>
          </foreignObject>
          
          {/* Subitems for Internal Rewards */}
          {internalRewardsSubitems.map((item, idx) => (
            <motion.g
              key={`internal-${idx}`}
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 1.2 + idx * 0.1 }}
            >
              <rect
                x="360"
                y={160 + idx * 50}
                width="100"
                height="40"
                rx="5"
                fill="#1a1f31"
                stroke="#2a3349"
                strokeWidth="1"
              />
              <text
                x="410"
                y={185 + idx * 50}
                textAnchor="middle"
                fill="#3B82F6"
                fontSize="12"
                fontFamily="sans-serif"
              >
                {item}
              </text>
            </motion.g>
          ))}
        </motion.g>
        
        {/* Network Costs Box */}
        <motion.g
          custom={1}
          variants={boxVariants}
          initial="hidden"
          animate="visible"
        >
          <rect
            x="730"
            y="100"
            width="120"
            height="230"
            rx="10"
            fill="#141824"
            stroke="#2a3349"
            strokeWidth="1"
          />
          <foreignObject x="730" y="100" width="120" height="50">
            <div className="flex items-center gap-2 p-2 border-b border-[#2a3349]">
              <div className="p-1 rounded bg-[#1a1f31]">
                <ServerCrash size={20} className="text-orange-400" />
              </div>
              <div className="text-white text-sm">network costs</div>
            </div>
          </foreignObject>
          
          {/* Subitems for Network Costs */}
          {networkCostsSubitems.map((item, idx) => (
            <motion.g
              key={`network-${idx}`}
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 1.2 + idx * 0.1 }}
            >
              <rect
                x="740"
                y={160 + idx * 50}
                width="100"
                height="40"
                rx="5"
                fill="#1a1f31"
                stroke="#2a3349"
                strokeWidth="1"
              />
              <text
                x="790"
                y={185 + idx * 50}
                textAnchor="middle"
                fill="#F97316"
                fontSize="12"
                fontFamily="sans-serif"
              >
                {item}
              </text>
            </motion.g>
          ))}
        </motion.g>
        
        {/* Deflation Box */}
        <motion.g
          custom={0}
          variants={boxVariants}
          initial="hidden"
          animate="visible"
        >
          <rect
            x="1000"
            y="100"
            width="150"
            height="80"
            rx="10"
            fill="#F59E0B"
          />
          <foreignObject x="1010" y="105" width="130" height="70">
            <div className="flex flex-col items-center justify-center text-white h-full">
              <TrendingDown size={24} />
              <div className="text-lg font-semibold mt-1">deflation</div>
              <div className="text-sm">token burns</div>
            </div>
          </foreignObject>
        </motion.g>
        
        {/* Block Production Box */}
        <motion.g
          custom={2}
          variants={boxVariants}
          initial="hidden"
          animate="visible"
        >
          <rect
            x="200"
            y="350"
            width="250"
            height="230"
            rx="10"
            fill="#141824"
            stroke="#2a3349"
            strokeWidth="1"
          />
          <foreignObject x="200" y="350" width="250" height="50">
            <div className="flex items-center gap-2 p-2 border-b border-[#2a3349]">
              <div className="p-1 rounded bg-[#1a1f31]">
                <Box size={20} className="text-blue-400" />
              </div>
              <div className="text-white text-sm">block production eligibility</div>
            </div>
          </foreignObject>
          
          {/* Block Production Subitems */}
          {blockProductionSubitems.map((item, idx) => (
            <motion.g
              key={`block-${idx}`}
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 2.2 + idx * 0.1 }}
            >
              <rect
                x="210"
                y={410 + idx * 55}
                width="230"
                height="45"
                rx="5"
                fill="#1a1f31"
                stroke="#2a3349"
                strokeWidth="1"
              />
              <text
                x="325"
                y={430 + idx * 55}
                textAnchor="middle"
                fill="#3B82F6"
                fontSize="12"
                fontFamily="sans-serif"
              >
                {item.text}
              </text>
              <text
                x="325"
                y={445 + idx * 55}
                textAnchor="middle"
                fill="#9CA3AF"
                fontSize="10"
                fontFamily="sans-serif"
              >
                {item.desc}
              </text>
            </motion.g>
          ))}
        </motion.g>
        
        {/* Profitability Box */}
        <motion.g
          custom={2}
          variants={boxVariants}
          initial="hidden"
          animate="visible"
        >
          <rect
            x="750"
            y="350"
            width="250"
            height="165"
            rx="10"
            fill="#141824"
            stroke="#2a3349"
            strokeWidth="1"
          />
          <foreignObject x="750" y="350" width="250" height="50">
            <div className="flex items-center gap-2 p-2 border-b border-[#2a3349]">
              <div className="p-1 rounded bg-[#1a1f31]">
                <Percent size={20} className="text-blue-400" />
              </div>
              <div className="text-white text-sm">profitability</div>
            </div>
          </foreignObject>
          
          {/* Profitability Subitems */}
          {profitabilitySubitems.map((item, idx) => (
            <motion.g
              key={`profit-${idx}`}
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 2.2 + idx * 0.1 }}
            >
              <rect
                x="760"
                y={410 + idx * 55}
                width="230"
                height="45"
                rx="5"
                fill="#1a1f31"
                stroke="#2a3349"
                strokeWidth="1"
              />
              <foreignObject x="760" y={410 + idx * 55} width="230" height="45">
                <div className="flex justify-between items-center p-2 h-full">
                  <div>
                    <div className={`text-xs ${item.color ? `text-[${item.color}]` : 'text-blue-400'}`}>
                      {item.text}
                      {item.hasPlus && <span className="ml-1 text-green-400">+</span>}
                    </div>
                    <div className="text-[10px] text-gray-400">{item.desc}</div>
                  </div>
                </div>
              </foreignObject>
            </motion.g>
          ))}
        </motion.g>
        
        {/* Explanation Text */}
        <motion.g
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 3 }}
        >
          <foreignObject x="350" y="600" width="500" height="80">
            <div className="text-center text-gray-400 text-sm">
              <p>Validator profitability is determined by the balance of token inflation, transaction</p>
              <p>fees, network resource usage, and stake allocation</p>
            </div>
          </foreignObject>
        </motion.g>
      </svg>
    </div>
  );
};

export default DiagramSVG;
