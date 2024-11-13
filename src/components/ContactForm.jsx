import React, {useState} from 'react'
import axios from 'axios'
import { useForm } from "react-hook-form"
import ErrorMessage from '../components/ErrorMessage.jsx'

const ContactForm = () => {

  const [submitted, setSubmitted] = useState(false)
  const { register, handleSubmit, formState: {errors}, reset} = useForm()

  const handleOk = () => {
    setSubmitted(false)
    reset()
  }

  const onSubmit = async (data) => {
    
    const res = await axios.post('https://win24-assignment.azurewebsites.net/api/forms/contact', data, {
      headers: {
        'Content-Type': 'application/json'
      }
    })

    if (res.status ===200) {
      setSubmitted(true)
      reset()
    }
  }
  return (
    <div className="contact-us-container">
      <div className="contact-left">
        <h1 className="h2">Contact Us</h1>
      
        <div className="contact-card">
          {/* <div><i className="fa-light fa-envelope"></i></div>           */}
          <h3 className="h4">Email us</h3>
          <p>Please feel free to drop us a line. We will respond as soon as possible.</p>
          <button className="btn-primary-contact" >Leave a message<i className="fa-solid fa-arrow-right"></i></button>
        </div>

        <div className="contact-card">
          {/* <i className="fa-light fa-user-group"></i> */}
          <h3 className="h4">Careers</h3>
          <p>Sit ac ipsum leo lorem magna nunc mattis maecenas non vestibulum.</p>
          <button className="btn-primary-contact">Send an application<i className="fa-solid fa-arrow-right"></i></button>
        </div>

      </div>
      {submitted === false &&
        <form onSubmit={handleSubmit(onSubmit)} noValidate>
        <div className="contact-right">
          <h2 className="h3">Get Online Consultation</h2>        
            <p>Full Name</p>
            <input className="form-consultation" type="text" name="fullName" placeholder="Full Name" {...register('fullName', {required: 'Full name is required to make an appointment', pattern: {value: /^[a-zA-Z\s]*$/, message: 'Full name contains non alphabetical characters'}})} ></input>          
            <ErrorMessage FieldName={errors?.fullName} ErrorMessageText={errors?.fullName?.message}/>    
            <p>Email address</p>
            <input className="form-consultation" type="email" name="email" placeholder="Email" {...register('email', {required: 'Email is required to make an appointment', pattern: {value: /^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/, message: 'Non valid email.(Email@adress.xx)'}})}></input>
            <ErrorMessage FieldName={errors?.email} ErrorMessageText={errors?.email?.message}/>
            <p>Specialist</p>
            <label htmlFor="specialist"></label>
            <select className="form-consultation" type="text" name="specialist" placeholder="Specialist" {...register('specialist', {required: 'Please select specialist'})}>
              <option></option>
              <option value ="option 1">Specialist 1</option>
              <option value ="option 2">Specialist 2</option>
              <option value ="option 3">Specialist 3</option>
              <option value ="option 4">Specialist 4</option>
              <option value ="option 5">Specialist 5</option>
            </select>
             <ErrorMessage FieldName={errors?.specialist} ErrorMessageText={errors?.specialist?.message}/>
            <button className="appointment-button">Make an appointment</button>        
        </div>
      </form>      
      }
      {submitted === true &&
        <div className="contact-right">
          <p>Thank you for reaching out we will contact you soon!</p>
          <button className="btn-sub" onClick={handleOk}>OK</button>
        </div>
      }
    </div>
  )
}

export default ContactForm