import React, {useState, useEffect} from 'react'
import axios from 'axios'
import Stars from './stars.jsx'

const Testimonials = () => {
  const [post, setPost] = useState([]);
  useEffect(() => {
    axios.get("https://win24-assignment.azurewebsites.net/api/testimonials").then((data) => {
      setPost(data?.data);
    });
  }, []);

  return (
    <div className="container">
      <div className="review-group">
          <div className="heading-review">
          <h2 className="h1">Clients are Loving Our App</h2>
          </div>
        {post.map((item, i) => {
          return (
        <div className="review-fannie" key={i}>
          <img className="overline-quote1" src="src/assets/images/quotes.svg" alt=""/>
          <div>           
              <Stars stars={item.starRating} />
          </div>
          <h3 className="underline">{item.comment}</h3>
          <img src={item.avatarUrl} alt="avatarUrl alt"/>
          <p>{item.author}</p>
          <p>{item.jobRole}</p>
        </div>)})}
      
      </div>
    </div>
)}

export default Testimonials
