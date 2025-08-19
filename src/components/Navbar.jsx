import React from 'react';
import './Navbar.css';

const Navbar = () => {
  return (
    <div className="navbar">
      <div className="logo">STARBUCKS</div>
      <ul className="nav-links">
        <li>Menu</li>
        <li>Rewards</li>
        <li>Gift Cards</li>
      </ul>
      <button className="signin-btn">Sign In</button>
    </div>
  );
};

export default Navbar;
