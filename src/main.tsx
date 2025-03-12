
import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.tsx'
import './index.css'

// Create root element
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
    console.error('Application error:', error);
  }
}
