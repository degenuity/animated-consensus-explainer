
import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.tsx'
import './index.css'

// Setup global promises error handling
window.addEventListener('unhandledrejection', (event) => {
  console.error("UNHANDLED PROMISE REJECTION:", event.reason)
})

// Setup global error handler
window.addEventListener('error', (event) => {
  console.error("GLOBAL ERROR:", event.error || event.message)
})

// Get the root element
const rootElement = document.getElementById('root')

// Try to render the app with better error handling
if (rootElement) {
  try {
    console.log("Creating React root and mounting application...")
    const root = ReactDOM.createRoot(rootElement)
    root.render(<App />)
    console.log("Application mounted successfully")
  } catch (error) {
    console.error("CRITICAL ERROR DURING RENDER:", error)
    rootElement.innerHTML = `
      <div style="color: red; padding: 20px; text-align: center;">
        <h2>Application Failed to Load</h2>
        <p>${error instanceof Error ? error.message : String(error)}</p>
        <button onclick="window.location.reload()" style="background: #3498db; color: white; padding: 10px 15px; border: none; border-radius: 4px; cursor: pointer; margin-top: 10px;">Reload Page</button>
      </div>
    `
  }
} else {
  console.error("Root element not found")
  document.body.innerHTML = '<div style="color: red; padding: 20px;">Root element not found</div>'
}
