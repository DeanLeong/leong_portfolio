import React from 'react';
import './Projects.css'
import { Link } from 'react-router-dom'
import Button from '@material-ui/core/Button'

function Project4(props) {
  return (
    <div className="project-page-container">
      <h2>The Garage</h2>
      <div className="title-image-description">
        <a href="https://deanleongthegarage.netlify.app/" target="_blank" rel="noreferrer">
          <img
            src="https://raw.githubusercontent.com/DeanLeong/leong_portfolio/main/client/src/assets/the_garage_screen.png"
           className="project-page-screen"
           alt="league champions screen">
         </img>
        </a>
        <div className="icon-container">
          <img className="language-icons" src="https://img.icons8.com/color/48/000000/javascript.png" alt="javascript"/>
          <img className="language-icons" src="https://img.icons8.com/color/48/000000/html-5.png" alt="html5" />
          <img className="language-icons" src="https://img.icons8.com/color/48/000000/css3.png" alt="css" />
          <img className="language-icons" src="https://img.icons8.com/color/48/000000/react-native.png" alt="react" />
          <img className="language-icons" src="https://img.icons8.com/officel/40/000000/ruby-programming-language.png" alt="ruby"/>
          {/* Icons from  icons8.com*/}
        </div>
         <p className="project-description">
          The Garage is a full stack application built with React and Ruby on Rails. 
          The front end is deployed to Netlify and the back end is deployed to Heroku. 
          On The Garage is designed to allow users to add their motorcycles and then record maintenence notes for them.
          The Garage's Rails back end contains three tables: Users, Motorcycles and Notes.
          Currently, full CRUD is featured on the notes and Rails is set up to allow for CRUD on the other tables as well.
          It also features secure authorization for the users that stores a token in local storage.
        </p>
       </div>
      <div className="links-container">
        <a href="https://github.com/DeanLeong/the_garage" target="_blank" rel="noreferrer" className="project-links"> <Button variant="contained" color="secondary">GitHub Repo</Button> </a>
        <a href="https://deanleongthegarage.netlify.app/" target="_blank" rel="noreferrer" className="project-links"> <Button variant="contained" color="secondary">Live Site</Button> </a>
      </div>
      <p className="other-projects-title">Other Projects:</p>
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
            src="https://raw.githubusercontent.com/DeanLeong/leong_portfolio/main/client/src/assets/league_champions_screen.png"
            className="other-project-screen"
            alt="league champions screen">
          </img>
        </Link>
        <Link to="/greenhouse">
          <img
            src="https://i.imgur.com/Gqvwv0U.png"
            className="other-project-screen"
            alt="greenhouse screen">
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

export default Project4;