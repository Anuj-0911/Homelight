import React from "react";
import "./App.css";
import { Router,Link,Switch,Route } from "react-router-dom";
import Home from "./components/Home";
import Signin from "./components/Signin";
import FindAgent from "./components/FindAgent";
import history from './history.js';
import Logo from "./assets/logo.png";

function App() {
  return (
    <Router history={history}>
      <div className="content">
            <Switch>
              <Route exact path={["/", "/home"]} component={Home} />
              <Route exact path={["/signin","/new"]} component={Signin} />
              <Route exact path={["/find-agent/quiz"]} component={FindAgent} />
            </Switch>
      </div>
    </Router>
  );
}

export default App;
