
import React from 'react'
import { createRoot } from 'react-dom/client'
import App from './App.tsx'
import './index.css'

console.log("Application initialization started");

const rootElement = document.getElementById('root');

if (!rootElement) {
  console.error('CRITICAL ERROR: Root element not found in DOM');
} else {
  console.log("Root element found, proceeding with render");
  
  const root = createRoot(rootElement);
  
  root.render(
    <React.StrictMode>
      <App />
    </React.StrictMode>
  );
  
  console.log("React render call completed");
}
