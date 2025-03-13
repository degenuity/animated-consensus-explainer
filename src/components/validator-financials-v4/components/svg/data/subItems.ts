
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
        position: { y: 35 } // Increased spacing from 15 to 35px (+20px)
      },
      { 
        text: "mev", 
        id: "mev", 
        color: "#10B981",
        position: { y: 55 } // Increased spacing from 35 to 55px (+20px)
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
    text: "stake weight", 
    desc: "amount of XNT staked", 
    id: "stake-weight",
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
    text: "performance", // Kept as "performance" without "/reputation"
    desc: "from recorded history", 
    id: "performance-reputation",
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
