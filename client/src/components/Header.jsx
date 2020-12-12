import React from 'react';
import { Link } from "react-router-dom";
import './Header.css'

function Header(props) {
  return (
    <div className="header">
      <div className="header-contents">
        <Link to='/' className="header-content" id="home-link">
          <p className="header-content">Home</p>
        </Link>
        <p className="header-content">Dean Leong</p>
        <Link to='/contact' className="header-content" id="contact-link">
          <p className="header-content">Contact Me</p>
        </Link>
      </div>
    </div>
  );
}

export default Header;