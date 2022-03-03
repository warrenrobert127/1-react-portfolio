import React from "react";
import coverImage from "../../assets/cover/Rosie.jpg";
import './About.css';




function About() {
  return (
    <section className="Nav" style={{ backgroundColor: "lightblue" }}>
      <h1 id="about">Who am I?</h1>
      <img
        src={coverImage}
        className="my-2"
        style={{ width: "30%" }}
        alt="cover"
      />
      <div className='my-2'>
        <p style={{position: 'left' }} >Robert Warren QA engineer</p>
      </div>
    </section>
  );
}

export default About;
