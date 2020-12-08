import React from 'react';
import Layout from "../components/Layout"
import './Home.css'

function Home(props) {
  return (
    <Layout>
      <div>
        <div className="img-links">
          <img src="https://i.imgur.com/ARSxrrd.jpg" className="me-img"></img>
        </div>
      </div>
    </Layout>
  );
}

export default Home;