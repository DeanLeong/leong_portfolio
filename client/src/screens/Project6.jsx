import React from 'react';
import { Link } from 'react-router-dom'
import Button from '@material-ui/core/Button'

function Project6(props) {
  return (
    <div className="project-page-container">
      <h2>Fifth Dimension Podcast</h2>
      <div className="title-image-description">
        <a href="https://thefifthdimensionpodcast.org/" target="_blank" rel="noreferrer">
          <img
            src="https://raw.githubusercontent.com/DeanLeong/leong_portfolio/development/client/src/assets/fifthdimension_screen.png"
           className="project-page-screen"
           alt="Fifth Dimension Podcast screen">
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
         The Fifth Dimension Site is built to support the growing podcast of the same name. To do this I contacted some former classmates after picking up the job and created a small team to create a high-quality, functional website. Planning consisted of consulting the client on what the website will be used for and how it should look. From there, we decided that the appropriate tech stack would be a React front-end with a Rails back-end. Additionally, we implemented some industry-standard add ons such as TinyMCE for writing blog posts and Formspree for contacting the client. Over the course of several weeks we were able to work asynchronously using Slack and GitHub Projects to communicate and track progress. The website was designed for immediate access to the client’s podcast as well as the ability for the client to write blog posts with full CRUD. The client is able to log in to their admin account to write these blogs, maintain their email list and change their password. The website is hosted on Netlify and Heroku.
        </p>
       </div>
      <div className="links-container">
        <a href="https://github.com/DeanLeong/fifthdimension" target="_blank" rel="noreferrer" className="project-links"> <Button variant="contained" color="secondary">GitHub Repo</Button> </a>
        <a href="https://thefifthdimensionpodcast.org/" target="_blank" rel="noreferrer" className="project-links"> <Button variant="contained" color="secondary">Live Site</Button> </a>
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
        <Link to="/jagan">
          <img
            src="https://raw.githubusercontent.com/DeanLeong/leong_portfolio/add_new_section/client/src/assets/jagon_screen.png"
            className="other-project-screen"
            alt="jagan screen">
          </img>
        </Link>
      </div>
    </div>
  )
}

export default Project6;