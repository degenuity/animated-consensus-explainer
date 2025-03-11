
import React from 'react'
import { createRoot } from 'react-dom/client'
import App from './App.tsx'
import './index.css'

// Enhanced error display function
const displayErrorPage = (error: any) => {
  console.error('Application error:', error);
  
  document.body.innerHTML = `
    <div style="padding: 20px; font-family: sans-serif; background: black; color: white; height: 100vh; display: flex; flex-direction: column; justify-content: center; align-items: center;">
      <h1>Something went wrong with X1 Research app</h1>
      <p>Error details: ${error?.message || 'Unknown error'}</p>
      <pre style="margin: 20px; padding: 10px; background: rgba(255,255,255,0.1); max-width: 80%; overflow: auto; text-align: left;">${error?.stack || 'No stack trace available'}</pre>
      <button style="margin-top: 20px; padding: 10px 20px; background: #3b82f6; color: white; border: none; border-radius: 5px; cursor: pointer;" onclick="window.location.reload()">
        Reload Page
      </button>
    </div>
  `;
};

// Add comprehensive error handling for mounting React
try {
  const rootElement = document.getElementById('root');
  if (!rootElement) {
    throw new Error('Failed to find the root element');
  }

  // Create root and render with error boundary
  const root = createRoot(rootElement);
  
  // Use a simple div first to ensure the DOM is working
  root.render(<div style={{color: 'white', background: 'black', height: '100vh', display: 'flex', alignItems: 'center', justifyContent: 'center'}}>Loading X1 Research...</div>);
  
  // Then render the actual app after a small delay to ensure DOM is ready
  setTimeout(() => {
    try {
      root.render(
        <React.StrictMode>
          <App />
        </React.StrictMode>
      );
      console.log('React successfully mounted');
    } catch (renderError) {
      console.error('Error rendering App:', renderError);
      displayErrorPage(renderError);
    }
  }, 100);
} catch (error) {
  console.error('Failed to mount React application:', error);
  displayErrorPage(error);
}
