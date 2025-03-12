
import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.tsx'
import './index.css'
import { Toaster } from '@/components/ui/toaster'

// Error boundary component with proper TypeScript interface
class ErrorBoundary extends React.Component<
  { children: React.ReactNode }, 
  { hasError: boolean; error: Error | null; errorInfo: React.ErrorInfo | null }
> {
  constructor(props: { children: React.ReactNode }) {
    super(props);
    this.state = { hasError: false, error: null, errorInfo: null };
  }

  static getDerivedStateFromError(error: Error) {
    return { hasError: true, error };
  }

  componentDidCatch(error: Error, errorInfo: React.ErrorInfo) {
    console.error('React Error Boundary caught an error:', error, errorInfo);
    this.setState({ errorInfo });
  }

  render() {
    if (this.state.hasError) {
      return (
        <div style={{ padding: '20px', backgroundColor: '#1e1e2e', color: 'white', height: '100vh', display: 'flex', flexDirection: 'column', justifyContent: 'center', alignItems: 'center' }}>
          <h1>Something went wrong</h1>
          <p>The application encountered an error. Please try refreshing the page.</p>
          <div style={{ backgroundColor: 'rgba(255,255,255,0.1)', padding: '15px', borderRadius: '8px', marginTop: '20px', maxWidth: '800px', overflow: 'auto', textAlign: 'left' }}>
            <p style={{ color: '#ff5555', fontWeight: 'bold' }}>
              {this.state.error && this.state.error.toString()}
            </p>
            {this.state.errorInfo && (
              <details style={{ whiteSpace: 'pre-wrap', marginTop: '10px' }}>
                <summary>Stack trace</summary>
                {this.state.errorInfo.componentStack}
              </details>
            )}
          </div>
          <button
            onClick={() => window.location.reload()}
            style={{ marginTop: '20px', padding: '10px 20px', backgroundColor: '#0072FF', color: 'white', border: 'none', borderRadius: '4px', cursor: 'pointer' }}
          >
            Reload Page
          </button>
        </div>
      );
    }
    return this.props.children;
  }
}

// Performance measurement
console.time('app-initialization');

// Immediately invoke a function to initialize the app as quickly as possible
(() => {
  const rootElement = document.getElementById('root')
  
  if (!rootElement) {
    console.error('Root element not found')
    document.body.innerHTML = `
      <div style="color: white; background: #1e293b; padding: 20px; font-family: sans-serif; height: 100vh; display: flex; flex-direction: column; justify-content: center; align-items: center; text-align: center;">
        <h1>Application Error</h1>
        <p>Root element not found. Please refresh the page or contact support.</p>
        <button onclick="window.location.reload()" style="margin-top: 20px; padding: 10px 20px; background: #3b82f6; color: white; border: none; border-radius: 4px; cursor: pointer;">
          Reload Page
        </button>
      </div>
    `
    return
  }
  
  // Remove the loading animation once React is ready to render
  const removeLoadingAnimation = () => {
    const appLoading = document.querySelector('.app-loading')
    if (appLoading) {
      appLoading.classList.add('fade-out')
      setTimeout(() => {
        appLoading.remove()
      }, 300)
    }
  }
  
  // Create root and render app with error boundary
  try {
    const root = ReactDOM.createRoot(rootElement);
    
    root.render(
      <ErrorBoundary>
        <App />
        <Toaster />
      </ErrorBoundary>
    );
    
    // Mark when the app has successfully initialized
    console.log('Application successfully rendered React components');
    console.timeEnd('app-initialization');
    
    // Remove loading animation after React has rendered
    removeLoadingAnimation();
    
    // Clear loading timeout
    const loadingTimeout = document.getElementById('loading-timeout');
    if (loadingTimeout) {
      loadingTimeout.style.display = 'none';
    }
    
    // Log performance metrics
    if (window.performance) {
      console.log(`App initialization time: ${performance.now()}ms`);
      // Use proper type checking for Navigation timing
      const navEntries = window.performance.getEntriesByType('navigation');
      if (navEntries.length > 0) {
        const navTiming = navEntries[0] as PerformanceNavigationTiming;
        console.log(`DOM Content Loaded: ${navTiming.domContentLoadedEventEnd - navTiming.fetchStart}ms`);
        console.log(`DOM Complete: ${navTiming.domComplete - navTiming.fetchStart}ms`);
      }
    }
  } catch (error) {
    console.error('Failed to render React application:', error);
    // Show error message
    document.body.innerHTML = `
      <div style="color: white; background: #1e293b; padding: 20px; font-family: sans-serif; height: 100vh; display: flex; flex-direction: column; justify-content: center; align-items: center; text-align: center;">
        <h1>Application Error</h1>
        <p>Something went wrong while loading the application. Please try refreshing the page.</p>
        <div style="background: rgba(0,0,0,0.2); padding: 15px; border-radius: 4px; margin: 20px 0; max-width: 90%; overflow-x: auto;">
          ${error instanceof Error ? error.message : 'Unknown error'}
        </div>
        <button onclick="window.location.reload()" style="margin-top: 20px; padding: 10px 20px; background: #3b82f6; color: white; border: none; border-radius: 4px; cursor: pointer;">
          Reload Page
        </button>
      </div>
    `;
  }
})()
