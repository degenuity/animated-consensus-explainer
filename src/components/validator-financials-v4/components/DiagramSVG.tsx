
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
  PlusIcon,
  Lock,
  BarChart3
} from 'lucide-react';

const DiagramSVG = () => {
  const isMobile = useIsMobile();
  
  // Define a responsive viewBox and dimensions
  const viewBoxWidth = 1200;
  const viewBoxHeight = 800;
  
  // Animation variants for boxes
  const boxVariants = {
    hidden: { opacity: 0 },
    visible: (i: number) => ({
      opacity: 1,
      transition: {
        delay: i * 0.2,
        duration: 0.5
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
        pathLength: { delay: i * 0.3 + 0.5, duration: 0.7, ease: "easeInOut" },
        opacity: { delay: i * 0.3 + 0.5, duration: 0.3 }
      }
    })
  };
  
  // Animation variants for moving dots on lines
  const dotVariants = {
    hidden: { opacity: 0 },
    visible: (i: number) => ({
      opacity: [0, 1, 0],
      transition: {
        delay: i * 0.3 + 1.2,
        duration: 2,
        repeat: Infinity,
        repeatDelay: 1
      }
    })
  };
  
  // Text for subitems
  const internalRewardsSubitems = [
    "commission",
    "staking rewards",
    "voting rewards"
  ];
  
  const networkCostsSubitems = [
    "base fees",
    "priority fees",
    "MEV"
  ];
  
  const totalStakeSubitems = [
    "delegated stake",
    "own stake"
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
  
  return (
    <div className="w-full h-full relative">
      <svg
        width="100%"
        height="100%"
        viewBox={`0 0 ${viewBoxWidth} ${viewBoxHeight}`}
        preserveAspectRatio="xMidYMid meet"
      >
        {/* Inflation to Internal Rewards */}
        <motion.path
          d="M 190 150 L 280 150"
          stroke="#3B82F6"
          strokeWidth="2"
          fill="none"
          custom={0}
          variants={lineVariants}
          initial="hidden"
          animate="visible"
        />
        <motion.circle
          cx="235"
          cy="150"
          r="4"
          fill="#3B82F6"
          custom={0}
          variants={dotVariants}
          initial="hidden"
          animate="visible"
        />
        
        {/* Internal Rewards to Total Stake */}
        <motion.path
          d="M 480 150 L 550 150"
          stroke="#10B981"
          strokeWidth="2"
          fill="none"
          custom={1}
          variants={lineVariants}
          initial="hidden"
          animate="visible"
        />
        <motion.circle
          cx="515"
          cy="150"
          r="4"
          fill="#10B981"
          custom={1}
          variants={dotVariants}
          initial="hidden"
          animate="visible"
        />
        
        {/* Network Costs to Deflation */}
        <motion.path
          d="M 950 150 L 1010 150"
          stroke="#F97316"
          strokeWidth="2"
          fill="none"
          custom={2}
          variants={lineVariants}
          initial="hidden"
          animate="visible"
        />
        <motion.circle
          cx="980"
          cy="150"
          r="4"
          fill="#F97316"
          custom={2}
          variants={dotVariants}
          initial="hidden"
          animate="visible"
        />
        
        {/* Network Costs to Block Rewards */}
        <motion.path
          d="M 850 250 L 850 300 L 750 300 L 750 350"
          stroke="#F97316"
          strokeWidth="2"
          fill="none"
          custom={3}
          variants={lineVariants}
          initial="hidden"
          animate="visible"
        />
        <motion.circle
          cx="850"
          cy="325"
          r="4"
          fill="#F97316"
          custom={3}
          variants={dotVariants}
          initial="hidden"
          animate="visible"
        />
        
        {/* Total Stake to Block Production */}
        <motion.path
          d="M 625 250 L 625 300 L 400 300 L 400 350"
          stroke="#3B82F6"
          strokeWidth="2"
          fill="none"
          custom={4}
          variants={lineVariants}
          initial="hidden"
          animate="visible"
        />
        <motion.circle
          cx="525"
          cy="300"
          r="4"
          fill="#3B82F6"
          custom={4}
          variants={dotVariants}
          initial="hidden"
          animate="visible"
        />
        
        {/* Network Costs to Profitability */}
        <motion.path
          d="M 850 250 L 850 300 L 950 300 L 950 350"
          stroke="#F97316"
          strokeWidth="2"
          fill="none"
          custom={5}
          variants={lineVariants}
          initial="hidden"
          animate="visible"
        />
        <motion.circle
          cx="900"
          cy="300"
          r="4"
          fill="#F97316"
          custom={5}
          variants={dotVariants}
          initial="hidden"
          animate="visible"
        />
        
        {/* Total Stake to Profitability */}
        <motion.path
          d="M 625 250 L 625 300 L 950 300 L 950 350"
          stroke="#3B82F6"
          strokeWidth="2"
          fill="none"
          custom={6}
          variants={lineVariants}
          initial="hidden"
          animate="visible"
        />
        <motion.circle
          cx="750"
          cy="300"
          r="4"
          fill="#3B82F6"
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
            x="40"
            y="100"
            width="150"
            height="100"
            rx="4"
            fill="#0284c7"
          />
          <foreignObject x="40" y="100" width="150" height="100">
            <div className="flex flex-col items-center justify-center text-white h-full p-4">
              <TrendingUp className="mb-2" size={24} />
              <div className="text-lg font-semibold">inflation</div>
              <div className="text-sm opacity-70">token issuance</div>
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
            x="280"
            y="100"
            width="200"
            height="230"
            rx="4"
            fill="#0f172a"
            stroke="#1e293b"
            strokeWidth="1"
          />
          <foreignObject x="280" y="100" width="200" height="50">
            <div className="flex items-center gap-2 p-3 border-b border-[#1e293b]">
              <BarChart3 size={22} className="text-blue-400" />
              <div className="text-white font-medium">internal rewards</div>
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
                x="290"
                y={160 + idx * 50}
                width="180"
                height="40"
                rx="4"
                fill="transparent"
                stroke="#10B981"
                strokeWidth="1"
              />
              <foreignObject x="290" y={160 + idx * 50} width="180" height="40">
                <div className="flex items-center h-full px-4 text-white">
                  {item}
                </div>
              </foreignObject>
            </motion.g>
          ))}
        </motion.g>
        
        {/* Total Stake Box */}
        <motion.g
          custom={1}
          variants={boxVariants}
          initial="hidden"
          animate="visible"
        >
          <rect
            x="550"
            y="100"
            width="200"
            height="150"
            rx="4"
            fill="#0f172a"
            stroke="#1e293b"
            strokeWidth="1"
          />
          <foreignObject x="550" y="100" width="200" height="50">
            <div className="flex items-center gap-2 p-3 border-b border-[#1e293b]">
              <Lock size={22} className="text-blue-400" />
              <div className="text-white font-medium">total stake</div>
            </div>
          </foreignObject>
          
          {/* Subitems for Total Stake */}
          {totalStakeSubitems.map((item, idx) => (
            <motion.g
              key={`stake-${idx}`}
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 1.2 + idx * 0.1 }}
            >
              <rect
                x="560"
                y={160 + idx * 50}
                width="180"
                height="40"
                rx="4"
                fill="transparent"
                stroke="#3B82F6"
                strokeWidth="1"
              />
              <foreignObject x="560" y={160 + idx * 50} width="180" height="40">
                <div className="flex items-center h-full px-4 text-white">
                  {item}
                </div>
              </foreignObject>
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
            x="820"
            y="100"
            width="190"
            height="150"
            rx="4"
            fill="#0f172a"
            stroke="#1e293b"
            strokeWidth="1"
          />
          <foreignObject x="820" y="100" width="190" height="50">
            <div className="flex items-center gap-2 p-3 border-b border-[#1e293b]">
              <ServerCrash size={22} className="text-orange-400" />
              <div className="text-white font-medium">network usage costs</div>
            </div>
          </foreignObject>
          
          {/* Network Costs Subitems */}
          {networkCostsSubitems.map((item, idx) => (
            <motion.g
              key={`network-${idx}`}
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 1.2 + idx * 0.1 }}
            >
              <rect
                x="830"
                y={160 + idx * 50}
                width="170"
                height="40"
                rx="4"
                fill="transparent"
                stroke="#F97316"
                strokeWidth="1"
              />
              <foreignObject x="830" y={160 + idx * 50} width="170" height="40">
                <div className="flex items-center h-full px-4 text-white">
                  {item}
                </div>
              </foreignObject>
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
            x="1010"
            y="100"
            width="150"
            height="100"
            rx="4"
            fill="#eab308"
          />
          <foreignObject x="1010" y="100" width="150" height="100">
            <div className="flex flex-col items-center justify-center text-white h-full p-4">
              <TrendingDown className="mb-2" size={24} />
              <div className="text-lg font-semibold">deflation</div>
              <div className="text-sm opacity-70">token burns</div>
            </div>
          </foreignObject>
        </motion.g>
        
        {/* Block Rewards Box */}
        <motion.g
          custom={3}
          variants={boxVariants}
          initial="hidden"
          animate="visible"
        >
          <rect
            x="650"
            y="350"
            width="200"
            height="180"
            rx="4"
            fill="#0f172a"
            stroke="#1e293b"
            strokeWidth="1"
          />
          <foreignObject x="650" y="350" width="200" height="50">
            <div className="flex items-center gap-2 p-3 border-b border-[#1e293b]">
              <Database size={22} className="text-blue-400" />
              <div className="text-white font-medium">block rewards</div>
            </div>
          </foreignObject>
          
          {/* Block Rewards Subitems */}
          {networkCostsSubitems.map((item, idx) => (
            <motion.g
              key={`block-rewards-${idx}`}
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 2.2 + idx * 0.1 }}
            >
              <rect
                x="660"
                y={410 + idx * 50}
                width="180"
                height="40"
                rx="4"
                fill="transparent"
                stroke="#3B82F6"
                strokeWidth="1"
              />
              <foreignObject x="660" y={410 + idx * 50} width="180" height="40">
                <div className="flex items-center h-full px-4 text-white">
                  {item}
                </div>
              </foreignObject>
            </motion.g>
          ))}
        </motion.g>
        
        {/* Block Production Box */}
        <motion.g
          custom={2}
          variants={boxVariants}
          initial="hidden"
          animate="visible"
        >
          <rect
            x="250"
            y="350"
            width="300"
            height="230"
            rx="4"
            fill="#0f172a"
            stroke="#1e293b"
            strokeWidth="1"
          />
          <foreignObject x="250" y="350" width="300" height="50">
            <div className="flex items-center gap-2 p-3 border-b border-[#1e293b]">
              <Box size={22} className="text-blue-400" />
              <div className="text-white font-medium">block production eligibility</div>
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
                x="260"
                y={410 + idx * 55}
                width="280"
                height="45"
                rx="4"
                fill="transparent"
                stroke="#3B82F6"
                strokeWidth="1"
              />
              <foreignObject x="260" y={410 + idx * 55} width="280" height="45">
                <div className="flex flex-col justify-center h-full px-4">
                  <div className="text-blue-400 text-sm">{item.text}</div>
                  <div className="text-gray-400 text-xs">{item.desc}</div>
                </div>
              </foreignObject>
              
              {idx < blockProductionSubitems.length - 1 && (
                <foreignObject x="550" y={430 + idx * 55} width="20" height="20">
                  <div className="flex items-center justify-center h-full text-gray-400">×</div>
                </foreignObject>
              )}
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
            x="850"
            y="350"
            width="300"
            height="165"
            rx="4"
            fill="#0f172a"
            stroke="#1e293b"
            strokeWidth="1"
          />
          <foreignObject x="850" y="350" width="300" height="50">
            <div className="flex items-center gap-2 p-3 border-b border-[#1e293b]">
              <Percent size={22} className="text-blue-400" />
              <div className="text-white font-medium">profitability</div>
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
                x="860"
                y={410 + idx * 55}
                width="280"
                height="45"
                rx="4"
                fill="transparent"
                stroke={item.color || "#3B82F6"}
                strokeWidth="1"
              />
              <foreignObject x="860" y={410 + idx * 55} width="280" height="45">
                <div className="flex flex-col justify-center h-full px-4">
                  <div className={`text-sm`} style={{ color: item.color || "#3B82F6" }}>
                    {item.text}
                  </div>
                  <div className="text-gray-400 text-xs">{item.desc}</div>
                </div>
              </foreignObject>
              
              {idx < profitabilitySubitems.length - 1 && (
                <foreignObject x="1050" y={430 + idx * 55} width="20" height="20">
                  <div className="flex items-center justify-center h-full text-gray-400">+</div>
                </foreignObject>
              )}
            </motion.g>
          ))}
        </motion.g>
        
        {/* Explanation Text */}
        <motion.g
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 3 }}
        >
          <foreignObject x="250" y="600" width="700" height="130">
            <div className="text-center text-gray-400 text-sm mt-4">
              <div className="bg-[#0f172a] p-3 rounded-md border border-[#1e293b]">
                <div className="font-medium text-gray-300 mb-1">Minimal operational costs</div>
                <p>Voting transactions on X1 are free, keeping operational expenses at minimum.</p>
              </div>
            </div>
          </foreignObject>
        </motion.g>
        
        {/* X1 Logo */}
        <motion.g
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 3.5 }}
        >
          <text
            x="1150"
            y="780"
            fill="#ffffff"
            fontSize="48"
            fontWeight="bold"
            fontFamily="sans-serif"
            opacity="0.2"
          >
            X1
          </text>
        </motion.g>
      </svg>
    </div>
  );
};

export default DiagramSVG;
