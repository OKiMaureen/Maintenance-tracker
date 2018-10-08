import { connect } from 'react-redux';
import React, { Component } from 'react';
import { bindActionCreators } from 'redux';
import PropTypes from 'prop-types';
import { Link } from 'react-router-dom';
import Header from '../components/Header';
import allRequestAction from '../actions/allRequestAction';
import AllRequestsComponent from '../components/AllRequests';
import logoutAction from '../actions/logoutAction';

export class AllRequests extends Component {
  componentDidMount() {
    const { allRequest } = this.props;
    allRequest();
  }
  logout = () => {
    const { history, logout } = this.props;
    logout();
    localStorage.clear();
    history.push('/');
    return true;
  }
  render() {
    const { requests = [] } = this.props;
    return (
      <div>
        <Header>
          <Link to="/">Home</Link>
          <Link to="admincreaterequest">Create Request</Link>
          <Link className="current" to="adminrequest">All Request</Link>
          <li><button className="header-btn" onClick={this.logout}>Logout</button></li>
        </Header>
        <AllRequestsComponent
          requests={requests}
          logout={this.logout}
          linkRoute="/allrequests"
          linkText="My Requests"
          route="/singlerequest/"
        />
      </div>

    );
  }
}

const mapStateToProps = state => ({
  requests: state.requests.requests,
  error: state.requests.error,
  userDetail: state.authUser,

});


const mapDispatchToProps = dispatch => bindActionCreators({
  allRequest: allRequestAction,
  logout: logoutAction,
}, dispatch);

AllRequests.propTypes = {
  requests: PropTypes.shape({
    checkStatus: PropTypes.object,
    error: PropTypes.string,
  }).isRequired,
  allRequest: PropTypes.func.isRequired,
  logout: PropTypes.func.isRequired,
  history: PropTypes.objectOf(PropTypes.object).isRequired,
};
export default connect(mapStateToProps, mapDispatchToProps)(AllRequests);
