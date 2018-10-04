import React from 'react';
import PropTypes from 'prop-types';
import { Link } from 'react-router-dom';
import id from 'short-id';

const Header = props => ((
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
          <Link to="/">Maintenance Tracker</Link>
        </li>
        {
          props.children.map(link => <li key={id.generate()}>{link}</li>)
        }
      </ul>
    </nav>
  </header>
));
Header.propTypes = {
  children: PropTypes.objectOf(PropTypes.object).isRequired,
};

export default Header;
