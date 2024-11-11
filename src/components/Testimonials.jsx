import React, {useState, useEffect} from 'react'
import axios from 'axios'
import Stars from './Stars.jsx'

const Testimonials = () => {
  const [post, setPost] = useState([]);
  useEffect(() => {
    axios.get("https://win24-assignment.azurewebsites.net/api/testimonials").then((data) => {
      setPost(data?.data);
    });
  }, []);

  return (
    <div className="container-testimonials">
      <div className="container">
        <div className="review-group">
            <div className="heading-review">
            <h2 className="h1">Clients are Loving Our App</h2>
            </div>
          {post.map((item, i) => {
            return (
          <div className="review-fannie" key={i}>
            <img className="overline-quote" src="src/assets/images/quotes.svg" alt=""/>
            <div className="starsbox">           
                <Stars stars={item.starRating} />
            </div>
            <h3 className="underline">{item.comment}</h3>          
            <div className="author">
              <img src={item.avatarUrl} className="avatar" alt="avatarUrl alt"/>
              <div className="titles">
                <p><b>{item.author}</b></p>
                <p>{item.jobRole}</p>
              </div>
            </div>
          </div>)})}
        
        </div>
      </div>
    </div>
)}

export default Testimonials
