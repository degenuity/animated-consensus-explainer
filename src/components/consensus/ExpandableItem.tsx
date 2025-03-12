
import React from 'react';
import { motion } from "framer-motion";
import { ChevronDown, ChevronUp } from "lucide-react";
import { Collapsible, CollapsibleContent, CollapsibleTrigger } from "@/components/ui/collapsible";

interface ExpandableItemProps {
  name: string;
  color: string;
  description: string;
  expandable: boolean;
  isOpen?: boolean;
  setIsOpen?: (isOpen: boolean) => void;
  content?: React.ReactNode;
  index: number;
}

export const ExpandableItem: React.FC<ExpandableItemProps> = ({
  name, 
  color, 
  description, 
  expandable, 
  isOpen, 
  setIsOpen, 
  content, 
  index
}) => {
  // Get color classes based on color prop
  const getColorClasses = () => {
    switch (color) {
      case 'blue-400':
        return {
          dot: 'bg-blue-400',
          icon: 'text-blue-300',
          border: 'border-blue-500/30'
        };
      case 'green-400':
        return {
          dot: 'bg-green-400',
          icon: 'text-green-300',
          border: 'border-green-500/30'
        };
      case 'purple-400':
        return {
          dot: 'bg-purple-400',
          icon: 'text-purple-300',
          border: 'border-purple-500/30'
        };
      case 'indigo-400':
        return {
          dot: 'bg-indigo-400',
          icon: 'text-indigo-300',
          border: 'border-indigo-500/30'
        };
      case 'pink-400':
        return {
          dot: 'bg-pink-400',
          icon: 'text-pink-300',
          border: 'border-pink-500/30'
        };
      case 'red-400':
        return {
          dot: 'bg-red-400',
          icon: 'text-red-300',
          border: 'border-red-500/30'
        };
      default:
        return {
          dot: 'bg-blue-400',
          icon: 'text-blue-300',
          border: 'border-blue-500/30'
        };
    }
  };
  
  const colorClasses = getColorClasses();
  
  // Get shadow values for animation
  const getShadowValues = () => {
    switch (color) {
      case 'green-400':
        return ['rgba(34, 197, 94, 0)', 'rgba(34, 197, 94, 0.5)', 'rgba(34, 197, 94, 0)'];
      case 'blue-400':
        return ['rgba(59, 130, 246, 0)', 'rgba(59, 130, 246, 0.5)', 'rgba(59, 130, 246, 0)'];
      case 'purple-400':
        return ['rgba(168, 85, 247, 0)', 'rgba(168, 85, 247, 0.5)', 'rgba(168, 85, 247, 0)'];
      case 'indigo-400':
        return ['rgba(99, 102, 241, 0)', 'rgba(99, 102, 241, 0.5)', 'rgba(99, 102, 241, 0)'];
      case 'pink-400':
        return ['rgba(236, 72, 153, 0)', 'rgba(236, 72, 153, 0.5)', 'rgba(236, 72, 153, 0)'];
      case 'red-400':
        return ['rgba(234, 56, 76, 0)', 'rgba(234, 56, 76, 0.5)', 'rgba(234, 56, 76, 0)'];
      default:
        return ['rgba(59, 130, 246, 0)', 'rgba(59, 130, 246, 0.5)', 'rgba(59, 130, 246, 0)'];
    }
  };
  
  const shadowValues = getShadowValues();
  
  return (
    <motion.div
      initial={{ x: -20, opacity: 0 }}
      whileHover={{ x: 5 }}
      animate={{ x: 0, opacity: 1 }}
      transition={{ 
        delay: 0.5 + index * 0.2,
        type: "spring",
        stiffness: 100
      }}
      className="flex items-start p-2 rounded-lg hover:bg-slate-700/30"
    >
      <motion.div 
        className={`w-3 h-3 rounded-full ${colorClasses.dot} mr-3 mt-1`}
        animate={{ 
          scale: [1, 1.5, 1],
          boxShadow: [
            `0 0 0px ${shadowValues[0]}`,
            `0 0 10px ${shadowValues[1]}`,
            `0 0 0px ${shadowValues[2]}`
          ]
        }}
        transition={{ 
          duration: 2, 
          repeat: Infinity,
          delay: index * 0.3
        }}
      />
      
      {expandable && isOpen !== undefined && setIsOpen !== undefined ? (
        <Collapsible
          open={isOpen}
          onOpenChange={setIsOpen}
          className="w-full"
        >
          <div className="flex items-start justify-between w-full">
            <div className="text-left">
              <p className="text-sm font-medium text-white">{name}</p>
              <p className="text-xs text-slate-300 mt-0.5">{description}</p>
            </div>
            <CollapsibleTrigger asChild>
              <button className="p-1 rounded-full bg-slate-700/50 hover:bg-slate-700/80 transition-colors">
                {isOpen ? (
                  <ChevronUp className={`h-4 w-4 ${colorClasses.icon}`} />
                ) : (
                  <ChevronDown className={`h-4 w-4 ${colorClasses.icon}`} />
                )}
              </button>
            </CollapsibleTrigger>
          </div>
          
          <CollapsibleContent 
            className={`mt-3 ml-6 space-y-2 text-sm ${colorClasses.border} border-l-2 pl-4`}
          >
            {content}
          </CollapsibleContent>
        </Collapsible>
      ) : (
        <div className="text-left">
          <p className="text-sm font-medium text-white">{name}</p>
          <p className="text-xs text-slate-300 mt-0.5">{description}</p>
        </div>
      )}
    </motion.div>
  );
};
