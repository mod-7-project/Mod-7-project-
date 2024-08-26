import React, { useState } from 'react';
import { Link } from 'react-router-dom';


const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);

  const toggleMenu = () => {
    setIsOpen(!isOpen);
  };

  return (
    <nav className="navbar">
      <div className="logo-container">
        <img 
          src="https://seeklogo.com/images/P/Pokemon-logo-497D61B223-seeklogo.com.png" 
          alt="Pokémon Logo" 
          className="pokemon-logo" 
        />
      </div>
      <div className={`hamburger ${isOpen ? 'open' : ''}`} onClick={toggleMenu}>
        <div className="bar"></div>
        <div className="bar"></div>
        <div className="bar"></div>
      </div>
      <ul className={`navbar-list ${isOpen ? 'active' : ''}`}>
        <li className="navbar-item">
          <Link to="/" onClick={toggleMenu}>Home</Link>
        </li>
        <li className="navbar-item">
          <Link to="/AllPokemon" onClick={toggleMenu}>All Pokemon</Link>
        </li>
        <li className="navbar-item">
          <Link to="/TeamPage" onClick={toggleMenu}>Make Team</Link>
        </li>
      </ul>
    </nav>
  );
};

export default Navbar;

