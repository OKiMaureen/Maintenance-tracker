import React from 'react';
import { Link } from 'react-router-dom';


const Signin = () => (
  <div>
      {/* Signin Form  */}
      <section className="form">
        <article className="card">
          <form>
            <h3>Sign In</h3>
            <p id="existingmsg" className="existing" />
            <br />
            <p id="existingmsgL" className="existing" />
            <input type="text" id="emailL" placeholder="Email" />
            <p className="message" id="emailmsgL" />
            <br />
            <input type="password" id="passwordL" placeholder="Password" />
            <p className="message" id="passwordmsgL" />
            <br />
            <a className="button" id="signinBtn">Sign In</a>
            <p>Do not have an account?
            <Link to="/signup">Sign Up</Link>
            </p>
          </form>
        </article>
      </section>
      {/*End signin form*/}
    </div>
);
export default Signin;
