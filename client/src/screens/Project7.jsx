import React from 'react';
import { Link } from 'react-router-dom'
import Button from '@material-ui/core/Button'

function Project7(props) {
  return (
    <div className="project-page-container">
      <h2>Jagan Website *WIP*</h2>
      <div className="title-image-description">
        <a href="https://github.com/DeanLeong/jagon" target="_blank" rel="noreferrer">
          <img
            src="https://raw.githubusercontent.com/DeanLeong/leong_portfolio/add_new_section/client/src/assets/jagon_screen.png"
           className="project-page-screen"
           alt="Jagan screen">
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
         Jagan is a website for the DND campaign group of the same name. The website is designed to be a central application where a variety of helpful DND information can be added, deleted etc. This includes PCs, NPCS and notes. There are general group notes and personal player notes. This website is built with a Rails back end and a React front end is being built.
        </p>
       </div>
      <div className="links-container">
        <a href="https://github.com/DeanLeong/jagon" target="_blank" rel="noreferrer" className="project-links"> <Button variant="contained" color="secondary">GitHub Repo</Button> </a>
        {/* <a href="https://thefifthdimensionpodcast.org/" target="_blank" rel="noreferrer" className="project-links"> <Button variant="contained" color="secondary">Live Site</Button> </a> */}
      </div>
      <p className="other-projects-title">Other Projects:</p>
      <div className="other-projects-container">
      <Link to="/league-champions">
          <img
            src="https://raw.githubusercontent.com/DeanLeong/leong_portfolio/main/client/src/assets/league_champions_screen.png"
            className="other-project-screen"
            alt="league champions screen">
          </img>
      </Link>
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
      </div>
    </div>
  )
}

export default Project7;