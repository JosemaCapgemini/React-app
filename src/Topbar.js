import React from 'react';
import './App.css'

//UI
const Topbar = () => {
    return (
        <div className="topnav" id="myTopnav">
          <a href="http://localhost:3000">Home</a>
          <a href="#news">News</a>
          <a href="#contact">Contact</a>
          <a href="#about">About</a>
        </div>
      );
}

export default Topbar;