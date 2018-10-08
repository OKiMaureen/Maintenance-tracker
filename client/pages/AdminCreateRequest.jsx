import { Link } from 'react-router-dom';
import PropTypes from 'prop-types';
import Validator from 'validatorjs';
import { bindActionCreators } from 'redux';
import React, { Component } from 'react';
import { connect } from 'react-redux';
import createRequestAction from '../actions/createRequestAction';
import Header from '../components/Header';
import clearMessageAction from '../actions/clearMeassageAction';
import logoutAction from '../actions/logoutAction';
import Request from '../components/Request';

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
      const { clearMessage, requestDetail } = this.props;
      if (requestDetail.error) clearMessage();
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
      const { history, logout } = this.props;
      logout();
      localStorage.clear();
      history.push('/');
      return true;
    }
    render() {
      const { requestDetail, userDetail } = this.props;
      const {
        title, description, equipment, errors, department,
      } = this.state;
      return (
        <div>
          <Header><Link to="/">Home</Link><Link to="/admincreaterequest">Create request</Link> <Link to="/adminrequests">All requests</Link><li><button className="header-btn" onClick={this.logout}>Logout</button></li></Header>
          <Request
            handleChange={this.handleChange}
            handleSubmit={this.handleSubmit}
            title={title}
            description={description}
            equipment={equipment}
            requestDetail={requestDetail}
            userDetail={userDetail}
            errors={errors}
            department={department}
            titleText="Create Request"
            buttonText="Create Request"
          />
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
  clearMessage: clearMessageAction,
  logout: logoutAction,
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
  clearMessage: PropTypes.func.isRequired,
  logout: PropTypes.func.isRequired,
  history: PropTypes.objectOf(PropTypes.object).isRequired,
};


export default connect(mapStateToProps, mapDispatchToProps)(CreateRequest);

