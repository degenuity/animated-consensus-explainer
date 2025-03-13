
// Box definitions with positions, dimensions and content
export const connectionPaths = [
  // Line 1: Inflation to Internal Rewards
  { 
    path: "M 250 290 L 320 290", 
    color: "#3B82F6", 
    animationIndex: 0,
    animateMotion: true,
    id: "inflation-to-internal-rewards",
    renderOrder: "background" as const,
    animationDuration: 1.5
  },
  
  // Line 4: Total Stake to Stake Weight - Updated coordinates to match new Total Stake position
  { 
    path: "M 765 340 L 765 465 L 765 550", 
    color: "#3B82F6", 
    animationIndex: 3,
    animateMotion: true,
    id: "total-stake-to-stake-weight",
    renderOrder: "foreground" as const,
    animationDuration: 2
  },
  
  // Line 6: Base Fees to Block Rewards
  { 
    path: "M 1090 180 L 1090 230", 
    color: "#EAB308", 
    animationIndex: 5,
    animateMotion: true,
    id: "base-fees-to-block-rewards",
    renderOrder: "background" as const,
    animationDuration: 1.5
  },
  
  // Base Fee bottom to Block Rewards center
  { 
    path: "M 1090 210 L 1090 260", 
    color: "#EAB308", 
    animationIndex: 7,
    animateMotion: true,
    id: "base-fee-bottom-to-block-rewards",
    renderOrder: "foreground" as const,
    animationDuration: 1.5
  },
  
  // Block Rewards to Total Validator Rewards
  { 
    path: "M 1090 410 L 1090 450 L 1020 450 L 1020 550", 
    color: "#10B981", 
    animationIndex: 8,
    animateMotion: true,
    id: "block-rewards-to-total-validator-rewards",
    renderOrder: "foreground" as const,
    animationDuration: 2
  },
  
  // Internal Rewards to Total Validator Rewards
  { 
    path: "M 450 340 L 450 450 L 1020 450 L 1020 550", 
    color: "#10B981", 
    animationIndex: 9,
    animateMotion: true,
    id: "internal-rewards-to-total-validator-rewards",
    renderOrder: "foreground" as const,
    animationDuration: 2.5
  },
  
  // Delegated Stake to Commission - Updated coordinates for new Total Stake position
  { 
    path: "M 635 250 L 558 250", 
    color: "#0EA5E9", 
    animationIndex: 10,
    animateMotion: true,
    id: "delegated-stake-to-commission", 
    renderOrder: "foreground" as const,
    animationDuration: 1.8
  },
  
  // Own Stake to Staking Rewards - Updated coordinates for new Total Stake position
  { 
    path: "M 635 310 L 558 310", 
    color: "#0EA5E9", 
    animationIndex: 11,
    animateMotion: true,
    id: "own-stake-to-staking-rewards", 
    renderOrder: "foreground" as const,
    animationDuration: 1.8
  },
  
  // Base Fee right side to Deflation
  { 
    path: "M 1208 190 L 1300 240", 
    color: "#EAB308", 
    animationIndex: 12,
    animateMotion: true,
    id: "base-fee-right-to-deflation",
    renderOrder: "foreground" as const,
    animationDuration: 1.8
  }
];
