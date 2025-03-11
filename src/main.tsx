
import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.tsx'
import './index.css'

console.log("Starting application initialization")

const container = document.getElementById('root')

if (container) {
  const root = ReactDOM.createRoot(container)
  root.render(<App />)
  console.log("Application rendering complete")
} else {
  console.error("Root element not found")
  document.body.innerHTML = '<div style="color: red; padding: 20px;">Root element not found</div>'
}
