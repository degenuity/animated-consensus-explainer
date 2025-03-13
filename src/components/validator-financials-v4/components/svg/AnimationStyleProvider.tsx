
import React from 'react';

const AnimationStyleProvider: React.FC = () => {
  return (
    <style>
      {`
        @keyframes moveDotRight {
          0% { transform: translateX(-20px); }
          100% { transform: translateX(20px); }
        }
        @keyframes moveDotLeft {
          0% { transform: translateX(20px); }
          100% { transform: translateX(-20px); }
        }
        @keyframes moveDotUp {
          0% { transform: translateY(20px); }
          100% { transform: translateY(-20px); }
        }
        @keyframes moveDotDown {
          0% { transform: translateY(-20px); }
          100% { transform: translateY(20px); }
        }
        
        /* Add these styles to ensure SVG animations are visible */
        svg circle {
          transform-origin: center;
          transform-box: fill-box;
        }
        
        animateMotion {
          animation-timing-function: linear;
        }
        
        /* Make sure dots are visible */
        g circle {
          opacity: 1;
          visibility: visible;
        }
      `}
    </style>
  );
};

export default AnimationStyleProvider;
