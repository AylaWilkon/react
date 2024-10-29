import React from 'react'

export const Features = () => {
  return (
    <section aria-label="App features" className="features">
      <div className="container">
        <div className="iphone">
          <img src="src/assets/images/phone-card.svg" alt="iphone with a creditcard"/>
        </div>
        <div className="text">
          <h2 className="h1">App Features</h2>
          <p className="text-lg">Lorem ipsum dolor sit amet, consectetur adipiscing elit. Proin volutpat mollis egestas. Nam luctus facilisis ultrices. Pellentesque volutpat ligula est. Mattis fermentum, at nec lacus.</p>
          
          <div className="features-grid">
  
            <div className="features-card">
              <div className="icon-container">
                <img src="src/assets/images/features-1.svg" alt=""/>
              </div>
              <div>
                <h3 className="h5">Easy Payments</h3>
                <p>Id mollis consectetur congue egestas egestas suspendisse blandit justo.</p>
              </div>
            </div>
  
            <div className="features-card">
              <div className="icon-container">
                <img src="src/assets/images/features-2.svg" alt=""/>
              </div>
              <div>
                <h3 className="h5">Data Security</h3>
                <p>Augue pulvinar justo, fermentum fames aliquam accumsan vestibulum non.</p>
              </div>
            </div>
  
            <div className="features-card">
              <div className="icon-container">
                <img src="src/assets/images/features-3.svg" alt=""/>
              </div>
              <div>
                <h3 className="h5">Cost Statistics</h3>
                <p>Mattis urna ultricies non amet, purus in auctor non. Odio vulputate ac nibh.</p>
              </div>
            </div>
  
            <div className="features-card">
              <div className="icon-container">
                <img src="src/assets/images/features-4.svg" alt=""/>
              </div>
              <div>
                <h3 className="h5">Support 24/7</h3>
                <p>A elementum, imperdiet enim, pretium etiam facilisi in aenean quam mauris.</p>
              </div>
            </div>
  
            <div className="features-card">
              <div className="icon-container">
                <img src="src/assets/images/features-5.svg" alt=""/>
              </div>
              <div>
                <h3 className="h5">Regular Cashback</h3>
                <p>Sit facilisis dolor arcu, fermentum vestibulum arcu elementum imperdiet eleifend.</p>
              </div>
            </div>
  
            <div className="features-card">
              <div className="icon-container">
                <img src="src/assets/images/features-6.svg" alt=""/>
              </div>
              <div>
                <h3 className="h5">Top Standards</h3>
                <p>Faucibus cursus maecenas lorem cursus nibh. Sociis sit risus id. Sit facilisis dolor arcu.</p>
              </div>
            </div>
  
          </div>
        </div>
      </div>
    </section>
  )
}

export default Features