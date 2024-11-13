import React from "react";
import ContactForm from '../components/ContactForm.jsx'
import Location from '../components/Location.jsx'
import Navbar from '../components/Navbar.jsx'
import Footer from "../components/Footer.jsx";

function ContactPage() {
  return (
    <>
    <Navbar />
    <ContactForm />
    <Location />
    <Footer />
    </>
  );
}

export default ContactPage;