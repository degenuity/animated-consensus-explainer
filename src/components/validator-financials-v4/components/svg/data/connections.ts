
export const connectionPaths = [
  // Inflation to Internal Rewards
  { 
    path: "M 250 290 H 320", 
    color: "#3B82F6", 
    animationIndex: 0,
    dotPosition: { x: "285", y: "290" }
  },
  
  // Internal Rewards to Block Production
  { 
    path: "M 450 360 L 450 500", 
    color: "#10B981", 
    animationIndex: 1,
    dotPosition: { x: "450", y: "430" }
  },
  
  // Total Stake to Internal Rewards
  { 
    path: "M 650 290 H 580", 
    color: "#3B82F6", 
    animationIndex: 2,
    dotPosition: { x: "615", y: "290" }
  },
  
  // Total Stake to Block Production
  { 
    path: "M 780 320 L 780 420 L 530 420 L 530 500", 
    color: "#3B82F6", 
    animationIndex: 3,
    dotPosition: { x: "650", y: "420" }
  },
  
  // Base Fees to Block Rewards
  { 
    path: "M 1090 210 L 1090 255", 
    color: "#EAB308", 
    animationIndex: 4,
    dotPosition: { x: "1090", y: "230" },
    label: "50%",
    labelPosition: { x: 1070, y: 230 }
  },
  
  // Base Fees to Deflation
  { 
    path: "M 1230 210 L 1300 290", 
    color: "#EAB308", 
    animationIndex: 5,
    dotPosition: { x: "1265", y: "250" },
    label: "50%",
    labelPosition: { x: 1250, y: 230 }
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
  }
];
