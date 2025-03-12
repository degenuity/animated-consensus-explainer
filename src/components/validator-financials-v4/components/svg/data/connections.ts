
// Connection path definitions for the diagram

export const connectionPaths = [
  // Inflation to Internal Rewards
  { 
    path: "M 250 280 L 320 280", 
    color: "#3B82F6", 
    animationIndex: 0,
    dotPosition: { x: "285", y: "280" }
  },
  
  // Internal Rewards to Block Production
  { 
    path: "M 375 360 L 375 500", 
    color: "#10B981", 
    animationIndex: 1,
    dotPosition: { x: "375", y: "430" }
  },
  
  // Total Stake to Internal Rewards
  { 
    path: "M 650 250 L 580 250", 
    color: "#3B82F6", 
    animationIndex: 2,
    dotPosition: { x: "615", y: "250" }
  },
  
  // Total Stake to Block Production
  { 
    path: "M 780 320 L 780 420 L 530 420 L 530 500", 
    color: "#3B82F6", 
    animationIndex: 3,
    dotPosition: { x: "650", y: "420" }
  },
  
  // Base Fees to Block Rewards (50% vertical down)
  { 
    path: "M 1090 210 L 1090 255", 
    color: "#EAB308", 
    animationIndex: 4,
    dotPosition: { x: "1090", y: "230" },
    label: "50%",
    labelPosition: { x: 1070, y: 230 }
  },
  
  // Base Fees to Deflation (50% horizontal right)
  { 
    path: "M 1190 175 L 1250 280", 
    color: "#EAB308", 
    animationIndex: 5,
    dotPosition: { x: "1220", y: "230" },
    label: "50%",
    labelPosition: { x: 1220, y: 200 }
  },
  
  // Block Rewards to Profitability
  { 
    path: "M 1090 340 L 1090 430 L 990 430 L 990 500", 
    color: "#10B981", 
    animationIndex: 6,
    dotPosition: { x: "1040", y: "430" }
  },
  
  // Total Stake to Profitability
  { 
    path: "M 780 320 L 780 430 L 950 430 L 950 500", 
    color: "#3B82F6", 
    animationIndex: 7,
    dotPosition: { x: "870", y: "430" }
  },
  
  // Operational Costs to Explanation
  { 
    path: "M 880 600 L 750 600 L 750 740", 
    color: "#F97316", 
    animationIndex: 8,
    dotPosition: { x: "750", y: "670" }
  }
];
