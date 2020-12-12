import React from 'react';
import './Projects.css'
import { Link } from 'react-router-dom'
import Button from '@material-ui/core/Button'

function Project1(props) {
  return (
    <div className="project-page-container">
      <h2>Leauge Champions Finder</h2>
      <div className="title-image-description">
        <a href="https://deanleong.github.io/league_champions/" target="_blank" rel="noreferrer">
          <img
            src="https://raw.githubusercontent.com/DeanLeong/leong_portfolio/main/client/src/assets/league_champions_screen.png"
           className="project-page-screen"
           alt="league champions screen">
         </img>
        </a>
         <p className="project-description">
            The League Champions Finder is built in regular JavaScript, HTML and CSS. 
            Using calls to an API containing names and basic stats of the Champions in the League of Legends
            users can search for champions by their class. Once they have been searched, the champion's splash image,
            name and tile are displayed. Each time the search button is hit, six random champions of the appropriate class are displayed.
        </p>
       </div>
      <div className="links-container">
        <a href="https://github.com/DeanLeong/league_champions" target="_blank" rel="noreferrer" className="project-links"> <Button variant="contained" color="secondary">GitHub Repo</Button> </a>
        <a href="https://deanleong.github.io/league_champions/" target="_blank" rel="noreferrer" className="project-links"> <Button variant="contained" color="secondary">Live Site</Button> </a>
      </div>
      <p className="other-projects-title">Other Projects:</p>
      <div className="other-projects-container">
      <Link to="/greenhouse" >
          <img
            src="https://i.imgur.com/Gqvwv0U.png"
            className="other-project-screen"
            alt="greenhouse screen">
          </img>
        </Link>
        <Link to="/liftlog">
          <img
            src="https://i.imgur.com/wHRy00R.png"
            className="other-project-screen"
            alt="liftlog screen">
          </img>
        </Link>
        <Link to="/the-garage">
          <img
            src="https://raw.githubusercontent.com/DeanLeong/leong_portfolio/main/client/src/assets/the_garage_screen.png"
            className="other-project-screen"
            alt="league champions screen">
          </img>
        </Link>
      </div>
    </div>
  );
}

export default Project1;