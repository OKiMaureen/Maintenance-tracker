import React from 'react';
import { Link } from 'react-router-dom';
import Header from '../components/Header';


const Home = () => ((
  <div>
    {/* header-section-begin */}
    <header className="header">
      <Header>
        <Link to="/">Home</Link>
        <Link to="signin">Sign in</Link>
        <Link to="signup">Sign Up</Link>
      </Header>
      <div className="banner">
        <div className="banner-center">
          <h1>Maintenance Tracker</h1>
          <h3>Repairing one day at a time</h3>
          <div>
            <Link to="/signin" className="button">Sign in</Link>
            <Link to="/signup" className="button">Sign up</Link>
          </div>
        </div>
      </div>
    </header>
    {/* header-section-end */}
    {/* About Section */}
    <section className="about" id="about-section">
      <div className="about-center">
        <div className="about-heading">
          <h2>About</h2>
        </div>
        <article className="about-article">
          <div className="about-icon">
            <i className="fas fa-wrench" />
          </div>
          <div className="about-text">
            <h3>Quick Maintenance</h3>
            <p> Report to us to provide quick maintainance for appliances
              and equipment that are deteriorating or in
            bad shape.
            </p>
          </div>
        </article>
        <article className="about-article">
          <div className="about-icon">
            <i className="fas fa-cog" />
          </div>
          <div className="about-text">
            <h3>Durable Repairs</h3>
            <p> Report to us for Repairs that will last long and are completely durable.
              We are the one stop for
            all office repairs.
            </p>
          </div>
        </article>
        <article className="about-article">
          <div className="about-icon">
            <i className="fas fa-wrench" />
          </div>
          <div className="about-text">
            <h3>Effective</h3>
            <p> Report to us for the most effective and efficient means of carrying
              out repairs to all office appliances.
            </p>
          </div>
        </article>
      </div>
    </section>
    {/* About Section End */}
  </div>
));

export default Home;
