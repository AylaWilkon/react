import React from 'react'

function brands() {
  //brands is data coming from API call??!?

  
  const brands = [
    { id: 'brand-1', imagePath: 'src/assets/images/logoipsum-1.svg' },
    { id: 'brand-2', imagePath: 'src/assets/images/logoipsum-2.svg' },
    { id: 'brand-3', imagePath: 'src/assets/images/logoipsum-3.svg' },
    { id: 'brand-4', imagePath: 'src/assets/images/logoipsum-4.svg' },
    { id: 'brand-5', imagePath: 'src/assets/images/logoipsum-5.svg' },
    { id: 'brand-6', imagePath: 'src/assets/images/logoipsum-6.svg' },
   ];


  return (       
  <div className="container">
  <section id="brands">
    <div className="container-logo">
    {brands.map((item) => (
      <div key={item.id} id={item.id} className="brand-box">
        <img src={item.imagePath} alt=""/>
      </div>
      ))}
    </div>
  </section>
  </ div>
  )
}

export default brands