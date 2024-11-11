import './assets/css/style.css'
import React from "react"
import {Routes, Route } from "react-router-dom"
import ContactPage from "./pages/Contact.jsx"
import HomePage from './pages/Home.jsx'
import FeaturesPage from './pages/Features.jsx'

function App () {
  return ( 
    <>
    <Routes>
      <Route path="/" element={<HomePage />}/>
      <Route path="/contact" element={<ContactPage />}/>
      <Route path="/features" element={<FeaturesPage />}/>
    </Routes>
    </>
  )
}

export default App