
import React, { useEffect } from 'react';
import { Link } from "react-router-dom";
import { Button } from "@/components/ui/button";

const Home = () => {
  useEffect(() => {
    console.log("Home component mounted");
    
    // Report any issues with image loading
    const img = new Image();
    img.src = "/lovable-uploads/68ffce32-b088-4588-b3b8-c9bd0ce9ec73.png";
    img.onload = () => console.log("Logo loaded successfully");
    img.onerror = (e) => console.error("Failed to load logo:", e);
  }, []);

  // Very basic component for initial testing
  return (
    <div className="min-h-screen bg-black text-white p-8">
      <div className="max-w-4xl mx-auto">
        <div className="bg-blue-500 text-white p-4 mb-8 rounded-md">
          <h1 className="text-xl font-bold">Test Element</h1>
          <p>If you can see this, basic rendering is working!</p>
        </div>
        
        <h1 className="text-3xl font-bold mb-6">X1 Research</h1>
        
        <div className="space-y-4">
          <Link to="/whitepaper">
            <Button className="w-full bg-blue-400 hover:bg-blue-500">Whitepaper</Button>
          </Link>
          
          <Link to="/consensus">
            <Button className="w-full bg-blue-400 hover:bg-blue-500">Consensus Explainer</Button>
          </Link>
        </div>
      </div>
    </div>
  );
};

export default Home;
