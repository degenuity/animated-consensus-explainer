
import { Toaster } from "@/components/ui/toaster";
import { Toaster as Sonner } from "@/components/ui/sonner";
import { TooltipProvider } from "@/components/ui/tooltip";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import React from "react";

// Direct imports for all pages
import Home from "./pages/Home";
import ConsensusExplainer from "./pages/ConsensusExplainer";
import Whitepaper from "./pages/Whitepaper";
import NotFound from "./pages/NotFound";

// Create a simple QueryClient
const queryClient = new QueryClient();

const App = () => {
  console.log("App component rendering");
  
  return (
    <QueryClientProvider client={queryClient}>
      <TooltipProvider>
        <BrowserRouter>
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/consensus" element={<ConsensusExplainer />} />
            <Route path="/consensus/*" element={<ConsensusExplainer />} />
            <Route path="/whitepaper" element={<Whitepaper />} />
            <Route path="*" element={<NotFound />} />
          </Routes>
        </BrowserRouter>
        <Toaster />
        <Sonner />
      </TooltipProvider>
    </QueryClientProvider>
  );
};

export default App;
