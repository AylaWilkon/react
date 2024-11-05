import React, {useState, useEffect} from 'react'
import axios from 'axios'

const FAQ = () => {
  const [FAQ, setFAQ] = useState([]);
  useEffect(() => {
    axios.get("https://win24-assignment.azurewebsites.net/api/faq").then((data) => {
      setFAQ(data?.data);
    });
  }, []);

  function handleClick(id, parentId){
    const answer= document.getElementById(id);
    answer.style.display=answer.style.display==='block' ? 'none' : 'block';
    const arrow = document.getElementById(parentId);
    arrow.style.transform = answer.style.display === 'block' ? 'rotate(224deg)' : 'rotate(45deg)';
  }

  return (

    <div>
      
    <div className="container-faq">
    <div className="contact-container">
        <h2 className="h3">Any questions? Check out the FAQs</h2>
        <h3 className="underline">Still have unanswered questions and need to get in touch?</h3>
  
      <div className="questions">
        <div className="to-the-left">
  
          <div className="button-container">
            <div>
              <i className="fa-solid fa-phone-volume"></i>
              <p id="text-1">Still have questions?</p>
              <button className="contact-button" id="phone-button">Contact us<i className="fa-solid fa-arrow-right"></i></button>
            </div>
          </div>
        </div>
  
  
        <div className="to-the-right">
  
              <div className="button-container">
              <div>
                <i className="fa-solid fa-comment-dots"></i>
                <p id="text-2">Don't like phone calls?</p>
                <button className="contact-button" id="chat-button">Contact us<i className="fa-solid fa-arrow-right"></i></button>
              </div>
            </div>
        </div>
      </div>
    </div>

 
    <div className="container">
    {FAQ?.map((item, i) => {
          return (
            <div className="faq-item" key={item.id} onClick={handleClick.bind(this, item.id,i)} >
            <h4 className="faq-question">
              {item.title}
              <div className="arrow-background"  >
                <span className="arrow" id={i}></span>
              </div>
            </h4>
            <p className="faq-answer" id={item.id}>{item.content}</p>
        </div>
)})}
</div>
  </div>  
  </div>      

)}

export default FAQ