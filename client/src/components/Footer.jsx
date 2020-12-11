import React from 'react';
import './Footer.css'

function Footer(props) {
  return (
    <div className="footer-container">
      <a href="https://github.com/DeanLeong" target="_blank" rel="noreferrer" className="social-a"><img src="https://i.imgur.com/cy6tbfp.png" className="social-a" alt="gitub"></img></a>
      <a href="https://www.linkedin.com/in/dean-leong-2a68041b2/" target="_blank" rel="noreferrer" className="social-a" id="linkedin"><img src="https://i.imgur.com/6T4DdWg.png" className="social-a" id="linkedin" alt="linkedin"></img></a>
    </div>
  );
}

export default Footer;