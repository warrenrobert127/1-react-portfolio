import React from "react";

function Portfolio() {
  return (
    <div>
      <h2>Portfolio</h2>

      <div className="container">
        <div className="col">
          <div className="row">
            <a href="https://warrenrobert127.github.io/portfolio/">
              {" "}
              <img
                src={require("../../assets/large/portfolio/").default}
                alt="blog it website"
                style={{ width: "70%" }}
              />
            </a>
            <h4>Blog it!</h4>
            <br />
            <br />
          </div>
          <div className="row">
            <a href="https://warrenrobert127.github.io/password-generator/">
              {" "}
              <img
                src={
                  require("../../assets/large/portfolio/password_generator.png")
                    .default
                }
                alt="git-stuff website"
                style={{ width: "70%" }}
              />
            </a>
            <h4>Git-Stuff!</h4>
            <br />
            <br />
          </div>
          <div className="row">
            <a href=" https://warrenrobert127.github.io/weather-dashboard/">
              {" "}
              <img
                src={
                  require("../../assets/large/portfolio/weather_dashboard.png")
                    .default
                }
                alt="git to the show website"
                style={{ width: "70%" }}
              />
            </a>
            <h4>Git to the show!</h4>
            <br />
            <br />
          </div>
        </div>

        <div className="col">
          <div className="row">
            <a href="https://warrenrobert127.github.io/readMe-Generator/">
              {" "}
              <img
                src={
                  require("../../assets/large/portfolio/readMe_generator.png")
                    .default
                }
                alt="note taker app"
                style={{ width: "70%" }}
              />
            </a>

            <h4>Note Taker</h4>
            <br />
            <br />
          </div>
          <div className="row">
            <a href=" https://warrenrobert127.github.io/team-profile-generator/">
              {" "}
              <img
                src={
                  require("../../assets/large/portfolio/team_profile_generator.png")
                    .default
                }
                alt="reg-ex anaylsis gist"
                style={{ width: "70%" }}
              />
            </a>
            <h4>Reg-ex Analysis</h4>
            <br />
            <br />
          </div>
          <div className="row">
            <a href="https://warrenrobert127.github.io/E-commerce-Back-end/">
              {" "}
              <img
                src={require("../../assets/large/portfolio/").default}
                alt="weather report app"
                style={{ width: "70%" }}
              />
            </a>
            <h4>Weather Report</h4>
            <br />
            <br />
          </div>
        </div>
      </div>
    </div>
  );
}

export default Portfolio;
