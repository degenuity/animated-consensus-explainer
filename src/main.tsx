
import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.tsx'
import './index.css'

// Simple error handler for global errors
window.addEventListener('error', (event) => {
  console.error('Global error:', event.error)
  document.body.innerHTML += `<div style="color: red; padding: 20px;">Error: ${event.error?.message || 'Unknown error'}</div>`
})

// Simple error handler for promise rejections
window.addEventListener('unhandledrejection', (event) => {
  console.error('Unhandled promise rejection:', event.reason)
})

try {
  const rootElement = document.getElementById('root')
  
  if (!rootElement) {
    throw new Error('Root element not found')
  }
  
  ReactDOM.createRoot(rootElement).render(
    <React.StrictMode>
      <App />
    </React.StrictMode>
  )
  
  console.log('React root created and App mounted')
} catch (error) {
  console.error('Failed to initialize app:', error)
  document.body.innerHTML += `<div style="color: red; padding: 20px;">Failed to initialize: ${error instanceof Error ? error.message : 'Unknown error'}</div>`
}
