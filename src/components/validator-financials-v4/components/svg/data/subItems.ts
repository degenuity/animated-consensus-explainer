
// Subitem definitions for different boxes

export const internalRewardsSubitems = [
  { text: "commission", id: "commission", color: "#10B981" },
  { text: "staking rewards", id: "staking-rewards", color: "#10B981" },
  { text: "voting rewards", id: "voting-rewards", color: "#10B981" }
];

export const networkCostsSubitems = [
  { 
    text: "base fees", 
    id: "base-fees",
    color: "#EAB308"
  },
  { 
    text: "block rewards",
    id: "block-rewards",
    color: "#8E9196",  // Gray color
    position: { y: 30 }, // Spacing between base fees and block rewards
    subItems: [
      { 
        text: "priority fees", 
        id: "priority-fees", 
        color: "#10B981",
        position: { y: 5 } // Reduced from 25 to 5px (moved up by 20px)
      },
      { 
        text: "mev", 
        id: "mev", 
        color: "#10B981",
        position: { y: 65 } // Keeping this the same
      }
    ]
  }
];

export const totalStakeSubitems = [
  { text: "delegated stake", id: "delegated-stake", color: "#3B82F6" },
  { text: "own stake", id: "own-stake", color: "#3B82F6" }
];

export const blockProductionSubitems = [
  { 
    text: "performance", // Swapped with stake weight (moved from position 5 to position 1)
    desc: "from recorded history", 
    id: "performance-reputation",
    color: "#3B82F6",
    isHorizontal: true
  },
  {
    text: "×",
    id: "multiply-1",
    color: "#0E7490", // Darker blue
    isHorizontal: true,
    isOperator: true
  },
  { 
    text: "randomness", 
    desc: "ACP anti-collusion protocol", // Added "protocol" back
    id: "randomness",
    color: "#3B82F6",
    isHorizontal: true
  },
  {
    text: "×",
    id: "multiply-2",
    color: "#0E7490", // Darker blue
    isHorizontal: true,
    isOperator: true
  },
  { 
    text: "stake weight", // Swapped with performance (moved from position 1 to position 5)
    desc: "amount of XNT staked", 
    id: "stake-weight",
    color: "#3B82F6",
    isHorizontal: true
  }
];

export const profitabilitySubitems = [
  { 
    text: "total validator rewards", 
    desc: "aggregate", 
    id: "total-validator-rewards", 
    color: "#10B981",
    isHorizontal: true
  },
  {
    text: "-",
    id: "minus-operator",
    color: "#8E9196", // Medium gray color for the minus sign
    isHorizontal: true,
    isOperator: true
  },
  { 
    text: "operational costs", 
    desc: "only cost is server", 
    id: "operational-costs", 
    color: "#EAB308",
    isHorizontal: true 
  }
];
