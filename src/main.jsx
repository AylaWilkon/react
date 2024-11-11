import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './assets/css/style.css'
import Hero from './components/Hero.jsx'
import Navbar from './components/Navbar.jsx'
import Brands from './components/Brands.jsx'
import Features from './components/Features.jsx'
import HowDoes from './components/HowDoes.jsx'
import Footer from './components/Footer.jsx'
import BankPayments from './components/BankPayments.jsx'
import Testimonials from './components/Testimonials.jsx'
import FAQ from './components/FAQ.jsx'
import Subscribe from './components/Subscribe.jsx'
import Contacts from './components/Contacts.jsx'
import Location from './components/Location.jsx'
import { library } from '@fortawesome/fontawesome-svg-core'
import { fas } from '@fortawesome/free-solid-svg-icons'
import { far } from '@fortawesome/free-regular-svg-icons'
import { BrowserRouter } from "react-router-dom";


library.add(fas, far)

createRoot(document.getElementById('root')).render(
  <BrowserRouter>
    <StrictMode>     
      <Navbar />
      <Hero />
      <Brands />
      <Features />
      <HowDoes />
      <BankPayments />
      <Testimonials />
      <FAQ />
      <Subscribe />
      <Footer />
      <Contacts />
      <Location />      
    </StrictMode>
  </BrowserRouter>,
)
