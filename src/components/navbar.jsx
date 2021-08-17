/* eslint-disable jsx-a11y/anchor-is-valid */
import React from 'react';

const Navbar = () => (
  <div className="navbar">
    <div className="logo">
      <a href="/" style={{ color: '#f28766' }}>
        <h3>Math Magician</h3>
      </a>
    </div>
    <ul className="nav-links">
      <li>
        <a href="/">Home</a>
      </li>
      <li>
        <a href="/calculator">Calculator</a>
      </li>
      <li>
        <a href="/quote">Quotes</a>
      </li>
    </ul>
  </div>
);

export default Navbar;
