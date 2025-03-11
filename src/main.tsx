
import React from 'react'
import { createRoot } from 'react-dom/client'
import App from './App.tsx'
import './index.css'

// Add comprehensive error handling for mounting React
try {
  const rootElement = document.getElementById('root');
  if (!rootElement) {
    console.error('Failed to find the root element');
    throw new Error('Failed to find the root element');
  }

  // Create root and render with error boundary
  const root = createRoot(rootElement);
  root.render(
    <React.StrictMode>
      <App />
    </React.StrictMode>
  );
  console.log('React successfully mounted');
} catch (error) {
  console.error('Failed to mount React application:', error);
  // Display error to user so the page isn't blank
  document.body.innerHTML = `
    <div style="padding: 20px; font-family: sans-serif; background: black; color: white; height: 100vh; display: flex; flex-direction: column; justify-content: center; align-items: center;">
      <h1>Something went wrong with X1 Research app</h1>
      <p>The application failed to initialize. Please check the console for details.</p>
      <button style="margin-top: 20px; padding: 10px 20px; background: #3b82f6; color: white; border: none; border-radius: 5px; cursor: pointer;" onclick="window.location.reload()">
        Reload Page
      </button>
    </div>
  `;
}
