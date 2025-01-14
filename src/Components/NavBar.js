import React from "react";
import "./NavBar.css";

const Navbar = () => {
  return (
    <nav className="navbar">
      <h1>Asset Tracker</h1>
      <ul className="nav-links">
        <li><a href="#">Home</a></li>
        <li><a href="#">Assets</a></li>
      </ul>
    </nav>
  );
};

export default Navbar;
