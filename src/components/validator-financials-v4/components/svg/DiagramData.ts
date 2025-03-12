
// Constants and data configurations for the SVG diagram

export const viewBoxWidth = 1200;
export const viewBoxHeight = 800;

export const internalRewardsSubitems = [
  "commission",
  "staking rewards",
  "voting rewards"
];

export const networkCostsSubitems = [
  { 
    text: "base fees", 
    isHeader: true,
    subItems: [
      { text: "block rewards", isSubHeader: true },
      { text: "priority fees" },
      { text: "MEV" }
    ]
  }
];

export const totalStakeSubitems = [
  "delegated stake",
  "own stake"
];

export const blockProductionSubitems = [
  { text: "stake weight", desc: "amount of XNT staked" },
  { text: "randomness", desc: "ACP anti-collusion protocol" },
  { text: "performance/reputation", desc: "from recorded history" }
];

export const profitabilitySubitems = [
  { text: "operational costs", desc: "only cost is server", color: "#F59E0B" },
  { text: "total validator rewards", desc: "aggregate", color: "#10B981", hasPlus: true }
];

export const connectionPaths = [
  // Inflation to Internal Rewards
  { 
    path: "M 190 150 L 280 150", 
    color: "#3B82F6", 
    animationIndex: 0,
    dotPosition: { x: "235", y: "150" }
  },
  
  // Internal Rewards to Total Stake
  { 
    path: "M 480 150 L 550 150", 
    color: "#10B981", 
    animationIndex: 1,
    dotPosition: { x: "515", y: "150" }
  },
  
  // Network Costs to Deflation
  { 
    path: "M 950 150 L 1010 150", 
    color: "#F97316", 
    animationIndex: 2,
    dotPosition: { x: "980", y: "150" }
  },
  
  // Total Stake to Block Production
  { 
    path: "M 625 250 L 625 300 L 400 300 L 400 350", 
    color: "#3B82F6", 
    animationIndex: 4,
    dotPosition: { x: "525", y: "300" }
  },
  
  // Network Costs to Profitability
  { 
    path: "M 850 250 L 850 300 L 950 300 L 950 350", 
    color: "#F97316", 
    animationIndex: 5,
    dotPosition: { x: "900", y: "300" }
  },
  
  // Total Stake to Profitability
  { 
    path: "M 625 250 L 625 300 L 950 300 L 950 350", 
    color: "#3B82F6", 
    animationIndex: 6,
    dotPosition: { x: "750", y: "300" }
  },
];

export const boxes = [
  // Inflation Box
  {
    x: 40,
    y: 100,
    width: 150,
    height: 100,
    title: "inflation",
    subtitle: "token issuance",
    icon: "inflation" as const,
    color: "12, 132, 199",
    animationIndex: 0,
    simpleStyle: true
  },
  
  // Internal Rewards Box
  {
    x: 280,
    y: 100,
    width: 200,
    height: 230,
    title: "internal rewards",
    icon: "internal-rewards" as const,
    color: "#10B981",
    animationIndex: 1,
    subitems: internalRewardsSubitems
  },
  
  // Total Stake Box
  {
    x: 550,
    y: 100,
    width: 200,
    height: 150,
    title: "total stake",
    icon: "total-stake" as const,
    color: "#3B82F6",
    animationIndex: 1,
    subitems: totalStakeSubitems
  },
  
  // Network Costs Box
  {
    x: 820,
    y: 100,
    width: 190,
    height: 300,
    title: "network usage costs",
    icon: "network-costs" as const,
    color: "#F97316",
    animationIndex: 1,
    subitems: networkCostsSubitems
  },
  
  // Deflation Box
  {
    x: 1010,
    y: 100,
    width: 150,
    height: 100,
    title: "deflation",
    subtitle: "token burns",
    icon: "deflation" as const,
    color: "234, 179, 8",
    animationIndex: 0,
    simpleStyle: true
  },
  
  // Block Production Box
  {
    x: 250,
    y: 350,
    width: 300,
    height: 230,
    title: "block production eligibility",
    icon: "block-production" as const,
    color: "#3B82F6",
    animationIndex: 2,
    subitems: blockProductionSubitems
  },
  
  // Profitability Box
  {
    x: 850,
    y: 350,
    width: 300,
    height: 165,
    title: "profitability",
    icon: "profitability" as const,
    color: "#3B82F6",
    animationIndex: 2,
    subitems: profitabilitySubitems
  },
];
