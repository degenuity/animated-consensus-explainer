
import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.tsx'
import './index.css'

// Simple error handler function
const handleError = (error: Error) => {
  console.error('Application error:', error);
  document.body.innerHTML = `
    <div style="padding: 20px; text-align: center; color: white; background: #1e293b;">
      <h1>Application Error</h1>
      <p>Something went wrong while loading the application.</p>
      <button onclick="window.location.reload()" 
        style="margin-top: 20px; padding: 8px 16px; background: #3b82f6; color: white; border: none; border-radius: 4px; cursor: pointer;">
        Reload Page
      </button>
    </div>
  `;
};

// Initialize app with error handling
try {
  const rootElement = document.getElementById('root');
  
  if (!rootElement) {
    throw new Error('Root element not found');
  }
  
  // Remove loading animation
  const loadingElement = document.querySelector('.app-loading');
  if (loadingElement) {
    loadingElement.remove();
  }
  
  ReactDOM.createRoot(rootElement).render(
    <React.StrictMode>
      <App />
    </React.StrictMode>
  );
} catch (error) {
  handleError(error as Error);
}
