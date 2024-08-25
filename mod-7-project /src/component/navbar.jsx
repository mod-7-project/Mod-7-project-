// src/components/Navbar.js
import React from 'react';
import { Link } from 'react-router-dom';

const Navbar = () => {
  return (
    <nav className="navbar">
      <div className="logo-container">
        <img 
          src="https://seeklogo.com/images/P/Pokemon-logo-497D61B223-seeklogo.com.png" 
          alt="Pokémon Logo" 
          className="pokemon-logo" 
        />
      </div>
      <ul className="navbar-list">
        <li className="navbar-item">
          <Link to="/">Home</Link>
        </li>
        <li className="navbar-item">
          <Link to="/TeamPage">Make Team</Link>
        </li>
      </ul>
    </nav>
  );
};

export default Navbar;
