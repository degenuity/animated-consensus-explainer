
import { Toaster } from "@/components/ui/toaster";
import { Toaster as Sonner } from "@/components/ui/sonner";
import { TooltipProvider } from "@/components/ui/tooltip";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { BrowserRouter, Routes, Route, Navigate } from "react-router-dom";
import { useState, useEffect } from "react";
import React from "react";

// Import all pages directly
import Home from "./pages/Home";
import ConsensusExplainer from "./pages/ConsensusExplainer";
import Whitepaper from "./pages/Whitepaper";
import NotFound from "./pages/NotFound";

// Loading component
const Loading = () => (
  <div className="min-h-screen bg-black text-white flex items-center justify-center">
    <div className="text-center">
      <p className="text-xl mb-4">Loading...</p>
    </div>
  </div>
);

// Error boundary component
class ErrorBoundary extends React.Component<
  { children: React.ReactNode },
  { hasError: boolean; error: Error | null }
> {
  constructor(props: { children: React.ReactNode }) {
    super(props);
    this.state = { hasError: false, error: null };
  }

  static getDerivedStateFromError(error: Error) {
    console.error("Error caught in ErrorBoundary:", error);
    return { hasError: true, error };
  }

  componentDidCatch(error: Error, errorInfo: React.ErrorInfo) {
    console.error("App error caught:", error, errorInfo);
  }

  render() {
    if (this.state.hasError) {
      return (
        <div className="min-h-screen bg-black text-white flex items-center justify-center p-4">
          <div className="bg-red-900/20 border border-red-500 p-6 rounded-lg max-w-md">
            <h2 className="text-xl font-bold mb-2">Something went wrong</h2>
            <p className="mb-4">{this.state.error?.message || "An unexpected error occurred"}</p>
            <button 
              onClick={() => window.location.reload()} 
              className="bg-red-500 hover:bg-red-600 text-white px-4 py-2 rounded"
            >
              Reload Application
            </button>
          </div>
        </div>
      );
    }

    return this.props.children;
  }
}

// Create a new QueryClient instance with simpler configuration
const queryClient = new QueryClient({
  defaultOptions: {
    queries: {
      retry: 1,
      refetchOnWindowFocus: false,
    },
  },
});

const App = () => {
  const [isLoaded, setIsLoaded] = useState(false);

  useEffect(() => {
    // Log when app is mounted
    console.log("App component mounted");
    
    // Force a repaint to ensure DOM is fully rendered
    setTimeout(() => {
      setIsLoaded(true);
      console.log("App marked as loaded");
    }, 100);
    
    // Return cleanup function
    return () => {
      console.log("App component unmounted");
    };
  }, []);

  if (!isLoaded) {
    return <Loading />;
  }

  return (
    <ErrorBoundary>
      <QueryClientProvider client={queryClient}>
        <TooltipProvider>
          <Toaster />
          <Sonner />
          <BrowserRouter>
            <Routes>
              <Route path="/" element={<Home />} />
              <Route path="/consensus" element={<ConsensusExplainer />} />
              <Route path="/consensus/*" element={<ConsensusExplainer />} />
              <Route path="/whitepaper" element={<Whitepaper />} />
              <Route path="*" element={<NotFound />} />
            </Routes>
          </BrowserRouter>
        </TooltipProvider>
      </QueryClientProvider>
    </ErrorBoundary>
  );
};

export default App;
