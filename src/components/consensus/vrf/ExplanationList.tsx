
import React from 'react';
import { ExpandableItem } from '../ExpandableItem';

interface ExplanationListProps {
  isVoteReductionOpen: boolean;
  setIsVoteReductionOpen: (isOpen: boolean) => void;
  isAdjustmentOpen: boolean;
  setIsAdjustmentOpen: (isOpen: boolean) => void;
}

export const ExplanationList: React.FC<ExplanationListProps> = ({
  isVoteReductionOpen,
  setIsVoteReductionOpen,
  isAdjustmentOpen,
  setIsAdjustmentOpen
}) => {
  return (
    <div className="space-y-3">
      <ExpandableItem 
        name="Stake weight (Sᵢ)" 
        color="blue-400" 
        description="Validator importance based on staked tokens" 
        expandable={false}
        index={0}
      />
      
      <ExpandableItem 
        name="Vote reduction (F)" 
        color="green-400" 
        description="Global factor reducing committee size" 
        expandable={true}
        isOpen={isVoteReductionOpen}
        setIsOpen={setIsVoteReductionOpen}
        content={
          <div className="p-3 bg-slate-800/50 rounded-lg">
            <p className="text-slate-300">
              The global vote reduction factor, denoted as F, serves a critical function in the proposed VRF-based subcommittee selection mechanism for vote reduction. Its primary purpose is to decrease the frequency with which validators need to transmit votes during the consensus process. This reduction in voting frequency directly contributes to minimizing network congestion and reducing the computational overhead involved in signature verification.
            </p>
            <p className="mt-2 text-slate-300">
              In practical terms, F acts as a scaling factor. For instance, if F is set to 1/100 or 1/1000, it means that the frequency of votes transmitted by each validator is reduced to 1% or 0.1% of what it would normally be. This significant reduction ensures that the blockchain's consensus remains efficient and can operate smoothly even as the number of validators increases, without compromising on decentralization or security. Thus, F plays a key role in enhancing the scalability of the consensus mechanism.
            </p>
          </div>
        }
        index={1}
      />
      
      <ExpandableItem 
        name="Adjustment (Aᵢ)" 
        color="purple-400" 
        description="Performance-based multiplier" 
        expandable={true}
        isOpen={isAdjustmentOpen}
        setIsOpen={setIsAdjustmentOpen}
        content={
          <div className="p-3 bg-slate-800/50 rounded-lg">
            <div className="text-center mb-3 text-purple-300 font-mono">
              Aᵢ = (Lᵢ + Rᵢ)/2 × (1 - Kᵢ) × (1 + Dᵢ)
            </div>
            <ul className="space-y-2">
              <li className="flex items-start">
                <span className="text-purple-400 font-mono mr-2">Lᵢ</span>
                <span className="text-slate-300">Liveness score (uptime, missed votes, block proposal success rate)</span>
              </li>
              <li className="flex items-start">
                <span className="text-purple-400 font-mono mr-2">Rᵢ</span>
                <span className="text-slate-300">Performance score (latency, compute efficiency)</span>
              </li>
              <li className="flex items-start">
                <span className="text-purple-400 font-mono mr-2">Kᵢ</span>
                <span className="text-slate-300">Block skip penalty</span>
              </li>
              <li className="flex items-start">
                <span className="text-purple-400 font-mono mr-2">Dᵢ</span>
                <span className="text-slate-300">Delegation bonus favoring well-reputed validators</span>
              </li>
            </ul>
          </div>
        }
        index={2}
      />
    </div>
  );
};
