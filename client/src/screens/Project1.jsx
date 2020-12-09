import React from 'react';
import './Projects.css'

function Project1(props) {
  return (
    <div>
      <h2>Leauge Champions Finder</h2>
        <img
          src="https://raw.githubusercontent.com/DeanLeong/leong_portfolio/develop/client/src/assets/league_champions_screen.png"
          className="project-page-screen"
          alt="league champions screen">
        </img>
        <p className="project-description">
          The League Champions Finder is built in regular JavaScript, HTML and CSS. 
          Using calls to an API containing names and basic stats of the Champions in the League of Legends
          users can search for champions by their class. Once they have been searched, the champion's splash image,
          name and tile are displayed. Each time the search button is hit six random champions of the appropriate class are displayed.
       </p>
    </div>
  );
}

export default Project1;