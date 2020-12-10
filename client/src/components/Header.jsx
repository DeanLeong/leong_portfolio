import React from 'react';
import { Link } from "react-router-dom";
import './Header.css'

function Header(props) {
  return (
    <div className="header">
      <div className="header-contents">
        <Link to='/' className="header-title">
          <p className="header-home">Home</p>
        </Link>
        <p className="header-title">Dean Leong - Software Engineer</p>
      </div>
    </div>
  );
}

export default Header;