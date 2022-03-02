import React from "react";
import coverImage from "../../assets/cover/Rosie.jpg";
function About() {
  return (
    <section className="my-5">
      <h1 id="about">Who am I?</h1>
      <img
        src={coverImage}
        className="my-2"
        style={{ width: "30%" }}
        alt="cover"
      />
      <div className="my-2">
        <p>
          Robert Warren QA engineer
        </p>
      </div>
    </section>
  );
}

export default About;
