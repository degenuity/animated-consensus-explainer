
import { MotionProps } from 'framer-motion';

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
  lineVariants: {
    hidden: MotionProps['initial'];
    visible: (i: number) => MotionProps['animate'];
  };
  dotVariants: {
    hidden: MotionProps['initial'];
    visible: (i: number) => MotionProps['animate'];
  };
} {
  // Animation variants for connecting lines
  const lineVariants = {
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
  const dotVariants = {
    hidden: { opacity: 0 },
    visible: (i: number) => ({
      opacity: [0, 1, 0],
      transition: {
        delay: i * 0.3 + dotAnimationDelay,
        duration: dotAnimationDuration,
        repeat: Infinity,
        repeatDelay: 1
      }
    })
  };

  return {
    lineVariants,
    dotVariants
  };
}
