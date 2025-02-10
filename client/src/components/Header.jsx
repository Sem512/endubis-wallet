import React, { useState } from 'react';
import '../styles/header.css';

export default function Header() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  return (
    <header>
      <div id="logo">
        <img src={require('../images/Endubis - Horizontal Logo - White.png')} alt="fd" />
      </div>

      {/* Hamburger Icon */}
      <div className={`hamburger ${isMenuOpen ? 'open' : ''}`} onClick={toggleMenu}>
        <div className="line"></div>
        <div className="line"></div>
        <div className="line"></div>
      </div>

      {/* Navigation Menu */}
      <ul className={isMenuOpen ? 'open' : ''}>
        <li>
          <a href="crash">
            <span className="link">FIAT</span>
          </a>
        </li>
        <li>
          <a href="crash">
            <span className="link">CRYPTO</span>
          </a>
        </li>
      </ul>
    </header>
  );
}