
import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.tsx'
import './index.css'

// Enhanced error handling and debug information
console.log('Starting application...');
console.log('Environment:', import.meta.env.MODE);

// Force display debugging - these styles will be applied regardless of React
document.documentElement.style.height = '100%';
document.body.style.height = '100%';
document.body.style.overflow = 'auto';
document.body.style.backgroundColor = '#000';
document.body.style.color = '#fff';
document.body.style.visibility = 'visible';
document.body.style.display = 'block';

// Global error handler
window.addEventListener('error', (event) => {
  console.error('Global error caught:', event.error);
  console.error('Error message:', event.message);
  console.error('Error source:', event.filename, 'Line:', event.lineno, 'Column:', event.colno);
  
  // Add emergency content if React fails to render
  if (!document.getElementById('root')?.children.length) {
    console.log('Attempting emergency rendering - root element is empty');
    document.body.innerHTML = `
      <div style="padding: 20px; color: white; text-align: center;">
        <h1>X1 Research</h1>
        <p>Error encountered: ${event.message}</p>
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

try {
  console.log('DOM ready state:', document.readyState);
  
  const rootElement = document.getElementById('root');
  console.log('Root element found:', Boolean(rootElement));
  
  if (rootElement) {
    // Ensure root element is visible
    rootElement.style.minHeight = '100vh';
    rootElement.style.display = 'flex';
    rootElement.style.flexDirection = 'column';
    rootElement.style.visibility = 'visible';
    
    // Add a marker element to confirm scripts are executing
    const marker = document.createElement('div');
    marker.id = 'script-execution-marker';
    marker.style.display = 'none';
    rootElement.appendChild(marker);
    
    console.log('Creating React root...');
    const root = ReactDOM.createRoot(rootElement);
    
    console.log('Rendering React app...');
    root.render(
      <React.StrictMode>
        <App />
      </React.StrictMode>
    );
    
    console.log('React app rendered successfully');
  } else {
    console.error('Root element not found');
    
    // Emergency fallback
    document.body.innerHTML = `
      <div style="padding: 20px; color: white; text-align: center;">
        <h1>X1 Research</h1>
        <p>Error: Could not find root element</p>
        <div style="margin-top: 20px;">
          <a href="/whitepaper" style="padding: 10px 20px; background: blue; color: white; margin: 0 10px; text-decoration: none; border-radius: 4px;">Whitepaper</a>
          <a href="/consensus" style="padding: 10px 20px; background: blue; color: white; margin: 0 10px; text-decoration: none; border-radius: 4px;">Consensus</a>
        </div>
      </div>
    `;
  }
} catch (error) {
  console.error('Failed to render application:', error);
  
  // Emergency fallback
  document.body.innerHTML = `
    <div style="padding: 20px; color: white; text-align: center;">
      <h1>X1 Research</h1>
      <p>Error: ${error instanceof Error ? error.message : 'Unknown error'}</p>
      <div style="margin-top: 20px;">
        <a href="/whitepaper" style="padding: 10px 20px; background: blue; color: white; margin: 0 10px; text-decoration: none; border-radius: 4px;">Whitepaper</a>
        <a href="/consensus" style="padding: 10px 20px; background: blue; color: white; margin: 0 10px; text-decoration: none; border-radius: 4px;">Consensus</a>
      </div>
    </div>
  `;
}
