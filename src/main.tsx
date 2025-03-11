
import { createRoot } from 'react-dom/client'
import App from './App.tsx'
import './index.css'

// Add error handling for mounting React
try {
  const rootElement = document.getElementById('root');
  if (!rootElement) {
    console.error('Failed to find the root element');
    throw new Error('Failed to find the root element');
  }

  // Create root and render with error boundary
  const root = createRoot(rootElement);
  root.render(
    <React.StrictMode>
      <App />
    </React.StrictMode>
  );
  console.log('React successfully mounted');
} catch (error) {
  console.error('Failed to mount React application:', error);
  // Display error to user so the page isn't blank
  document.body.innerHTML = `
    <div style="padding: 20px; font-family: sans-serif;">
      <h1>Something went wrong</h1>
      <p>The application failed to initialize. Please check the console for details.</p>
    </div>
  `;
}
