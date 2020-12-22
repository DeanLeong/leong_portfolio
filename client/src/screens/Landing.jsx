import React, { useState } from 'react';
import "./Landing.css"
import { Link } from 'react-router-dom'
import { CSSTransition } from 'react-transition-group'
import Typical from 'react-typical'


function Landing(props) {
  const [inProp, setInProp] = useState(false)

  return (
    <CSSTransition in={inProp} timeout={2000} classNames="my-node">
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
        <Link to="/home"><button type="button" className="enter-button" onClick={() => setInProp(true)}>Enter</button></Link>
        </div>
      </div>
    </CSSTransition>
  );
}

export default Landing;