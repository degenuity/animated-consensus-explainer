
import React from 'react'
import { createRoot } from 'react-dom/client'
import App from './App.tsx'
import './index.css'

console.log("Application initialization started");

// Find the root element immediately to detect issues
const rootElement = document.getElementById('root');
if (!rootElement) {
  console.error('CRITICAL ERROR: Root element not found in DOM');
  document.body.innerHTML = `
    <div style="padding: 20px; font-family: sans-serif; background: black; color: white; height: 100vh; display: flex; flex-direction: column; justify-content: center; align-items: center;">
      <h1>Cannot render application</h1>
      <p>Critical error: Root element not found</p>
      <button style="margin-top: 20px; padding: 10px 20px; background: #3b82f6; color: white; border: none; border-radius: 5px; cursor: pointer;" onclick="window.location.reload()">
        Reload Page
      </button>
    </div>
  `;
} else {
  console.log("Root element found, proceeding with render");
  
  // Create a simple loading indicator
  const loadingElement = document.createElement('div');
  loadingElement.style.position = 'fixed';
  loadingElement.style.inset = '0';
  loadingElement.style.display = 'flex';
  loadingElement.style.alignItems = 'center';
  loadingElement.style.justifyContent = 'center';
  loadingElement.style.backgroundColor = 'black';
  loadingElement.style.color = 'white';
  loadingElement.style.zIndex = '9999';
  loadingElement.style.fontFamily = 'sans-serif';
  loadingElement.textContent = 'Loading X1 Research...';
  loadingElement.id = 'loading-indicator';
  
  // Add the loading indicator to the page
  document.body.appendChild(loadingElement);
  console.log("Loading indicator added to DOM");

  try {
    // Render with error handling
    const root = createRoot(rootElement);
    
    root.render(
      <React.StrictMode>
        <App />
      </React.StrictMode>
    );
    
    console.log("React render call completed");
    
    // Remove loading indicator after a short delay to ensure rendering has started
    setTimeout(() => {
      const indicator = document.getElementById('loading-indicator');
      if (indicator && indicator.parentNode) {
        indicator.parentNode.removeChild(indicator);
        console.log("Loading indicator removed after delay");
      }
    }, 500);
    
  } catch (error) {
    console.error('CRITICAL ERROR during React rendering:', error);
    
    // Remove loading and show error
    const indicator = document.getElementById('loading-indicator');
    if (indicator && indicator.parentNode) {
      indicator.parentNode.removeChild(indicator);
    }
    
    rootElement.innerHTML = `
      <div style="padding: 20px; font-family: sans-serif; background: black; color: white; height: 100vh; display: flex; flex-direction: column; justify-content: center; align-items: center;">
        <h1>Failed to start application</h1>
        <p>Error: ${error instanceof Error ? error.message : String(error)}</p>
        <pre style="margin: 20px; padding: 10px; background: rgba(255,255,255,0.1); max-width: 80%; overflow: auto; text-align: left;">${error instanceof Error ? error.stack : 'No stack trace available'}</pre>
        <button style="margin-top: 20px; padding: 10px 20px; background: #3b82f6; color: white; border: none; border-radius: 5px; cursor: pointer;" onclick="window.location.reload()">
          Reload Page
        </button>
      </div>
    `;
  }
}

// Add global error handler
window.addEventListener('error', (event) => {
  console.error('Global error caught:', event.error);
  console.error('Error message:', event.message);
  console.error('Error filename:', event.filename);
  console.error('Error lineno:', event.lineno);
  console.error('Error colno:', event.colno);
});

// Add unhandled promise rejection handler
window.addEventListener('unhandledrejection', (event) => {
  console.error('Unhandled promise rejection:', event.reason);
});
