
// Box definitions with positions, dimensions and content
export const connectionPaths = [
  // Line 1: Inflation to Internal Rewards - Updated Y to match new center points (290)
  { 
    path: "M 250 290 L 320 290", 
    color: "#3B82F6", 
    animationIndex: 0,
    dotPosition: { x: "285", y: "290" },
    animationDirection: "right" as const,
    animateMotion: true,
    id: "inflation-to-internal-rewards",
    renderOrder: "foreground" as const  // Changed to foreground to ensure visibility
  },
  
  // Line 4: Total Stake to Stake Weight - Updated coordinates to match new Total Stake position
  { 
    path: "M 765 370 L 765 465 L 765 550", // Updated starting Y from 340 to 370 (210 + 160 = 370)
    color: "#3B82F6", 
    animationIndex: 3,
    dotPosition: { x: "765", y: "530" },
    animateMotion: true,
    animationDirection: "down" as const,
    id: "total-stake-to-stake-weight",
    renderOrder: "foreground" as const,
    animationDuration: 2
  },
  
  // Line 6: Base Fees to Block Rewards
  { 
    path: "M 1090 180 L 1090 230", 
    color: "#EAB308", 
    animationIndex: 5,
    dotPosition: { x: "1090", y: "205" },
    id: "base-fees-to-block-rewards",
    renderOrder: "foreground" as const  // Changed to foreground
  },
  
  // Base Fee bottom to Block Rewards center
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
  
  // Block Rewards to Total Validator Rewards
  { 
    path: "M 1090 410 L 1090 450 L 1020 450 L 1020 550", 
    color: "#10B981", 
    animationIndex: 8,
    animateMotion: true,
    dotPosition: { x: "1020", y: "500" },
    id: "block-rewards-to-total-validator-rewards",
    renderOrder: "foreground" as const,
    animationDuration: 2
  },
  
  // Internal Rewards to Total Validator Rewards - Updated starting Y to match new Internal Rewards box position
  { 
    path: "M 450 370 L 450 450 L 1020 450 L 1020 550", // Updated from 340 to 370 (210 + 160 = 370)
    color: "#10B981", 
    animationIndex: 9,
    animateMotion: true,
    dotPosition: { x: "735", y: "450" },
    id: "internal-rewards-to-total-validator-rewards",
    renderOrder: "foreground" as const,
    animationDuration: 2.5
  },
  
  // Delegated Stake to Commission - Updated Y values for new boxes and changed renderOrder to foreground
  { 
    path: "M 635 280 L 558 280", // Updated from 250 to 280 to align with the center of the subitems
    color: "#0EA5E9", 
    animationIndex: 10,
    animateMotion: true,
    dotPosition: { x: "595", y: "280" },
    animationDirection: "left" as const,
    id: "delegated-stake-to-commission", 
    renderOrder: "foreground" as const, // Ensure this is in the foreground
    animationDuration: 1.8
  },
  
  // Own Stake to Staking Rewards - Updated Y values for new boxes and changed renderOrder to foreground
  { 
    path: "M 635 340 L 558 340", // Updated from 310 to 340 to align with the center of the subitems
    color: "#0EA5E9", 
    animationIndex: 11,
    animateMotion: true,
    dotPosition: { x: "595", y: "340" },
    animationDirection: "left" as const,
    id: "own-stake-to-staking-rewards", 
    renderOrder: "foreground" as const, // Ensure this is in the foreground
    animationDuration: 1.8
  },
  
  // Base Fee right side to Deflation
  { 
    path: "M 1208 190 L 1300 240", 
    color: "#EAB308", 
    animationIndex: 12,
    animateMotion: true,
    dotPosition: { x: "1254", y: "215" },
    id: "base-fee-right-to-deflation",
    renderOrder: "foreground" as const,
    animationDuration: 1.8
  }
];
