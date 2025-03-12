
import React from 'react';
import { Link } from 'react-router-dom';

const Home = () => {
  return (
    <div className="min-h-screen bg-slate-900 text-white relative font-blueprint">
      {/* Logo in top left corner */}
      <div className="absolute top-4 left-4 z-10">
        <Link to="/">
          <img 
            src="/lovable-uploads/bb1906db-aeaf-4ee3-9840-6bc142086f04.png" 
            alt="X1 Logo" 
            className="h-10 w-auto"
          />
        </Link>
      </div>
      
      {/* Main content */}
      <div className="flex justify-center items-center min-h-screen">
        <div className="text-center">
          <img 
            src="/lovable-uploads/68ffce32-b088-4588-b3b8-c9bd0ce9ec73.png" 
            alt="X1 Logo" 
            style={{ height: '28px', marginBottom: '20px' }} 
          />
          <h1 className="text-blue-400 text-2xl font-bold mb-5">
            X1 Research
          </h1>
          <p className="font-blueprint">Welcome to X1 Research</p>
        </div>
      </div>
    </div>
  );
};

export default Home;
