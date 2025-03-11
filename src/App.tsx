
import { Toaster } from "@/components/ui/toaster";
import { Toaster as Sonner } from "@/components/ui/sonner";
import { TooltipProvider } from "@/components/ui/tooltip";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import React, { useState, useEffect } from "react";

// Direct imports for all pages
import Home from "./pages/Home";
import ConsensusExplainer from "./pages/ConsensusExplainer";
import Whitepaper from "./pages/Whitepaper";
import NotFound from "./pages/NotFound";

// Enhanced error boundary component with better logging
class ErrorBoundary extends React.Component<
  { children: React.ReactNode },
  { hasError: boolean; error: Error | null }
> {
  constructor(props: { children: React.ReactNode }) {
    super(props);
    this.state = { hasError: false, error: null };
    console.log("ErrorBoundary component initialized");
  }

  static getDerivedStateFromError(error: Error) {
    console.error("Error caught in ErrorBoundary:", error);
    return { hasError: true, error };
  }

  componentDidCatch(error: Error, errorInfo: React.ErrorInfo) {
    console.error("App error details:", error);
    console.error("Component stack:", errorInfo.componentStack);
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

// Create a basic QueryClient with better error logging
const queryClient = new QueryClient({
  defaultOptions: {
    queries: {
      retry: 1,
      refetchOnWindowFocus: false,
    },
  },
});

const App = () => {
  const [isRouterError, setIsRouterError] = useState(false);
  
  // Add a component mounted log
  useEffect(() => {
    console.log("App component mounted successfully");
    
    // Add window error handler
    const handleError = (event: ErrorEvent) => {
      console.error("Global error caught:", event.error);
    };
    
    window.addEventListener('error', handleError);
    return () => window.removeEventListener('error', handleError);
  }, []);

  return (
    <ErrorBoundary>
      <QueryClientProvider client={queryClient}>
        <TooltipProvider>
          <Toaster />
          <Sonner />
          <BrowserRouter>
            {isRouterError ? (
              <div className="min-h-screen bg-black text-white flex items-center justify-center">
                <div className="text-center">
                  <h1 className="text-xl mb-4">Router Error</h1>
                  <button 
                    onClick={() => window.location.reload()} 
                    className="bg-blue-500 hover:bg-blue-600 text-white px-4 py-2 rounded"
                  >
                    Reload Page
                  </button>
                </div>
              </div>
            ) : (
              <Routes>
                <Route path="/" element={<Home />} />
                <Route path="/consensus" element={<ConsensusExplainer />} />
                <Route path="/consensus/*" element={<ConsensusExplainer />} />
                <Route path="/whitepaper" element={<Whitepaper />} />
                <Route path="*" element={<NotFound />} />
              </Routes>
            )}
          </BrowserRouter>
        </TooltipProvider>
      </QueryClientProvider>
    </ErrorBoundary>
  );
};

export default App;
