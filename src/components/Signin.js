import React from "react";
import { Router,Link,Switch,Route } from "react-router-dom";
import history from '../history.js';
import Login from "./Login.js";
import ChooseRole from "./ChooseRole.js";
const Signin = ()=>{
  return(
    <Router history={history}>
    <div>
      <Link to="/">
      <img src="https://d1xt9s86fx9r45.cloudfront.net/assets/v3/logo-2016-color-642d4fe24c11a560886781445bd1ce2997e285ef5f8d344bc6bf06fda2a1a7db.png"
        alt="logo" className="homelogo-signin"/>
      <hr/>
      </Link>
    </div>
      <Switch>
        <Route exact path="/signin" component={Login} />
        <Route exact path="/new" component={ChooseRole} />
      </Switch>
    </Router>
  );
};

export default Signin;
