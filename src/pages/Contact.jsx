import React from "react";
import ContactForm from '../components/ContactForm.jsx'
import Location from '../components/Location.jsx'
import Navbar from '../components/Navbar.jsx'

function ContactPage() {
  return (
    <>
    <Navbar />
    <ContactForm />
    <Location />
    </>
  );
}

export default ContactPage;