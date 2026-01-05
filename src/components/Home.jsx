import React from "react";
import "./Home.css";
import hashLogo from "/vite.svg"; // place your logo here

const Home = () => {
  return (
    <section className="home" id="home">
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
    </section>
  );
};

export default Home;
