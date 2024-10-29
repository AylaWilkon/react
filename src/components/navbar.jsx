import React from 'react'

function navbar() {

  // const handleClick = () => { 
  //   if (document.getElementById("darkmode-switch").checked === "true") {
  //     document.getElementById("root").style.backgroundColor = "#FF0000";
  //   }
  function handleClick() {
    alert('You clicked me!');

    //Check how to change CSS or change few props for color of text
    document.getElementById("root").style.backgroundColor = "#FF0000";


  }

  return (
    <header>
  <div className="container">

    <a id="nav-logo" href="index.html">
      <img src="src/assets/images/Group-2.svg" alt="silicon logo"/></a>

      <nav id="main-menu" className="navbar">
        <a className="nav-link" href="#">Features</a>
      </nav>

      <div id="darkmode-toggle-switch" className="btn-toggle-switch">
        <span className="label">Dark mode</span>
        <label htmlFor="darkmode-switch" className="toggle-switch">
          <input id="darkmode-switch" type="checkbox" onClick={handleClick}/>
          <span className="slider round"></span>
        </label>
      </div>

      <button id="auth-signin" className="btn-primary">
          <i className="fa-regular fa-user"></i>Sign in / up
      </button> 

      <button className="btn-mobile">
        <i className="fa-solid fa-bars"></i>
      </button>
  </div>
</header>
  )
}

export default navbar