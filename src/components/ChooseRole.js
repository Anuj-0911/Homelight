import React from "react";
import './signin.css';
import { Router,Link,Switch,Route } from "react-router-dom";
import history from '../history.js';
import { Button,Form } from "react-bootstrap";
const ChooseRole=()=>{
  return(
    <Router history={history}>
    <div className="login-form">
      <h1 className="login-h1">Welcome to HomeLight!</h1>
      <p className="login-p">Let’s get you set up with an account.</p>
        <Button className="signin-button" onClick={() => history.push('/find-agent/quiz')} block>I am looking to Buy/Sell a Home</Button>
        <Button className="signin-button" onClick={() => history.push('/sign-up/get-started')} block>I am real estate professional</Button>
        <hr/>
    </div>
    </Router>
  );
};

export default ChooseRole;
