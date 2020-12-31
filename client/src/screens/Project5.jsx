import React from 'react';
import { Link } from 'react-router-dom'
import Button from '@material-ui/core/Button'

function Project5(props) {
  return (
    <div className="project-page-container">
      <h2>Ice-Breaker-Maker</h2>
      <div className="title-image-description">
        <a href="https://ice-breaker-maker.web.app/" target="_blank" rel="noreferrer">
          <img
            src="https://raw.githubusercontent.com/DeanLeong/leong_portfolio/development/client/src/assets/ice_breaker_screen.png"
           className="project-page-screen"
           alt="ice breaker maker screen">
         </img>
        </a>
        <div className="icon-container">
          <img className="language-icons" src="https://img.icons8.com/color/48/000000/javascript.png" alt="javascript"/>
          <img className="language-icons" src="https://img.icons8.com/color/48/000000/html-5.png" alt="html5" />
          <img className="language-icons" src="https://img.icons8.com/color/48/000000/css3.png" alt="css" />
          <img className="language-icons" src="https://img.icons8.com/color/48/000000/react-native.png" alt="react" />
          <img className="language-icons" src="https://img.icons8.com/color/48/000000/firebase.png" alt="firebase"/>
          {/* Icons from  icons8.com*/}
        </div>
         <p className="project-description">
            The Ice Breaker Maker was made as part of General Assembly's 2020 Holiday Hackathon. Groups were challenged to find a way to help bring pre-covid
            activities to the post-covid world. My group decided to takle the problem of bringing people together in the virtual world. Our target user was
            anyone who has the responisbility of hosting Zoom sessions and getting people to participate. Our app concept included an icebreaker tool that would be
            connected to events that users can sign up for. By attending and participating in events, users can gain points as part of a gamification aspect of the app.
            In the timeframe of the Hackathon, we were able to complete the icebreaker aspect of the app as our MVP. Ice Breaker Maker is built in React with a Firebase backend.
        </p>
       </div>
      <div className="links-container">
        <a href="https://github.com/MTaylor124/ice-breaker-maker" target="_blank" rel="noreferrer" className="project-links"> <Button variant="contained" color="secondary">GitHub Repo</Button> </a>
        <a href="https://ice-breaker-maker.web.app/" target="_blank" rel="noreferrer" className="project-links"> <Button variant="contained" color="secondary">Live Site</Button> </a>
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
      </div>
    </div>
  )
}

export default Project5;