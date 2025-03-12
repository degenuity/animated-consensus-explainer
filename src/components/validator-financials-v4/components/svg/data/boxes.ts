
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
    x: 40,
    y: 100,
    width: 150,
    height: 100,
    title: "inflation",
    subtitle: "token issuance",
    icon: "inflation" as const,
    color: "12, 132, 199",
    animationIndex: 0,
    simpleStyle: true
  },
  
  // Internal Rewards Box
  {
    x: 280,
    y: 100,
    width: 200,
    height: 230,
    title: "internal rewards",
    icon: "internal-rewards" as const,
    color: "#10B981",
    animationIndex: 1,
    subitems: internalRewardsSubitems
  },
  
  // Total Stake Box
  {
    x: 550,
    y: 100,
    width: 150,
    height: 150,
    title: "total stake",
    icon: "total-stake" as const,
    color: "#3B82F6",
    animationIndex: 1,
    subitems: totalStakeSubitems
  },
  
  // Network Costs Box
  {
    x: 740,
    y: 100,
    width: 200,
    height: 330,
    title: "network usage costs",
    icon: "network-costs" as const,
    color: "#F97316",
    animationIndex: 1,
    subitems: networkCostsSubitems
  },
  
  // Deflation Box
  {
    x: 1010,
    y: 125,
    width: 150,
    height: 100,
    title: "deflation",
    subtitle: "token burns",
    icon: "deflation" as const,
    color: "234, 179, 8",
    animationIndex: 0,
    simpleStyle: true
  },
  
  // Block Production Box
  {
    x: 250,
    y: 350,
    width: 300,
    height: 230,
    title: "block production eligibility",
    icon: "block-production" as const,
    color: "#3B82F6",
    animationIndex: 2,
    subitems: blockProductionSubitems
  },
  
  // Profitability Box
  {
    x: 750,
    y: 450,
    width: 300,
    height: 165,
    title: "profitability",
    icon: "profitability" as const,
    color: "#3B82F6",
    animationIndex: 2,
    subitems: profitabilitySubitems
  },
];
