import React from 'react';
import { Link } from 'react-router-dom';

const Header = () => ((
  <header>
    <nav>
      <div className="nav-container">
        <div className="btn">
          <div className="bar" />
          <div className="bar" />
          <div className="bar" />
        </div>
      </div>
      <ul>
        <li className="logo">
        <Link to="#">Maintenance Tracker</Link>
        </li>
        <li>
          <Link to="/home">Home</Link>
        </li>
      </ul>
    </nav>
  </header>
));

export default Header;
