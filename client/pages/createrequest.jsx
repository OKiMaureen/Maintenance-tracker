import PropTypes from 'prop-types';
import Validator from 'validatorjs';
import { Link } from 'react-router-dom';
import { bindActionCreators } from 'redux';
import React, { Component } from 'react';
import { connect } from 'react-redux';
import createRequestAction from '../actions/createRequestAction';
import loader from '../assets/images/spinloader.gif';
import Header from '../components/Header';
import Footer from '../components/Footer';

export class CreateRequest extends Component {
    /**
     * @constructor
     * @param {*} props
     */
    state = {
      department: '',
      equipment: '',
      serialnumber: '11111111',
      title: '',
      description: '',
      errors: {},
    }
    validate = () => {
      const validations = new Validator(
        {
          department: this.state.department,
          equipment: this.state.equipment,
          serialnumber: this.state.serialnumber,
          title: this.state.title,
          description: this.state.description,
        },

        {
          title: ['required', 'string', 'regex:/^[a-z\\d\\-_,.*()!\\s]+$/i', 'min:5', 'max:20'],
          department: ['required', 'string', 'regex:/^[a-z\\d\\-_,.*()!\\s]+$/i'],
          equipment: ['required', 'string', 'regex:/^[a-z\\d\\-_,.*()!\\s]+$/i'],
          serialnumber: ['required', 'string', 'regex:/^[a-z\\d\\-_,.*()!\\s]+$/i', 'min:8', 'max:8'],
          description: ['required', 'string', 'regex:/^[a-z\\d\\-_,.*()!\\s]+$/i', 'min:3', 'max:50'],
        },
        {
          'min.title': 'The :attribute must not be less than 5 characters.',
          'max.title': 'The :attribute must not be greater than 20 characters.',
          'min.serialnumber': 'The :attribute must be only 8 characters.',
          'max.serialnumber': 'The :attribute must be only 8 characters.',
          'min.description': 'The :attribute must not be less than 3 characters.',
          'max.description': 'The :attribute must not be greater than 50 characters.',
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
        this.props.createRequestAction(this.state, this.props.history);
      }
      return true;
    }
    logout = () => {
      localStorage.clear();
      this.props.history.push('/');
      return true;
    }
    render() {
      return (
        <div>
          <Header><Link to="/">Home</Link> <Link to="/allrequests">My request</Link><button className="header-btn" onClick={this.logout}>Logout</button></Header>
          <section className="request">
            <form className="request-form">
              <h3>Create Request</h3>
              <br />

              <p>Fill the form below to indicate equipments in need of repair or maintenance</p>
              <br />
              {
                this.props.requestDetail.error ? <span className="validation-error">{this.props.requestDetail.error}</span> : ''
              }
              {this.props.userDetail.checkStatus.isLoading ? (<span className="loader"><img src={loader} alt="loader" /></span>) : '' }
              <input type="text" name="department" id="department" placeholder="Department" onChange={this.handleChange} />
              {
                this.state.errors.department ? this.state.errors.department.map(error => <span className="validation-error" key={error}>{error}</span>) : ''
              }
              <p className="message" id="departmentE" />
              <br />
              <input type="text" name="equipment" id="equipment" placeholder="Equipment" onChange={this.handleChange} />
              {
                  this.state.errors.equipment ? this.state.errors.equipment.map(error => <span className="validation-error" key={error}>{error}</span>) : ''
                }
              <p className="message" id="equipmentE" />
              <br />
              <input type="text" name="title" id="requestTitle" placeholder="Request Title" onChange={this.handleChange} />
              {
              this.state.errors.title ? this.state.errors.title.map(error => <span className="validation-error" key={error}>{error}</span>) : ''
              }
              <p className="message" id="titleE" />
              <br />
              <textarea name="description" id="requestDescription" cols="20" rows="5" placeholder="Request Description" onChange={this.handleChange} />
              {
                  this.state.errors.description ? this.state.errors.description.map(error => <span className="validation-error" key={error}>{error}</span>) : ''
                }
              <p className="message" id="descriptionE" />
              <br />
              <button type="submit" className="button" id="createRequest" onClick={this.handleSubmit}>Create Request</button>
            </form>
          </section>
          <Footer />
        </div>

      );
    }
}

const mapStateToProps = state => ({
  requestDetail: state.createRequest,
  userDetail: state.authUser,
});


const mapDispatchToProps = dispatch => bindActionCreators({
  createRequestAction,
}, dispatch);

CreateRequest.propTypes = {
  requestDetail: PropTypes.shape({
    checkStatus: PropTypes.object,
    error: PropTypes.string,
  }).isRequired,
  userDetail: PropTypes.shape({
    checkStatus: PropTypes.object,
    error: PropTypes.string,
  }).isRequired,
  createRequestAction: PropTypes.func.isRequired,
  history: PropTypes.objectOf(PropTypes.object).isRequired,
};


export default connect(mapStateToProps, mapDispatchToProps)(CreateRequest);

