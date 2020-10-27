import React from "react";
import './signin.css';
import { Router,Link,Switch,Route } from "react-router-dom";
import history from '../history.js';
import { Button,Form } from "react-bootstrap";
const Login=()=>{
  return(
    <Router history={history}>
    <div className="login-form">
      <h1 className="login-h1">Sign in with your email</h1>
      <p className="login-p">Enter the email address associated with your account.</p>
        <Form>
          <Form.Control type="email" placeholder="Enter your email" className="signin-form" />
        </Form>
        <Button className="signin-button" block>Continue</Button>
        <hr/>
        <div className="insider">
        <p className="getstart-p">Don’t have an account yet?</p>
        <Button variant="outline-primary" className="getstart-button" onClick={() => history.push('/new')}>
          Get Started
        </Button>
        </div>

    </div>
    </Router>
  );
};

export default Login;
