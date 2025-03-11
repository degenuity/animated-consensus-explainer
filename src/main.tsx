
import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.tsx'
import './index.css'
import { Toaster } from '@/components/ui/toaster'

try {
  const rootElement = document.getElementById('root')
  
  if (!rootElement) {
    throw new Error('Root element not found')
  }
  
  ReactDOM.createRoot(rootElement).render(
    <React.StrictMode>
      <App />
      <Toaster />
    </React.StrictMode>
  )
  
  console.log('Application initialized successfully')
} catch (error) {
  console.error('Failed to initialize app:', error)
  document.body.innerHTML = `
    <div style="color: white; background: #1e293b; padding: 20px; font-family: sans-serif; height: 100vh; display: flex; flex-direction: column; justify-content: center; align-items: center; text-align: center;">
      <h1>Application Error</h1>
      <p>There was a problem loading the application. Please try again or contact support.</p>
      <button onclick="window.location.reload()" style="margin-top: 20px; padding: 10px 20px; background: #3b82f6; color: white; border: none; border-radius: 4px; cursor: pointer;">
        Reload Page
      </button>
      <pre style="margin-top: 20px; padding: 15px; background: rgba(0,0,0,0.2); border-radius: 4px; max-width: 80%; overflow: auto; text-align: left;">
        ${error instanceof Error ? error.message : 'Unknown error'}
      </pre>
    </div>
  `
}
