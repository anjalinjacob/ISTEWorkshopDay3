import React from "react";
import "./About.css";

const About = () => {
  return (
    <section className="about" id="about">
      <div className="about-container">
        <h2 className="about-title">
          About <span>HASH</span>
        </h2>

        <p className="about-text">
          HASH is a technology-driven community focused on learning, innovation,
          and collaboration. We bring together students and enthusiasts to
          explore modern technologies through events, workshops, and projects.
        </p>

        <p className="about-text">
          Our goal is to create an environment where ideas turn into solutions
          and skills grow through hands-on experience and teamwork.
        </p>
      </div>
    </section>
  );
};

export default About;
