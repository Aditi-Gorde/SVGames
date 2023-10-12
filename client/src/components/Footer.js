//Footer

import React from 'react';
import '../assets/Footer.style.css';
import { NavLink } from "react-router-dom";
import 'font-awesome/css/font-awesome.min.css';


function Footer() {
  return (
    <>
    <footer className="footer" style={{marginTop:'1rem'}}>
      <div className="container">
        <div className="row">
          <div className="col-md-4">
            <h3>About Us</h3>
            <p>Your gaming hub for detailed game information, connecting gamers worldwide.</p>
          </div>
          <div className="col-md-4">
            <h3>Quick Links</h3>
            <ul>
              <li><NavLink to="/">Home</NavLink></li>
              <li><NavLink to="/books">Games</NavLink></li>
              <li><NavLink to="/about">About</NavLink></li>
            </ul>
          </div>
          <div className="col-md-4">
            <h3>Connect with Us</h3>
            <ul className="social-icons">
              <li><NavLink to="#"><i className="fab fa-facebook"></i></NavLink></li>
              <li><NavLink to="#"><i className="fab fa-twitter"></i></NavLink></li>
              <li><NavLink to="#"><i className="fab fa-instagram"></i></NavLink></li>
            </ul>
          </div>
        </div>
      </div>
      <div className="bottom-footer">
        <p>&copy; {new Date().getFullYear()} SVGames All rights reserved.</p>
      </div>
    </footer>
    </>
  );
}

export default Footer;
