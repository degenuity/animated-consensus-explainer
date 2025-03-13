
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
  
  // Line 4: Total Stake to Stake Weight
  // The stake weight box is the rightmost box in block production eligibility row
  // Based on the console log, the stake weight box center is at approximately x=765, y=600
  { 
    path: "M 780 340 L 780 465 L 765 465 L 765 550", 
    color: "#3B82F6", 
    animationIndex: 3,
    dotPosition: { x: "765", y: "530" },
    animateMotion: true,
    animationDirection: "down" as const,
    id: "total-stake-to-stake-weight",
    renderOrder: "foreground" as const,
    animationDuration: 2
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
    dotPosition: { x: "1055", y: "500" },
    id: "block-rewards-to-total-validator-rewards",
    renderOrder: "foreground" as const,
    animationDuration: 2
  },
  
  // NEW LINE: Internal Rewards to Total Validator Rewards
  { 
    path: "M 450 340 L 450 450 L 1020 450 L 1020 550", 
    color: "#10B981", 
    animationIndex: 9,
    animateMotion: true,
    dotPosition: { x: "735", y: "450" },
    id: "internal-rewards-to-total-validator-rewards",
    renderOrder: "foreground" as const,
    animationDuration: 2.5
  },
  
  // Delegated Stake to Commission - UPDATED
  // Based on in-depth analysis of coordinates, delegated stake box is a subitem within the total stake box
  // Exact coordinates to be updated after debugging
  { 
    path: "M 650 260 L 450 260", 
    color: "#0EA5E9", 
    animationIndex: 10,
    animateMotion: true,
    dotPosition: { x: "550", y: "260" },
    animationDirection: "left" as const,
    id: "delegated-stake-to-commission", 
    renderOrder: "foreground" as const,
    animationDuration: 1.8,
    renderAsDefinition: false
  }
];
