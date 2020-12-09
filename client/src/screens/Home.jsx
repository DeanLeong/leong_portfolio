import React from 'react';
import Layout from "../components/Layout"
import { Link } from 'react-router-dom'
import './Home.css'

function Home(props) {
  return (
    <Layout>
      <div className="home-container">
        <div className="img-links">
          <img src="https://i.imgur.com/ARSxrrd.jpg" className="me-img" alt="Dean Leong"></img>
            <div className="about-me">
            <h3>
              About Me:
            </h3>
            <p className="about-me-txt">
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
        <div className="projects-screens">
          <img src="https://i.imgur.com/Gqvwv0U.png" className="project-screen" alt="greenhouse screen"></img>
          <img src="https://i.imgur.com/wHRy00R.png" className="project-screen" alt="liftlog screen"></img>
        </div>
      </div>
    </Layout>
  );
}

export default Home;

//https://i.imgur.com/6T4DdWg.png