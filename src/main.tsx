
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
