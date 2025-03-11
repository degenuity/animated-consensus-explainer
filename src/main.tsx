
import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.tsx'
import './index.css'

// Add extensive debugging to help diagnose the issue
console.log("===== Application Initialization Starting =====")
console.log("Environment:", import.meta.env.MODE)
console.log("Base URL:", import.meta.env.BASE_URL)

// Define an error handler for unhandled errors
window.addEventListener('error', (event) => {
  console.error("GLOBAL ERROR:", event.error)
})

// Listen for uncaught promises
window.addEventListener('unhandledrejection', (event) => {
  console.error("UNHANDLED PROMISE REJECTION:", event.reason)
})

// Get the root element
const rootElement = document.getElementById('root')
console.log("Root element found:", !!rootElement)

// Try to render the app with additional error handling
try {
  if (rootElement) {
    console.log("Attempting to create root and render app...")
    // Remove StrictMode temporarily to rule out double-rendering issues
    const root = ReactDOM.createRoot(rootElement)
    root.render(<App />)
    console.log("===== Application Rendering Complete =====")
  } else {
    console.error("Root element not found")
    document.body.innerHTML = '<div style="color: red; padding: 20px;">Root element not found</div>'
  }
} catch (error) {
  console.error("CRITICAL RENDER ERROR:", error)
  document.body.innerHTML = `<div style="color: red; padding: 20px;">Failed to render app: ${error instanceof Error ? error.message : String(error)}</div>`
}
