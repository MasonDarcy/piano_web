import React from 'react';
import { Link } from 'react-router-dom';
import '../Style.css';

const Home = () => {
  return (
    <div>
      {/* Splash Message */}
      <div className="splash-container">
        <h1>Welcome to Toronto Piano Tuning</h1>
        <p>Operating since 2011</p>
      </div>

      {/* Navigation Links */}
      <nav className="home-nav">
        <ul>
          <li><Link to="/faq">FAQ</Link></li>
          <li><Link to="/pricing">Pricing</Link></li>
          <li><Link to="/contact">Contact</Link></li>
        </ul>
      </nav>
    </div>
  );
};

export default Home;