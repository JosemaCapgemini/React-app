import React from 'react';
import './App.css'

//UI
const Topbar = () => {
    return (
        <div className="topnav" id="myTopnav">
            <img src="https://upload.wikimedia.org/wikipedia/commons/thumb/4/47/React.svg/245px-React.svg.png" alt="React logo" height="20" width="25"></img>
            <a href="http://localhost:3000">Home</a>
            <a href="#news">News</a>
            <a href="#contact">Contact</a>
            <a href="#about">About</a>
        </div>
    );
}

export default Topbar;