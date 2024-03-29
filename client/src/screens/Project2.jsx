import React from 'react';
import './Projects.css'
import { Link } from 'react-router-dom'
import Button from '@material-ui/core/Button'

function Project2(props) {
  return (
    <div className="project-page-container">
      <h2>Liftlog</h2>
      <div className="title-image-description">
        <a href="https://deanleongliftlog.netlify.app/" target="_blank" rel="noreferrer">
          <img
            src="https://i.imgur.com/wHRy00R.png"
           className="project-page-screen"
           alt="liftlog screen">
         </img>
        </a>
        <div className="icon-container">
          <img className="language-icons" src="https://img.icons8.com/color/48/000000/javascript.png" alt="javascript"/>
          <img className="language-icons" src="https://img.icons8.com/color/48/000000/html-5.png" alt="html5" />
          <img className="language-icons" src="https://img.icons8.com/color/48/000000/css3.png" alt="css" />
          <img className="language-icons" src="https://img.icons8.com/color/48/000000/react-native.png" alt="react"/>
          {/* Icons from  icons8.com*/}
        </div>
         <p className="project-description">
          Liftlog is built in React with an AirTable api and deployed to Netilfy. Users are able to use this app to record their weightlifting workouts. 
          Each note takes a day or date, an exercise, weights lifted, number of reps and a note. The saved workouts are displayed starting at the most recent. 
          If needed, users are also able to delete a note. The users are also provided with two calculators,
          one that converts kilograms to pounds and another that converts pounds to kilograms.
        </p>
       </div>
      <div className="links-container">
        <a href="https://github.com/DeanLeong/liftlog" target="_blank" rel="noreferrer" className="project-links"> <Button variant="contained" color="secondary">GitHub Repo</Button> </a>
        <a href="https://deanleongliftlog.netlify.app/" target="_blank" rel="noreferrer" className="project-links"> <Button variant="contained" color="secondary">Live Site</Button> </a>
      </div>
      <p className="other-projects-title">Other Projects:</p>
      <div className="other-projects-container">
      <Link to="/greenhouse">
          <img
            src="https://i.imgur.com/Gqvwv0U.png"
            className="other-project-screen"
            alt="greenhouse screen">
          </img>
        </Link>
        <Link to="/league-champions">
          <img
            src="https://raw.githubusercontent.com/DeanLeong/leong_portfolio/main/client/src/assets/league_champions_screen.png"
            className="other-project-screen"
            alt="league champions screen">
          </img>
        </Link>
        <Link to="/the-garage">
          <img
            src="https://raw.githubusercontent.com/DeanLeong/leong_portfolio/main/client/src/assets/the_garage_screen.png"
            className="other-project-screen"
            alt="league champions screen">
          </img>
        </Link>
        <Link to="/ice-breaker-maker">
          <img
            src="https://raw.githubusercontent.com/DeanLeong/leong_portfolio/development/client/src/assets/ice_breaker_screen.png"
            className="other-project-screen"
            alt="ice-breaker-maker screen">
          </img>
        </Link>
        <Link to="/fifthdimension-podcast">
          <img
            src="https://raw.githubusercontent.com/DeanLeong/leong_portfolio/development/client/src/assets/fifthdimension_screen.png"
            className="other-project-screen"
            alt="fifth-dimension podcast screen">
          </img>
        </Link>
        <Link to="/jagan">
          <img
            src="https://raw.githubusercontent.com/DeanLeong/leong_portfolio/add_new_section/client/src/assets/jagon_screen.png"
            className="other-project-screen"
            alt="jagan screen">
          </img>
        </Link>
      </div>
    </div>
  );
}

export default Project2;