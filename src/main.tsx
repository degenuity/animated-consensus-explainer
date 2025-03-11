
import React from 'react'
import { createRoot } from 'react-dom/client'
import App from './App.tsx'
import './index.css'

console.log("Application initialization started");

// Find the root element
const rootElement = document.getElementById('root');

if (!rootElement) {
  console.error('CRITICAL ERROR: Root element not found in DOM');
  // Create a visible error message on the page
  document.body.innerHTML = '<div style="color: red; font-size: 24px; padding: 20px;">Failed to load application: Root element not found</div>';
} else {
  console.log("Root element found, proceeding with render");
  
  try {
    const root = createRoot(rootElement);
    
    root.render(
      <App />
    );
    
    console.log("React render call completed");
  } catch (error) {
    console.error("Failed to render application:", error);
    rootElement.innerHTML = '<div style="color: red; font-size: 24px; padding: 20px;">Failed to load application</div>';
  }
}
