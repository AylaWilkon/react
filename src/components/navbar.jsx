import React from 'react'
import DarkModeSwitch from './DarkModeSwitch.jsx'

function navbar() {
  return (
    <header>

  <div className="container">

    <a id="nav-logo" href="index.html">
      <img src="src/assets/images/Group-2.svg" alt="silicon logo"/></a>

      <nav id="main-menu" className="navbar">
        <a className="nav-link" href="#">Features</a>
      </nav>

      <DarkModeSwitch />

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