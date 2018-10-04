import PropTypes from 'prop-types';
import Validator from 'validatorjs';
import { bindActionCreators } from 'redux';
import React, { Component } from 'react';
import { connect } from 'react-redux';
import { Link } from 'react-router-dom';
import signInAction from '../actions/signInAction';
import loader from '../assets/images/spinloader.gif';
import Header from '../components/Header';
import Footer from '../components/Footer';

export class Signin extends Component {
    /**
     * @constructor
     * @param {*} props
     */
    state = {
      email: '',
      password: '',
      errors: {},
    }

    validate = () => {
      const validations = new Validator(
        {
          email: this.state.email,
          password: this.state.password,
        },
        {
          email: 'required|email|string',
          password: 'required|min:8|max:30|string',

        },
        {
          'min.password': 'The :attribute must not be less than 9 characters.',
          'max.password': 'The :attribute must not be greater than 30 characters.',
        },
      );
      if (validations.fails()) {
        const errors = validations.errors.all();
        this.setState({
          errors,
        });

        return false;
      }

      return true;
    }

    handleChange = (e) => {
      if (this.validate()) {
        this.setState({
          errors: {
            ...this.state.errors,
            [e.target.name]: '',
          },
        });
      }
      this.setState({ [e.target.name]: e.target.value });
      return true;
    }
    handleSubmit = (event) => {
      event.preventDefault();
      if (this.validate()) {
        this.props.signInAction(this.state, this.props.history);
      }
      return true;
    }

    render() {
      return (
        <div>
          <Header><Link to="/">Home</Link><Link to="/" /></Header>
          {/* Signup Form  */}
          <section className="form">
            <article className="card">
              <form id="signupForm">
                <h3>Sign In</h3>
                {/* <LoadingBubble /> */}
                <br />
                {/* <img src={loader} alt="loader" /> */}
                {this.props.userDetail.checkStatus.isLoading ? (<span className="loader"><img src={loader} alt="loader" /></span>) : '' }
                {
                  this.props.userDetail.error ? <span className="validation-error">{this.props.userDetail.error}</span> : ''
                }
                <input type="text" id="email" name="email" placeholder="Email" onChange={this.handleChange} required />
                {
                  this.state.errors.email ? this.state.errors.email.map(error => <span className="validation-error" key={error}>{error}</span>) : ''
                }

                <br />
                <input type="password" id="password" name="password" placeholder="Password" onChange={this.handleChange} required />
                {
                  this.state.errors.password ? this.state.errors.password.map(error => <span className="validation-error" key={error}>{error}</span>) : ''
                }
                <br />
                <button type="submit" className="button" id="signupBtn" onClick={this.handleSubmit} >Sign In</button>
                <p>Donot have an account?
                  <Link to="/signup">Sign Up</Link>
                </p>
              </form>
            </article>
          </section>
          {/* End signup form */}
          <Footer />
        </div>

      );
    }
}

const mapStateToProps = state => ({
  userDetail: state.authUser,
});


const mapDispatchToProps = dispatch => bindActionCreators({
  signInAction,
}, dispatch);

Signin.propTypes = {
  userDetail: PropTypes.shape({
    checkStatus: PropTypes.object,
    error: PropTypes.string,
  }).isRequired,
  signInAction: PropTypes.func.isRequired,
  history: PropTypes.objectOf(PropTypes.object).isRequired,
};


export default connect(mapStateToProps, mapDispatchToProps)(Signin);

