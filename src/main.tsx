
import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.tsx'
import './index.css'

console.log("Application starting...")

// Get the root element
const rootElement = document.getElementById('root')

if (rootElement) {
  const root = ReactDOM.createRoot(rootElement)
  root.render(<App />)
  console.log("React root created and App mounted")
} else {
  console.error("Root element not found")
  document.body.innerHTML = '<div style="color: red; padding: 20px;">Root element not found</div>'
}
