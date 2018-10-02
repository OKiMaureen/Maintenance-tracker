import PropTypes from 'prop-types';
import Validator from 'validatorjs';
import { bindActionCreators } from 'redux';
import React, { Component } from 'react';
import { connect } from 'react-redux';
import { Link } from 'react-router-dom';
import signUpAction from '../actions/signUpAction';
import loader from '../assets/images/spinloader.gif';
import Header from '../components/Header';
import Footer from '../components/Footer';

export class Signup extends Component {
    /**
     * @constructor
     * @param {*} props
     */
    state = {
      name: '',
      email: '',
      password: '',
      password_confirmation: '',
      errors: {},
    }

    validate = () => {
      const validations = new Validator(
        {
          name: this.state.name,
          email: this.state.email,
          password: this.state.password,
          password_confirmation: this.state.password_confirmation,
        },
        {
          name: ['required', 'regex:/^[a-z\\d\\-_,.*()!\\s]+$/i', 'min:3', 'max:15', 'string'],
          email: 'required|email|string',
          password: 'required|min:8|max:30|string',
          password_confirmation: 'required',
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
      if (this.state.password !== this.state.password_confirmation) {
        this.setState({
          errors: {
            password_confirmation: ['Password and password confirmation must be the same'],
          },
        });
      }

      if (this.validate()) {
        this.props.signUpAction(this.state, this.props.history);
      }
      return true;
    }

    render() {
      return (
        <div>
          {/* Signup Form  */}
          <Header><Link to="/">Home</Link><Link to="/" /></Header>
          <section className="form">
            <article className="card">
              <form id="signupForm">
                <h3>Sign Up</h3>
                <br />
                {this.props.userDetail.checkStatus.isLoading ? (<span className="loader"><img src={loader} alt="loader" /></span>) : '' }
                <input type="text" id="name" name="name" placeholder="Name" onChange={this.handleChange} />
                {
                  this.state.errors.name ? this.state.errors.name.map(error => <span className="validation-error" key={error}>{error}</span>) : ''
                }
                <br />
                <input type="text" id="email" name="email" placeholder="Email" onChange={this.handleChange} required />
                {
                  this.state.errors.email ? this.state.errors.email.map(error => <span className="validation-error" key={error}>{error}</span>) : ''
                }{
                  this.props.userDetail.error ? <span className="validation-error">{this.props.userDetail.error}</span> : ''
                }

                <br />
                <input type="password" id="password" name="password" placeholder="Password" onChange={this.handleChange} required />
                {
                  this.state.errors.password ? this.state.errors.password.map(error => <span className="validation-error" key={error}>{error}</span>) : ''
                }
                <br />
                <input type="password" id="confirmPassword" name="password_confirmation" placeholder="Confirm Password" onChange={this.handleChange} required />
                {
                  this.state.errors.password_confirmation ? this.state.errors.password_confirmation.map(error => <span className="validation-error" key={error}>{error}</span>) : ''
                }
                <br />
                <button type="submit" className="button" id="signupBtn" onClick={this.handleSubmit} >Sign Up</button>
                <p>Already have an account?
                  <Link to="/signin">Sign In</Link>
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
  signUpAction,
}, dispatch);

Signup.propTypes = {
  userDetail: PropTypes.shape({
    checkStatus: PropTypes.object,
    error: PropTypes.string,
  }).isRequired,
  signUpAction: PropTypes.func.isRequired,
  history: PropTypes.objectOf(PropTypes.object).isRequired,
};


export default connect(mapStateToProps, mapDispatchToProps)(Signup);

