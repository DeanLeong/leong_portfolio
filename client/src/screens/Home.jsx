import React from 'react';
import Layout from "../components/Layout"
import './Home.css'

function Home(props) {
  return (
    <Layout>
      <div>
        <div className="img-links">
          <img src="https://i.imgur.com/ARSxrrd.jpg" className="me-img"></img>
          <a href="https://github.com/DeanLeong" target="_blank" rel="noreferrer" className="social-a"><img src="https://i.imgur.com/cy6tbfp.png" className="social-a"></img></a>
          <a href="https://www.linkedin.com/in/dean-leong-2a68041b2/" target="_blank" rel="noreferrer" className="social-a"><img src="https://i.imgur.com/6T4DdWg.png" className="social-a" id="linkedin"></img></a>
        </div>
        <div className="about-me">
          <h3>
            About Me:
          </h3>
          <p>
            I am a Junior Developer who recently graduated from General Assembly’s SEI course. Before this,
            I was a teacher across several grade levels and subjects, specializing in High School History.
            I’m passionate about creating practical and usable technology that helps people live better lives.
            I attribute many of my current skills to my time as a teacher.
            I had to plan, lead, collaborate and then change gears at a moment's notice when none of that planning,
            leading and collaboration worked out.
            I hope that by becoming a developer I can bring these skills to a productive and exciting environment that values hard work and trying new things.
          </p>
        </div>
      </div>
    </Layout>
  );
}

export default Home;

//https://i.imgur.com/6T4DdWg.png