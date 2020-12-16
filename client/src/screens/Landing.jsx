import React from 'react';
import "./Landing.css"
import { Link } from 'react-router-dom'
import Typical from 'react-typical'

function Landing(props) {
  return (
    <div className="landing-container">
      <div className="landing-info-container">
        <p className="landing-welcome-msg">Hello! My name is Dean Leong, welcome to my portfolio!</p>
          <Typical
            steps={['Hello', 1000, 'Hello world!', 500]}
            loop={Infinity}
            wrapper="p"
            className="landing-welcome-msg"
          />
        <Link to="/home"><button>Enter</button></Link>
      </div>
    </div>
  );
}

export default Landing;