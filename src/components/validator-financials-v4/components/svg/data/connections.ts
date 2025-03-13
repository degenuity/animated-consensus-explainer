
// Box definitions with positions, dimensions and content

// New consistent Y value for all top row connections
const TOP_CONNECTION_Y = 230;

export const connectionPaths = [
  // Line 1: Inflation to Internal Rewards
  { 
    path: `M 250 ${TOP_CONNECTION_Y} L 320 ${TOP_CONNECTION_Y}`, 
    color: "#3B82F6", 
    animationIndex: 0,
    dotPosition: { x: "285", y: `${TOP_CONNECTION_Y}` },
    animationDirection: "right" as const,
    animateMotion: true,
    id: "inflation-to-internal-rewards",
    renderOrder: "background" as const
  },
  
  // Line 4: Total Stake to Stake Weight - Updated coordinates
  { 
    path: `M 765 340 L 765 465 L 765 550`, 
    color: "#3B82F6", 
    animationIndex: 3,
    dotPosition: { x: "765", y: "530" },
    animateMotion: true,
    animationDirection: "down" as const,
    id: "total-stake-to-stake-weight",
    renderOrder: "foreground" as const,
    animationDuration: 2
  },
  
  // Line 6: Base Fees to Block Rewards - Updated Y coordinates
  { 
    path: `M 1090 260 L 1090 310`, 
    color: "#EAB308", 
    animationIndex: 5,
    dotPosition: { x: "1090", y: "285" },
    id: "base-fees-to-block-rewards",
    renderOrder: "background" as const
  },
  
  // Base Fee bottom to Block Rewards center - Updated Y coordinates
  { 
    path: `M 1090 290 L 1090 340`, 
    color: "#EAB308", 
    animationIndex: 7,
    animateMotion: true,
    dotPosition: { x: "1090", y: "315" },
    id: "base-fee-bottom-to-block-rewards",
    renderOrder: "foreground" as const,
    animationDuration: 1.5
  },
  
  // Block Rewards to Total Validator Rewards - Updated Y coordinates
  { 
    path: `M 1090 430 L 1090 450 L 1020 450 L 1020 550`, 
    color: "#10B981", 
    animationIndex: 8,
    animateMotion: true,
    dotPosition: { x: "1020", y: "500" },
    id: "block-rewards-to-total-validator-rewards",
    renderOrder: "foreground" as const,
    animationDuration: 2
  },
  
  // Internal Rewards to Total Validator Rewards - Updated Y coordinates
  { 
    path: `M 450 340 L 450 450 L 1020 450 L 1020 550`, 
    color: "#10B981", 
    animationIndex: 9,
    animateMotion: true,
    dotPosition: { x: "735", y: "450" },
    id: "internal-rewards-to-total-validator-rewards",
    renderOrder: "foreground" as const,
    animationDuration: 2.5
  },
  
  // Delegated Stake to Commission - Updated Y coordinates to match new box positions
  { 
    path: `M 635 230 L 580 230`, 
    color: "#0EA5E9", 
    animationIndex: 10,
    animateMotion: true,
    dotPosition: { x: "607", y: "230" },
    animationDirection: "left" as const,
    id: "delegated-stake-to-commission", 
    renderOrder: "foreground" as const,
    animationDuration: 1.8
  },
  
  // Own Stake to Staking Rewards - Updated Y coordinates to match new box positions
  { 
    path: `M 635 290 L 580 290`, 
    color: "#0EA5E9", 
    animationIndex: 11,
    animateMotion: true,
    dotPosition: { x: "607", y: "290" },
    animationDirection: "left" as const,
    id: "own-stake-to-staking-rewards", 
    renderOrder: "foreground" as const,
    animationDuration: 1.8
  },
  
  // Base Fee right side to Deflation - Updated Y coordinates
  { 
    path: `M 1230 ${TOP_CONNECTION_Y} L 1250 ${TOP_CONNECTION_Y}`, 
    color: "#EAB308", 
    animationIndex: 12,
    animateMotion: true,
    dotPosition: { x: "1240", y: `${TOP_CONNECTION_Y}` },
    id: "base-fee-right-to-deflation",
    renderOrder: "foreground" as const,
    animationDuration: 1.8
  }
];
