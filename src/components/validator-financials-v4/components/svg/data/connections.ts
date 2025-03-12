
export const connectionPaths = [
  // Line 1: Inflation to Internal Rewards
  { 
    path: "M 250 290 L 320 290", 
    color: "#3B82F6", 
    animationIndex: 0,
    dotPosition: { x: "285", y: "290" },
    animationDirection: "right" as const,
    animateMotion: true,
    id: "inflation-to-internal-rewards",
    renderOrder: "background"
  },
  
  // Line 2: Delegated Stake to Commission
  { 
    path: "M 650 240 L 580 240", 
    color: "#3B82F6", 
    animationIndex: 1,
    dotPosition: { x: "615", y: "240" },
    animateMotion: true,
    animationDirection: "left" as const,
    id: "delegated-stake-to-commission",
    renderOrder: "foreground"
  },
  
  // Line 3: Own Stake to Staking Rewards
  { 
    path: "M 650 280 L 580 280", 
    color: "#3B82F6", 
    animationIndex: 2,
    dotPosition: { x: "615", y: "280" },
    animateMotion: true,
    animationDirection: "left" as const,
    id: "own-stake-to-staking-rewards",
    renderOrder: "foreground"
  },
  
  // Line 4: Total Stake to Stake Weight
  { 
    path: "M 780 320 L 780 420 L 450 420 L 450 500", 
    color: "#3B82F6", 
    animationIndex: 3,
    dotPosition: { x: "615", y: "420" },
    id: "total-stake-to-stake-weight",
    renderOrder: "background"
  },
  
  // Line 5: Base Fee to Deflation
  { 
    path: "M 1090 180 L 1300 280", 
    color: "#EAB308", 
    animationIndex: 4,
    dotPosition: { x: "1195", y: "230" },
    label: "50%",
    labelPosition: { x: 1195, y: 210 },
    id: "base-fee-to-deflation",
    renderOrder: "background"
  },
  
  // Line 6: Base Fees to Block Rewards
  { 
    path: "M 1090 180 L 1090 255", 
    color: "#EAB308", 
    animationIndex: 5,
    dotPosition: { x: "1090", y: "217" },
    label: "50%",
    labelPosition: { x: 1070, y: 217 },
    id: "base-fees-to-block-rewards",
    renderOrder: "background"
  },
  
  // Line 7: Internal Rewards to Total Validator Rewards
  { 
    path: "M 450 360 L 450 430 L 990 430 L 990 500", 
    color: "#10B981", 
    animationIndex: 6,
    dotPosition: { x: "720", y: "430" },
    id: "internal-rewards-to-total-validator-rewards",
    renderOrder: "background"
  },
  
  // Line 8: Block Rewards to Total Validator Rewards
  { 
    path: "M 1090 340 L 1090 430 L 990 430 L 990 500", 
    color: "#10B981", 
    animationIndex: 7,
    dotPosition: { x: "1040", y: "430" },
    id: "block-rewards-to-total-validator-rewards",
    renderOrder: "background"
  }
];
