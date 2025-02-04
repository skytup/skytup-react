/* This is the Footer.jsx file  https://www.skytup.com*/
/* Writen by Akash vishwakarma */

import React from 'react';
import './Footer.css';

const Footer = () => {
  return (
    <footer className="footer">
      <div className="footer-container">
        <div className="footer-section">
          <h4>About CarePulse</h4>
          <p>CarePulse helps you manage your health appointments with ease and comfort. Our goal is to make healthcare more accessible to everyone.</p>
        </div>
        <div className="footer-section">
          <h4>Quick Links</h4>
          <ul>
            <li><a href="#home">Home</a></li>
            <li><a href="#about">About</a></li>
            <li><a href="#more">More</a></li>
          </ul>
        </div>
        <div className="footer-section">
          <h4>Legal</h4>
          <ul>
            <li><a href="#privacy">Privacy Policy</a></li>
            <li><a href="#terms">Terms of Service</a></li>
            <li><a href="#faq">FAQ</a></li>
          </ul>
        </div>
        <div className="footer-section social">
          <h4>Follow Us</h4>
          <ul className="social-icons">
            <li><a href="#"><i className="fab fa-facebook-f"></i></a></li>
            <li><a href="#"><i className="fab fa-twitter"></i></a></li>
            <li><a href="#"><i className="fab fa-linkedin-in"></i></a></li>
            <li><a href="#"><i className="fab fa-instagram"></i></a></li>
          </ul>
        </div>
      </div>
      <div className="footer-bottom">
        <p>&copy; 2024 CarePulse. All rights reserved.</p>
      </div>
    </footer>
  );
};

export default Footer;
