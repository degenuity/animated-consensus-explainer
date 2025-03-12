
import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.tsx'
import './index.css'
import { Toaster } from '@/components/ui/toaster'

// Immediately invoke a function to initialize the app as quickly as possible
(() => {
  const rootElement = document.getElementById('root')
  
  if (!rootElement) {
    console.error('Root element not found')
    document.body.innerHTML = `
      <div style="color: white; background: #1e293b; padding: 20px; font-family: sans-serif; height: 100vh; display: flex; flex-direction: column; justify-content: center; align-items: center; text-align: center;">
        <h1>Application Error</h1>
        <p>Root element not found. Please refresh the page or contact support.</p>
        <button onclick="window.location.reload()" style="margin-top: 20px; padding: 10px 20px; background: #3b82f6; color: white; border: none; border-radius: 4px; cursor: pointer;">
          Reload Page
        </button>
      </div>
    `
    return
  }
  
  // Remove the loading animation once React is ready to render
  const appLoading = document.querySelector('.app-loading')
  if (appLoading) {
    appLoading.classList.add('fade-out')
    setTimeout(() => {
      appLoading.remove()
    }, 300)
  }
  
  // Create root and render app
  ReactDOM.createRoot(rootElement).render(
    <React.StrictMode>
      <App />
      <Toaster />
    </React.StrictMode>
  )
  
  // Mark when the app has successfully initialized
  console.log('Application initialized successfully')
  
  // Log performance metrics
  if (window.performance) {
    const perf = window.performance.getEntriesByType('navigation')[0]
    console.log(`App initialization time: ${performance.now()}ms`)
    if (perf) {
      console.log(`DOM Content Loaded: ${perf.domContentLoadedEventEnd - perf.fetchStart}ms`)
      console.log(`DOM Complete: ${perf.domComplete - perf.fetchStart}ms`)
    }
  }
})()
