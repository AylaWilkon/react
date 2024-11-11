import React, {useState} from 'react'
import axios from 'axios'
import { useForm } from 'react-hook-form'




const Subscribe = () => {
  const [submitted, setSubmitted] = useState(false)
  const { register, handleSubmit, formState: {errors}, reset} = useForm()

  const handleOk = () => {
    setSubmitted(false)
    reset()
  }

  const onSubmit = async (data) => {
    
    const res = await axios.post('https://win24-assignment.azurewebsites.net/api/forms/subscribe', data, {
      headers: {
        'Content-Type': 'application/json'
      }
    })

    if (res.status ===200) {
      setSubmitted(true)
      reset()
    }
  }

  if (submitted) {
    return (
      <div className="informationbox">
        <p>Thanks for subscribing!</p>
        <button className="btn-sub" onClick={handleOk}>OK</button>
      </div>
    )
  }




  return (
    <form onSubmit={handleSubmit(onSubmit)} noValidate>
    <div className="container">
    <div className="subscribe-container">
      <div className="bell">
      <img src="src/assets/images/notification.svg" alt="A bell with a dot for notification"/>
      </div>
  
      <div className="text-newsletter">
      <h3 className="h4">Subscribe to our newsletter to stay <br/> informed about latest updates</h3>
      </div>
  
      <div className="input-group">
        <img className="icon" src="src/assets/images/bx-envelope.svg" alt="envelope icon"/>
        <input className="form-input email" type="email" placeholder="Your Email" {...register('email', {required: 'Email is required to subscribe', pattern: {value: /^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/, message: 'Please enter a valid email'}})} />
        
        <button className="btn-sub">Subscribe</button>
        
      </div>
      <span className="error-message">{errors.email && errors.email.message}</span>
  
    </div>
    </div>
    </form>
  )
}

export default Subscribe