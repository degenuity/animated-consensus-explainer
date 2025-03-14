
export interface Blockchain {
  id: string;
  name: string;
  x: number;
  y: number;
  logo: string;
  logoClass?: string;
  animationDelay?: number;
  highlighted?: boolean;
}

// Define blockchains with their positions and data
export const blockchains: Blockchain[] = [
  // Parallelism + Smart Contracts (Top section)
  { 
    id: 'x1', 
    name: 'X1 Blockchain', 
    x: 1200, 
    y: 160, 
    logo: '/lovable-uploads/f20e89ba-6ef8-4889-bcbb-4c6052e8d553.png',
    logoClass: 'w-[80px] h-[20px] object-contain',
    animationDelay: 0.8,
    highlighted: true
  },
  { 
    id: 'solana', 
    name: 'Solana', 
    x: 500, 
    y: 130, 
    logo: 'https://cryptologos.cc/logos/solana-sol-logo.png',
    logoClass: 'w-[30px] h-[30px] object-contain',
    animationDelay: 0.3
  },
  { 
    id: 'sui', 
    name: 'Sui', 
    x: 350, 
    y: 200, 
    logo: 'https://cryptologos.cc/logos/sui-sui-logo.png',
    logoClass: 'w-[30px] h-[30px] object-contain',
    animationDelay: 0.4
  },
  
  // Sequential + Smart Contracts (Middle section)
  { 
    id: 'polkadot', 
    name: 'Polkadot', 
    x: 1100, 
    y: 320, 
    logo: 'https://cryptologos.cc/logos/polkadot-new-dot-logo.png',
    logoClass: 'w-[30px] h-[30px] object-contain',
    animationDelay: 0.7
  },
  { 
    id: 'cardano', 
    name: 'Cardano', 
    x: 900, 
    y: 320, 
    logo: 'https://cryptologos.cc/logos/cardano-ada-logo.png',
    logoClass: 'w-[30px] h-[30px] object-contain',
    animationDelay: 0.6
  },
  { 
    id: 'avalanche', 
    name: 'Avalanche', 
    x: 650, 
    y: 320, 
    logo: 'https://cryptologos.cc/logos/avalanche-avax-logo.png',
    logoClass: 'w-[30px] h-[30px] object-contain',
    animationDelay: 0.5
  },
  { 
    id: 'tron', 
    name: 'Tron', 
    x: 200, 
    y: 380, 
    logo: 'https://cryptologos.cc/logos/tron-trx-logo.png',
    logoClass: 'w-[30px] h-[30px] object-contain',
    animationDelay: 0.2
  },
  { 
    id: 'ethereum', 
    name: 'Ethereum', 
    x: 200, 
    y: 450, 
    logo: 'https://cryptologos.cc/logos/ethereum-eth-logo.png',
    logoClass: 'w-[30px] h-[30px] object-contain',
    animationDelay: 0.2
  },
  
  // No Smart Contracts (Bottom section)
  { 
    id: 'xrp', 
    name: 'XRP', 
    x: 400, 
    y: 550, 
    logo: 'https://cryptologos.cc/logos/xrp-xrp-logo.png',
    logoClass: 'w-[30px] h-[30px] object-contain',
    animationDelay: 0.4
  },
  { 
    id: 'bitcoin', 
    name: 'Bitcoin', 
    x: 150, 
    y: 580, 
    logo: 'https://cryptologos.cc/logos/bitcoin-btc-logo.png',
    logoClass: 'w-[30px] h-[30px] object-contain',
    animationDelay: 0.1
  }
];
