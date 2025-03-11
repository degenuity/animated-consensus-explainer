
import React, { ErrorBoundary, Suspense } from 'react'
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

// Simple error boundary fallback
const ErrorFallback = ({ error }) => {
  console.error("Application error:", error);
  return (
    <div className="min-h-screen bg-red-50 text-red-900 flex items-center justify-center p-4">
      <div className="max-w-md">
        <h1 className="text-2xl font-bold mb-4">Something went wrong</h1>
        <pre className="bg-red-100 p-4 rounded overflow-auto max-h-96 text-sm">
          {error.message}
          {error.stack}
        </pre>
        <button 
          onClick={() => window.location.reload()} 
          className="mt-4 bg-red-600 text-white px-4 py-2 rounded hover:bg-red-700"
        >
          Reload Page
        </button>
      </div>
    </div>
  );
};

class ErrorBoundaryWrapper extends React.Component {
  state = { hasError: false, error: null };
  
  static getDerivedStateFromError(error) {
    return { hasError: true, error };
  }
  
  render() {
    if (this.state.hasError) {
      return <ErrorFallback error={this.state.error} />;
    }
    return this.props.children;
  }
}

function App() {
  console.log("App component rendering");
  
  return (
    <ErrorBoundaryWrapper>
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
    </ErrorBoundaryWrapper>
  )
}

export default App
