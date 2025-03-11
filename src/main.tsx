
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
  return loadingElement;
};

const loadingIndicator = createLoadingIndicator();
document.body.appendChild(loadingIndicator);

// Simple error display function
const displayErrorPage = (error: any) => {
  console.error('Application error:', error);
  
  document.body.innerHTML = `
    <div style="padding: 20px; font-family: sans-serif; background: black; color: white; height: 100vh; display: flex; flex-direction: column; justify-content: center; align-items: center;">
      <h1>Something went wrong</h1>
      <p>Error details: ${error?.message || 'Unknown error'}</p>
      <pre style="margin: 20px; padding: 10px; background: rgba(255,255,255,0.1); max-width: 80%; overflow: auto; text-align: left;">${error?.stack || 'No stack trace available'}</pre>
      <button style="margin-top: 20px; padding: 10px 20px; background: #3b82f6; color: white; border: none; border-radius: 5px; cursor: pointer;" onclick="window.location.reload()">
        Reload Page
      </button>
    </div>
  `;
};

// Simplified mounting function with immediate execution
const mountApp = () => {
  try {
    // Find the root element
    const rootElement = document.getElementById('root');
    
    if (!rootElement) {
      throw new Error('Root element not found');
    }
    
    // Remove loading indicator if it exists
    if (loadingIndicator.parentNode) {
      document.body.removeChild(loadingIndicator);
    }
    
    // Create root and render
    createRoot(rootElement).render(
      <React.StrictMode>
        <App />
      </React.StrictMode>
    );
    
    console.log('React successfully mounted');
  } catch (error) {
    console.error('Error mounting app:', error);
    displayErrorPage(error);
  }
};

// Execute based on document ready state
if (document.readyState === 'loading') {
  // If the document is still loading, add a listener
  window.addEventListener('DOMContentLoaded', mountApp);
} else {
  // If the document is already loaded, mount immediately
  mountApp();
}
