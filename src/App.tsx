
import React from 'react'
import { BrowserRouter, Routes, Route } from "react-router-dom"
import Home from "./pages/Home"
import Whitepaper from "./pages/Whitepaper"
import ConsensusExplainer from "./pages/ConsensusExplainer"
import NotFound from "./pages/NotFound"
import "./App.css" // Make sure CSS is loaded

function App() {
  console.log("App is rendering"); // Debug log
  
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/whitepaper" element={<Whitepaper />} />
        <Route path="/consensus" element={<ConsensusExplainer />} />
        <Route path="*" element={<NotFound />} />
      </Routes>
    </BrowserRouter>
  )
}

export default App
