import React from 'react'

function HowDoes () {
  return (
    <section id="how-does-it-work">  
      <div className="how-to">
        <h2 className="h1">How Does It Work?</h2>
          <div className="carousel">
            <div className="carousel-item">
              <img className="fade" src="src/assets/images/iphone-left.png" alt=""/>
            </div>
            <div className="carousel-item">
              <img src="src/assets/images/iphone-middle.png" alt=""/>
            </div>
            <div className="carousel-item">
              <img className="fade" src="src/assets/images/iphone-right.png" alt=""/>
            </div>
          </div>
          <div className="text">
            <h3 className="h4">Latest transaction history</h3>
            <p>Enim, et amet praesent pharetra. Mi non ante hendrerit amet sed. </p><br/> 
            <p>Arcu sociis tristique quisque hac in consectetur condimentum.</p>
          </div>     
      </div>
    </section>
  )
}

export default HowDoes