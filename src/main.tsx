
import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.tsx'
import './index.css'

console.log("Starting application initialization")

// Get the root element
const rootElement = document.getElementById('root')

// Create root and render app
if (rootElement) {
  ReactDOM.createRoot(rootElement).render(
    <App />
  )
  console.log("Application rendering complete")
} else {
  console.error("Root element not found")
  document.body.innerHTML = '<div style="color: red; padding: 20px;">Root element not found</div>'
}
