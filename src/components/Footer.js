// src/components/Footer.js
import React from 'react';
import { Link } from 'react-router-dom';
import { HashLink } from 'react-router-hash-link';
import './Footer.css';

const Footer = () => {
  return (
    <footer className="footer">
      <div className="footer-container">

        {/* Logo and About */}
        <div className="footer-section">
          <div className="logo-title">
            <img src="/images/nael-logo.png" alt="NAEL Logo" className="footer-logo" />
            <h3>NAEL SOLUTIONS</h3>
          </div>
          <p className="footer-about">
            NAEL SOLUTIONS is dedicated to support learners and educators by providing quality academic resources,
            expert coaching, and smart educational technology. We make education more enjoyable, practical, inclusive, and effective
            — anytime, anywhere.
          </p>
        </div>

        {/* Quick Links */}
        <div className="footer-section">
          <h4>Quick Links</h4>
          <ul className="footer-links">
            <li><Link to="/">Home</Link></li>
            <li><HashLink smooth to="/#resources">Resources</HashLink></li>
            <li><HashLink smooth to="/#educators">Educators</HashLink></li>
            <li><HashLink smooth to="/#performance">Support</HashLink></li>
            <li><HashLink smooth to="/#contact">Contact</HashLink></li>
            <li><Link to="/NotesAndTrainers">Notes And Trainers</Link></li>
          </ul>
        </div>

        {/* Contact Info */}
        <div className="footer-section">
          <h4>Contact</h4>
          <p>Email: daniedushimire@gmail.com</p>
          <p>Watsap: 0726584268</p>
          <p>Address: Kigali city </p>
        </div>
      </div>

      <div className="footer-bottom">
        <p> Developed by Daniel Dushimirimana</p>
        <p>© 2025 NAEL SOLUTIONS. All rights reserved.</p>
        <p><a href="/privacy">Privacy Policy</a> | <a href="/terms">Terms of Service</a></p>
      </div>
    </footer>
  );
};

export default Footer;
