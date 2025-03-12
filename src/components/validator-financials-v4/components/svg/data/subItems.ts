// Subitem definitions for different boxes

export const internalRewardsSubitems = [
  "commission",
  "staking rewards",
  "voting rewards"
];

export const networkCostsSubitems = [
  { 
    text: "base fees", 
    id: "base-fees",
    subItems: []
  },
  { 
    text: "block rewards",
    id: "block-rewards",
    subItems: [
      { text: "priority fees", id: "priority-fees" },
      { text: "MEV", id: "mev" }
    ]
  }
];

export const totalStakeSubitems = [
  "delegated stake",
  "own stake"
];

export const blockProductionSubitems = [
  { text: "stake weight", desc: "amount of XNT staked" },
  { text: "randomness", desc: "ACP anti-collusion protocol" },
  { text: "performance/reputation", desc: "from recorded history" }
];

export const profitabilitySubitems = [
  { text: "operational costs", desc: "only cost is server", color: "#F59E0B" },
  { text: "total validator rewards", desc: "aggregate", color: "#10B981", hasPlus: true }
];
