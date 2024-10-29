import React from 'react'

function Subscribe () {
  return (
    <div className="subscribe-container">
      <div className="bell">
      <img src="src/assets/images/notification.svg" alt="A bell with a dot for notification"/>
      </div>
  
      <div className="text-newsletter">
      <h3 className="h4">Subscribe to our newsletter to stay <br/> informed about latest updates</h3>
      </div>
  
      <div className="input-group">
        <img className="icon" src="src/assets/images/bx-envelope.svg" alt="envelope icon"/>
        <input className="form-input email" type="text" placeholder="Your Email"/>
        <button className="btn-sub">Subscribe</button>
      </div>
  
    </div>
  )
}

export default Subscribe