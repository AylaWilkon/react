import React from 'react'

const Location = () => {
  return (

  <div className="container-map">
    <div className="google-map">
        <img src="src/assets/images/google-map.png"></img>
    </div>
    <div className="adresses">   
        <h3 className="h4">Medical Center 1</h3>
        <p><i className="fa-sharp fa-location-dot"></i>4517 Washington Ave. Manchester, Kentucky 39495</p>
        
        <p><i className="fa-sharp fa-regular fa-phone"></i>(406) 555-0120</p> 

        <p><i className="fa-sharp fa-clock"></i><b>Mon - Fri: </b>9:00 am - 22:00 am</p>
        <p><b>Sat - Sun: </b>9:00 am - 20:00 am</p>
        
        <h3 className="h4">Medical Center 2</h3>
        <i className="fa-sharp fa-location-dot"></i>
        <p>2464 Royal Ln. Mesa,New Jersey 45463</p>
        <i className="fa-sharp fa-regular fa-phone"></i>
        <p>(406) 544-0123</p>
        <i className="fa-sharp fa-clock"></i>
        <p><b>Mon - Fri: </b>9:00 am - 22:00 am</p>
        <p><b>Sat - Sun: </b>9:00 am - 20:00 am</p>
        <img src="src/assets/images/socials.svg"></img>
    </div> 
  </div>
  )
}

export default Location