import React from "react";
import "./Home.css";
import hashLogo from "/vite.svg"; // place your logo here

const Home = () => {
  return (
    <><section className="home" id="home">
      <div className="home-content">
        <img src={hashLogo} alt="HASH Logo" className="home-logo" />

        <h1 className="home-title">
          Welcome to <span>HASH</span>
        </h1>

        <p className="home-subtitle">
          A community driven platform for innovation, technology, and events.
          Learn, build, and grow together with HASH.
        </p>

        <button className="home-btn">
          Explore Events
        </button>
      </div>
    </section><section className="about" id="about">
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
      </section></>
  );
};

export default Home;
