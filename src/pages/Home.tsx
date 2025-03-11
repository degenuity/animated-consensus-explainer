
import React, { useEffect } from 'react';
import { Link } from "react-router-dom";
import { Button } from "@/components/ui/button";

const Home = () => {
  useEffect(() => {
    console.log("Home component mounted");
  }, []);

  // Extremely basic component for initial testing
  return (
    <div className="min-h-screen bg-black text-white p-8">
      <div className="max-w-4xl mx-auto">
        <div className="bg-red-500 text-white p-4 mb-8 rounded-md">
          <h1 className="text-xl font-bold">Test Element</h1>
          <p>If you can see this, basic rendering is working!</p>
        </div>
      </div>
    </div>
  );
};

export default Home;
