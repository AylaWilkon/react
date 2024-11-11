import './assets/css/style.css'
import React from "react"
import { BrowserRouter, Routes , Route } from 'react-router-dom'
import ContactPage from "./pages/Contact"


function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Router>
          {/* <Route path="/" element={} /> */}
          <Route path="./pages/Contacts/" />
        </Router>
      </Routes>
    </BrowserRouter>
  )
}

export default App