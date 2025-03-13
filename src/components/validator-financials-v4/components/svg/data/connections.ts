
// Box definitions with positions, dimensions and content
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
    renderOrder: "background" as const
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
    renderOrder: "foreground" as const
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
    renderOrder: "foreground" as const
  },
  
  // Line 4: Total Stake to Stake Weight
  { 
    path: "M 780 320 L 780 420 L 380 420 L 380 500", 
    color: "#3B82F6", 
    animationIndex: 3,
    dotPosition: { x: "380", y: "460" },
    animateMotion: true,
    animationDirection: "down" as const,
    id: "total-stake-to-stake-weight",
    renderOrder: "background" as const,
    animationDuration: 3
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
    renderOrder: "background" as const
  },
  
  // Line 6: Base Fees to Block Rewards
  { 
    path: "M 1090 180 L 1090 230", 
    color: "#EAB308", 
    animationIndex: 5,
    dotPosition: { x: "1090", y: "205" },
    label: "50%",
    labelPosition: { x: 1070, y: 205 },
    id: "base-fees-to-block-rewards",
    renderOrder: "background" as const
  },
  
  // Base Fee bottom to Block Rewards center - Updated with exact y=210 from the console logs
  { 
    path: "M 1090 210 L 1090 260", 
    color: "#EAB308", 
    animationIndex: 7,
    animateMotion: true,
    dotPosition: { x: "1090", y: "235" },
    id: "base-fee-bottom-to-block-rewards",
    renderOrder: "foreground" as const,
    animationDuration: 1.5
  },
  
  // Block Rewards to Total Validator Rewards - Using exact coordinates for total validator rewards top-center
  { 
    path: "M 1090 410 L 1090 450 L 850 450", 
    color: "#F97316", 
    animationIndex: 8,
    animateMotion: true,
    dotPosition: { x: "970", y: "450" },
    id: "block-rewards-to-total-validator-rewards",
    renderOrder: "foreground" as const,
    animationDuration: 2
  },
  
  // NEW - Connection from Internal Rewards to Total Validator Rewards
  { 
    path: "M 450 300 L 550 450 L 850 450", 
    color: "#10B981", 
    animationIndex: 9,
    animateMotion: true,
    dotPosition: { x: "650", y: "450" },
    id: "internal-rewards-to-total-validator-rewards",
    renderOrder: "background" as const,
    animationDuration: 2.5
  }
];
