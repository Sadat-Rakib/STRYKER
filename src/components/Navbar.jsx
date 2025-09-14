import React from 'react';
import './Navbar.css';

const Navbar = () => {
  return (
    <div className="navbar">
      <div className="logo">STRYKER</div>
      <ul className="nav-links">
        <li>Menu</li>
        <li>T-Shirt</li>
        <li>Nutrition Facts</li>
        <li>Contact</li>
      </ul>
      <button className="signin-btn">Sign In</button>
    </div>
  );
};

export default Navbar;
