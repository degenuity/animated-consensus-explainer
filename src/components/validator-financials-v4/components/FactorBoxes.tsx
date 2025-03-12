
import React from 'react';
import FactorBox from './FactorBox';
import { PercentSquare, Clock, Wallet, ShieldCheck } from 'lucide-react';

const FactorBoxes: React.FC = () => {
  const factorBoxes = [
    { icon: <PercentSquare size={20} />, text: "APR Return", color: "text-blue-400", position: "4%" },
    { icon: <Clock size={20} />, text: "Uptime", color: "text-indigo-400", position: "30%" },
    { icon: <Wallet size={20} />, text: "Costs", color: "text-purple-400", position: "70%" },
    { icon: <ShieldCheck size={20} />, text: "Security", color: "text-rose-400", position: "95%" }
  ];

  return (
    <>
      {factorBoxes.map((factor, idx) => (
        <FactorBox
          key={`factor-${idx}`}
          icon={factor.icon}
          text={factor.text}
          color={factor.color}
          position={factor.position}
          index={idx}
        />
      ))}
    </>
  );
};

export default FactorBoxes;
