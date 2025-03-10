
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
      className="flex items-center p-2 rounded-lg hover:bg-slate-700/30"
    >
      <motion.div 
        className={`w-3 h-3 rounded-full bg-${color} mr-3`}
        animate={{ 
          scale: [1, 1.5, 1],
          boxShadow: [
            `0 0 0px rgb(var(--${color.split('-')[0]}-rgb)/0)`,
            `0 0 10px rgb(var(--${color.split('-')[0]}-rgb)/0.5)`,
            `0 0 0px rgb(var(--${color.split('-')[0]}-rgb)/0)`
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
          <div className="flex items-center justify-between w-full">
            <div>
              <p className="text-sm font-medium text-white">{name}</p>
              <p className="text-xs text-slate-300 mt-0.5">{description}</p>
            </div>
            <CollapsibleTrigger asChild>
              <button className="p-1 rounded-full bg-slate-700/50 hover:bg-slate-700/80 transition-colors">
                {isOpen ? (
                  <ChevronUp className={`h-4 w-4 text-${color.replace('400', '300')}`} />
                ) : (
                  <ChevronDown className={`h-4 w-4 text-${color.replace('400', '300')}`} />
                )}
              </button>
            </CollapsibleTrigger>
          </div>
          
          <CollapsibleContent 
            className={`mt-3 ml-6 space-y-2 text-sm border-l-2 border-${color.replace('400', '500')}/30 pl-4`}
          >
            {content}
          </CollapsibleContent>
        </Collapsible>
      ) : (
        <div>
          <p className="text-sm font-medium text-white">{name}</p>
          <p className="text-xs text-slate-300 mt-0.5">{description}</p>
        </div>
      )}
    </motion.div>
  );
};
