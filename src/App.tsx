
import React from 'react'
import { Toaster } from "@/components/ui/toaster"
import { Toaster as Sonner } from "@/components/ui/sonner"
import { TooltipProvider } from "@/components/ui/tooltip"
import { QueryClient, QueryClientProvider } from "@tanstack/react-query"
import { BrowserRouter, Routes, Route } from "react-router-dom"

// Direct imports for all pages
import Home from "./pages/Home"
import ConsensusExplainer from "./pages/ConsensusExplainer"
import Whitepaper from "./pages/Whitepaper"
import NotFound from "./pages/NotFound"

// Create a client with default settings
const queryClient = new QueryClient()

function App() {
  console.log("App component rendering")
  
  return (
    <React.StrictMode>
      <QueryClientProvider client={queryClient}>
        <TooltipProvider>
          <BrowserRouter>
            <div className="min-h-screen bg-background">
              <Routes>
                <Route path="/" element={<Home />} />
                <Route path="/consensus" element={<ConsensusExplainer />} />
                <Route path="/consensus/*" element={<ConsensusExplainer />} />
                <Route path="/whitepaper" element={<Whitepaper />} />
                <Route path="*" element={<NotFound />} />
              </Routes>
            </div>
          </BrowserRouter>
          <Toaster />
          <Sonner />
        </TooltipProvider>
      </QueryClientProvider>
    </React.StrictMode>
  )
}

export default App
