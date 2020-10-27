import React, { Fragment } from "react";
import Section1 from "../assets/section1.png";
import Section2 from "../assets/section2.png";
import Section3 from "../assets/section3.jpg";
import Section4a from "../assets/section4a.jpg";
import Section4b from "../assets/section4b.jpg";
import Section4c from "../assets/section4c.jpg";
import { Link } from "react-router-dom";
import InputBox from "./InputBox";
import Button from "./Button";

const Landing = () => {
  return (
    <div className="">
      <section className="py-5" style={{ backgroundColor: "#F5F6F9" }}>
        <div className="d-sm-flex justify-content-around container py-4">
          <div className="col-sm-5">
            <h2 className="section-heading">
              Hire the perfect real estate
              <br />
              agent in your area
            </h2>

            <p className="section-text my-4">
              Top real estate agents sell homes faster and for more money. Now,
              it’s easy to find them. We analyze millions of real estate
              transactions to compare real estate agents near you on the metrics
              that matter: how well they sell homes like yours.
              <br />
              <br />
              Get free, objective, performance-based recommendations for top
              real estate agents in your neighborhood. <Link>Learn more</Link>
            </p>
            <InputBox
              text="Find an Agent"
              placeholder="Enter your address"
              classes="col-12"
            />
          </div>
          <div className="col-sm-6">
            <img src={Section1} alt="" height="600" />
          </div>
        </div>
      </section>
      <section className="py-5">
        <div className="d-sm-flex justify-content-around container py-4">
          <div className="col-sm-5">
            <img src={Section2} alt="" height="600" />
          </div>
          <div className="col-sm-5">
            <h2 className="section-heading">
              Sell to our network of
              <br /> pre-approved cash buyers
            </h2>
            <p className="section-text my-4">
              Why slog through showings, prep work, and months of nail-biting
              anticipation? Jump straight to the part where you field multiple
              offers on your home.
              <br />
              <br />
              HomeLight Simple SaleTM taps into a network of pre-approved cash
              buyers who compete to buy your home. The service is free, there’s
              no obligation to accept the offer, and it only takes 2 minutes.
              <br />
              <br />
              Simple as that.
            </p>
            <Button text="Get your estimates" />{" "}
            <Link className="ml-5 section-text">Learn more</Link>
          </div>
        </div>
      </section>

      <section className="py-5" style={{ backgroundColor: "#F5F6F9" }}>
        <div className="d-sm-flex justify-content-around container align-items-center py-4">
          <div className="col-sm-5">
            <h2 className="section-heading">Let’s talk</h2>

            <p className="section-text my-4">
              Whenever you’re ready, real estate veterans from all walks of life
              are on the line to answer your questions, walk you through your
              options, and help you make more informed decisions about your
              home.
            </p>
            <Link className="section-text">Call (888) 998-1909</Link>
          </div>
          <div className="col-sm-6">
            <img src={Section3} alt="" height="350" />
          </div>
        </div>
      </section>

      <section className="py-5">
        <div className="d-sm-flex container flex-column justify-content-around align-items-center py-4 text-center">
          <h2 className="section-heading">
            Tips and tools to tackle your home sale
          </h2>

          <p className="section-text my-4">
            Backed by America’s top real estate agents, rigorous research, and
            data analysis. All designed to help you <br />
            find the smartest way to sell your home - visit our{" "}
            <Link>Seller Resource Center</Link>
          </p>
          <div className="d-flex flex-column flex-sm-row text-left justify-content-center align-items-center my-3">
            <div className="m-3" style={{ maxWidth: "350px" }}>
              <img src={Section4a} alt="" height="250" width="350" />
              <h4
                className="section-heading mt-4 mb-3"
                style={{ fontSize: "1.6rem" }}
              >
                Get more out of your home
              </h4>
              <p className="section-text">
                Squeeze the most money out of your home with the most ROI
                positive advice from some of the best professionals in real
                estate.
              </p>
            </div>
            <div className="m-3" style={{ maxWidth: "350px" }}>
              <img src={Section4b} alt="" height="250" width="350" />
              <h4
                className="section-heading mt-4 mb-3"
                style={{ fontSize: "1.6rem" }}
              >
                Market like a pro
              </h4>
              <p className="section-text">
                Make an impression both online and off with top tips from real
                estate’s best. From your listing’s photos and room-to-room
                staging to the open home, we’ve got you covered.
              </p>
            </div>
            <div className="m-3" style={{ maxWidth: "350px" }}>
              <img src={Section4c} alt="" height="250" width="350" />
              <h4
                className="section-heading mt-4 mb-3"
                style={{ fontSize: "1.6rem" }}
              >
                Close the deal
              </h4>
              <p className="section-text">
                There’s lots of red tape to cut through when you’re selling a
                home. Take a guided tour through the legalese, tax implications,
                and piles of paperwork you’ll come across.
              </p>
            </div>
          </div>
        </div>
      </section>

      <section
        className="py-5 text-white d-flex flex-column justify-content-center align-items-center"
        style={{ backgroundColor: "#273553" }}
      >
        <h2 style={{ fontWeight: "300", fontSize: "2rem" }}>
          Sell Smarter. With HomeLight.
        </h2>
        <InputBox
          text="Get Started"
          placeholder="Enter your address"
          classes="col-sm-6 col-10"
        />
      </section>
    </div>
  );
};

export default Landing;
