import React, { Component } from 'react';
import { bindActionCreators } from 'redux';
import PropTypes from 'prop-types';
import { Link } from 'react-router-dom';
import { connect } from 'react-redux';
import Header from '../components/Header';
import adminRequestAction from '../actions/adminRequestAction';
import AllRequestsComponent from '../components/AllRequests';
import logoutAction from '../actions/logoutAction';

export class AdminRequests extends Component {
  componentDidMount() {
    const { adminRequests } = this.props;
    adminRequests();
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
          linkRoute="/adminrequests"
          linkText="All Requests"
          route="/requestdetails/"
        />
      </div>

    );
  }
}

const mapStateToProps = state => ({
  requests: state.adminRequests.adminRequests,
  error: state.adminRequests.error,
  userDetail: state.authUser,

});


const mapDispatchToProps = dispatch => bindActionCreators({
  adminRequests: adminRequestAction,
  logout: logoutAction,
}, dispatch);

AdminRequests.propTypes = {
  requests: PropTypes.shape({
    checkStatus: PropTypes.object,
    error: PropTypes.string,
  }).isRequired,
  adminRequests: PropTypes.func.isRequired,
  logout: PropTypes.func.isRequired,
  history: PropTypes.objectOf(PropTypes.object).isRequired,
};
export default connect(mapStateToProps, mapDispatchToProps)(AdminRequests);
