
// Connection path definitions for the diagram

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
  
  // Base Fees to Block Rewards (Vertical down with 50% label)
  { 
    path: "M 820 195 L 820 245", 
    color: "#EAB308", 
    animationIndex: 3,
    dotPosition: { x: "820", y: "220" },
    label: "50%",
    labelPosition: { x: 797, y: 220 }
  },
  
  // Base Fees to Deflation (horizontal right with 50% label)
  { 
    path: "M 880 170 L 1010 170", 
    color: "#EAB308", 
    animationIndex: 3,
    dotPosition: { x: "945", y: "170" },
    label: "50%",
    labelPosition: { x: 945, y: 147 }
  },
  
  // Network Costs to Total Stake
  { 
    path: "M 690 150 L 550 150", 
    color: "#F97316", 
    animationIndex: 2,
    dotPosition: { x: "620", y: "150" }
  },
  
  // Total Stake to Block Production
  { 
    path: "M 625 250 L 625 300 L 400 300 L 400 350", 
    color: "#3B82F6", 
    animationIndex: 4,
    dotPosition: { x: "525", y: "300" }
  },
  
  // Block Rewards to Profitability
  { 
    path: "M 820 350 L 820 425 L 900 425 L 900 450", 
    color: "#10B981", 
    animationIndex: 5,
    dotPosition: { x: "860", y: "425" }
  },
  
  // Total Stake to Profitability
  { 
    path: "M 625 250 L 625 400 L 900 400 L 900 450", 
    color: "#3B82F6", 
    animationIndex: 6,
    dotPosition: { x: "750", y: "400" }
  }
];
