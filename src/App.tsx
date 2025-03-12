
import React from 'react'
import { BrowserRouter, Routes, Route } from "react-router-dom"
import Home from "./pages/Home"

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="*" element={<div>Page not found</div>} />
      </Routes>
    </BrowserRouter>
  )
}

export default App
