import React from 'react';
import { Link } from 'react-router-dom'
import './Home.css'
import Button from '@material-ui/core/Button'

function Home(props) {
  return (
      <div className="home-container">
        <div className="img-links">
          <img src="https://i.imgur.com/ARSxrrd.jpg" className="me-img" alt="Dean Leong"></img>
            <div className="about-me">
            <h3 className="about-me-title">
              About Me:
            </h3>
              <p className="about-me-txt">
            I am a Junior Developer who recently graduated from General Assembly’s SEI course. Before this,
            I was a teacher across several grade levels and subjects, specializing in High School History.
            I’m passionate about creating practical and usable technology that helps people live better lives.
            I attribute many of my current skills to my time as a teacher.
            I had to plan, lead, collaborate and then change gears at a moment's notice when none of that planning,
            leading and collaboration worked out.
            By becoming a developer I will bring these skills to a productive and exciting environment that values hard work and trying new things.
             </p>
          <div className="contact-container">
             <p className="contact-me">Contact Info:</p>
             <p className="email">Email: dean.g.leong@gmail.com</p>
             <a href="https://www.linkedin.com/in/dean-leong-2a68041b2/" target="_blank" rel="noreferrer" id="contact-linkedin"><img src="https://i.imgur.com/6T4DdWg.png" className="social-a" id="linkedin" alt="linkedin"></img></a>
             <a href="https://drive.google.com/file/d/1KcUb6BXu3p0Y0uS-594Lkbm14oJXlV9y/view?usp=sharing" target="_blank" rel="noreferrer" id="resume-link">
            <Button variant="contained" color="primary" className="resume-button"><p className="resume-button-text">Here's My Resume</p></Button></a>
          </div>
          </div>
        </div>
        <h2 className="projects-title">Check out my projects!</h2>
      <div className="projects-screens">
      <h3 className="projects-section">Freelance Projects</h3>
        <Link to="/fifthdimension-podcast">
          <img
            src="https://raw.githubusercontent.com/DeanLeong/leong_portfolio/development/client/src/assets/fifthdimension_screen.png"
            className="project-screen"
            alt="fifthdimension screen">
          </img>
        </Link>
        <h3 className="projects-section">General Assembly Projects</h3>
        <Link to="/greenhouse">
          <img
            src="https://i.imgur.com/Gqvwv0U.png"
            className="project-screen"
            alt="greenhouse screen">
          </img>
        </Link>
        <Link to="/liftlog">
          <img
            src="https://i.imgur.com/wHRy00R.png"
            className="project-screen"
            alt="liftlog screen">
          </img>
        </Link>
        <Link
          to="/league-champions">
          <img
            src="https://raw.githubusercontent.com/DeanLeong/leong_portfolio/main/client/src/assets/league_champions_screen.png"
            className="project-screen"
            alt="league champions screen">
          </img>
        </Link>
        <Link to="/the-garage">
          <img
            src="https://raw.githubusercontent.com/DeanLeong/leong_portfolio/main/client/src/assets/the_garage_screen.png"
            className="project-screen"
            alt="the garage screen">
          </img>
        </Link>
        <h3 className="projects-section">Hackathon Projects</h3>
        <Link to="/ice-breaker-maker">
          <img
            src="https://raw.githubusercontent.com/DeanLeong/leong_portfolio/development/client/src/assets/ice_breaker_screen.png"
            className="project-screen"
            alt="ice-breaker-maker screen">
          </img>
        </Link>
        </div>
      </div>
  );
}

export default Home;

//Make the plain links in the projects page buttons with material UI
//find a font
//touch up the footer