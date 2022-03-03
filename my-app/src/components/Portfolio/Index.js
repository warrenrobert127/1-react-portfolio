import React from "react";
import './Portfolio.css';

function Portfolio() {
  return (
    <div className="portfolio">
      <h2>Portfolio</h2>

      <div className="container">
        <div className="col">
          <div className="row">
            <a href="https://warrenrobert127.github.io/portfolio/">
              {" "}
              <img
                src={require("../../assets/large/Rosie.jpg").default}
                alt="my world website"
                style={{ width: "70%" }}
              />
            </a>
            <h4>my world!</h4>
            <br />
            <br />
          </div>
          <div className="row">
            <a href="https://warrenrobert127.github.io/password-generator/">
              {" "}
              <img
                src={
                  require("../../assets/large/password_generator.png").default
                }
                alt="git-stuff website"
                style={{ width: "70%" }}
              />
            </a>
            <h4>Git Projects!</h4>
            <br />
            <br />
          </div>
          <div className="row">
            <a href=" https://warrenrobert127.github.io/weather-dashboard/">
              {" "}
              <img
                src={
                  require("../../assets/large/weather_dashboard.png").default
                }
                alt="git to the show website"
                style={{ width: "70%" }}
              />
            </a>
            <h4>What's the weather like?!</h4>
            <br />
            <br />
          </div>
        </div>

        <div className="col">
          <div className="row">
            <a href="https://warrenrobert127.github.io/readMe-Generator/">
              {" "}
              <img
                src={require("../../assets/large/readMe_generator.png").default}
                alt="note taker app"
                style={{ width: "70%" }}
              />
            </a>

            <h4>Read about me!</h4>
            <br />
            <br />
          </div>
          <div className="row">
            <a href=" https://warrenrobert127.github.io/team-profile-generator/">
              {" "}
              <img
                src={
                  require("../../assets/large/team_profile_generator.png")
                    .default
                }
                alt="reg-ex anaylsis gist"
                style={{ width: "70%" }}
              />
            </a>
            <h4>Meet the team!</h4>
            <br />
            <br />
          </div>
          <div className="row">
            <a href="https://warrenrobert127.github.io/E-commerce-Back-end/">
              {" "}
              <img
                src={require("../../assets/large/ecommerce_back.png").default}
                alt="weather report app"
                style={{ width: "70%" }}
              />
            </a>
            <h4>Shop my store!</h4>
            <br />
            <br />
          </div>
          <div className="row">
            <a href=" https://fullfillbabyregistry.herokuapp.com/">
              {" "}
              <img
                src={
                  require("../../assets/large/finalProject.png").default
                }
                alt="Final Project"
                style={{ width: "70%" }}
              />
            </a>
            <h4>Git Projects!</h4>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Portfolio;
