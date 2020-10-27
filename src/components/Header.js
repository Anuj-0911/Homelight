import React from "react";
import HomeJPG from "../assets/home.jpg";
import Logo from "../assets/logo.png";
import { Link,Router,Switch,Route } from "react-router-dom";
import InputBox from "./InputBox";
import history from '../history.js';
const Header = () => {
  return (
    <Router history={history}>
    <div
      style={{
        minHeight: "700px",
        minWidth: "100%",
        backgroundImage: `url(${HomeJPG})`,
        backgroundRepeat: "no-repeat",
        backgroundSize: "cover",
      }}
    >
      <div className="container text-white">
        {" "}
        <nav className="d-flex justify-content-between py-3">
          <div className="">
            <Link to="/">
              <img
                alt="HomeLight Logo"
                className="logo"
                height="30"
                src={Logo}
                width="153"
              />
            </Link>
          </div>
          <div className="menu">
            <div>
              <ul className="nav" style={{ fontSize: "1.1rem" }}>
                <li className="nav-item mx-2" id="about-links">
                  <a
                    className="nav-link"
                    href="#"
                    id="dropdownMenu1"
                    data-toggle="dropdown"
                    aria-haspopup="true"
                    aria-expanded="false"
                  >
                    {" "}
                    About
                  </a>
                  <div
                    className="dropdown-menu"
                    aria-labelledby="dropdownMenu1"
                  >
                    <Link className="dropdown-item" to="/about-us">
                      {" "}
                      Company
                    </Link>
                    <Link className="dropdown-item" to="/testimonials">
                      {" "}
                      Testimonials
                    </Link>
                    <Link className="dropdown-item" to="/press">
                      {" "}
                      Press
                    </Link>
                    <Link className="dropdown-item" to="/agents">
                      {" "}
                      Professionals
                    </Link>
                    <Link className="dropdown-item" to="/elite">
                      HomeLight Elite
                    </Link>
                    <Link className="dropdown-item" to="/cash-close">
                      HomeLight Cash Close
                    </Link>
                  </div>
                </li>
                <li className="nav-item mx-2">
                  <button className="signinbutton" onClick={() => history.push('/signin')}><Link className="nav-link">Sign In</Link></button>
                </li>
              </ul>
            </div>
          </div>
        </nav>
        <header className="my-3">
          <div>
            <ul class="nav" style={{ fontSize: "1.1rem", fontWeight: "300" }}>
              <li class="nav-item mr-sm-5 mr-sm-2">
                <Link className="nav-link active-header-link" to="/">
                  Selling
                </Link>
              </li>
              <li class="nav-item mx-sm-5 mx-sm-2">
                <Link className="nav-link" to="/">
                  Buying
                </Link>
              </li>
              <li class="nav-item mx-sm-5 mx-sm-2">
                <Link className="nav-link" to="/">
                  Home Estimates
                </Link>
              </li>
              <li class="nav-item mx-sm-5 mx-sm-2">
                <Link className="nav-link" to="/">
                  Home Loans
                </Link>
              </li>
            </ul>
          </div>
          <div className="my-4">
            <h1 className="header-heading">
              Thinking of selling during COVID-19?
              <br />
              We can help.
            </h1>
          </div>
          <div className="my-4" className="header-text">
            <p>
              HomeLight agents have the expertise and gameplan to sell your home
              <br />
              safely and successfully
            </p>
          </div>

          <InputBox
            placeholder="Enter your address"
            text="Find an Agent"
            classes="col-sm-8 col-12"
          />
        </header>
      </div>
    </div>
    </Router>
  );
};

export default Header;
