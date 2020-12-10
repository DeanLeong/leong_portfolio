import React from 'react';
import { Link } from 'react-router-dom'
import './Home.css'

function Home(props) {
  return (
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
            <p>Email: dean.g.leong@gmail.com</p>
            <a href="https://drive.google.com/file/d/1H4p4v7r5iTrFTUI1nWa3IB9SruwynYUQ/view" target="_blank" rel="noreferrer"><p>Resume</p></a>
          </div>
        </div>
        <h3 className="projects-title">Check out my projects!</h3>
        <div className="projects-screens">
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
            src="https://raw.githubusercontent.com/DeanLeong/leong_portfolio/develop/client/src/assets/league_champions_screen.png"
            className="project-screen"
            alt="league champions screen">
          </img>
        </Link>
        <Link to="/the-garage">
          <img
            src="https://raw.githubusercontent.com/DeanLeong/leong_portfolio/develop/client/src/assets/the_garage_screen.png"
            className="project-screen"
            alt="the garage screen">
          </img>
        </Link>
        </div>
      </div>
  );
}

export default Home;

//maybe put links in the about me?
//How to make sure the page goes to the top when clicking on project images?