import './App.css';
import React, { useEffect } from "react";
import { Route, Switch, useLocation, BrowserRouter as Router } from "react-router-dom"
import Home from "./screens/Home"
import Project1 from "./screens/Project1"
import Project2 from "./screens/Project2"
import Project3 from "./screens/Project3"
import Project4 from "./screens/Project4"
import Contact from "./screens/Contact"
import Layout from "./components/Layout"
import Landing from "./screens/Landing"


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
      <div>
        <ScrollToTop />
            <Switch>
              <Route exact path="/" component={Landing} />
              <Layout >
                <Route exact path="/home" component={Home} />
                <Route exact path="/league-champions" component={Project1} />
                <Route exact path="/liftlog" component={Project2} />
                <Route exact path="/greenhouse" component={Project3} />
                <Route exact path="/the-garage" component={Project4} />
                <Route exact path="/contact" component={Contact} />
             </Layout>
          </Switch>
        </div>
    </div>
  );
}

export default App;
