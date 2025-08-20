// src/components/Header.jsx
import React from 'react';
import { Link, useLocation } from 'react-router-dom';
import { HashLink } from 'react-router-hash-link';
import './Header.css';

const Header = () => {
  const location = useLocation();

  return (
    <header className="header">
      <div className="header-container">
        {/* Logo and brand */}
        <div className="logo-section">
          <img src="/images/nael-logo.png" alt="NAEL Logo" className="logo" />
          <h2 className="brand">NAEL SOLUTIONS</h2>
        </div>

        {/* Navigation */}
        <nav className="nav">
          <Link to="/" className={location.pathname === '/' ? 'active' : ''}>
            Home
          </Link>
          <HashLink smooth to="/#resources">Resources</HashLink>
          <HashLink smooth to="/#educators">Educators</HashLink>
          <HashLink smooth to="/#performance">Support</HashLink>
          <HashLink smooth to="/#contact">Contact</HashLink>
          <Link
            to="/NotesAndTrainers"
            className={location.pathname === '/NotesAndTrainers' ? 'active notes-link' : 'notes-link'}
          >
            Notes and Trainers
          </Link>
        </nav>
      </div>
    </header>
  );
};

export default Header;
