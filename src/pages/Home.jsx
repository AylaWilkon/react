import React from "react";
import Hero from '../components/Hero.jsx'
import Navbar from '../components/Navbar.jsx'
import Brands from '../components/Brands.jsx'
import Features from '../components/Features.jsx'
import HowDoes from '../components/HowDoes.jsx'
import Footer from '../components/Footer.jsx'
import BankPayments from '../components/BankPayments.jsx'
import Testimonials from '../components/Testimonials.jsx'
import FAQ from '../components/FAQ.jsx'
import Subscribe from '../components/Subscribe.jsx'

function HomePage() {
  return (
    <>
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
    </>
  );
}

export default HomePage;