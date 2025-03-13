
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
  
  // Internal Rewards Box
  {
    x: 320,
    y: 180,
    width: 260,
    height: 220, // Increased height from 180 to 220 to fit all subitems
    title: "internal rewards",
    icon: "internal-rewards" as const,
    color: "#10B981",
    animationIndex: 1,
    subitems: internalRewardsSubitems,
    borderColor: "#10B981"
  },
  
  // Total Stake Box
  {
    x: 650,
    y: 180,
    width: 260,
    height: 160, // Reduced height from 180 to 160 for more appropriate sizing
    title: "total stake",
    icon: "total-stake" as const,
    color: "#3B82F6",
    animationIndex: 1,
    subitems: totalStakeSubitems,
    borderColor: "#3B82F6"
  },
  
  // Network Costs Box
  {
    x: 950,
    y: 120,
    width: 280,
    height: 270,
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
  
  // Block Production Box - increased width to accommodate wider randomness box
  {
    x: 320,
    y: 500,
    width: 550, // Increased from 520 to 550 for more space
    height: 140,
    title: "block production eligibility",
    icon: "block-production" as const,
    color: "#3B82F6",
    animationIndex: 2,
    subitems: blockProductionSubitems,
    borderColor: "#3B82F6"
  },
  
  // Profitability Box - increased width to match block production box width
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
