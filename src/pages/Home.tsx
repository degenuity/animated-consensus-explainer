
import React from 'react';
import { Link } from "react-router-dom";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";

const Home = () => {
  React.useEffect(() => {
    console.log("Home component mounted");
  }, []);

  return (
    <div className="min-h-screen bg-slate-100 p-4 flex items-center justify-center">
      <Card className="w-full max-w-md shadow-lg">
        <CardHeader>
          <CardTitle className="text-2xl font-bold text-center">X1 Research</CardTitle>
        </CardHeader>
        <CardContent className="space-y-4">
          <div className="bg-red-500 text-white p-4 mb-4 rounded-md">
            <h2 className="text-xl font-bold">Test Element</h2>
            <p>If you can see this, basic rendering is working!</p>
          </div>
          
          <div className="flex flex-col gap-2">
            <Link to="/consensus">
              <Button className="w-full" variant="default">View Consensus Explainer</Button>
            </Link>
            <Link to="/whitepaper">
              <Button className="w-full" variant="outline">Read Whitepaper</Button>
            </Link>
          </div>
        </CardContent>
      </Card>
    </div>
  );
};

export default Home;
