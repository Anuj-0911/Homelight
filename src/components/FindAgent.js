import React from "react";
import HomeJPG from "../assets/home3.jpg";
import Logo from "../assets/logo.png";
import { Link,Router,Switch,Route } from "react-router-dom";
import InputBox from "./InputBox";
import {Button} from "react-bootstrap";
import history from '../history.js';
const FindAgent = () => {
  return (
    <Router history={history}>
    <div
      style={{
        minHeight: "700px",
        minWidth: "100%",
        backgroundImage: `url(${HomeJPG})`,
        backgroundRepeat: "no-repeat",
        backgroundSize: "cover"
      }}
      className="find-agent-div"
    >
    <div>
      <h1 className="agent-h1">Are you looking to buy or sell?</h1>
      <div>
        <Button variant="light" className="agent-button">
        <div>
          <svg className="logo-agent" aria-hidden="true" focusable="false" role="img" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 576 512"><path d="M541 229.16l-232.85-190a32.16 32.16 0 0 0-40.38 0L35 229.16a8 8 0 0 0-1.16 11.24l10.1 12.41a8 8 0 0 0 11.2 1.19L96 220.62v243a16 16 0 0 0 16 16h128a16 16 0 0 0 16-16v-128l64 .3V464a16 16 0 0 0 16 16l128-.33a16 16 0 0 0 16-16V220.62L520.86 254a8 8 0 0 0 11.25-1.16l10.1-12.41a8 8 0 0 0-1.21-11.27zm-93.11 218.59h.1l-96 .3V319.88a16.05 16.05 0 0 0-15.95-16l-96-.27a16 16 0 0 0-16.05 16v128.14H128V194.51L288 63.94l160 130.57z"></path></svg>
          <h6>Buy</h6>
          <p className="agent-p">Save an average of $23,000 per home purchase </p>
        </div>
        </Button>
        <Button variant="light" className="agent-button">
        <div>
          <svg className="logo-agent" aria-hidden="true" focusable="false" role="img" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 576 512"><path d="M541 229.16l-232.85-190a32.16 32.16 0 0 0-40.38 0L35 229.16a8 8 0 0 0-1.16 11.24l10.1 12.41a8 8 0 0 0 11.2 1.19L96 220.62v243a16 16 0 0 0 16 16h128a16 16 0 0 0 16-16v-128l64 .3V464a16 16 0 0 0 16 16l128-.33a16 16 0 0 0 16-16V220.62L520.86 254a8 8 0 0 0 11.25-1.16l10.1-12.41a8 8 0 0 0-1.21-11.27zm-93.11 218.59h.1l-96 .3V319.88a16.05 16.05 0 0 0-15.95-16l-96-.27a16 16 0 0 0-16.05 16v128.14H128V194.51L288 63.94l160 130.57z"></path></svg>
          <h6>Sell</h6>
          <p className="agent-p">Our agents sells home on an average of 23 days faster. </p>
        </div>
        </Button>
        <Button variant="light" className="agent-button">
        <div>
          <svg className="logo-agent" aria-hidden="true" focusable="false" role="img" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 576 512"><path d="M541 229.16l-232.85-190a32.16 32.16 0 0 0-40.38 0L35 229.16a8 8 0 0 0-1.16 11.24l10.1 12.41a8 8 0 0 0 11.2 1.19L96 220.62v243a16 16 0 0 0 16 16h128a16 16 0 0 0 16-16v-128l64 .3V464a16 16 0 0 0 16 16l128-.33a16 16 0 0 0 16-16V220.62L520.86 254a8 8 0 0 0 11.25-1.16l10.1-12.41a8 8 0 0 0-1.21-11.27zm-93.11 218.59h.1l-96 .3V319.88a16.05 16.05 0 0 0-15.95-16l-96-.27a16 16 0 0 0-16.05 16v128.14H128V194.51L288 63.94l160 130.57z"></path></svg>
          <h6>Rent</h6>
          <p className="agent-p">Find the perfect place to rent. </p>
        </div>
        </Button>
      </div>
    </div>
    </div>
    </Router>
  );
};

export default FindAgent;
