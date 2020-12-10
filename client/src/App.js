import './App.css';
import React, { useEffect } from "react";
import { Route, Switch, useLocation, withRouter, BrowserRouter as Router } from "react-router-dom"
import Home from "./screens/Home"
import Project1 from "./screens/Project1"
import Project2 from "./screens/Project2"
import Project3 from "./screens/Project3"
import Project4 from "./screens/Project4"
import Layout from "./components/Layout"


export function ScrollToTop() {
  const { pathname } = useLocation()
  
  useEffect(() => {
    window.scrollTo(0, 0)
  }, [pathname])

  return null
}

function App() {
  return (
    <div className="App">
      <Router>
        <Layout >
          <ScrollToTop />
            <Switch>
               <Route exact path="/" component={Home} />
                <Route exact path="/league-champions" component={Project1} />
                <Route exact path="/liftlog" component={Project2} />
                <Route exact path="/greenhouse" component={Project3} />
                <Route exact path="/the-garage" component={Project4} />
            </Switch>
          </Layout>
      </Router>
    </div>
  );
}

export default App;
