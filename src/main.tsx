
import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.tsx'
import './index.css'

// Simple error handler that logs to console but doesn't modify DOM directly
const handleError = (error: Error) => {
  console.error('Application error:', error);
};

// Create a simple root element if it doesn't exist
const rootElement = document.getElementById('root');
if (!rootElement) {
  console.error('Root element not found');
} else {
  // Remove loading animation if it exists
  const loadingElement = document.querySelector('.app-loading');
  if (loadingElement) {
    loadingElement.remove();
  }
  
  try {
    const root = ReactDOM.createRoot(rootElement);
    root.render(
      <React.StrictMode>
        <App />
      </React.StrictMode>
    );
  } catch (error) {
    handleError(error as Error);
  }
}
