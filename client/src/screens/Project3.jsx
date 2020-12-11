import React from 'react';
import './Projects.css'
import { Link } from 'react-router-dom'
import Button from '@material-ui/core/Button'

function Project3(props) {
  return (
    <div className="project-page-container">
      <h2>GreenHouse</h2>
      <div className="title-image-description">
        <a href="https://green-house-adirondack-phoenix.netlify.app/" target="_blank" rel="noreferrer">
          <img
            src="https://i.imgur.com/Gqvwv0U.png"
           className="project-page-screen"
           alt="league champions screen">
         </img>
        </a>
         <p className="project-description">
          GreenHouse is a full-stack application built with React and Express. 
          The front end is deployed to Netlify and the back end is deployed to Heroku as well as MongoDB. 
          GreenHouse was a collaborative effort between a UX team and an Engineering team.
          After the project was handed off, my engineering team implemented an agile workflow, GitHub projects and Git teams to hit our daily goals.
          This workflow allowed us to go far beyond an MVP and reach a third iteration of the app in slightly more than a week.
          Each day every team member worked on a different aspect of the project, from building out back end functionality to CSS.
        </p>
       </div>
      <div className="links-container">
        <a href="https://github.com/DeanLeong/greenhouse" target="_blank" rel="noreferrer" className="project-links"> <Button variant="contained" color="secondary">GitHub Repo</Button> </a>
        <a href="https://green-house-adirondack-phoenix.netlify.app/" target="_blank" rel="noreferrer" className="project-links"> <Button variant="contained" color="secondary">Live Site</Button></a>
      </div>
      <p>Other Projects:</p>
      <div className="other-projects-container">
      <Link to="/liftlog">
          <img
            src="https://i.imgur.com/wHRy00R.png"
            className="other-project-screen"
            alt="liftlog screen">
          </img>
        </Link>
        <Link to="/league-champions">
          <img
            src="https://raw.githubusercontent.com/DeanLeong/leong_portfolio/develop/client/src/assets/league_champions_screen.png"
            className="other-project-screen"
            alt="league champions screen">
          </img>
        </Link>
        <Link to="/the-garage">
          <img
            src="https://raw.githubusercontent.com/DeanLeong/leong_portfolio/develop/client/src/assets/the_garage_screen.png"
            className="other-project-screen"
            alt="the garage screen">
          </img>
        </Link>
      </div>
    </div>
  );
}

export default Project3;