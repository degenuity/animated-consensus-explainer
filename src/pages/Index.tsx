
import { Button } from "@/components/ui/button";
import { Link } from "react-router-dom";

const Index = () => {
  return (
    <div className="min-h-screen flex items-center justify-center bg-gradient-to-br from-slate-900 to-slate-800">
      <div className="text-center">
        <h1 className="text-4xl font-bold mb-4 text-white">Welcome to Consensus Explainer</h1>
        <p className="text-xl text-slate-300 mb-8">Discover how modern consensus mechanisms work</p>
        <Link to="/consensus">
          <Button className="bg-blue-500 hover:bg-blue-600 text-white">
            Explore Consensus
          </Button>
        </Link>
      </div>
    </div>
  );
};

export default Index;
