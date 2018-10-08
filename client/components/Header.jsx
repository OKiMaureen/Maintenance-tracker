import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { Link } from 'react-router-dom';
import id from 'short-id';

class Header extends Component {
  state = {
    toggleNav: false,
  }

  toggleNavbar = () => {
    const { toggleNav } = this.state;
    this.setState({ toggleNav: !toggleNav });
  }
  render() {
    const { children } = this.props;
    const { toggleNav } = this.state;
    return (
      <header>
        <nav>
          <div className="nav-container">
            <a className="btn" onClick={this.toggleNavbar}>
              <div className="bar" />
              <div className="bar" />
              <div className="bar" />
            </a>
          </div>
          <ul id="toggle" className={toggleNav ? 'show' : ''}>
            <Link to="/">Maintenance Tracker</Link>

            {
              children.map(link => <li key={id.generate()}>{link}</li>)
            }
          </ul>
        </nav>
      </header>
    );
  }
}

Header.propTypes = {
  children: PropTypes.objectOf(PropTypes.object).isRequired,
};

export default Header;
