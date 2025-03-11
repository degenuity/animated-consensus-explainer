
import React from 'react'
import { createRoot } from 'react-dom/client'
import App from './App.tsx'
import './index.css'

console.log("Application initialization started");

const rootElement = document.getElementById('root');

if (!rootElement) {
  console.error('Root element not found');
} else {
  console.log("Root element found, creating root");
  const root = createRoot(rootElement);
  
  root.render(<App />);
  
  console.log("React render completed");
}
