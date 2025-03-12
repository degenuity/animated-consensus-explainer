
import { MotionProps, Variant, Variants } from 'framer-motion';

export interface AnimationConfig {
  animationIndex: number;
  pathAnimationDelay?: number;
  dotAnimationDelay?: number;
  dotAnimationDuration?: number;
  pathAnimationDuration?: number;
}

export function useConnectionAnimation({
  animationIndex,
  pathAnimationDelay = 0.5,
  dotAnimationDelay = 1.2,
  dotAnimationDuration = 2,
  pathAnimationDuration = 0.7
}: AnimationConfig): {
  lineVariants: Variants;
  dotVariants: Variants;
} {
  // Animation variants for connecting lines
  const lineVariants: Variants = {
    hidden: { pathLength: 0, opacity: 0 },
    visible: (i: number) => ({
      pathLength: 1,
      opacity: 1,
      transition: {
        pathLength: { 
          delay: i * 0.3 + pathAnimationDelay, 
          duration: pathAnimationDuration, 
          ease: "easeInOut" 
        },
        opacity: { 
          delay: i * 0.3 + pathAnimationDelay, 
          duration: 0.3 
        }
      }
    })
  };
  
  // Animation variants for moving dots on lines
  const dotVariants: Variants = {
    hidden: { opacity: 0 },
    visible: (i: number) => ({
      opacity: 1,
      transition: {
        delay: i * 0.3 + dotAnimationDelay,
        duration: 0.5
      }
    })
  };

  return {
    lineVariants,
    dotVariants
  };
}
