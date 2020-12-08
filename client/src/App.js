import './App.css';
import React from "react";
import { Route, Switch } from "react-router-dom"
import Home from "./screens/Home"

function App() {
  return (
    <div className="App">
      <Switch>
        <Route exact path="/" component={Home} />
     </Switch>
    </div>
  );
}

export default App;