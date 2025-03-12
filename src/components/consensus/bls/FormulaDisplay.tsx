
import React from 'react';
import { FormulaCard } from './FormulaCard';

interface FormulaDisplayProps {
  activeFormula: number;
}

export const FormulaDisplay: React.FC<FormulaDisplayProps> = ({ activeFormula }) => {
  const formulas = [
    {
      title: "Individual signatures (σ<sub>i</sub>)",
      description: "From each validator where H(M) is the hash of the vote message and sk<sub>i</sub> is the validator's secret key.",
      explanation: "Each validator in a subcommittee generates a BLS signature σ<sub>i</sub> on the vote message M:",
      formula: "σ<sub>i</sub>= H(M)<sup>sk<sub>i</sub></sup>",
      color: 'purple' as const,
    },
    {
      title: "Aggregated signature (σ<sub>agg</sub>)",
      description: "Compressed proof of consensus.",
      explanation: "The relay node aggregates all signatures within the subcommittee which is then submitted to the leader:",
      formula: "σ<sub>agg</sub>= ∏ σ<sub>i</sub>",
      color: 'indigo' as const,
    },
    {
      title: "Verification of aggregated signature",
      description: "Where pk<sub>i</sub> are the public keys of the participating validators.",
      explanation: "The leader verifies the aggregated signature in constant time using:",
      formula: "e(σ<sub>agg</sub>,g)=e(H(M),∑pk<sub>i</sub>)",
      color: 'red' as const,
    }
  ];

  return (
    <div className="bg-slate-900/50 p-4 rounded-lg text-white formulaDisplay">
      {formulas.map((formula, index) => (
        <FormulaCard
          key={index}
          title={formula.title}
          description={formula.description}
          explanation={formula.explanation}
          formula={formula.formula}
          isActive={activeFormula === index}
          color={formula.color}
          index={index}
          activeFormula={activeFormula}
        />
      ))}
    </div>
  );
};
