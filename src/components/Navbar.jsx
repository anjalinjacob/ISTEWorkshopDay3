import React from "react";
import "./Navbar.css";
import { Link } from "react-router-dom";

const Navbar = () => {
  return (
    <nav className="navbar">
      <div className="navbar-logo">
        Hash
      </div>

      <ul className="navbar-links">
        <li><Link to="/home">Home</Link></li>
        <li><Link to="/events">Events</Link></li>
      </ul>
    </nav>
  );
};

export default Navbar;
