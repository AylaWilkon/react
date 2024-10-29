import React from 'react'

function hero() {
  return (  
<div>
<section id="hero">
  <div className="container">
      <div className="container-header">
        <div className="headline">
          <h1>Manage All Your Money in One App</h1>
        </div> 
          <div className="content">
            <p>We offer you a new generation of the mobile banking. Save, spend & manage money in your pocket.</p>
              <div className="buttons-apps">
              <a className="btn-download-app" href="#"><img src="src/assets/images/appstore.svg" alt="appstore logo"/></a>
              <a className="btn-download-app" href="#"><img src="src/assets/images/googleplay.svg" alt="google play logo"/></a>
              </div>
          </div>
      </div>
      <span/>
      <a className="discover-more" href="#"><button className="down-arrow"><i className="arrow down"></i></button>Discover more</a>
      <div className="phone-images">
        <img className="img-back" src="src/assets/images/iphone-back.svg" alt="iphone with my budget"/>
        <img className="img-front" src="src/assets/images/iphone-front.svg" alt="iphone with my cards"/>
      </div>
    </div>
</ section>
</div>
  )
}

export default hero