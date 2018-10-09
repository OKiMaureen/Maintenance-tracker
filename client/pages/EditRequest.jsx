import PropTypes from 'prop-types';
import Validator from 'validatorjs';
import { bindActionCreators } from 'redux';
import React, { Component } from 'react';
import { connect } from 'react-redux';
import editRequestAction from '../actions/editRequestAction';
import clearMessageAction from '../actions/clearMeassageAction';
import logoutAction from '../actions/logoutAction';
import Request from '../components/Request';

export class EditRequest extends Component {
  constructor(props) {
    super(props);
    const { request } = props;
    this.state = {
      department: request.department || '',
      equipment: request.equipment || '',
      serialnumber: '11111111',
      title: request.title || '',
      description: request.description || '',
      errors: {},
    };
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
      const { match, history, updateRequest } = this.props;
      event.preventDefault();
      if (this.validate()) {
        updateRequest(this.state, match.params.id, history);
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
      const { requestDetail, userDetail, editRequest } = this.props;
      const {
        title, description, equipment, errors, department,
      } = this.state;
      return (
        <Request
          handleChange={this.handleChange}
          handleSubmit={this.handleSubmit}
          title={title}
          description={description}
          equipment={equipment}
          logout={this.logout}
          editRequest={editRequest}
          requestDetail={requestDetail}
          userDetail={userDetail}
          errors={errors}
          department={department}
          titleText="Edit Article"
          buttonText="Submit"
        />
      );
    }
}

const mapStateToProps = state => ({
  request: state.singleRequest.request,
  requestDetail: state.createRequest,
  userDetail: state.authUser,
  editRequest: state.editRequest,
});


const mapDispatchToProps = dispatch => bindActionCreators({
  clearMessage: clearMessageAction,
  logout: logoutAction,
  updateRequest: editRequestAction,
}, dispatch);

EditRequest.propTypes = {
  request: PropTypes.shape({
    checkStatus: PropTypes.object,
    error: PropTypes.string,
  }).isRequired,
  requestDetail: PropTypes.shape({
    checkStatus: PropTypes.object,
    error: PropTypes.string,
  }).isRequired,
  userDetail: PropTypes.shape({
    checkStatus: PropTypes.object,
    error: PropTypes.string,
  }).isRequired,
  editRequest: PropTypes.shape({
    checkStatus: PropTypes.object,
    error: PropTypes.string,
  }).isRequired,
  updateRequest: PropTypes.func.isRequired,
  clearMessage: PropTypes.func.isRequired,
  logout: PropTypes.func.isRequired,
  history: PropTypes.objectOf(PropTypes.object).isRequired,
  match: PropTypes.func.isRequired,
};


export default connect(mapStateToProps, mapDispatchToProps)(EditRequest);

