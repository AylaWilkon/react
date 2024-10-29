import React from 'react'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'


function Stars ({stars}) {
  const starsArray = Array().fill('')

  for(let i=0; i < 5; i++)
    {
      if(stars > i)
        {
        starsArray.push("fa-solid fa-star")
        }
        else
        {
          starsArray.push("fa-regular fa-star")
        }
    }
    
    console.log(1)
  return (
  <div>
       {starsArray.map((item, index) => {
          return (<FontAwesomeIcon icon={item} key={index} /> )})}
  </div>) 
}

export default Stars