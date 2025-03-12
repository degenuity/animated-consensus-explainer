
import React from 'react'
import { BrowserRouter, Routes, Route } from "react-router-dom"
import Home from "./pages/Home"
import ConsensusExplainer from "./pages/ConsensusExplainer"
import Whitepaper from "./pages/Whitepaper"
import NotFound from "./pages/NotFound"

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/consensus-explainer" element={<ConsensusExplainer />} />
        <Route path="/whitepaper" element={<Whitepaper />} />
        <Route path="*" element={<NotFound />} />
      </Routes>
    </BrowserRouter>
  )
}

export default App
