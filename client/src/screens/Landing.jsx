import React from 'react';
import "./Landing.css"
import { Link } from 'react-router-dom'
import Typical from 'react-typical'

function Landing(props) {
  return (
    <div className="landing-container">
      <div className="landing-info-container">
          <Typical
          steps={[
            'Hello!', 500,
            'Hello! My name is Dean Leong.', 1000,
            'Hello! My name is Dean Leong. Welcome to my portfolio!', 1500,
            'Hello! My name is Dean Leong.', 2000]}
            loop={Infinity}
            wrapper="p"
            className="landing-welcome-msg"
          />
        <Link to="/home"><button className="enter-button">Enter</button></Link>
      </div>
    </div>
  );
}

export default Landing;