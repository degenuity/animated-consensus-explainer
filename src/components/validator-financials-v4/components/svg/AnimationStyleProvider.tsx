
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
      `}
    </style>
  );
};

export default AnimationStyleProvider;
