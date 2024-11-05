import React from 'react'
import navbar from './navbar'


const Contacts = () => {
  return (
    

    <div className="contact-us-container">
      <div className="contact-left">
        <h1 className="h2">Contact Us</h1>
        <div className="email-us">
          
          <h3 className="h4"><i className="fa-light fa-envelope"></i>Email us</h3>
          <p>Please feel free to drop us a line. We will respond as soon as possible.</p>
          <button className="contact-us-button">Leave a message<i className="fa-solid fa-arrow-right"></i></button>
        </div>
        <div className="careers">
          
          <h3 className="h4"><i className="fa-light fa-user-group"></i>Careers</h3>
          <p>Sit ac ipsum leo lorem magna nunc mattis maecenas non vestibulum.</p>
          <button className="contact-us-button">Send an application<i className="fa-solid fa-arrow-right"></i></button>
        </div>
      </div>

      <div className="contact-right">
        <h2 className="h3">Get Online Consultation</h2>        
          <p>Full Name</p>
          <input className="form-consultation" type="text" name="name"></input>
          <p>Email address</p>
          <input className="form-consultation" type="email" name="email"></input>
          <p>Specialist</p>
          <label for ="specialist"></label>
          <select className="form-consultation">
            <option value ="option 1">Option 1</option>
            <option value ="option 1">Option 2</option>
            <option value ="option 1">Option 3</option>
            <option value ="option 1">Option 4</option>
            <option value ="option 1">Option 5</option>
          </select>
          <button className="appointment-button">Make an appointment</button>        
      </div>
    </div>

  )
}

export default Contacts