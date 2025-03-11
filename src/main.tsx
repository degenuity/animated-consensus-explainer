
import React from 'react'
import { createRoot } from 'react-dom/client'
import App from './App.tsx'
import './index.css'

// Create a simple loading indicator to show before the app is ready
const createLoadingIndicator = () => {
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
  loadingElement.id = 'loading-indicator'; // Add an ID for easier reference
  return loadingElement;
};

// Add console logging to track application lifecycle
console.log("Application initialization started");

const loadingIndicator = createLoadingIndicator();
document.body.appendChild(loadingIndicator);
console.log("Loading indicator added to DOM");

// Enhanced error display function with more detailed logging
const displayErrorPage = (error: any) => {
  console.error('Application fatal error:', error);
  
  // Make sure we have the error details
  const errorMessage = error?.message || 'Unknown error';
  const errorStack = error?.stack || 'No stack trace available';
  
  console.error(`Error details: ${errorMessage}`);
  console.error(`Stack trace: ${errorStack}`);
  
  document.body.innerHTML = `
    <div style="padding: 20px; font-family: sans-serif; background: black; color: white; height: 100vh; display: flex; flex-direction: column; justify-content: center; align-items: center;">
      <h1>Something went wrong</h1>
      <p>Error details: ${errorMessage}</p>
      <pre style="margin: 20px; padding: 10px; background: rgba(255,255,255,0.1); max-width: 80%; overflow: auto; text-align: left;">${errorStack}</pre>
      <button style="margin-top: 20px; padding: 10px 20px; background: #3b82f6; color: white; border: none; border-radius: 5px; cursor: pointer;" onclick="window.location.reload()">
        Reload Page
      </button>
    </div>
  `;
};

// Improved mounting function with better error handling
const mountApp = () => {
  console.log("Attempting to mount React application");
  try {
    // Find the root element
    const rootElement = document.getElementById('root');
    
    if (!rootElement) {
      throw new Error('Root element not found in the DOM');
    }
    
    console.log("Root element found, removing loading indicator");
    
    // Remove loading indicator if it exists
    const indicator = document.getElementById('loading-indicator');
    if (indicator && indicator.parentNode) {
      document.body.removeChild(indicator);
      console.log("Loading indicator removed");
    }
    
    console.log("Creating React root and rendering application");
    
    // Create root and render
    createRoot(rootElement).render(
      <React.StrictMode>
        <App />
      </React.StrictMode>
    );
    
    console.log("React successfully mounted");
  } catch (error) {
    console.error('Error mounting app:', error);
    displayErrorPage(error);
  }
};

// Execute based on document ready state with improved logging
if (document.readyState === 'loading') {
  // If the document is still loading, add a listener
  console.log("Document still loading, adding DOMContentLoaded listener");
  window.addEventListener('DOMContentLoaded', () => {
    console.log("DOMContentLoaded event fired");
    mountApp();
  });
} else {
  // If the document is already loaded, mount immediately
  console.log("Document already loaded, mounting immediately");
  mountApp();
}

// Add a fallback in case something else is preventing the app from loading
window.addEventListener('load', () => {
  console.log("Window load event fired");
  const root = document.getElementById('root');
  const indicator = document.getElementById('loading-indicator');
  
  // If we still have the loading indicator and no content in root after window load
  if (indicator && (!root || (root && !root.hasChildNodes()))) {
    console.log("Application not mounted after window load, attempting fallback mount");
    mountApp();
  }
});
