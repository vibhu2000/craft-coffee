import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import './Navigation.css';

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false); 

  const toggleMenu = () => {
    setIsOpen(!isOpen); 
  };

  return (
    <nav className="navbar">
      <div className="navbar-container">
        
        <Link to="/" className="navbar-logo">
          Craft Coffeee
        </Link>

        
        <div className="menu-icon" onClick={toggleMenu}>
          <i className={isOpen ? 'fas fa-times' : 'fas fa-bars'}></i>
        </div>

        
        <ul className={isOpen ? 'nav-menu active' : 'nav-menu'}>
          <li className="nav-item">
            <Link to="/" className="nav-links" onClick={toggleMenu}>
              Home
            </Link>
          </li>
          <li className="nav-item">
            <Link to="/menu" className="nav-links" onClick={toggleMenu}>
              Menu
            </Link>
          </li>
          <li className="nav-item">
            <Link to="/profile" className="nav-links" onClick={toggleMenu}>
              Profile
            </Link>
          </li>
          <li className="nav-item">
            <Link to="/rewards" className="nav-links" onClick={toggleMenu}>
              Rewards
            </Link>
          </li>
        </ul>
      </div>
    </nav>
  );
};

export default Navbar;
