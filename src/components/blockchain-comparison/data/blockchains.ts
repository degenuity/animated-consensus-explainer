
export interface Blockchain {
  id: string;
  name: string;
  x: number;
  y: number;
  logo: string;
  logoClass?: string;
  animationDelay?: number;
  highlighted?: boolean;
  nakamotoCoefficient?: number;
}

// Define blockchains with their positions and data
export const blockchains: Blockchain[] = [
  // Parallelism + Smart Contracts (Top section)
  { 
    id: 'x1', 
    name: 'X1 Blockchain', 
    x: 1300, 
    y: 120, 
    logo: '/lovable-uploads/f20e89ba-6ef8-4889-bcbb-4c6052e8d553.png',
    logoClass: 'w-[80px] h-[20px] object-contain',
    animationDelay: 0.8,
    highlighted: true,
    nakamotoCoefficient: 200
  },
  { 
    id: 'solana', 
    name: 'SOLANA', 
    x: 550, 
    y: 120, 
    logo: 'https://cryptologos.cc/logos/solana-sol-logo.png',
    logoClass: 'w-[30px] h-[30px] object-contain',
    animationDelay: 0.3,
    nakamotoCoefficient: 19
  },
  { 
    id: 'sui', 
    name: 'Sui', 
    x: 450, 
    y: 180, 
    logo: 'https://cryptologos.cc/logos/sui-sui-logo.png',
    logoClass: 'w-[30px] h-[30px] object-contain',
    animationDelay: 0.4,
    nakamotoCoefficient: 17
  },
  
  // Sequential + Smart Contracts (Middle section)
  { 
    id: 'avalanche', 
    name: 'AVALANCHE', 
    x: 650, 
    y: 300, 
    logo: 'https://cryptologos.cc/logos/avalanche-avax-logo.png',
    logoClass: 'w-[30px] h-[30px] object-contain',
    animationDelay: 0.5,
    nakamotoCoefficient: 27
  },
  { 
    id: 'cardano', 
    name: 'CARDANO', 
    x: 900, 
    y: 300, 
    logo: 'https://cryptologos.cc/logos/cardano-ada-logo.png',
    logoClass: 'w-[30px] h-[30px] object-contain',
    animationDelay: 0.6,
    nakamotoCoefficient: 59
  },
  { 
    id: 'polkadot', 
    name: 'Polkadot', 
    x: 1150, 
    y: 300, 
    logo: 'https://cryptologos.cc/logos/polkadot-new-dot-logo.png',
    logoClass: 'w-[30px] h-[30px] object-contain',
    animationDelay: 0.7,
    nakamotoCoefficient: 132
  },
  { 
    id: 'tron', 
    name: 'TRON', 
    x: 260, 
    y: 380, 
    logo: 'https://cryptologos.cc/logos/tron-trx-logo.png',
    logoClass: 'w-[30px] h-[30px] object-contain',
    animationDelay: 0.2,
    nakamotoCoefficient: 1
  },
  { 
    id: 'ethereum', 
    name: 'Ethereum', 
    x: 330, 
    y: 440, 
    logo: 'https://cryptologos.cc/logos/ethereum-eth-logo.png',
    logoClass: 'w-[30px] h-[30px] object-contain',
    animationDelay: 0.2,
    nakamotoCoefficient: 2
  },
  
  // No Smart Contracts (Bottom section)
  { 
    id: 'xrp', 
    name: 'XRP', 
    x: 350, 
    y: 500, 
    logo: 'https://cryptologos.cc/logos/xrp-xrp-logo.png',
    logoClass: 'w-[30px] h-[30px] object-contain',
    animationDelay: 0.4,
    nakamotoCoefficient: 4
  },
  { 
    id: 'bitcoin', 
    name: 'Bitcoin', 
    x: 280, 
    y: 580, 
    logo: 'https://cryptologos.cc/logos/bitcoin-btc-logo.png',
    logoClass: 'w-[30px] h-[30px] object-contain',
    animationDelay: 0.1,
    nakamotoCoefficient: 3
  }
];
