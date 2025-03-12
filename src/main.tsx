
import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.tsx'
import './index.css'

// Enhanced error handling
console.log('Starting application...');

// Global error handler
window.addEventListener('error', (event) => {
  console.error('Global error:', event.error);
  // Prevent black screen on errors
  document.body.style.backgroundColor = '#000';
  document.body.style.color = '#fff';
  
  // Add emergency content if React fails to render
  if (!document.getElementById('root')?.children.length) {
    console.log('Attempting emergency rendering');
    document.body.innerHTML = `
      <div style="padding: 20px; color: white; text-align: center;">
        <h1>X1 Research</h1>
        <div style="margin-top: 20px;">
          <a href="/whitepaper" style="padding: 10px 20px; background: blue; color: white; margin: 0 10px; text-decoration: none; border-radius: 4px;">Whitepaper</a>
          <a href="/consensus" style="padding: 10px 20px; background: blue; color: white; margin: 0 10px; text-decoration: none; border-radius: 4px;">Consensus</a>
        </div>
      </div>
    `;
  }
});

// Unhandled promise rejection handler
window.addEventListener('unhandledrejection', (event) => {
  console.error('Unhandled promise rejection:', event.reason);
});

// Force display debugging
document.documentElement.style.height = '100%';
document.body.style.height = '100%';
document.body.style.overflow = 'auto';
document.body.style.backgroundColor = '#000';
document.body.style.color = '#fff';

// Set PDF.js worker source
// Using a safer approach that doesn't rely on window globals
try {
  // Check if pdfjs-dist is available in the global scope
  if (window['pdfjs-dist/build/pdf']) {
    const pdfjsLib = window['pdfjs-dist/build/pdf'];
    if (pdfjsLib && pdfjsLib.GlobalWorkerOptions) {
      pdfjsLib.GlobalWorkerOptions.workerSrc = 'https://cdnjs.cloudflare.com/ajax/libs/pdf.js/3.11.174/pdf.worker.min.js';
      console.log('PDF.js worker configured via global');
    }
  } else {
    // Alternative approach if the global is not available
    console.log('PDF.js global not found, will try to configure during component initialization');
    
    // Create a global function that components can call to set up PDF.js
    window.configurePdfjs = function(pdfjsLib) {
      if (pdfjsLib && pdfjsLib.GlobalWorkerOptions) {
        pdfjsLib.GlobalWorkerOptions.workerSrc = 'https://cdnjs.cloudflare.com/ajax/libs/pdf.js/3.11.174/pdf.worker.min.js';
        console.log('PDF.js worker configured via component call');
        return true;
      }
      return false;
    };
  }
} catch (error) {
  console.error('Error configuring PDF worker:', error);
}

try {
  const rootElement = document.getElementById('root');
  if (rootElement) {
    rootElement.style.minHeight = '100vh';
    rootElement.style.display = 'flex';
    rootElement.style.flexDirection = 'column';
    
    ReactDOM.createRoot(rootElement).render(
      <React.StrictMode>
        <App />
      </React.StrictMode>
    );
    
    console.log('React app rendered successfully');
  } else {
    console.error('Root element not found');
  }
} catch (error) {
  console.error('Failed to render application:', error);
  
  // Emergency fallback
  document.body.innerHTML = `
    <div style="padding: 20px; color: white; text-align: center;">
      <h1>X1 Research</h1>
      <div style="margin-top: 20px;">
        <a href="/whitepaper" style="padding: 10px 20px; background: blue; color: white; margin: 0 10px; text-decoration: none; border-radius: 4px;">Whitepaper</a>
        <a href="/consensus" style="padding: 10px 20px; background: blue; color: white; margin: 0 10px; text-decoration: none; border-radius: 4px;">Consensus</a>
      </div>
    </div>
  `;
}
