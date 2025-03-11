
import React from 'react';
import { Link } from "react-router-dom";
import { Button } from "@/components/ui/button";

const Home = () => {
  console.log("Home component rendering");

  return (
    <div className="min-h-screen bg-slate-100 p-4 flex items-center justify-center">
      <div className="w-full max-w-md p-6 bg-white rounded-lg shadow-lg">
        <h1 className="text-2xl font-bold text-center mb-6">X1 Research</h1>
        
        <div className="bg-red-500 text-white p-4 mb-4 rounded-md">
          <p>If you can see this, basic rendering is working!</p>
        </div>
        
        <div className="flex flex-col gap-2">
          <Link to="/consensus">
            <Button className="w-full">View Consensus Explainer</Button>
          </Link>
          <Link to="/whitepaper">
            <Button className="w-full" variant="outline">Read Whitepaper</Button>
          </Link>
        </div>
      </div>
    </div>
  );
};

export default Home;
