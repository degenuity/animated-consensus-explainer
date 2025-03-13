
// Box definitions with positions, dimensions and content
import { 
  internalRewardsSubitems, 
  networkCostsSubitems, 
  totalStakeSubitems,
  blockProductionSubitems,
  profitabilitySubitems
} from './subItems';

export const boxes = [
  // Inflation Box
  {
    x: 100,
    y: 240,
    width: 150,
    height: 100,
    title: "inflation",
    subtitle: "token issuance",
    icon: "inflation" as const,
    color: "0, 149, 255",
    animationIndex: 0,
    simpleStyle: true
  },
  
  // Internal Rewards Box - Aligned with Inflation's center Y value (240 + 100/2 = 290)
  {
    x: 320,
    y: 210, // Aligned to center at Y=290 (290 - 160/2 = 210)
    width: 260,
    height: 160,
    title: "internal rewards",
    icon: "internal-rewards" as const,
    color: "#10B981",
    animationIndex: 1,
    subitems: internalRewardsSubitems,
    borderColor: "#10B981"
  },
  
  // Total Stake Box - Also aligned with Inflation's center Y value
  {
    x: 635,
    y: 210, // Aligned to center at Y=290 (290 - 160/2 = 210)
    width: 260,
    height: 160,
    title: "total stake",
    icon: "total-stake" as const,
    color: "#3B82F6",
    animationIndex: 1,
    subitems: totalStakeSubitems,
    borderColor: "#3B82F6"
  },
  
  // Network Costs Box - Aligned with Inflation's center Y value, but has more height
  {
    x: 950,
    y: 135, // Adjusted to align center with inflation (290 - 310/2 = 135)
    width: 280,
    height: 310,
    title: "network usage costs",
    icon: "network-costs" as const,
    color: "#F97316",
    animationIndex: 1,
    subitems: networkCostsSubitems,
    borderColor: "#F97316"
  },
  
  // Deflation Box
  {
    x: 1250,
    y: 240,
    width: 150,
    height: 100,
    title: "deflation",
    subtitle: "token burns",
    icon: "deflation" as const,
    color: "255, 187, 0",
    animationIndex: 0,
    simpleStyle: true
  },
  
  // Block Production Box
  {
    x: 320,
    y: 500,
    width: 530,
    height: 140,
    title: "block production eligibility",
    icon: "block-production" as const,
    color: "#3B82F6",
    animationIndex: 2,
    subitems: blockProductionSubitems,
    borderColor: "#3B82F6"
  },
  
  // Profitability Box
  {
    x: 880,
    y: 500,
    width: 350,
    height: 140,
    title: "profitability",
    icon: "profitability" as const,
    color: "#3B82F6",
    animationIndex: 2,
    subitems: profitabilitySubitems,
    borderColor: "#3B82F6"
  }
];
